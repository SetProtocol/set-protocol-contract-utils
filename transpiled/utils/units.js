"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_js_1 = require("bignumber.js");
var bigNumberSetup_1 = require("./bigNumberSetup");
bigNumberSetup_1.BigNumberSetup.configure();
var web3_1 = __importDefault(require("web3"));
var web3 = new web3_1.default();
function ether(amount) {
    var weiString = web3.utils.toWei(amount.toString(), 'ether');
    return new bignumber_js_1.BigNumber(weiString);
}
exports.ether = ether;
function gWei(amount) {
    var weiString = web3.utils.toWei(amount.toString(), 'gwei');
    return new bignumber_js_1.BigNumber(weiString);
}
exports.gWei = gWei;
//# sourceMappingURL=units.js.map