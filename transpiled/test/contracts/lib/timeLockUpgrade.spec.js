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
var bignumber_js_1 = require("bignumber.js");
var chaiSetup_1 = __importDefault(require("@utils/chaiSetup"));
var bigNumberSetup_1 = require("@utils/bigNumberSetup");
var tokenAssertions_1 = require("@utils/tokenAssertions");
var blockchain_1 = require("@utils/blockchain");
var timelockUpgrade_1 = require("@utils/contract_logs/timelockUpgrade");
var constants_1 = require("@utils/constants");
var web3Helper_1 = require("@utils/web3Helper");
var permissionHelper_1 = require("@utils/helpers/permissionHelper");
bigNumberSetup_1.BigNumberSetup.configure();
chaiSetup_1.default.configure();
var web3 = web3Helper_1.getWeb3();
var TimeLockUpgrade = artifacts.require('TimeLockUpgrade');
var SetTestUtils = setProtocolUtils.SetProtocolTestUtils;
var setTestUtils = new SetTestUtils(web3);
var expect = chai.expect;
var blockchain = new blockchain_1.Blockchain(web3);
contract('TimeLockUpgrade', function (accounts) {
    var ownerAccount = accounts[0], otherAccount = accounts[1];
    var timeLockUpgradeMock;
    var permissionHelper = new permissionHelper_1.PermissionHelper(ownerAccount);
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.addABI(TimeLockUpgrade.abi);
            return [2 /*return*/];
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.removeABI(TimeLockUpgrade.abi);
            return [2 /*return*/];
        });
    }); });
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchain.saveSnapshotAsync()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, permissionHelper.deployTimeLockUpgradeMockAsync()];
                case 2:
                    timeLockUpgradeMock = _a.sent();
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
    describe('#setTimeLockPeriod', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, timeLockUpgradeMock.setTimeLockPeriod.sendTransactionAsync(subjectTimeLockPeriod, { from: subjectCaller })];
                });
            });
        }
        var subjectCaller, subjectTimeLockPeriod;
        var _this = this;
        return __generator(this, function (_a) {
            subjectTimeLockPeriod = new bignumber_js_1.BigNumber(86400);
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectCaller = ownerAccount;
                    return [2 /*return*/];
                });
            }); });
            it('updates the timelock', function () { return __awaiter(_this, void 0, void 0, function () {
                var timeLockPeriod;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, timeLockUpgradeMock.timeLockPeriod.callAsync()];
                        case 2:
                            timeLockPeriod = _a.sent();
                            expect(timeLockPeriod).to.bignumber.equal(subjectTimeLockPeriod);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the timelock is not greater than the existing', function () { return __awaiter(_this, void 0, void 0, function () {
                var previouslyTimeLock;
                var _this = this;
                return __generator(this, function (_a) {
                    previouslyTimeLock = subjectTimeLockPeriod.mul(2);
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, timeLockUpgradeMock.setTimeLockPeriod.sendTransactionAsync(previouslyTimeLock, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
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
            describe('when the timelock is greater than existing', function () { return __awaiter(_this, void 0, void 0, function () {
                var previouslyTimeLock;
                var _this = this;
                return __generator(this, function (_a) {
                    previouslyTimeLock = subjectTimeLockPeriod.div(2);
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, timeLockUpgradeMock.setTimeLockPeriod.sendTransactionAsync(previouslyTimeLock, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should update the timelock', function () { return __awaiter(_this, void 0, void 0, function () {
                        var expectedTimeLock;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, timeLockUpgradeMock.timeLockPeriod.callAsync()];
                                case 2:
                                    expectedTimeLock = _a.sent();
                                    expect(expectedTimeLock).to.bignumber.equal(subjectTimeLockPeriod);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the caller is not the owner of the contract', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectCaller = otherAccount;
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
    describe('#testTimeLockUpgrade', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, timeLockUpgradeMock.testTimeLockUpgrade.sendTransactionAsync(subjectTestUint, { from: subjectCaller })];
                });
            });
        }
        var subjectTestUint, subjectCaller;
        var _this = this;
        return __generator(this, function (_a) {
            subjectTestUint = constants_1.ONE;
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
                                    return [4 /*yield*/, timeLockUpgradeMock.testUint.callAsync()];
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
                                case 0: return [4 /*yield*/, timeLockUpgradeMock.setTimeLockPeriod.sendTransactionAsync(constants_1.ONE, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should register the timeLockedUpgrade with the transaction timestamp', function () { return __awaiter(_this, void 0, void 0, function () {
                        var txHash, _a, blockHash, input, timestamp, upgradeHash, actualTimestamp;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    txHash = _b.sent();
                                    return [4 /*yield*/, web3.eth.getTransaction(txHash)];
                                case 2:
                                    _a = _b.sent(), blockHash = _a.blockHash, input = _a.input;
                                    return [4 /*yield*/, web3.eth.getBlock(blockHash)];
                                case 3:
                                    timestamp = (_b.sent()).timestamp;
                                    upgradeHash = web3.utils.soliditySha3(input);
                                    return [4 /*yield*/, timeLockUpgradeMock.timeLockedUpgrades.callAsync(upgradeHash)];
                                case 4:
                                    actualTimestamp = _b.sent();
                                    expect(actualTimestamp).to.bignumber.equal(timestamp);
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
                                    return [4 /*yield*/, timeLockUpgradeMock.testUint.callAsync()];
                                case 2:
                                    currentTestUint = _a.sent();
                                    expect(currentTestUint).to.bignumber.equal(constants_1.ZERO);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('emits a UpgradeRegistered event', function () { return __awaiter(_this, void 0, void 0, function () {
                        var txHash, logs, _a, blockHash, input, timestamp, upgradeHash, expectedLogs;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    txHash = _b.sent();
                                    return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                                case 2:
                                    logs = _b.sent();
                                    return [4 /*yield*/, web3.eth.getTransaction(txHash)];
                                case 3:
                                    _a = _b.sent(), blockHash = _a.blockHash, input = _a.input;
                                    return [4 /*yield*/, web3.eth.getBlock(blockHash)];
                                case 4:
                                    timestamp = (_b.sent()).timestamp;
                                    upgradeHash = web3.utils.soliditySha3(input);
                                    expectedLogs = [
                                        timelockUpgrade_1.UpgradeRegistered(timeLockUpgradeMock.address, upgradeHash, timestamp.toString()),
                                    ];
                                    return [4 /*yield*/, SetTestUtils.assertLogEquivalence(logs, expectedLogs)];
                                case 5:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the timeLockPeriod is positive && a hash is set', function () { return __awaiter(_this, void 0, void 0, function () {
                var subjectUpgradeHash, subjectTimeLockPeriod, subjectTimeElapsedPeriod;
                var _this = this;
                return __generator(this, function (_a) {
                    subjectTimeLockPeriod = constants_1.ONE;
                    subjectTimeElapsedPeriod = subjectTimeLockPeriod;
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        var txHash, input;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, timeLockUpgradeMock.setTimeLockPeriod.sendTransactionAsync(subjectTimeLockPeriod, { from: subjectCaller })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, timeLockUpgradeMock.testTimeLockUpgrade.sendTransactionAsync(subjectTestUint, { from: subjectCaller })];
                                case 2:
                                    txHash = _a.sent();
                                    return [4 /*yield*/, web3.eth.getTransaction(txHash)];
                                case 3:
                                    input = (_a.sent()).input;
                                    subjectUpgradeHash = web3.utils.soliditySha3(input);
                                    return [4 /*yield*/, blockchain.increaseTimeAsync(subjectTimeElapsedPeriod)];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    it('should clear the timestamp from the timeLockedUpgrade state', function () { return __awaiter(_this, void 0, void 0, function () {
                        var actualTimestamp;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, timeLockUpgradeMock.timeLockedUpgrades.callAsync(subjectUpgradeHash)];
                                case 2:
                                    actualTimestamp = _a.sent();
                                    expect(actualTimestamp).to.bignumber.equal(constants_1.ZERO);
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
                                    return [4 /*yield*/, timeLockUpgradeMock.testUint.callAsync()];
                                case 2:
                                    currentTestUint = _a.sent();
                                    expect(currentTestUint).to.bignumber.equal(subjectTestUint);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    describe('when the time lock period has not elapsed', function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            before(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    subjectTimeLockPeriod = constants_1.UNLIMITED_ALLOWANCE_IN_BASE_UNITS.div(2).ceil();
                                    subjectTimeElapsedPeriod = constants_1.ZERO;
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
});
//# sourceMappingURL=timeLockUpgrade.spec.js.map