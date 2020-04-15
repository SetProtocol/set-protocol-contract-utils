 /*
  Copyright 2018 Set Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

'use strict';

 /**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { promisify } from '@0xproject/utils';
import { Authorizable as ContractArtifacts } from '../../artifacts/ts/Authorizable';
import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { ABIDefinition } from "web3/eth/abi";
import { Tx } from "web3/eth/types";
import { BigNumber, BN, UInt, Web3Utils } from 'set-protocol-utils';

import { BaseContract, CONTRACT_WRAPPER_ERRORS } from '../base_contract';
import { classUtils } from '../common';

export class AuthorizableContract extends BaseContract {
  public timeLockedUpgrades = {
    async callAsync(
      index_0: string,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.timeLockedUpgrades(
          this.formatABIDataItem(
          	'bytes32',
          	[
          	],index_0),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public authorities = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: any,
    ): Promise<string
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<string
  >(
        self.web3ContractInstance.methods.authorities(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],index_0),
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  public renounceOwnership = {
    async sendTransactionAsync(
      txData: Tx = {},
    ): Promise<string> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.renounceOwnership.estimateGasAsync.bind(
          self,
        ),
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.methods.renounceOwnership(
        ).send, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return txHash;
    },
    async estimateGasAsync(
      txData: Tx = {},
    ): Promise<number> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const gas = await promisify<number>(
        self.web3ContractInstance.methods.renounceOwnership(
        ).estimateGas, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return gas;
    },
    getABIEncodedTransactionData(
      txData: Tx = {},
    ): string {
      const self = this as AuthorizableContract;
      const abiEncodedTransactionData = self.web3ContractInstance.methods.renounceOwnership(
      ).encodeABI();
      return abiEncodedTransactionData;
    },
    async callAsync(
      txData: Tx = {},
    ): Promise<void
  > {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const result = await promisify<void
  >(
        self.web3ContractInstance.methods.renounceOwnership(
        ).call,
        self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return result;
    },
  };
  public timeLockPeriod = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.timeLockPeriod(
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public owner = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<string
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<string
  >(
        self.web3ContractInstance.methods.owner(
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  public isOwner = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<boolean
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<boolean
  >(
        self.web3ContractInstance.methods.isOwner(
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  public setTimeLockPeriod = {
    async sendTransactionAsync(
      _timeLockPeriod: BigNumber,
      txData: Tx = {},
    ): Promise<string> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setTimeLockPeriod.estimateGasAsync.bind(
          self,
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_timeLockPeriod),
        ),
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.methods.setTimeLockPeriod(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_timeLockPeriod),
        ).send, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return txHash;
    },
    async estimateGasAsync(
      _timeLockPeriod: BigNumber,
      txData: Tx = {},
    ): Promise<number> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const gas = await promisify<number>(
        self.web3ContractInstance.methods.setTimeLockPeriod(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_timeLockPeriod),
        ).estimateGas, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return gas;
    },
    getABIEncodedTransactionData(
      _timeLockPeriod: BigNumber,
      txData: Tx = {},
    ): string {
      const self = this as AuthorizableContract;
      const abiEncodedTransactionData = self.web3ContractInstance.methods.setTimeLockPeriod(
        this.formatABIDataItem(
        	'uint256',
        	[
        	],_timeLockPeriod),
      ).encodeABI();
      return abiEncodedTransactionData;
    },
    async callAsync(
      _timeLockPeriod: BigNumber,
      txData: Tx = {},
    ): Promise<void
  > {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const result = await promisify<void
  >(
        self.web3ContractInstance.methods.setTimeLockPeriod(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_timeLockPeriod),
        ).call,
        self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return result;
    },
  };
  public authorized = {
    async callAsync(
      index_0: string,
      defaultBlock?: any,
    ): Promise<boolean
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<boolean
  >(
        self.web3ContractInstance.methods.authorized(
          this.formatABIDataItem(
          	'address',
          	[
          	],index_0),
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData: Tx = {},
    ): Promise<string> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferOwnership.estimateGasAsync.bind(
          self,
          this.formatABIDataItem(
          	'address',
          	[
          	],newOwner),
        ),
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.methods.transferOwnership(
          this.formatABIDataItem(
          	'address',
          	[
          	],newOwner),
        ).send, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return txHash;
    },
    async estimateGasAsync(
      newOwner: string,
      txData: Tx = {},
    ): Promise<number> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const gas = await promisify<number>(
        self.web3ContractInstance.methods.transferOwnership(
          this.formatABIDataItem(
          	'address',
          	[
          	],newOwner),
        ).estimateGas, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return gas;
    },
    getABIEncodedTransactionData(
      newOwner: string,
      txData: Tx = {},
    ): string {
      const self = this as AuthorizableContract;
      const abiEncodedTransactionData = self.web3ContractInstance.methods.transferOwnership(
        this.formatABIDataItem(
        	'address',
        	[
        	],newOwner),
      ).encodeABI();
      return abiEncodedTransactionData;
    },
    async callAsync(
      newOwner: string,
      txData: Tx = {},
    ): Promise<void
  > {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const result = await promisify<void
  >(
        self.web3ContractInstance.methods.transferOwnership(
          this.formatABIDataItem(
          	'address',
          	[
          	],newOwner),
        ).call,
        self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return result;
    },
  };
  public addAuthorizedAddress = {
    async sendTransactionAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<string> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedAddress.estimateGasAsync.bind(
          self,
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ),
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.methods.addAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).send, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return txHash;
    },
    async estimateGasAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<number> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const gas = await promisify<number>(
        self.web3ContractInstance.methods.addAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).estimateGas, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return gas;
    },
    getABIEncodedTransactionData(
      _authTarget: string,
      txData: Tx = {},
    ): string {
      const self = this as AuthorizableContract;
      const abiEncodedTransactionData = self.web3ContractInstance.methods.addAuthorizedAddress(
        this.formatABIDataItem(
        	'address',
        	[
        	],_authTarget),
      ).encodeABI();
      return abiEncodedTransactionData;
    },
    async callAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<void
  > {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const result = await promisify<void
  >(
        self.web3ContractInstance.methods.addAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).call,
        self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return result;
    },
  };
  public removeAuthorizedAddress = {
    async sendTransactionAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<string> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.removeAuthorizedAddress.estimateGasAsync.bind(
          self,
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ),
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.methods.removeAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).send, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return txHash;
    },
    async estimateGasAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<number> {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const gas = await promisify<number>(
        self.web3ContractInstance.methods.removeAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).estimateGas, self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return gas;
    },
    getABIEncodedTransactionData(
      _authTarget: string,
      txData: Tx = {},
    ): string {
      const self = this as AuthorizableContract;
      const abiEncodedTransactionData = self.web3ContractInstance.methods.removeAuthorizedAddress(
        this.formatABIDataItem(
        	'address',
        	[
        	],_authTarget),
      ).encodeABI();
      return abiEncodedTransactionData;
    },
    async callAsync(
      _authTarget: string,
      txData: Tx = {},
    ): Promise<void
  > {
      const self = this as AuthorizableContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
      );
      const result = await promisify<void
  >(
        self.web3ContractInstance.methods.removeAuthorizedAddress(
          this.formatABIDataItem(
          	'address',
          	[
          	],_authTarget),
        ).call,
        self.web3ContractInstance,
      )(
        txDataWithDefaults,
      );
      return result;
    },
  };
  public getAuthorizedAddresses = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<string[]
  > {
      const self = this as AuthorizableContract;
      const result = await promisify<string[]
  >(
        self.web3ContractInstance.methods.getAuthorizedAddresses(
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  async deploy(data: string, args: any[]): Promise<any> {
    const wrapper = this;

    wrapper.web3ContractInstance.deploy({
      data,
      arguments: args,
    })
    .send(wrapper.defaults)
    .then(function(newContractInstance){
      wrapper.web3ContractInstance = newContractInstance;
      wrapper.address = newContractInstance.options.address;
    });
  }
  static async deployed(web3: Web3, defaults: Tx): Promise<AuthorizableContract> {
    const web3Utils = new Web3Utils(web3);
    const currentNetwork = await web3Utils.getNetworkIdAsync();
    const { abi, networks }: { abi: any[]; networks: any } = ContractArtifacts;
    const web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);

    return new AuthorizableContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Tx,
  ): Promise<AuthorizableContract> {
    const { abi }: { abi: any[] } = ContractArtifacts;
    const web3Utils = new Web3Utils(web3);
    const contractExists = await web3Utils.doesContractExistAtAddressAsync(address);
    const currentNetwork = await web3Utils.getNetworkIdAsync();

    if (contractExists) {
      const web3ContractInstance = new web3.eth.Contract(abi, address);

      return new AuthorizableContract(web3ContractInstance, defaults);
    } else {
      throw new Error(
        CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('Authorizable', currentNetwork),
      );
    }
  }
  constructor(web3ContractInstance: Contract, defaults: Tx) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
  }
} // tslint:disable:max-file-line-count
