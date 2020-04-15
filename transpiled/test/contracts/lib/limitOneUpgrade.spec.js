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
var bignumber_js_1 = require("bignumber.js");
var chaiSetup_1 = __importDefault(require("@utils/chaiSetup"));
var bigNumberSetup_1 = require("@utils/bigNumberSetup");
var tokenAssertions_1 = require("@utils/tokenAssertions");
var blockchain_1 = require("@utils/blockchain");
var constants_1 = require("@utils/constants");
var web3Helper_1 = require("@utils/web3Helper");
var permissionHelper_1 = require("@utils/helpers/permissionHelper");
bigNumberSetup_1.BigNumberSetup.configure();
chaiSetup_1.default.configure();
var web3 = web3Helper_1.getWeb3();
var UnrestrictedTimeLockUpgrade = artifacts.require('UnrestrictedTimeLockUpgrade');
var expect = chai.expect;
var blockchain = new blockchain_1.Blockchain(web3);
contract('LimitOneUpgrade', function (accounts) {
    var ownerAccount = accounts[0], upgradeAccount = accounts[1], otherAccount = accounts[2];
    var limitOneUpgradeMock;
    var permissionHelper = new permissionHelper_1.PermissionHelper(ownerAccount);
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.addABI(UnrestrictedTimeLockUpgrade.abi);
            return [2 /*return*/];
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.removeABI(UnrestrictedTimeLockUpgrade.abi);
            return [2 /*return*/];
        });
    }); });
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.saveSnapshotAsync()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, permissionHelper.deployLimitOneUpgradeMockAsync()];
                case 2:
                    limitOneUpgradeMock = _a.sent();
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
    describe('#testLimitOneUpgrade', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, limitOneUpgradeMock.testLimitOneUpgrade.sendTransactionAsync(subjectUpgradeAddress, subjectTestUint, { from: subjectCaller })];
                });
            });
        }
        var subjectTestUint, subjectUpgradeAddress, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            subjectTestUint = constants_1.ONE;
            subjectUpgradeAddress = upgradeAccount;
            subjectCaller = ownerAccount;
            describe('when the timeLockPeriod is 0', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    it('sets testUint correctly', function () { return __awaiter(_this, void 0, void 0, function () {
                        var currentTestUint;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, limitOneUpgradeMock.testUint.callAsync()];
                                case 2:
                                    currentTestUint = _a.sent();
                                    expect(currentTestUint).to.bignumber.equal(subjectTestUint);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the timeLockPeriod is positive && no hash is set', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, limitOneUpgradeMock.setTimeLockPeriod.sendTransactionAsync(constants_1.ONE, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('upgradeIdentifier should return the upgrade hash', function () { return __awaiter(_this, void 0, void 0, function () {
                        var txHash, input, expectedUpgradeHash, actualUpgradeHash;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    txHash = _a.sent();
                                    return [4 /*yield*/, web3.eth.getTransaction(txHash)];
                                case 2:
                                    input = (_a.sent()).input;
                                    expectedUpgradeHash = web3.utils.soliditySha3(input);
                                    return [4 /*yield*/, limitOneUpgradeMock.upgradeIdentifier.callAsync(subjectUpgradeAddress)];
                                case 3:
                                    actualUpgradeHash = _a.sent();
                                    expect(actualUpgradeHash).to.equal(expectedUpgradeHash);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should not update the testUint', function () { return __awaiter(_this, void 0, void 0, function () {
                        var currentTestUint;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, limitOneUpgradeMock.testUint.callAsync()];
                                case 2:
                                    currentTestUint = _a.sent();
                                    expect(currentTestUint).to.bignumber.equal(constants_1.ZERO);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the timeLockPeriod is positive && a hash is set', function () { return __awaiter(_this, void 0, void 0, function () {
                var subjectTimeLockPeriod, subjectTimeElapsedPeriod;
                var _this = this;
                return __generator(this, function (_a) {
                    subjectTimeLockPeriod = constants_1.ONE;
                    subjectTimeElapsedPeriod = subjectTimeLockPeriod;
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    subjectCaller = ownerAccount;
                                    return [4 /*yield*/, limitOneUpgradeMock.setTimeLockPeriod.sendTransactionAsync(subjectTimeLockPeriod, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, limitOneUpgradeMock.testLimitOneUpgrade.sendTransactionAsync(subjectUpgradeAddress, subjectTestUint, { from: subjectCaller })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, blockchain.increaseTimeAsync(subjectTimeElapsedPeriod)];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should update the testUint', function () { return __awaiter(_this, void 0, void 0, function () {
                        var currentTestUint;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, limitOneUpgradeMock.testUint.callAsync()];
                                case 2:
                                    currentTestUint = _a.sent();
                                    expect(currentTestUint).to.bignumber.equal(subjectTestUint);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should set upgradeIdentifier to 0', function () { return __awaiter(_this, void 0, void 0, function () {
                        var actualUpgradeHash;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, limitOneUpgradeMock.upgradeIdentifier.callAsync(subjectUpgradeAddress)];
                                case 2:
                                    actualUpgradeHash = _a.sent();
                                    expect(actualUpgradeHash).to.equal(constants_1.ZERO_BYTES);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    describe('when the passed parameters are different', function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    subjectTestUint = new bignumber_js_1.BigNumber(2);
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
            return [2 /*return*/];
        });
    }); });
    describe('#removeRegisteredUpgrade', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, limitOneUpgradeMock.removeRegisteredUpgrade.sendTransactionAsync(subjectUpgradeAddress, subjectHash, { from: subjectCaller })];
                });
            });
        }
        var subjectUpgradeAddress, subjectHash, subjectCaller, subjectTestUint;
        var _this = this;
        return __generator(this, function (_a) {
            subjectTestUint = new bignumber_js_1.BigNumber(1);
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, input;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            subjectUpgradeAddress = upgradeAccount;
                            subjectCaller = ownerAccount;
                            return [4 /*yield*/, limitOneUpgradeMock.setTimeLockPeriod.sendTransactionAsync(constants_1.ONE, { from: subjectCaller })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, limitOneUpgradeMock.testLimitOneUpgrade.sendTransactionAsync(subjectUpgradeAddress, subjectTestUint, { from: subjectCaller })];
                        case 2:
                            txHash = _a.sent();
                            return [4 /*yield*/, web3.eth.getTransaction(txHash)];
                        case 3:
                            input = (_a.sent()).input;
                            subjectHash = web3.utils.soliditySha3(input);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('sets the upgradeHash to 0', function () { return __awaiter(_this, void 0, void 0, function () {
                var actualTimestamp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, limitOneUpgradeMock.timeLockedUpgrades.callAsync(subjectHash)];
                        case 2:
                            actualTimestamp = _a.sent();
                            expect(actualTimestamp).to.bignumber.equal(constants_1.ZERO);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('sets the upgradeIdentifier to 0', function () { return __awaiter(_this, void 0, void 0, function () {
                var actualUpgradeHash;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, limitOneUpgradeMock.upgradeIdentifier.callAsync(subjectUpgradeAddress)];
                        case 2:
                            actualUpgradeHash = _a.sent();
                            expect(actualUpgradeHash).to.bignumber.equal(constants_1.ZERO_BYTES);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the hash specified is not registered', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectHash = web3.utils.soliditySha3(5);
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
            describe('when the hash does not match the expected one for the upgrade address', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, limitOneUpgradeMock.testLimitOneUpgrade.sendTransactionAsync(otherAccount, subjectTestUint, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    subjectUpgradeAddress = otherAccount;
                                    return [2 /*return*/];
                            }
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
//# sourceMappingURL=limitOneUpgrade.spec.js.map