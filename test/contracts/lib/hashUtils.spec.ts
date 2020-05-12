require('module-alias/register');

import * as _ from 'lodash';
import * as chai from 'chai';
import { Address } from 'set-protocol-utils';


import ChaiSetup from '@utils/chaiSetup';
import { BigNumberSetup } from '@utils/bigNumberSetup';
import { HashUtilsMockContract } from '@utils/contracts';
import { getWeb3 } from '@utils/web3Helper';

import { LibraryMockHelper } from '@utils/helpers/libraryMockHelper';

BigNumberSetup.configure();
ChaiSetup.configure();
const { expect } = chai;
const web3 = getWeb3();

contract('HashUtils', accounts => {
  const [ownerAccount] = accounts;
  const libraryMockHelper = new LibraryMockHelper(ownerAccount);

  let hashUtils: HashUtilsMockContract;

  beforeEach(async () => {
    hashUtils = await libraryMockHelper.deployHashUtilsMockAsync();
  });

  describe('#testSortHash', async () => {
    let subjectAddressArray: Address[];

    beforeEach(async () => {
      subjectAddressArray = [
        '0xE36Ea790bc9d7AB70C55260C66D52b1eca985f84',
        '0x5409ED021D9299bf6814279A6A1411A7e866A631',
      ];
    });

    async function subject(): Promise<string> {
      return hashUtils.testSortHash.callAsync(subjectAddressArray);
    }

    it('returns the correct hash', async () => {
      const result = await subject();

      const sorted = _.sortBy(subjectAddressArray);
      const expected = web3.utils.soliditySha3({ t: 'address', v: sorted });
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
    });
  });
});
