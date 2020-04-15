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
import { Bytes32LibraryMock as ContractArtifacts } from '../../artifacts/ts/Bytes32LibraryMock';
import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { ABIDefinition } from "web3/eth/abi";
import { Tx } from "web3/eth/types";
import { BigNumber, BN, UInt, Web3Utils } from 'set-protocol-utils';

import { BaseContract, CONTRACT_WRAPPER_ERRORS } from '../base_contract';
import { classUtils } from '../common';

export class Bytes32LibraryMockContract extends BaseContract {
  public testBytes32ToBytes = {
    async callAsync(
      data: string,
      defaultBlock?: any,
    ): Promise<string
  > {
      const self = this as Bytes32LibraryMockContract;
      const result = await promisify<string
  >(
        self.web3ContractInstance.methods.testBytes32ToBytes(
          this.formatABIDataItem(
          	'bytes32',
          	[
          	],data),
        ).call,
        self.web3ContractInstance,
      )();
      
      return result;
    },
  };
  public testBytes32ToString = {
    async callAsync(
      data: string,
      defaultBlock?: any,
    ): Promise<string
  > {
      const self = this as Bytes32LibraryMockContract;
      const result = await promisify<string
  >(
        self.web3ContractInstance.methods.testBytes32ToString(
          this.formatABIDataItem(
          	'bytes32',
          	[
          	],data),
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
  static async deployed(web3: Web3, defaults: Tx): Promise<Bytes32LibraryMockContract> {
    const web3Utils = new Web3Utils(web3);
    const currentNetwork = await web3Utils.getNetworkIdAsync();
    const { abi, networks }: { abi: any[]; networks: any } = ContractArtifacts;
    const web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);

    return new Bytes32LibraryMockContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Tx,
  ): Promise<Bytes32LibraryMockContract> {
    const { abi }: { abi: any[] } = ContractArtifacts;
    const web3Utils = new Web3Utils(web3);
    const contractExists = await web3Utils.doesContractExistAtAddressAsync(address);
    const currentNetwork = await web3Utils.getNetworkIdAsync();

    if (contractExists) {
      const web3ContractInstance = new web3.eth.Contract(abi, address);

      return new Bytes32LibraryMockContract(web3ContractInstance, defaults);
    } else {
      throw new Error(
        CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('Bytes32LibraryMock', currentNetwork),
      );
    }
  }
  constructor(web3ContractInstance: Contract, defaults: Tx) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
  }
} // tslint:disable:max-file-line-count
