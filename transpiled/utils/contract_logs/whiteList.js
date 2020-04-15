"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AddressAdded(_contractAddress, _address) {
    return [{
            event: 'AddressAdded',
            address: _contractAddress,
            args: {
                _address: _address,
            },
        }];
}
exports.AddressAdded = AddressAdded;
function AddressRemoved(_contractAddress, _address) {
    return [{
            event: 'AddressRemoved',
            address: _contractAddress,
            args: {
                _address: _address,
            },
        }];
}
exports.AddressRemoved = AddressRemoved;
//# sourceMappingURL=whiteList.js.map