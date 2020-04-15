"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = __importStar(require("chai"));
var ChaiAsPromised = require("chai-as-promised");
var ChaiBigNumber = require("chai-bignumber");
var ChaiSetup = /** @class */ (function () {
    function ChaiSetup() {
        this.isConfigured = false;
    }
    ChaiSetup.prototype.configure = function () {
        if (this.isConfigured) {
            return;
        }
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
        this.isConfigured = true;
    };
    return ChaiSetup;
}());
exports.ChaiSetup = ChaiSetup;
exports.default = new ChaiSetup();
//# sourceMappingURL=chaiSetup.js.map