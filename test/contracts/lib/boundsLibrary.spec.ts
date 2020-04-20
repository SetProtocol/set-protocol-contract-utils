require('module-alias/register');

import * as chai from 'chai';
import { BigNumber } from 'bignumber.js';
import { Address } from 'set-protocol-utils';

import { ether } from '@utils/units';
import { expectRevertError, expectNoRevertError } from '@utils/tokenAssertions';

import ChaiSetup from '@utils/chaiSetup';
import { BigNumberSetup } from '@utils/bigNumberSetup';
import { BoundsLibraryMockContract } from '@utils/contracts';

import { LibraryMockHelper } from '@utils/helpers/libraryMockHelper';

BigNumberSetup.configure();
ChaiSetup.configure();
const { expect } = chai;


contract('BoundsLibrary', accounts => {
  const [ownerAccount] = accounts;
  const libraryMockHelper = new LibraryMockHelper(ownerAccount);

  const minBound = ether(.25);
  const maxBound = ether(.75);

  let boundsLibrary: BoundsLibraryMockContract;

  beforeEach(async () => {
    boundsLibrary = await libraryMockHelper.deployBoundsLibraryMockAsync(minBound, maxBound);
  });

  describe('#testIsValid', async () => {
    let subjectBounds: any;
    const caller: Address = ownerAccount;

    beforeEach(async () => {
      subjectBounds = {
        min: ether(.4),
        max: ether(.6),
      };
    });

    async function subject(): Promise<void> {
      return boundsLibrary.testIsValid.callAsync(
        subjectBounds,
        { from: caller },
      );
    }

    it('returns true', async () => {
      await expectNoRevertError(subject());
    });

    describe('when the max is less than the min', async () => {
      beforeEach(async () => {
        subjectBounds = {
          min: ether(.6),
          max: ether(.4),
        };
      });

      it('returns false', async () => {
        await expectRevertError(subject());
      });
    });
  });

  describe('#testIsWithin', async () => {
    let subjectValue: BigNumber;
    const caller: Address = ownerAccount;

    beforeEach(async () => {
      subjectValue = ether(.5);
    });

    async function subject(): Promise<boolean> {
      return boundsLibrary.testIsWithin.callAsync(
        subjectValue,
        { from: caller },
      );
    }

    it('returns true', async () => {
      const isWithin = await subject();

      expect(isWithin).to.be.true;
    });

    describe('when the value is outside the bounds', async () => {
      beforeEach(async () => {
        subjectValue = ether(.2);
      });

      it('returns false', async () => {
        const isWithin = await subject();

        expect(isWithin).to.be.false;
      });
    });
  });

  describe('#testIsOutside', async () => {
    let subjectValue: BigNumber;
    const caller: Address = ownerAccount;

    beforeEach(async () => {
      subjectValue = ether(.2);
    });

    async function subject(): Promise<boolean> {
      return boundsLibrary.testIsOutside.callAsync(
        subjectValue,
        { from: caller },
      );
    }

    it('returns true', async () => {
      const isWithin = await subject();

      expect(isWithin).to.be.true;
    });

    describe('when the value is inside the bounds', async () => {
      beforeEach(async () => {
        subjectValue = ether(.5);
      });

      it('returns false', async () => {
        const isWithin = await subject();

        expect(isWithin).to.be.false;
      });
    });
  });
});
