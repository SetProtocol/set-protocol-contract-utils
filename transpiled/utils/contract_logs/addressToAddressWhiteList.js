"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PairAdded(_contractAddress, _key, _value) {
    return [{
            event: 'PairAdded',
            address: _contractAddress,
            args: {
                key: _key,
                value: _value,
            },
        }];
}
exports.PairAdded = PairAdded;
function PairRemoved(_contractAddress, _key, _value) {
    return [{
            event: 'PairRemoved',
            address: _contractAddress,
            args: {
                key: _key,
                value: _value,
            },
        }];
}
exports.PairRemoved = PairRemoved;
//# sourceMappingURL=addressToAddressWhiteList.js.map