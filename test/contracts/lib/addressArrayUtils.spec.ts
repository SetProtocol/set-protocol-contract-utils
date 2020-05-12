require('module-alias/register');

import * as _ from 'lodash';
import * as chai from 'chai';
import { Address } from 'set-protocol-utils';


import ChaiSetup from '@utils/chaiSetup';
import { BigNumberSetup } from '@utils/bigNumberSetup';
import { AddressArrayUtilsMockContract } from '@utils/contracts';

import { LibraryMockHelper } from '@utils/helpers/libraryMockHelper';

BigNumberSetup.configure();
ChaiSetup.configure();
const { expect } = chai;


contract('AddressArrayUtils', accounts => {
  const [ownerAccount] = accounts;
  const libraryMockHelper = new LibraryMockHelper(ownerAccount);

  let addressArrayUtils: AddressArrayUtilsMockContract;

  beforeEach(async () => {
    addressArrayUtils = await libraryMockHelper.deployAddressArrayUtilsMockAsync();
  });

  describe('#testSort', async () => {
    let subjectToSort: Address[];

    beforeEach(async () => {
      subjectToSort = [
        '0x6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb',
        '0xE36Ea790bc9d7AB70C55260C66D52b1eca985f84',
        '0x5409ED021D9299bf6814279A6A1411A7e866A631',
      ];
    });

    async function subject(): Promise<string[]> {
      return addressArrayUtils.testSort.callAsync(subjectToSort);
    }

    it('returns the sorted items', async () => {
      const sortedResult = await subject();

      const expectedResult = _.sortBy(subjectToSort);

      expect(JSON.stringify(sortedResult)).to.equal(JSON.stringify(expectedResult));
    });

    describe('when the input is empty', async () => {
      beforeEach(async () => {
        subjectToSort = [];
      });

      it('returns an empty array', async () => {
        const sortedResult = await subject();
        expect(JSON.stringify(sortedResult)).to.equal(JSON.stringify([]));
      });
    });
  });
});
