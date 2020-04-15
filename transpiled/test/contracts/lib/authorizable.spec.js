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
var authorizable_1 = require("@utils/contract_logs/authorizable");
var tokenAssertions_1 = require("@utils/tokenAssertions");
var web3Helper_1 = require("@utils/web3Helper");
var permissionHelper_1 = require("@utils/helpers/permissionHelper");
bigNumberSetup_1.BigNumberSetup.configure();
chaiSetup_1.default.configure();
var web3 = web3Helper_1.getWeb3();
var Authorizable = artifacts.require('Authorizable');
var SetTestUtils = setProtocolUtils.SetProtocolTestUtils;
var setTestUtils = new SetTestUtils(web3);
var expect = chai.expect;
contract('Authorizable', function (accounts) {
    var ownerAccount = accounts[0], otherAccount = accounts[1], authorizedAccount = accounts[2], authAccount1 = accounts[3], authAccount2 = accounts[4];
    var authorizableContract;
    var permissionHelper = new permissionHelper_1.PermissionHelper(ownerAccount);
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.addABI(Authorizable.abi);
            return [2 /*return*/];
        });
    }); });
    after(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ABIDecoder.removeABI(Authorizable.abi);
            return [2 /*return*/];
        });
    }); });
    describe('#addAuthorizedAddress', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, authorizableContract.addAuthorizedAddress.sendTransactionAsync(authorizedAccount, { from: caller })];
                });
            });
        }
        var caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, permissionHelper.deployAuthorizableAsync()];
                        case 1:
                            authorizableContract = _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    caller = ownerAccount;
                    return [2 /*return*/];
                });
            }); });
            it('sets authorized mapping correctly', function () { return __awaiter(_this, void 0, void 0, function () {
                var storedAuthAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, authorizableContract.authorized.callAsync(authorizedAccount)];
                        case 2:
                            storedAuthAddress = _a.sent();
                            expect(storedAuthAddress).to.eql(true);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('sets authorities array correctly', function () { return __awaiter(_this, void 0, void 0, function () {
                var authoritiesArray;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, authorizableContract.getAuthorizedAddresses.callAsync()];
                        case 2:
                            authoritiesArray = _a.sent();
                            expect(authoritiesArray.length).to.eql(1);
                            expect(authoritiesArray[0]).to.eql(authorizedAccount);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('emits correct AddressAuthorized log', function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, formattedLogs, expectedLogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            txHash = _a.sent();
                            return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                        case 2:
                            formattedLogs = _a.sent();
                            expectedLogs = authorizable_1.getExpectedAddAuthorizedLog(authorizedAccount, caller, authorizableContract.address);
                            return [4 /*yield*/, SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the caller is not the owner of the contract', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            caller = otherAccount;
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
            describe('when the passed address is already authorized', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, authorizableContract.addAuthorizedAddress.sendTransactionAsync(authorizedAccount, { from: caller })];
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
            return [2 /*return*/];
        });
    }); });
    describe('#removeAuthorizedAddress', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, authorizableContract.removeAuthorizedAddress.sendTransactionAsync(addressToRemove, { from: caller })];
                });
            });
        }
        var caller, addressToRemove;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            addressToRemove = authorizedAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                var authAccountArray, _i, authAccountArray_1, account;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, permissionHelper.deployAuthorizableAsync()];
                        case 1:
                            authorizableContract = _a.sent();
                            authAccountArray = [authAccount1, authAccount2, authorizedAccount];
                            _i = 0, authAccountArray_1 = authAccountArray;
                            _a.label = 2;
                        case 2:
                            if (!(_i < authAccountArray_1.length)) return [3 /*break*/, 5];
                            account = authAccountArray_1[_i];
                            return [4 /*yield*/, permissionHelper.addAuthorizationAsync(authorizableContract, account)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            afterEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    caller = ownerAccount;
                    addressToRemove = authorizedAccount;
                    return [2 /*return*/];
                });
            }); });
            it('removes address from authorized mapping', function () { return __awaiter(_this, void 0, void 0, function () {
                var storedAuthAddress;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, authorizableContract.authorized.callAsync(addressToRemove)];
                        case 2:
                            storedAuthAddress = _a.sent();
                            expect(storedAuthAddress).to.eql(false);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('removes address from authorities array', function () { return __awaiter(_this, void 0, void 0, function () {
                var newAuthoritiesArray;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, authorizableContract.getAuthorizedAddresses.callAsync()];
                        case 2:
                            newAuthoritiesArray = _a.sent();
                            expect(newAuthoritiesArray).to.not.include(addressToRemove);
                            return [2 /*return*/];
                    }
                });
            }); });
            it('emits correct AuthorizedAddressRemoved log', function () { return __awaiter(_this, void 0, void 0, function () {
                var txHash, formattedLogs, expectedLogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            txHash = _a.sent();
                            return [4 /*yield*/, setTestUtils.getLogsFromTxHash(txHash)];
                        case 2:
                            formattedLogs = _a.sent();
                            expectedLogs = authorizable_1.getExpectedRemoveAuthorizedLog(addressToRemove, caller, authorizableContract.address);
                            return [4 /*yield*/, SetTestUtils.assertLogEquivalence(formattedLogs, expectedLogs)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the caller is not the owner of the contract', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            caller = otherAccount;
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
            describe('when the passed address is not authorized', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            addressToRemove = otherAccount;
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
//# sourceMappingURL=authorizable.spec.js.map