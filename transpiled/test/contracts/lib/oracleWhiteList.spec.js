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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
var ABIDecoder = __importStar(require("abi-decoder"));
var chai = __importStar(require("chai"));
var setProtocolUtils = __importStar(require("set-protocol-utils"));
var chaiSetup_1 = __importDefault(require("@utils/chaiSetup"));
var bigNumberSetup_1 = require("@utils/bigNumberSetup");
var oracleWhiteList_1 = require("@utils/contract_logs/oracleWhiteList");
var constants_1 = require("@utils/constants");
var tokenAssertions_1 = require("@utils/tokenAssertions");
var blockchain_1 = require("@utils/blockchain");
var web3Helper_1 = require("@utils/web3Helper");
var whiteListHelper_1 = require("@utils/helpers/whiteListHelper");
bigNumberSetup_1.BigNumberSetup.configure();
chaiSetup_1.default.configure();
var web3 = web3Helper_1.getWeb3();
var SetTestUtils = setProtocolUtils.SetProtocolTestUtils;
var OracleWhiteList = artifacts.require('OracleWhiteList');
var expect = chai.expect;
var setTestUtils = new SetTestUtils(web3);
var blockchain = new blockchain_1.Blockchain(web3);
contract('OracleWhiteList', function (accounts) {
    var ownerAccount = accounts[0], notOwnerAccount = accounts[1], firstTokenAddress = accounts[2], secondTokenAddress = accounts[3], thirdTokenAddress = accounts[4], fourthTokenAddress = accounts[5], firstOracleAddress = accounts[6], secondOracleAddress = accounts[7], thirdOracleAddress = accounts[8];
    var oracleWhiteList;
    var whiteListHelper = new whiteListHelper_1.WhiteListHelper(ownerAccount);
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.addABI(OracleWhiteList.abi);
            return [2 /*return*/];
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.removeABI(OracleWhiteList.abi);
            return [2 /*return*/];
        });
    }); });
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.saveSnapshotAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('#constructor', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync(subjectInitialTokenAddresses, subjectInitialOracleAddresses, subjectCaller)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectInitialTokenAddresses, subjectInitialOracleAddresses, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectInitialTokenAddresses = [
                        firstTokenAddress,
                        secondTokenAddress,
                        thirdTokenAddress,
                    ];
                    subjectInitialOracleAddresses = [
                        firstOracleAddress,
                        secondOracleAddress,
                        thirdOracleAddress,
                    ];
                    subjectCaller = ownerAccount;
                    return [2 /*return*/];
                });
            }); });
            it('creates a whitelist with the correct addresses', function () { return __awaiter(_this, void 0, void 0, function () {
                var oracleWhiteList, addresses;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            oracleWhiteList = _a.sent();
                            return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 2:
                            addresses = _a.sent();
                            expect(addresses).to.deep.equal(subjectInitialTokenAddresses);
                            subjectInitialTokenAddresses.forEach(function (address, index) { return __awaiter(_this, void 0, void 0, function () {
                                var oracleAddress;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(address)];
                                        case 1:
                                            oracleAddress = _a.sent();
                                            expect(oracleAddress).to.equal(subjectInitialOracleAddresses[index]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the token and oracle arrays are different lengths', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectInitialTokenAddresses = [
                                firstTokenAddress,
                                secondTokenAddress,
                                thirdTokenAddress,
                                fourthTokenAddress,
                            ];
                            return [2 /*return*/];
                        });
                    }); });
                    it('reverts', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#addTokenOraclePair', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.addTokenOraclePair.sendTransactionAsync(subjectTokenToAdd, subjectOracleToAdd, { from: subjectCaller })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectTokenToAdd, subjectOracleToAdd, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress, secondTokenAddress], [firstOracleAddress, secondOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectTokenToAdd = thirdTokenAddress;
                            subjectOracleToAdd = thirdOracleAddress;
                            subjectCaller = ownerAccount;
                            return [2 /*return*/];
                    }
                });
            }); });
            it('adds the address to the addresses list', function () { return __awaiter(_this, void 0, void 0, function () {
                var existingAddresses, newAddresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 1:
                            existingAddresses = _a.sent();
                            return [4 /*yield*/, subject()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 3:
                            newAddresses = _a.sent();
                            existingAddresses.push(subjectTokenToAdd);
                            expect(newAddresses).to.deep.equal(existingAddresses);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('adds the token address to the whitelist mapping with correct oracle address', function () { return __awaiter(_this, void 0, void 0, function () {
                var existingOracleAddress, oracleAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToAdd)];
                        case 1:
                            existingOracleAddress = _a.sent();
                            expect(existingOracleAddress).to.equal(constants_1.NULL_ADDRESS);
                            return [4 /*yield*/, subject()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToAdd)];
                        case 3:
                            oracleAddress = _a.sent();
                            expect(oracleAddress).to.equal(subjectOracleToAdd);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('emits a TokenOraclePairAdded event', function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, formattedLogs, expectedLogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            txHash = _a.sent();
                            return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                        case 2:
                            formattedLogs = _a.sent();
                            expectedLogs = oracleWhiteList_1.TokenOraclePairAdded(oracleWhiteList.address, subjectTokenToAdd, subjectOracleToAdd);
                            return [4 /*yield*/, SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when someone other than the owner tries to add an address', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectCaller = notOwnerAccount;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the address is already whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenToAdd = firstTokenAddress;
                            subjectOracleToAdd = firstOracleAddress;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#removeTokenOraclePair', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.removeTokenOraclePair.sendTransactionAsync(subjectTokenToRemove, { from: subjectCaller })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectTokenToRemove, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress, secondTokenAddress, thirdTokenAddress], [firstOracleAddress, secondOracleAddress, thirdOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectTokenToRemove = thirdTokenAddress;
                            subjectCaller = ownerAccount;
                            return [2 /*return*/];
                    }
                });
            }); });
            it('removes the address from the addresses list', function () { return __awaiter(_this, void 0, void 0, function () {
                var newAddresses, expectedAddresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 2:
                            newAddresses = _a.sent();
                            expectedAddresses = [firstTokenAddress, secondTokenAddress];
                            expect(newAddresses).to.deep.equal(expectedAddresses);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('updates the address in the whitelist mapping to null address', function () { return __awaiter(_this, void 0, void 0, function () {
                var existingOracleAddress, oracleAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToRemove)];
                        case 1:
                            existingOracleAddress = _a.sent();
                            expect(existingOracleAddress).to.equal(thirdOracleAddress);
                            return [4 /*yield*/, subject()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToRemove)];
                        case 3:
                            oracleAddress = _a.sent();
                            expect(oracleAddress).to.equal(constants_1.NULL_ADDRESS);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('emits a TokenOraclePairRemoved event', function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, formattedLogs, expectedLogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            txHash = _a.sent();
                            return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                        case 2:
                            formattedLogs = _a.sent();
                            expectedLogs = oracleWhiteList_1.TokenOraclePairRemoved(oracleWhiteList.address, subjectTokenToRemove, thirdOracleAddress);
                            return [4 /*yield*/, SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when someone other than the owner tries to remove an address', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectCaller = notOwnerAccount;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the address is not currently whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenToRemove = fourthTokenAddress;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#editTokenOraclePair', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.editTokenOraclePair.sendTransactionAsync(subjectTokenToAdd, subjectOracleToAdd, { from: subjectCaller })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectTokenToAdd, subjectOracleToAdd, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress, secondTokenAddress], [firstOracleAddress, secondOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectTokenToAdd = secondTokenAddress;
                            subjectOracleToAdd = thirdOracleAddress;
                            subjectCaller = ownerAccount;
                            return [2 /*return*/];
                    }
                });
            }); });
            it('does not add a new address to the addresses list', function () { return __awaiter(_this, void 0, void 0, function () {
                var existingAddresses, newAddresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 1:
                            existingAddresses = _a.sent();
                            return [4 /*yield*/, subject()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.validAddresses.callAsync()];
                        case 3:
                            newAddresses = _a.sent();
                            expect(newAddresses).to.deep.equal(existingAddresses);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('adds the token address to the whitelist mapping with correct oracle address', function () { return __awaiter(_this, void 0, void 0, function () {
                var existingOracleAddress, oracleAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToAdd)];
                        case 1:
                            existingOracleAddress = _a.sent();
                            expect(existingOracleAddress).to.equal(secondOracleAddress);
                            return [4 /*yield*/, subject()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, oracleWhiteList.oracleWhiteList.callAsync(subjectTokenToAdd)];
                        case 3:
                            oracleAddress = _a.sent();
                            expect(oracleAddress).to.equal(subjectOracleToAdd);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('emits a TokenOraclePairAdded event', function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, formattedLogs, expectedLogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            txHash = _a.sent();
                            return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                        case 2:
                            formattedLogs = _a.sent();
                            expectedLogs = oracleWhiteList_1.TokenOraclePairAdded(oracleWhiteList.address, subjectTokenToAdd, subjectOracleToAdd);
                            return [4 /*yield*/, SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when someone other than the owner tries to add an address', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectCaller = notOwnerAccount;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the address is not already whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenToAdd = thirdTokenAddress;
                            subjectOracleToAdd = thirdOracleAddress;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#areValidAddresses', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.areValidAddresses.callAsync(subjectAddressesToVerify)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectAddressesToVerify;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress, secondTokenAddress, thirdTokenAddress], [firstOracleAddress, secondOracleAddress, thirdOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectAddressesToVerify = [firstTokenAddress, secondTokenAddress, thirdTokenAddress];
                            return [2 /*return*/];
                    }
                });
            }); });
            it('returns true', function () { return __awaiter(_this, void 0, void 0, function () {
                var validity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            validity = _a.sent();
                            expect(validity).to.be.true;
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when one of the tokens is not whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectAddressesToVerify = [firstTokenAddress, secondTokenAddress, thirdTokenAddress, fourthTokenAddress];
                            return [2 /*return*/];
                        });
                    }); });
                    it('returns false', function () { return __awaiter(_this, void 0, void 0, function () {
                        var validity;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    validity = _a.sent();
                                    expect(validity).to.be.false;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when passed array has no addresses', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectAddressesToVerify = [];
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#getOracleAddressByToken', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.getOracleAddressByToken.callAsync(subjectTokenAddress)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectTokenAddress;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress], [firstOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectTokenAddress = firstTokenAddress;
                            return [2 /*return*/];
                    }
                });
            }); });
            it('returns array of oracle address', function () { return __awaiter(_this, void 0, void 0, function () {
                var actualOracleAddresses, expectedOracleAddresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            actualOracleAddresses = _a.sent();
                            expectedOracleAddresses = firstOracleAddress;
                            expect(actualOracleAddresses).to.equal(expectedOracleAddresses);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when one of the tokens is not whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenAddress = fourthTokenAddress;
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#getOracleAddressesByToken', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oracleWhiteList.getOracleAddressesByToken.callAsync(subjectTokenAddresses)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        var subjectTokenAddresses;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, whiteListHelper.deployOracleWhiteListAsync([firstTokenAddress, secondTokenAddress, thirdTokenAddress], [firstOracleAddress, secondOracleAddress, thirdOracleAddress])];
                        case 1:
                            oracleWhiteList = _a.sent();
                            subjectTokenAddresses = [firstTokenAddress, secondTokenAddress, thirdTokenAddress];
                            return [2 /*return*/];
                    }
                });
            }); });
            it('returns array of oracle addresses', function () { return __awaiter(_this, void 0, void 0, function () {
                var actualOracleAddresses, expectedOracleAddresses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            actualOracleAddresses = _a.sent();
                            expectedOracleAddresses = [firstOracleAddress, secondOracleAddress, thirdOracleAddress];
                            expect(actualOracleAddresses).to.deep.equal(expectedOracleAddresses);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when one of the tokens is not whitelisted', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenAddresses = [firstTokenAddress, secondTokenAddress, thirdTokenAddress, fourthTokenAddress];
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when passed array has no addresses', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectTokenAddresses = [];
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tokenAssertions_1.expectRevertError(subject())];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=oracleWhiteList.spec.js.map