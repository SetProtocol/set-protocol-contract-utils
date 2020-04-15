"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var bignumber_js_1 = require("bignumber.js");
/* tslint:enable */
exports.BigNumberSetup = {
    configure: function () {
        // By default BigNumber's `toString` method converts to exponential notation if the value has
        // more then 20 digits. We want to avoid this behavior, so we set EXPONENTIAL_AT to a high number
        bignumber_js_1.BigNumber.config({
            EXPONENTIAL_AT: 1000,
        });
    },
};
//# sourceMappingURL=bigNumberSetup.js.map