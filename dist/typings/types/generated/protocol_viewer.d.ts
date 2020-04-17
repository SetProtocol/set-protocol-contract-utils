import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class ProtocolViewerContract extends BaseContract {
    batchFetchTradingPoolRebalanceFees: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    batchFetchTradingPoolAccumulation: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<[BigNumber[], BigNumber[]]>;
    };
    batchFetchUsersBalances: {
        sendTransactionAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): string;
        callAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchTradingPoolEntryFees: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    batchFetchMACOV2CrossoverTimestamp: {
        callAsync(_managers: string[], defaultBlock?: any): Promise<BigNumber[]>;
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
    batchFetchTradingPoolOperator: {
        callAsync(_tradingPools: string[], defaultBlock?: any): Promise<string[]>;
    };
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
    fetchRebalanceAuctionStateAsync: {
        sendTransactionAsync(_rebalancingSetToken: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_rebalancingSetToken: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_rebalancingSetToken: string, txData?: Tx): string;
        callAsync(_rebalancingSetToken: string, txData?: Tx): Promise<[BigNumber, BigNumber[]]>;
    };
    batchFetchRebalanceStateAsync: {
        sendTransactionAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_rebalancingSetTokens: string[], txData?: Tx): string;
        callAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchUnitSharesAsync: {
        sendTransactionAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_rebalancingSetTokens: string[], txData?: Tx): string;
        callAsync(_rebalancingSetTokens: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchAssetPairCrossoverTimestamp: {
        callAsync(_managers: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    fetchRebalanceProposalStateAsync: {
        sendTransactionAsync(_rebalancingSetToken: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_rebalancingSetToken: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_rebalancingSetToken: string, txData?: Tx): string;
        callAsync(_rebalancingSetToken: string, txData?: Tx): Promise<[BigNumber, string[], BigNumber[]]>;
    };
    batchFetchExchangeRateStored: {
        callAsync(_cTokenAddresses: string[], defaultBlock?: any): Promise<BigNumber[]>;
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
    batchFetchSupplies: {
        sendTransactionAsync(_tokenAddresses: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], txData?: Tx): string;
        callAsync(_tokenAddresses: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchBalancesOf: {
        sendTransactionAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], _owner: string, txData?: Tx): string;
        callAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<BigNumber[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<ProtocolViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<ProtocolViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
