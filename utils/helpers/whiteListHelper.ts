import * as _ from 'lodash';
import { Address } from 'set-protocol-utils';

import {
  AddressToAddressWhiteListContract,
  OracleWhiteListContract,
  WhiteListContract
} from '../contracts';
import {
  DEFAULT_GAS,
} from '../constants';
import { getContractInstance, importArtifactsFromSource } from '../web3Helper';

const AddressToAddressWhiteList = importArtifactsFromSource('AddressToAddressWhiteList');
const OracleWhiteList = importArtifactsFromSource('OracleWhiteList');
const WhiteList = importArtifactsFromSource('WhiteList');

export class WhiteListHelper {
  private _contractOwnerAddress: Address;

  constructor(contractOwnerAddress: Address) {
    this._contractOwnerAddress = contractOwnerAddress;
  }

  public async deployWhiteListAsync(
    initialAddresses: Address[] = [],
    from: Address = this._contractOwnerAddress
  ): Promise<WhiteListContract> {
    const truffleWhiteList = await WhiteList.new(
      initialAddresses,
      { from },
    );

    return new WhiteListContract(
      getContractInstance(truffleWhiteList),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployOracleWhiteListAsync(
    initialTokenAddresses: Address[] = [],
    initialOracleAddresses: Address[] = [],
    from: Address = this._contractOwnerAddress
  ): Promise<OracleWhiteListContract> {
    const truffleWhiteList = await OracleWhiteList.new(
      initialTokenAddresses,
      initialOracleAddresses,
      { from },
    );

    return new OracleWhiteListContract(
      getContractInstance(truffleWhiteList),
      { from, gas: DEFAULT_GAS },
    );
  }

  public async deployAddressToAddressWhiteListAsync(
    initialKeyTypeAddresses: Address[] = [],
    initialValueTypeAddresses: Address[] = [],
    from: Address = this._contractOwnerAddress
  ): Promise<AddressToAddressWhiteListContract> {
    const truffleWhiteList = await AddressToAddressWhiteList.new(
      initialKeyTypeAddresses,
      initialValueTypeAddresses,
      { from },
    );

    return new AddressToAddressWhiteListContract(
      getContractInstance(truffleWhiteList),
      { from, gas: DEFAULT_GAS },
    );
  }
}