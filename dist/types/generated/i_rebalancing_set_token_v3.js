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
var IRebalancingSetTokenV3_1 = require("../../artifacts/ts/IRebalancingSetTokenV3");
var set_protocol_utils_1 = require("set-protocol-utils");
var base_contract_1 = require("../base_contract");
var common_1 = require("../common");
var IRebalancingSetTokenV3Contract = /** @class */ (function (_super) {
    __extends(IRebalancingSetTokenV3Contract, _super);
    function IRebalancingSetTokenV3Contract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.totalSupply = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.totalSupply().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.liquidator = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.liquidator().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.lastRebalanceTimestamp = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.lastRebalanceTimestamp().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.rebalanceStartTime = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.rebalanceStartTime().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.startingCurrentSetAmount = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.startingCurrentSetAmount().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.rebalanceInterval = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.rebalanceInterval().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.getAuctionPriceParameters = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.getAuctionPriceParameters().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result.map(function (r) { return new set_protocol_utils_1.BigNumber(r); })];
                        }
                    });
                });
            },
        };
        _this.getBiddingParameters = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.getBiddingParameters().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result.map(function (r) { return new set_protocol_utils_1.BigNumber(r); })];
                        }
                    });
                });
            },
        };
        _this.rebalanceState = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.rebalanceState().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.balanceOf = {
            callAsync: function (owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.balanceOf(this.formatABIDataItem('address', [], owner)).call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.manager = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.manager().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.feeRecipient = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.feeRecipient().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.entryFee = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.entryFee().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.rebalanceFee = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.rebalanceFee().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.rebalanceFeeCalculator = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.rebalanceFeeCalculator().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.initialize = {
            sendTransactionAsync: function (_rebalanceFeeCalldata, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.initialize.estimateGasAsync.bind(self, this.formatABIDataItem('bytes', [], _rebalanceFeeCalldata)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.initialize(this.formatABIDataItem('bytes', [], _rebalanceFeeCalldata)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_rebalanceFeeCalldata, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.initialize(this.formatABIDataItem('bytes', [], _rebalanceFeeCalldata)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_rebalanceFeeCalldata, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.initialize(this.formatABIDataItem('bytes', [], _rebalanceFeeCalldata)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_rebalanceFeeCalldata, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.initialize(this.formatABIDataItem('bytes', [], _rebalanceFeeCalldata)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setLiquidator = {
            sendTransactionAsync: function (_newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setLiquidator.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _newLiquidator)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _newLiquidator)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_newLiquidator, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _newLiquidator)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_newLiquidator, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _newLiquidator)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_newLiquidator, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setLiquidator(this.formatABIDataItem('address', [], _newLiquidator)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setFeeRecipient = {
            sendTransactionAsync: function (_newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setFeeRecipient.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _newFeeRecipient)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _newFeeRecipient)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_newFeeRecipient, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _newFeeRecipient)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_newFeeRecipient, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _newFeeRecipient)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_newFeeRecipient, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setFeeRecipient(this.formatABIDataItem('address', [], _newFeeRecipient)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setEntryFee = {
            sendTransactionAsync: function (_newEntryFee, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setEntryFee.estimateGasAsync.bind(self, this.formatABIDataItem('uint256', [], _newEntryFee)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setEntryFee(this.formatABIDataItem('uint256', [], _newEntryFee)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_newEntryFee, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setEntryFee(this.formatABIDataItem('uint256', [], _newEntryFee)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_newEntryFee, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.setEntryFee(this.formatABIDataItem('uint256', [], _newEntryFee)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_newEntryFee, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.setEntryFee(this.formatABIDataItem('uint256', [], _newEntryFee)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.startRebalance = {
            sendTransactionAsync: function (_nextSet, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.startRebalance.estimateGasAsync.bind(self, this.formatABIDataItem('address', [], _nextSet), this.formatABIDataItem('bytes', [], _liquidatorData)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.startRebalance(this.formatABIDataItem('address', [], _nextSet), this.formatABIDataItem('bytes', [], _liquidatorData)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_nextSet, _liquidatorData, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.startRebalance(this.formatABIDataItem('address', [], _nextSet), this.formatABIDataItem('bytes', [], _liquidatorData)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_nextSet, _liquidatorData, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.startRebalance(this.formatABIDataItem('address', [], _nextSet), this.formatABIDataItem('bytes', [], _liquidatorData)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_nextSet, _liquidatorData, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.startRebalance(this.formatABIDataItem('address', [], _nextSet), this.formatABIDataItem('bytes', [], _liquidatorData)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.settleRebalance = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.settleRebalance.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.settleRebalance().send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.settleRebalance().estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.settleRebalance().encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.settleRebalance().call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.actualizeFee = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.actualizeFee.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.actualizeFee().send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.actualizeFee().estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.actualizeFee().encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.actualizeFee().call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.adjustFee = {
            sendTransactionAsync: function (_newFeeData, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.adjustFee.estimateGasAsync.bind(self, this.formatABIDataItem('bytes', [], _newFeeData)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.adjustFee(this.formatABIDataItem('bytes', [], _newFeeData)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_newFeeData, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.adjustFee(this.formatABIDataItem('bytes', [], _newFeeData)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_newFeeData, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.adjustFee(this.formatABIDataItem('bytes', [], _newFeeData)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_newFeeData, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.adjustFee(this.formatABIDataItem('bytes', [], _newFeeData)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.naturalUnit = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.naturalUnit().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.currentSet = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.currentSet().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.nextSet = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.nextSet().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.unitShares = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.unitShares().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, new set_protocol_utils_1.BigNumber(result)];
                        }
                    });
                });
            },
        };
        _this.placeBid = {
            sendTransactionAsync: function (_quantity, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.placeBid.estimateGasAsync.bind(self, this.formatABIDataItem('uint256', [], _quantity)))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.placeBid(this.formatABIDataItem('uint256', [], _quantity)).send, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_quantity, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.placeBid(this.formatABIDataItem('uint256', [], _quantity)).estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_quantity, txData) {
                if (txData === void 0) { txData = {}; }
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.methods.placeBid(this.formatABIDataItem('uint256', [], _quantity)).encodeABI();
                return abiEncodedTransactionData;
            },
            callAsync: function (_quantity, txData) {
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
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.placeBid(this.formatABIDataItem('uint256', [], _quantity)).call, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.getBidPrice = {
            callAsync: function (_quantity, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.getBidPrice(this.formatABIDataItem('uint256', [], _quantity)).call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.name().call, self.web3ContractInstance)()];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.symbol = {
            callAsync: function (defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.methods.symbol().call, self.web3ContractInstance)()];
                            case 1:
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
    IRebalancingSetTokenV3Contract.prototype.deploy = function (data, args) {
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
    IRebalancingSetTokenV3Contract.deployed = function (web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var web3Utils, currentNetwork, abi, networks, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 1:
                        currentNetwork = _a.sent();
                        abi = IRebalancingSetTokenV3_1.IRebalancingSetTokenV3.abi, networks = IRebalancingSetTokenV3_1.IRebalancingSetTokenV3.networks;
                        web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);
                        return [2 /*return*/, new IRebalancingSetTokenV3Contract(web3ContractInstance, defaults)];
                }
            });
        });
    };
    IRebalancingSetTokenV3Contract.at = function (address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function () {
            var abi, web3Utils, contractExists, currentNetwork, web3ContractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abi = IRebalancingSetTokenV3_1.IRebalancingSetTokenV3.abi;
                        web3Utils = new set_protocol_utils_1.Web3Utils(web3);
                        return [4 /*yield*/, web3Utils.doesContractExistAtAddressAsync(address)];
                    case 1:
                        contractExists = _a.sent();
                        return [4 /*yield*/, web3Utils.getNetworkIdAsync()];
                    case 2:
                        currentNetwork = _a.sent();
                        if (contractExists) {
                            web3ContractInstance = new web3.eth.Contract(abi, address);
                            return [2 /*return*/, new IRebalancingSetTokenV3Contract(web3ContractInstance, defaults)];
                        }
                        else {
                            throw new Error(base_contract_1.CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('IRebalancingSetTokenV3', currentNetwork));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return IRebalancingSetTokenV3Contract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.IRebalancingSetTokenV3Contract = IRebalancingSetTokenV3Contract;
//# sourceMappingURL=i_rebalancing_set_token_v3.js.map