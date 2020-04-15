"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Web3 = require('web3'); // import web3 v1.0 constructor
var BigNumber = require('bignumber.js');
var package_json_1 = require("../package.json");
var constants_1 = require("./constants");
var contract = require('@truffle/contract');
// use globally injected web3 to find the currentProvider and wrap with web3 v1.0
exports.getWeb3 = function () {
    var myWeb3 = new Web3(web3.currentProvider);
    return myWeb3;
};
// assumes passed-in web3 is v1.0 and creates a function to receive contract name
exports.getContractInstance = function (artifact, contractAddress) {
    if (contractAddress === void 0) { contractAddress = artifact.address; }
    var web3 = exports.getWeb3();
    return new web3.eth.Contract(artifact.abi, contractAddress);
};
exports.getGasUsageInEth = function (txHash) { return __awaiter(_this, void 0, void 0, function () {
    var web3, txReceipt, txn, gasPrice, gasUsed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                web3 = exports.getWeb3();
                return [4 /*yield*/, web3.eth.getTransactionReceipt(txHash)];
            case 1:
                txReceipt = _a.sent();
                return [4 /*yield*/, web3.eth.getTransaction(txHash)];
            case 2:
                txn = _a.sent();
                gasPrice = txn.gasPrice;
                gasUsed = txReceipt.gasUsed;
                return [2 /*return*/, new BigNumber(gasPrice).mul(gasUsed)];
        }
    });
}); };
exports.txnFrom = function (from) {
    return { from: from, gas: constants_1.DEFAULT_GAS };
};
exports.blankTxn = function (from) { return __awaiter(_this, void 0, void 0, function () {
    var web3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                web3 = exports.getWeb3();
                return [4 /*yield*/, web3.eth.sendTransaction({
                        from: from,
                        to: constants_1.NULL_ADDRESS,
                        value: '1',
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.linkLibrariesToDeploy = function (contract, libraries, from) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contract.setNetwork(50);
                return [4 /*yield*/, Promise.all(libraries.map(function (library) { return __awaiter(_this, void 0, void 0, function () {
                        var truffleLibrary;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(library.contractName);
                                    return [4 /*yield*/, library.new({ from: from })];
                                case 1:
                                    truffleLibrary = _a.sent();
                                    return [4 /*yield*/, contract.link(library.contractName, truffleLibrary.address)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// Done so artifacts from this repo can compile elsewhere
exports.importArtifactsFromSource = function (contractName) {
    var web3 = exports.getWeb3();
    var instance;
    try {
        instance = artifacts.require(contractName);
        return instance;
    }
    catch (e) { }
    try {
        var data = require('set-protocol-strategies/dist/artifacts/ts/' + contractName)[contractName];
        instance = contract(data);
        instance.setProvider(web3.currentProvider);
        return instance;
    }
    catch (e) { }
    try {
        var filePath = 'set-protocol-strategies-' + package_json_1.version + '/dist/artifacts/ts/' + contractName;
        var data = require(filePath)[contractName];
        instance = contract(data);
        instance.setProvider(web3.currentProvider);
        return instance;
    }
    catch (e) { }
};
//# sourceMappingURL=web3Helper.js.map