"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_js_1 = require("bignumber.js");
var units_1 = require("../utils/units");
exports.AUCTION_TIME_INCREMENT = new bignumber_js_1.BigNumber(30); // Unix seconds
exports.DEFAULT_AUCTION_PRICE_NUMERATOR = new bignumber_js_1.BigNumber(1374);
exports.DEFAULT_AUCTION_PRICE_DIVISOR = new bignumber_js_1.BigNumber(1000);
exports.DEFAULT_GAS = 19000000;
exports.DEFAULT_MOCK_TOKEN_DECIMALS = 18;
exports.DEFAULT_REBALANCE_START_PRICE = new bignumber_js_1.BigNumber(500);
exports.DEFAULT_REBALANCE_TIME_TO_PIVOT = new bignumber_js_1.BigNumber(100000);
exports.DEFAULT_REBALANCING_NATURAL_UNIT = new bignumber_js_1.BigNumber(Math.pow(10, 6));
exports.DEFAULT_REBALANCING_MINIMUM_NATURAL_UNIT = new bignumber_js_1.BigNumber(Math.pow(10, 4));
exports.DEFAULT_REBALANCING_MAXIMUM_NATURAL_UNIT = new bignumber_js_1.BigNumber(Math.pow(10, 12));
exports.DEFAULT_UNIT_SHARES = new bignumber_js_1.BigNumber(Math.pow(10, 6));
exports.DEPLOYED_TOKEN_QUANTITY = units_1.ether(100000000000);
exports.ETH_DECIMALS = new bignumber_js_1.BigNumber(Math.pow(10, 18));
exports.KYBER_RESERVE_CONFIGURED_RATE = new bignumber_js_1.BigNumber('321556325999999997');
exports.NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.ONE = new bignumber_js_1.BigNumber(1);
exports.ONE_HOUR_IN_SECONDS = new bignumber_js_1.BigNumber(3600);
exports.ONE_DAY_IN_SECONDS = new bignumber_js_1.BigNumber(86400);
exports.ONE_YEAR_IN_SECONDS = exports.ONE_DAY_IN_SECONDS.mul(365.25);
exports.RISK_COLLATERAL_NATURAL_UNIT = new bignumber_js_1.BigNumber(Math.pow(10, 6));
exports.SNAPSHOT_TIME_LOCK = new bignumber_js_1.BigNumber(1);
exports.STABLE_COLLATERAL_NATURAL_UNIT = new bignumber_js_1.BigNumber(Math.pow(10, 12));
exports.STANDARD_COMPONENT_UNIT = units_1.ether(1);
exports.STANDARD_NATURAL_UNIT = units_1.ether(1);
exports.STANDARD_QUANTITY_ISSUED = units_1.ether(10);
exports.UNLIMITED_ALLOWANCE_IN_BASE_UNITS = new bignumber_js_1.BigNumber(2).pow(256).minus(1);
exports.USDC_DECIMALS = new bignumber_js_1.BigNumber(Math.pow(10, 6));
exports.VALUE_TO_CENTS_CONVERSION = new bignumber_js_1.BigNumber(Math.pow(10, 16));
exports.WBTC_DECIMALS = 8;
exports.ZERO = new bignumber_js_1.BigNumber(0);
exports.ZERO_BYTES = '0x0000000000000000000000000000000000000000000000000000000000000000';
exports.PRIVATE_KEYS = [
    '767df558efc63b6ba9a9257e68509c38f5c48d5938a41ab191a9a073ebff7c4f',
    '6dc5d3331608e4b99b68dd8b9dee89973ebc6feee1cb0ba9a2ec814a99c680c1',
    '2b73a8e22d40615e0144bee14c5f80668c449029d9f60eba71b800f0979337af',
    '95fab20a86f7aa81c47854e3a0d265014359d557027c3e07c64dbac9f66b0930',
    'b8400424887469943ca6e4448596a709c64ad768600e9c24538fda6c8f5d1599',
    '737392faafc4b9fa8861ec0dfb1e3a01e383e270331faa25f28fb40866740046',
    '92c0c7a1aba1e59f1f97af9a482649a4196b2b766f794b85bebcefeac8b80e30',
    '05973025898f0c1c1c723545630ecd251c42297d8db665aec245526022d82a98',
    '84f5e4921ea1ee2e53e2713bd5170877635c168d0fdab8044f15b835020f1f6c',
    'b17ee27cba4f656d8cd13165ba9fdfa79abf5308253c75654030d360f1e65329',
    '55d6cb34052149b6a93624bbfd1a277a37e352f34e16bc405054adf42b6eab18',
    'cc87c4b4d1665092048511f0318755884771d498f79d29aa78b341a3f058f4c6',
    '8884500103a7809924cbb5b6e7c1f8b9e27e7b6da839935f221406e02a954293',
    '0a44845c2b09e9f942578f7dd960653595c152e558dbf7fb40bd85e918dd565f',
    '843445407853ed9455b0b3511b50dc11a5c329746abbed08c95582b895c450a9',
];
//# sourceMappingURL=constants.js.map