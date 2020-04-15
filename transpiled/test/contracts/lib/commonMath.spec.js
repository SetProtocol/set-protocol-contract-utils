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
var chai = __importStar(require("chai"));
var bignumber_js_1 = require("bignumber.js");
var units_1 = require("@utils/units");
var tokenAssertions_1 = require("@utils/tokenAssertions");
var chaiSetup_1 = __importDefault(require("@utils/chaiSetup"));
var bigNumberSetup_1 = require("@utils/bigNumberSetup");
var constants_1 = require("@utils/constants");
var libraryMockHelper_1 = require("@utils/helpers/libraryMockHelper");
bigNumberSetup_1.BigNumberSetup.configure();
chaiSetup_1.default.configure();
var expect = chai.expect;
contract('CommonMathMock', function (accounts) {
    var ownerAccount = accounts[0];
    var libraryMockHelper = new libraryMockHelper_1.LibraryMockHelper(ownerAccount);
    var commonMathLibrary;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, libraryMockHelper.deployCommonMathLibraryAsync()];
                case 1:
                    commonMathLibrary = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('#testMaxUInt256', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testMaxUInt256.callAsync({ from: caller })];
                });
            });
        }
        var caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            it('returns the max allowed integer', function () { return __awaiter(_this, void 0, void 0, function () {
                var maxUInt256, expectedMaxUInt256;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            maxUInt256 = _a.sent();
                            expectedMaxUInt256 = new bignumber_js_1.BigNumber('1.15792089237316195423570985008687907853269984665640564039457584007913129639935e+77');
                            expect(maxUInt256).to.be.bignumber.equal(expectedMaxUInt256);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#testScaleFactor', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testScaleFactor.callAsync()];
                });
            });
        }
        var _this = this;
        return __generator(this, function (_a) {
            it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var result, expectedResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            result = _a.sent();
                            expectedResult = new bignumber_js_1.BigNumber(Math.pow(10, 18));
                            expect(result).to.be.bignumber.equal(expectedResult);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#testScale', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testScale.callAsync(subjectValue, { from: caller })];
                });
            });
        }
        var subjectValue, caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectValue = new bignumber_js_1.BigNumber(2);
                    return [2 /*return*/];
                });
            }); });
            it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var result, expectedResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            result = _a.sent();
                            expectedResult = new bignumber_js_1.BigNumber(subjectValue).mul(Math.pow(10, 18));
                            expect(result).to.be.bignumber.equal(expectedResult);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#testDeScale', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testDeScale.callAsync(subjectValue, { from: caller })];
                });
            });
        }
        var subjectValue, caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectValue = units_1.ether(2);
                    return [2 /*return*/];
                });
            }); });
            it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var result, expectedResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            result = _a.sent();
                            expectedResult = subjectValue.div(Math.pow(10, 18));
                            expect(result).to.be.bignumber.equal(expectedResult);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe('#testSafePower', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testSafePower.callAsync(subjectBase, subjectPower, { from: caller })];
                });
            });
        }
        var subjectBase, subjectPower, caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectBase = new bignumber_js_1.BigNumber(2);
                    subjectPower = new bignumber_js_1.BigNumber(5);
                    return [2 /*return*/];
                });
            }); });
            it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var result, expectedResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            result = _a.sent();
                            expectedResult = new bignumber_js_1.BigNumber(subjectBase).pow(subjectPower.toNumber());
                            expect(result).to.be.bignumber.equal(expectedResult);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when the the base is 1', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectBase = new bignumber_js_1.BigNumber(1);
                            subjectPower = new bignumber_js_1.BigNumber(5);
                            return [2 /*return*/];
                        });
                    }); });
                    it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                        var result, expectedResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    result = _a.sent();
                                    expectedResult = new bignumber_js_1.BigNumber(subjectBase).pow(subjectPower.toNumber());
                                    expect(result).to.be.bignumber.equal(expectedResult);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('when the values overflow', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectBase = new bignumber_js_1.BigNumber(10000);
                            subjectPower = new bignumber_js_1.BigNumber(10).pow(99);
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
            describe('when the the base is 0', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectBase = new bignumber_js_1.BigNumber(0);
                            subjectPower = new bignumber_js_1.BigNumber(5);
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
    describe('#testDivCeil', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testDivCeil.callAsync(subjectA, subjectB, { from: caller })];
                });
            });
        }
        var subjectA, subjectB, caller;
        var _this = this;
        return __generator(this, function (_a) {
            caller = ownerAccount;
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectA = new bignumber_js_1.BigNumber(26);
                    subjectB = new bignumber_js_1.BigNumber(11);
                    return [2 /*return*/];
                });
            }); });
            it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var result, expectedResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            result = _a.sent();
                            expectedResult = new bignumber_js_1.BigNumber(3);
                            expect(result).to.be.bignumber.equal(expectedResult);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when there is no rounding', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectA = new bignumber_js_1.BigNumber(6);
                            subjectB = new bignumber_js_1.BigNumber(2);
                            return [2 /*return*/];
                        });
                    }); });
                    it('returns the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                        var result, expectedResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    result = _a.sent();
                                    expectedResult = new bignumber_js_1.BigNumber(subjectA).div(subjectB);
                                    expect(result).to.be.bignumber.equal(expectedResult);
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
    describe('getPartialAmount', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testGetPartialAmount.callAsync(subjectPrincipal, subjectNumerator, subjectDenominator)];
                });
            });
        }
        var subjectPrincipal, subjectNumerator, subjectDenominator;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectPrincipal = new bignumber_js_1.BigNumber(1000);
                    subjectNumerator = new bignumber_js_1.BigNumber(400);
                    subjectDenominator = new bignumber_js_1.BigNumber(500);
                    return [2 /*return*/];
                });
            }); });
            it('calculates the partial amount correctly', function () { return __awaiter(_this, void 0, void 0, function () {
                var partialAmount, expectedPartialAmount;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            partialAmount = _a.sent();
                            expectedPartialAmount = subjectPrincipal.mul(subjectNumerator).div(subjectDenominator);
                            expect(partialAmount).to.be.bignumber.equal(expectedPartialAmount);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('when there is slippage due to rounding', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectPrincipal = units_1.ether(10);
                            subjectNumerator = units_1.ether(4);
                            subjectDenominator = units_1.ether(6);
                            return [2 /*return*/];
                        });
                    }); });
                    it('should revert', function () { return __awaiter(_this, void 0, void 0, function () {
                        var partialAmount, expectedAmount;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    partialAmount = _a.sent();
                                    expectedAmount = new bignumber_js_1.BigNumber('6666666666666666666');
                                    expect(partialAmount).to.be.bignumber.equal(expectedAmount);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    describe('when the rounding error is too large', function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    subjectPrincipal = new bignumber_js_1.BigNumber(10);
                                    subjectNumerator = new bignumber_js_1.BigNumber(4);
                                    subjectDenominator = new bignumber_js_1.BigNumber(6);
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
    describe('#ceilLog10', function () { return __awaiter(_this, void 0, void 0, function () {
        function subject() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, commonMathLibrary.testCeilLog10.callAsync(subjectValue)];
                });
            });
        }
        var subjectValue;
        var _this = this;
        return __generator(this, function (_a) {
            beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    subjectValue = constants_1.UNLIMITED_ALLOWANCE_IN_BASE_UNITS;
                    return [2 /*return*/];
                });
            }); });
            it('calculates the correct value', function () { return __awaiter(_this, void 0, void 0, function () {
                var actualOutput, expectedOutput;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, subject()];
                        case 1:
                            actualOutput = _a.sent();
                            expectedOutput = libraryMockHelper.ceilLog10(subjectValue);
                            expect(actualOutput).to.be.bignumber.equal(expectedOutput);
                            return [2 /*return*/];
                    }
                });
            }); });
            describe('but less than 10 ** 64', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        var rawValue;
                        return __generator(this, function (_a) {
                            rawValue = 1.5 * (Math.pow(10, 50));
                            subjectValue = new bignumber_js_1.BigNumber(rawValue.toString());
                            return [2 /*return*/];
                        });
                    }); });
                    it('should return correct number', function () { return __awaiter(_this, void 0, void 0, function () {
                        var actualOutput, expectedOutput;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    actualOutput = _a.sent();
                                    expectedOutput = libraryMockHelper.ceilLog10(subjectValue);
                                    expect(actualOutput).to.be.bignumber.equal(expectedOutput);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('but value is between 1-10', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectValue = new bignumber_js_1.BigNumber(9);
                            return [2 /*return*/];
                        });
                    }); });
                    it('should return correct number', function () { return __awaiter(_this, void 0, void 0, function () {
                        var actualOutput;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    actualOutput = _a.sent();
                                    expect(actualOutput).to.be.bignumber.equal(new bignumber_js_1.BigNumber(1));
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('but value is 1', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectValue = new bignumber_js_1.BigNumber(1);
                            return [2 /*return*/];
                        });
                    }); });
                    it('should return correct number', function () { return __awaiter(_this, void 0, void 0, function () {
                        var actualOutput;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, subject()];
                                case 1:
                                    actualOutput = _a.sent();
                                    expect(actualOutput).to.be.bignumber.equal(constants_1.ZERO);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            describe('but value is 0', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            subjectValue = constants_1.ZERO;
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
//# sourceMappingURL=commonMath.spec.js.map