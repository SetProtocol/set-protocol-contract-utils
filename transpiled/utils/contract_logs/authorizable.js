"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getExpectedAddAuthorizedLog(authAddress, authorizedBy, contractAddress) {
    return [{
            event: 'AddressAuthorized',
            address: contractAddress,
            args: {
                authAddress: authAddress,
                authorizedBy: authorizedBy,
            },
        }];
}
exports.getExpectedAddAuthorizedLog = getExpectedAddAuthorizedLog;
function getExpectedRemoveAuthorizedLog(addressRemoved, authorizedBy, contractAddress) {
    return [{
            event: 'AuthorizedAddressRemoved',
            address: contractAddress,
            args: {
                addressRemoved: addressRemoved,
                authorizedBy: authorizedBy,
            },
        }];
}
exports.getExpectedRemoveAuthorizedLog = getExpectedRemoveAuthorizedLog;
//# sourceMappingURL=authorizable.js.map