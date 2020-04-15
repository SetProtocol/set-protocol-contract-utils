"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TokenOraclePairAdded(_contractAddress, _tokenAddress, _oracleAddress) {
    return [{
            event: 'TokenOraclePairAdded',
            address: _contractAddress,
            args: {
                _tokenAddress: _tokenAddress,
                _oracleAddress: _oracleAddress,
            },
        }];
}
exports.TokenOraclePairAdded = TokenOraclePairAdded;
function TokenOraclePairRemoved(_contractAddress, _tokenAddress, _oracleAddress) {
    return [{
            event: 'TokenOraclePairRemoved',
            address: _contractAddress,
            args: {
                _tokenAddress: _tokenAddress,
                _oracleAddress: _oracleAddress,
            },
        }];
}
exports.TokenOraclePairRemoved = TokenOraclePairRemoved;
//# sourceMappingURL=oracleWhiteList.js.map