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
Object.defineProperty(exports, "__esModule", { value: true });
var contracts_1 = require("../contracts");
var bignumber_js_1 = require("bignumber.js");
var web3Helper_1 = require("../web3Helper");
var constants_1 = require("../constants");
var Bytes32Library = web3Helper_1.importArtifactsFromSource('Bytes32Library');
var Bytes32LibraryMock = web3Helper_1.importArtifactsFromSource('Bytes32LibraryMock');
var CommonMathMock = web3Helper_1.importArtifactsFromSource('CommonMathMock');
var CommonValidationsLibrary = web3Helper_1.importArtifactsFromSource('CommonValidationsLibrary');
var CommonValidationsLibraryMock = web3Helper_1.importArtifactsFromSource('CommonValidationsLibraryMock');
var CompoundUtilsMock = web3Helper_1.importArtifactsFromSource('CompoundUtilsMock');
var ERC20WrapperMock = web3Helper_1.importArtifactsFromSource('ERC20WrapperMock');
var SetMathMock = web3Helper_1.importArtifactsFromSource('SetMathMock');
var SetTokenLibrary = web3Helper_1.importArtifactsFromSource('SetTokenLibrary');
var SetTokenLibraryMock = web3Helper_1.importArtifactsFromSource('SetTokenLibraryMock');
var SetUSDValuationMock = web3Helper_1.importArtifactsFromSource('SetUSDValuationMock');
var LibraryMockHelper = /** @class */ (function () {
    function LibraryMockHelper(contractOwnerAddress) {
        this._contractOwnerAddress = contractOwnerAddress;
    }
    /* ============ Deployment ============ */
    LibraryMockHelper.prototype.deployCommonValidationsLibraryAsync = function (from) {
        if (from === void 0) { from = this._contractOwnerAddress; }
        return __awaiter(this, void 0, void 0, function () {
            var commonValidationsMockContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3Helper_1.linkLibrariesToDeploy(CommonValidationsLibraryMock, [CommonValidationsLibrary], this._contractOwnerAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, CommonValidationsLibraryMock.new(web3Helper_1.txnFrom(from))];
                    case 2:
                        commonValidationsMockContract = _a.sent();
                        return [2 /*return*/, new contracts_1.CommonValidationsLibraryMockContract(web3Helper_1.getContractInstance(commonValidationsMockContract), web3Helper_1.txnFrom(from))];
                }
            });
        });
    };
    LibraryMockHelper.prototype.deployBytes32LibraryAsync = function (from) {
        if (from === void 0) { from = this._contractOwnerAddress; }
        return __awaiter(this, void 0, void 0, function () {
            var bytes32MockContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3Helper_1.linkLibrariesToDeploy(Bytes32LibraryMock, [Bytes32Library], this._contractOwnerAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Bytes32LibraryMock.new(web3Helper_1.txnFrom(from))];
                    case 2:
                        bytes32MockContract = _a.sent();
                        return [2 /*return*/, new contracts_1.Bytes32LibraryMockContract(web3Helper_1.getContractInstance(bytes32MockContract), web3Helper_1.txnFrom(from))];
                }
            });
        });
    };
    LibraryMockHelper.prototype.deployCommonMathLibraryAsync = function (from) {
        if (from === void 0) { from = this._contractOwnerAddress; }
        return __awaiter(this, void 0, void 0, function () {
            var truffleCommonMathLibrary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CommonMathMock.new(web3Helper_1.txnFrom(from))];
                    case 1:
                        truffleCommonMathLibrary = _a.sent();
                        return [2 /*return*/, new contracts_1.CommonMathMockContract(web3Helper_1.getContractInstance(truffleCommonMathLibrary), web3Helper_1.txnFrom(from))];
                }
            });
        });
    };
    LibraryMockHelper.prototype.deployCompoundUtilsLibraryMockAsync = function (from) {
        if (from === void 0) { from = this._contractOwnerAddress; }
        return __awaiter(this, void 0, void 0, function () {
            var compoundUtilsMockContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CompoundUtilsMock.new(web3Helper_1.txnFrom(from))];
                    case 1:
                        compoundUtilsMockContract = _a.sent();
                        return [2 /*return*/, new contracts_1.CompoundUtilsMockContract(web3Helper_1.getContractInstance(compoundUtilsMockContract), web3Helper_1.txnFrom(from))];
                }
            });
        });
    };
    // public async deploySetMathAsync(
    //   from: Address = this._contractOwnerAddress
    // ): Promise<SetMathMockContract> {
    //   const setMathMockContract = await SetMathMock.new(txnFrom(from));
    //   return new SetMathMockContract(
    //     getContractInstance(setMathMockContract),
    //     txnFrom(from),
    //   );
    // }
    // public async deploySetTokenLibraryAsync(
    //   from: Address = this._contractOwnerAddress
    // ): Promise<SetTokenLibraryMockContract> {
    //   await linkLibrariesToDeploy(SetTokenLibraryMock, [SetTokenLibrary], this._contractOwnerAddress);
    //   const setTokenLibraryMockContract = await SetTokenLibraryMock.new(txnFrom(from));
    //   return new SetTokenLibraryMockContract(
    //     getContractInstance(setTokenLibraryMockContract),
    //     txnFrom(from),
    //   );
    // }
    // public async deploySetUSDValuationMockAsync(
    //   from: Address = this._contractOwnerAddress
    // ): Promise<SetUSDValuationMockContract> {
    //   const setValuationMockContract = await SetUSDValuationMock.new(txnFrom(from));
    //   return new SetUSDValuationMockContract(
    //     getContractInstance(setValuationMockContract),
    //     txnFrom(from),
    //   );
    // }
    LibraryMockHelper.prototype.ceilLog10 = function (value) {
        var valueNum = value.toNumber();
        if (valueNum == 1)
            return constants_1.ZERO;
        var x = valueNum - 1;
        var result = 0;
        if (x >= 10000000000000000000000000000000000000000000000000000000000000000) {
            x /= 10000000000000000000000000000000000000000000000000000000000000000;
            result += 64;
        }
        if (x >= 100000000000000000000000000000000) {
            x /= 100000000000000000000000000000000;
            result += 32;
        }
        if (x >= 10000000000000000) {
            x /= 10000000000000000;
            result += 16;
        }
        if (x >= 100000000) {
            x /= 100000000;
            result += 8;
        }
        if (x >= 10000) {
            x /= 10000;
            result += 4;
        }
        if (x >= 100) {
            x /= 100;
            result += 2;
        }
        if (x >= 10) {
            x /= 10;
            result += 1;
        }
        return new bignumber_js_1.BigNumber(result + 1);
    };
    return LibraryMockHelper;
}());
exports.LibraryMockHelper = LibraryMockHelper;
//# sourceMappingURL=libraryMockHelper.js.map