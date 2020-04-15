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
import { CommonMathMock as ContractArtifacts } from '../../artifacts/ts/CommonMathMock';
import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { ABIDefinition } from "web3/eth/abi";
import { Tx } from "web3/eth/types";
import { BigNumber, BN, UInt, Web3Utils } from 'set-protocol-utils';

import { BaseContract, CONTRACT_WRAPPER_ERRORS } from '../base_contract';
import { classUtils } from '../common';

export class CommonMathMockContract extends BaseContract {
  public testMaxUInt256 = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testMaxUInt256(
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testSafePower = {
    async callAsync(
      a: BigNumber,
      pow: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testSafePower(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],a),
          this.formatABIDataItem(
          	'uint256',
          	[
          	],pow),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testScaleFactor = {
    async callAsync(
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testScaleFactor(
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testScale = {
    async callAsync(
      a: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testScale(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],a),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testDeScale = {
    async callAsync(
      a: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testDeScale(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],a),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testDivCeil = {
    async callAsync(
      a: BigNumber,
      b: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testDivCeil(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],a),
          this.formatABIDataItem(
          	'uint256',
          	[
          	],b),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testGetPartialAmount = {
    async callAsync(
      _principal: BigNumber,
      _numerator: BigNumber,
      _denominator: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testGetPartialAmount(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_principal),
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_numerator),
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_denominator),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
    },
  };
  public testCeilLog10 = {
    async callAsync(
      _value: BigNumber,
      defaultBlock?: any,
    ): Promise<BigNumber
  > {
      const self = this as CommonMathMockContract;
      const result = await promisify<BigNumber
  >(
        self.web3ContractInstance.methods.testCeilLog10(
          this.formatABIDataItem(
          	'uint256',
          	[
          	],_value),
        ).call,
        self.web3ContractInstance,
      )();
      return new BigNumber(result);
      
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
  static async deployed(web3: Web3, defaults: Tx): Promise<CommonMathMockContract> {
    const web3Utils = new Web3Utils(web3);
    const currentNetwork = await web3Utils.getNetworkIdAsync();
    const { abi, networks }: { abi: any[]; networks: any } = ContractArtifacts;
    const web3ContractInstance = new web3.eth.Contract(abi, networks[currentNetwork].address);

    return new CommonMathMockContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Tx,
  ): Promise<CommonMathMockContract> {
    const { abi }: { abi: any[] } = ContractArtifacts;
    const web3Utils = new Web3Utils(web3);
    const contractExists = await web3Utils.doesContractExistAtAddressAsync(address);
    const currentNetwork = await web3Utils.getNetworkIdAsync();

    if (contractExists) {
      const web3ContractInstance = new web3.eth.Contract(abi, address);

      return new CommonMathMockContract(web3ContractInstance, defaults);
    } else {
      throw new Error(
        CONTRACT_WRAPPER_ERRORS.CONTRACT_NOT_FOUND_ON_NETWORK('CommonMathMock', currentNetwork),
      );
    }
  }
  constructor(web3ContractInstance: Contract, defaults: Tx) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
  }
} // tslint:disable:max-file-line-count
