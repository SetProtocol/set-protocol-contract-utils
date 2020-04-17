import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class IPerformanceFeeCalculatorContract extends BaseContract {
    feeState: {
        callAsync(_rebalancingSetToken: string, defaultBlock?: any): Promise<{
            profitFeePeriod: BigNumber;
            highWatermarkResetPeriod: BigNumber;
            profitFeePercentage: BigNumber;
            streamingFeePercentage: BigNumber;
            highWatermark: BigNumber;
            lastProfitFeeTimestamp: BigNumber;
            lastStreamingFeeTimestamp: BigNumber;
        }>;
    };
    getCalculatedFees: {
        callAsync(_setAddress: string, defaultBlock?: any): Promise<[BigNumber, BigNumber]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<IPerformanceFeeCalculatorContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<IPerformanceFeeCalculatorContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
