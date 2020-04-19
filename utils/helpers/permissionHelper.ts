import * as _ from 'lodash';
import { Address } from 'set-protocol-utils';

import {
  AuthorizableMockContract,
  LimitOneUpgradeMockContract,
  TimeLockUpgradeMockContract,
  TimeLockUpgradeV2MockContract,
  UnrestrictedTimeLockUpgradeMockContract,
} from '../contracts';
import {
  DEFAULT_GAS,
} from '../constants';
import { getContractInstance, importArtifactsFromSource } from '../web3Helper';

const AuthorizableMock = importArtifactsFromSource('AuthorizableMock');
const TimeLockUpgradeMock = importArtifactsFromSource('TimeLockUpgradeMock');
const TimeLockUpgradeV2Mock = importArtifactsFromSource('TimeLockUpgradeV2Mock');
const UnrestrictedTimeLockUpgradeMock = importArtifactsFromSource('UnrestrictedTimeLockUpgradeMock');
const LimitOneUpgradeMock = importArtifactsFromSource('LimitOneUpgradeMock');

export class PermissionHelper {
  private _contractOwnerAddress: Address;

  constructor(contractOwnerAddress: Address) {
    this._contractOwnerAddress = contractOwnerAddress;
  }

  public async deployAuthorizableMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<AuthorizableMockContract> {
    const truffleAuthorizableMock = await AuthorizableMock.new(
      { from, gas: DEFAULT_GAS },
    );

    return new AuthorizableMockContract(
      getContractInstance(truffleAuthorizableMock),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployTimeLockUpgradeMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<TimeLockUpgradeMockContract> {
    const truffleTimeLockUpgradeMock = await TimeLockUpgradeMock.new(
      { from },
    );

    return new TimeLockUpgradeMockContract(
      getContractInstance(truffleTimeLockUpgradeMock),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployTimeLockUpgradeV2MockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<TimeLockUpgradeV2MockContract> {
    const truffleTimeLockUpgradeV2Mock = await TimeLockUpgradeV2Mock.new(
      { from },
    );

    return new TimeLockUpgradeV2MockContract(
      getContractInstance(truffleTimeLockUpgradeV2Mock),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployUnrestrictedTimeLockUpgradeMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<UnrestrictedTimeLockUpgradeMockContract> {
    const truffleUnrestrictedTimeLockUpgradeMock = await UnrestrictedTimeLockUpgradeMock.new(
      { from },
    );

    return new UnrestrictedTimeLockUpgradeMockContract(
      getContractInstance(truffleUnrestrictedTimeLockUpgradeMock),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployLimitOneUpgradeMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<LimitOneUpgradeMockContract> {
    const truffleLimitOneUpgradeMock = await LimitOneUpgradeMock.new(
      { from },
    );

    return new LimitOneUpgradeMockContract(
      getContractInstance(truffleLimitOneUpgradeMock),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async addAuthorizationAsync(
    contract: AuthorizableMockContract,
    toAuthorize: Address,
    from: Address = this._contractOwnerAddress
  ) {
    await contract.addAuthorizedAddress.sendTransactionAsync(
      toAuthorize,
      { from },
    );
  }
}