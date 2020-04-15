"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UpgradeRegistered(_coreAddress, _upgradeHash, _timestamp) {
    return {
        event: 'UpgradeRegistered',
        address: _coreAddress,
        args: {
            _upgradeHash: _upgradeHash,
            _timestamp: _timestamp,
        },
    };
}
exports.UpgradeRegistered = UpgradeRegistered;
function UpgradeRegisteredV2(_coreAddress, _upgradeHash, _timestamp, _upgradeData) {
    return {
        event: 'UpgradeRegistered',
        address: _coreAddress,
        args: {
            _upgradeHash: _upgradeHash,
            _timestamp: _timestamp,
            _upgradeData: _upgradeData,
        },
    };
}
exports.UpgradeRegisteredV2 = UpgradeRegisteredV2;
function RemoveRegisteredUpgrade(_coreAddress, _upgradeHash) {
    return {
        event: 'RemoveRegisteredUpgrade',
        address: _coreAddress,
        args: {
            _upgradeHash: _upgradeHash,
        },
    };
}
exports.RemoveRegisteredUpgrade = RemoveRegisteredUpgrade;
//# sourceMappingURL=timelockUpgrade.js.map