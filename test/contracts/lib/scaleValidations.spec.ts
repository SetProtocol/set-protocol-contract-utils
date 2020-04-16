require('module-alias/register');

import { BigNumber } from 'bignumber.js';
import { Address } from 'set-protocol-utils';

import { ether } from '@utils/units';

import ChaiSetup from '@utils/chaiSetup';
import { BigNumberSetup } from '@utils/bigNumberSetup';
import { expectRevertError, expectNoRevertError } from '@utils/tokenAssertions';
import { ScaleValidationsMockContract } from '@utils/contracts';

import { LibraryMockHelper } from '@utils/helpers/libraryMockHelper';

BigNumberSetup.configure();
ChaiSetup.configure();

contract('ScaleValidations', accounts => {
  const [ownerAccount] = accounts;
  const libraryMockHelper = new LibraryMockHelper(ownerAccount);

  let scaleValidationsLibrary: ScaleValidationsMockContract;

  beforeEach(async () => {
    scaleValidationsLibrary = await libraryMockHelper.deployScaleValidationsMockAsync();
  });

  describe('#validateLessThanEqualOneHundredPercent', async () => {
    const caller: Address = ownerAccount;
    let subjectValue: BigNumber;

    beforeEach(async () => {
      subjectValue = ether(1).add(1);
    });

    async function subject(): Promise<void> {
      return scaleValidationsLibrary.validateLessThanEqualOneHundredPercent.callAsync(
        subjectValue,
        { from: caller },
      );
    }

    it('reverts', async () => {
      await expectRevertError(subject());
    });

    describe('when the value is less than 100%', async () => {
      beforeEach(async () => {
        subjectValue = ether(1);
      });

      it('returns the correct value', async () => {
        await expectNoRevertError(subject());
      });
    });
  });

  describe('#validateMultipleOfBasisPoint', async () => {
    const caller: Address = ownerAccount;
    let subjectValue: BigNumber;

    beforeEach(async () => {
      subjectValue = ether(.1).add(1);
    });

    async function subject(): Promise<void> {
      return scaleValidationsLibrary.validateMultipleOfBasisPoint.callAsync(
        subjectValue,
        { from: caller },
      );
    }

    it('reverts', async () => {
      await expectRevertError(subject());
    });

    describe('when the value is a multiple of a basis point', async () => {
      beforeEach(async () => {
        subjectValue = ether(.1);
      });

      it('returns the correct value', async () => {
        await expectNoRevertError(subject());
      });
    });
  });
});