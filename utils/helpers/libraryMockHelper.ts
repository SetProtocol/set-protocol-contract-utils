import { Address } from 'set-protocol-utils';
import * as _ from 'lodash';
import {
  Bytes32LibraryMockContract,
  CommonValidationsLibraryMockContract,
  CommonMathMockContract,
  CompoundUtilsMockContract,
  ScaleValidationsMockContract
  // SetMathMockContract,
  // SetTokenLibraryMockContract,
  // SetUSDValuationMockContract,
} from '../contracts';
import { BigNumber } from 'bignumber.js';
import {
  getContractInstance,
  linkLibrariesToDeploy,
  importArtifactsFromSource,
  txnFrom
} from '../web3Helper';
import { ZERO } from '../constants';

const Bytes32Library = importArtifactsFromSource('Bytes32Library');
const Bytes32LibraryMock = importArtifactsFromSource('Bytes32LibraryMock');
const CommonMathMock = importArtifactsFromSource('CommonMathMock');
const CommonValidationsLibrary = importArtifactsFromSource('CommonValidationsLibrary');
const CommonValidationsLibraryMock = importArtifactsFromSource('CommonValidationsLibraryMock');
const CompoundUtilsMock = importArtifactsFromSource('CompoundUtilsMock');
const ScaleValidationsMock = importArtifactsFromSource('ScaleValidationsMock');
// const SetMathMock = importArtifactsFromSource('SetMathMock');
// const SetTokenLibrary = importArtifactsFromSource('SetTokenLibrary');
// const SetTokenLibraryMock = importArtifactsFromSource('SetTokenLibraryMock');
// const SetUSDValuationMock = importArtifactsFromSource('SetUSDValuationMock');


export class LibraryMockHelper {
  private _contractOwnerAddress: Address;

  constructor(contractOwnerAddress: Address) {
    this._contractOwnerAddress = contractOwnerAddress;
  }

  /* ============ Deployment ============ */

  public async deployCommonValidationsLibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<CommonValidationsLibraryMockContract> {
    await linkLibrariesToDeploy(CommonValidationsLibraryMock, [CommonValidationsLibrary], this._contractOwnerAddress);

    const commonValidationsMockContract = await CommonValidationsLibraryMock.new(txnFrom(from));

    return new CommonValidationsLibraryMockContract(
      getContractInstance(commonValidationsMockContract),
      txnFrom(from),
    );
  }

  public async deployBytes32LibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<Bytes32LibraryMockContract> {
    await linkLibrariesToDeploy(Bytes32LibraryMock, [Bytes32Library], this._contractOwnerAddress);
    const bytes32MockContract = await Bytes32LibraryMock.new(txnFrom(from));

    return new Bytes32LibraryMockContract(getContractInstance(bytes32MockContract), txnFrom(from));
  }

  public async deployCommonMathLibraryAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<CommonMathMockContract> {
    const truffleCommonMathLibrary = await CommonMathMock.new(txnFrom(from));

    return new CommonMathMockContract(
      getContractInstance(truffleCommonMathLibrary),
      txnFrom(from),
    );
  }

  public async deployCompoundUtilsLibraryMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<CompoundUtilsMockContract> {
    const compoundUtilsMockContract = await CompoundUtilsMock.new(txnFrom(from));

    return new CompoundUtilsMockContract(getContractInstance(compoundUtilsMockContract), txnFrom(from));
  }

  public async deployScaleValidationsMockAsync(
    from: Address = this._contractOwnerAddress
  ): Promise<ScaleValidationsMockContract> {
    const scaleValidationsMockContract = await ScaleValidationsMock.new(txnFrom(from));

    return new ScaleValidationsMockContract(getContractInstance(scaleValidationsMockContract), txnFrom(from));
  }

  // public async deploySetMathAsync(
  //   from: Address = this._contractOwnerAddress
  // ): Promise<SetMathMockContract> {
  //   const setMathMockContract = await SetMathMock.new(txnFrom(from));

  //   return new SetMathMockContract(
  //     getContractInstance(setMathMockContract),
  //     txnFrom(from),
  //   );
  // }

  // public async deploySetTokenLibraryAsync(
  //   from: Address = this._contractOwnerAddress
  // ): Promise<SetTokenLibraryMockContract> {
  //   await linkLibrariesToDeploy(SetTokenLibraryMock, [SetTokenLibrary], this._contractOwnerAddress);

  //   const setTokenLibraryMockContract = await SetTokenLibraryMock.new(txnFrom(from));

  //   return new SetTokenLibraryMockContract(
  //     getContractInstance(setTokenLibraryMockContract),
  //     txnFrom(from),
  //   );
  // }

  // public async deploySetUSDValuationMockAsync(
  //   from: Address = this._contractOwnerAddress
  // ): Promise<SetUSDValuationMockContract> {
  //   const setValuationMockContract = await SetUSDValuationMock.new(txnFrom(from));

  //   return new SetUSDValuationMockContract(
  //     getContractInstance(setValuationMockContract),
  //     txnFrom(from),
  //   );
  // }

  public ceilLog10(
    value: BigNumber
  ): BigNumber {
    const valueNum = value.toNumber();
    if (valueNum == 1) return ZERO;

    let x = valueNum - 1;

    let result = 0;

    if (x >= 10000000000000000000000000000000000000000000000000000000000000000) {
      x /= 10000000000000000000000000000000000000000000000000000000000000000;
      result += 64;
    }
    if (x >= 100000000000000000000000000000000) {
      x /= 100000000000000000000000000000000;
      result += 32;
    }
    if (x >= 10000000000000000) {
      x /= 10000000000000000;
      result += 16;
    }
    if (x >= 100000000) {
      x /= 100000000;
      result += 8;
    }
    if (x >= 10000) {
      x /= 10000;
      result += 4;
    }
    if (x >= 100) {
      x /= 100;
      result += 2;
    }
    if (x >= 10) {
      x /= 10;
      result += 1;
    }

    return new BigNumber(result + 1);
  }
}
