import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class TradingPoolViewerContract extends BaseContract {
    fetchNewTradingPoolDetails: {
        callAsync(_tradingPool: string, defaultBlock?: any): Promise<[{
            trader: string;
            allocator: string;
            currentAllocation: BigNumber;
            newEntryFee: BigNumber;
            feeUpdateTimestamp: BigNumber;
        }, {
            manager: string;
            feeRecipient: string;
            currentSet: string;
            unitShares: BigNumber;
            naturalUnit: BigNumber;
            rebalanceInterval: BigNumber;
            entryFee: BigNumber;
            rebalanceFee: BigNumber;
            lastRebalanceTimestamp: BigNumber;
            rebalanceState: BigNumber;
            name: string;
            symbol: string;
        }, {
            components: string[];
            units: BigNumber[];
            naturalUnit: BigNumber;
            name: string;
            symbol: string;
        }]>;
    };
    fetchNewTradingPoolV2Details: {
        callAsync(_tradingPool: string, defaultBlock?: any): Promise<[{
            trader: string;
            allocator: string;
            currentAllocation: BigNumber;
            newEntryFee: BigNumber;
            feeUpdateTimestamp: BigNumber;
        }, {
            manager: string;
            feeRecipient: string;
            currentSet: string;
            unitShares: BigNumber;
            naturalUnit: BigNumber;
            rebalanceInterval: BigNumber;
            entryFee: BigNumber;
            rebalanceFee: BigNumber;
            lastRebalanceTimestamp: BigNumber;
            rebalanceState: BigNumber;
            name: string;
            symbol: string;
        }, {
            profitFeePeriod: BigNumber;
            highWatermarkResetPeriod: BigNumber;
            profitFeePercentage: BigNumber;
            streamingFeePercentage: BigNumber;
            highWatermark: BigNumber;
            lastProfitFeeTimestamp: BigNumber;
            lastStreamingFeeTimestamp: BigNumber;
        }, {
            components: string[];
            units: BigNumber[];
            naturalUnit: BigNumber;
            name: string;
            symbol: string;
        }, string]>;
    };
    fetchTradingPoolRebalanceDetails: {
        callAsync(_tradingPool: string, defaultBlock?: any): Promise<[{
            trader: string;
            allocator: string;
            currentAllocation: BigNumber;
            newEntryFee: BigNumber;
            feeUpdateTimestamp: BigNumber;
        }, {
            rebalanceStartTime: BigNumber;
            timeToPivot: BigNumber;
            startPrice: BigNumber;
            endPrice: BigNumber;
            startingCurrentSets: BigNumber;
            remainingCurrentSets: BigNumber;
            minimumBid: BigNumber;
            rebalanceState: BigNumber;
            nextSet: string;
            liquidator: string;
        }, {
            components: string[];
            units: BigNumber[];
            naturalUnit: BigNumber;
            name: string;
            symbol: string;
        }]>;
    };
    batchFetchTradingPoolOperator: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<string[]>;
    };
    batchFetchTradingPoolEntryFees: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    batchFetchTradingPoolRebalanceFees: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    batchFetchTradingPoolAccumulation: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<[BigNumber[], BigNumber[]]>;
    };
    batchFetchTradingPoolFeeState: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<{
            profitFeePeriod: BigNumber;
            highWatermarkResetPeriod: BigNumber;
            profitFeePercentage: BigNumber;
            streamingFeePercentage: BigNumber;
            highWatermark: BigNumber;
            lastProfitFeeTimestamp: BigNumber;
            lastStreamingFeeTimestamp: BigNumber;
        }[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<TradingPoolViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<TradingPoolViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
