import { Address, Log, Bytes } from 'set-protocol-utils';

export function UpgradeRegistered(
    _coreAddress: Address,
    _upgradeHash: Bytes,
    _timestamp: string,
  ): Log {
    return {
      event: 'UpgradeRegistered',
      address: _coreAddress,
      args: {
        _upgradeHash,
        _timestamp,
      },
    };
  }

  export function UpgradeRegisteredV2(
    _coreAddress: Address,
    _upgradeHash: Bytes,
    _timestamp: string,
    _upgradeData: Bytes,
  ): Log {
    return {
      event: 'UpgradeRegistered',
      address: _coreAddress,
      args: {
        _upgradeHash,
        _timestamp,
        _upgradeData,
      },
    };
  }

  export function RemoveRegisteredUpgrade(
    _coreAddress: Address,
    _upgradeHash: Bytes,
  ): Log {
    return {
      event: 'RemoveRegisteredUpgrade',
      address: _coreAddress,
      args: {
        _upgradeHash,
      },
    };
  }