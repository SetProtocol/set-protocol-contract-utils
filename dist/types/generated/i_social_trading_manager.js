/*
 Copyright 2018 Set Labs Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
* This file is auto-generated using abi-gen. Don't edit directly.
* Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
*/
var utils_1 = require("@0xproject/utils");
var ISocialTradingManager_1 = require("../../artifacts/ts/ISocialTradingManager");
var set_protocol_utils_1 = require("set-protocol-utils");
var base_contract_1 = require("../base_contract");
var common_1 = require("../common");
var ISocialTradingManagerContract = /** @class */ (function (_super) {
    __extends(ISocialTradingManagerContract, _super);
    function ISocialTradingManagerContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.pools = {
            callAsync: function (_tradingPool, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.pools(this.formatABIDataItem('address', [], _tradingPool)).call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.createTradingPool = {
            sendTransactionAsync: function (_tradingPairAllocator, _startingBaseAssetAllocation, _startingUSDValue, _name, _symbol, _rebalancingSetCallData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.createTradingPool.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _tradingPairAllocator), this.formatABIDataItem('uint256', [], _startingBaseAssetAllocation), this.formatABIDataItem('uint256', [], _startingUSDValue), this.formatABIDataItem('bytes32', [], _name), this.formatABIDataItem('bytes32', [], _symbol), this.formatABIDataItem('bytes', [], _rebalancingSetCallData)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.createTradingPool(this.formatABIDataItem('address', [], _tradingPairAllocator), this.formatABIDataItem('uint256', [], _startingBaseAssetAllocation), this.formatABIDataItem('uint256', [], _startingUSDValue), this.formatABIDataItem('bytes32', [], _name), this.formatABIDataItem('bytes32', [], _symbol), this.formatABIDataItem('bytes', [], _rebalancingSetCallData)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tradingPairAllocator, _startingBaseAssetAllocation, _startingUSDValue, _name, _symbol, _rebalancingSetCallData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.createTradingPool(this.formatABIDataItem('address', [], _tradingPairAllocator), this.formatABIDataItem('uint256', [], _startingBaseAssetAllocation), this.formatABIDataItem('uint256', [], _startingUSDValue), this.formatABIDataItem('bytes32', [], _name), this.formatABIDataItem('bytes32', [], _symbol), this.formatABIDataItem('bytes', [], _rebalancingSetCallData)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tradingPairAllocator, _startingBaseAssetAllocation, _startingUSDValue, _name, _symbol, _rebalancingSetCallData, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.createTradingPool(this.formatABIDataItem('address', [], _tradingPairAllocator), this.formatABIDataItem('uint256', [], _startingBaseAssetAllocation), this.formatABIDataItem('uint256', [], _startingUSDValue), this.formatABIDataItem('bytes32', [], _name), this.formatABIDataItem('bytes32', [], _symbol), this.formatABIDataItem('bytes', [], _rebalancingSetCallData)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_tradingPairAllocator, _startingBaseAssetAllocation, _startingUSDValue, _name, _symbol, _rebalancingSetCallData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.createTradingPool(this.formatABIDataItem('address', [], _tradingPairAllocator), this.formatABIDataItem('uint256', [], _startingBaseAssetAllocation), this.formatABIDataItem('uint256', [], _startingUSDValue), this.formatABIDataItem('bytes32', [], _name), this.formatABIDataItem('bytes32', [], _symbol), this.formatABIDataItem('bytes', [], _rebalancingSetCallData)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.updateAllocation = {
            sendTransactionAsync: function (_tradingPool, _newAllocation, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.updateAllocation.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('uint256', [], _newAllocation), this.formatABIDataItem('bytes', [], _liquidatorData)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.updateAllocation(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('uint256', [], _newAllocation), this.formatABIDataItem('bytes', [], _liquidatorData)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tradingPool, _newAllocation, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.updateAllocation(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('uint256', [], _newAllocation), this.formatABIDataItem('bytes', [], _liquidatorData)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tradingPool, _newAllocation, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.updateAllocation(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('uint256', [], _newAllocation), this.formatABIDataItem('bytes', [], _liquidatorData)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_tradingPool, _newAllocation, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.updateAllocation(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('uint256', [], _newAllocation), this.formatABIDataItem('bytes', [], _liquidatorData)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setTrader = {
            sendTransactionAsync: function (_tradingPool, _newTrader, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setTrader.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newTrader)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setTrader(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newTrader)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tradingPool, _newTrader, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setTrader(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newTrader)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tradingPool, _newTrader, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setTrader(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newTrader)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_tradingPool, _newTrader, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setTrader(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newTrader)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setLiquidator = {
            sendTransactionAsync: function (_tradingPool, _newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setLiquidator.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newLiquidator)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newLiquidator)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tradingPool, _newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newLiquidator)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tradingPool, _newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newLiquidator)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_tradingPool, _newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newLiquidator)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setFeeRecipient = {
            sendTransactionAsync: function (_tradingPool, _newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setFeeRecipient.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newFeeRecipient)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newFeeRecipient)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_tradingPool, _newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newFeeRecipient)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_tradingPool, _newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newFeeRecipient)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_tradingPool, _newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _tradingPool), this.formatABIDataItem('address', [], _newFeeRecipient)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        common_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    ISocialTradingManagerContract.prototype.deploy = function (data, args) {
        return __awaiter(this, void 0, void 0, function () {
            var wrapper;
            return __generator(this, function (_a) {
                wrapper = this;
                wrapper.web3ContractInstance.deploy({
                    data: data,
                    arguments: args,
                })
                    .send(wrapper.defaults)
                    .then(function (newContractInstance) {
                    wrapper.web3ContractInstance = newContractInstance;
                    wrapper.address = newContractInstance.options.address;
                });
                return [2 /*return*/];
            });
        });
    };
    ISocialTradingManagerContract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, currentNetwork, abi, networks, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _a.sent();
                        abi = ISocialTradingManager_1.ISocialTradingManager.abi, networks = ISocialTradingManager_1.ISocialTradingManager.networks;
                        web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);
                        return [2 /*return*/, new ISocialTradingManagerContract(web3ContractInstance, defaults)];
                }
            });
        });
    };
    ISocialTradingManagerContract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, web3Utils, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = ISocialTradingManager_1.ISocialTradingManager.abi;
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(address)];
                    case 1:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 2:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = new web3.eth.Contract(abi, address);
                            return [2 /*return*/, new ISocialTradingManagerContract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('ISocialTradingManager', currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ISocialTradingManagerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.ISocialTradingManagerContract = ISocialTradingManagerContract;
//# sourceMappingURL=i_social_trading_manager.js.map