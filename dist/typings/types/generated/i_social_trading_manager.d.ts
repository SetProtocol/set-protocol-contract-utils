import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class ISocialTradingManagerContract extends BaseContract {
    pools: {
        callAsync(_tradingPool: string, defaultBlock?: any): Promise<{
            trader: string;
            allocator: string;
            currentAllocation: BigNumber;
            newEntryFee: BigNumber;
            feeUpdateTimestamp: BigNumber;
        }>;
    };
    createTradingPool: {
        sendTransactionAsync(_tradingPairAllocator: string, _startingBaseAssetAllocation: BigNumber, _startingUSDValue: BigNumber, _name: string, _symbol: string, _rebalancingSetCallData: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tradingPairAllocator: string, _startingBaseAssetAllocation: BigNumber, _startingUSDValue: BigNumber, _name: string, _symbol: string, _rebalancingSetCallData: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tradingPairAllocator: string, _startingBaseAssetAllocation: BigNumber, _startingUSDValue: BigNumber, _name: string, _symbol: string, _rebalancingSetCallData: string, txData?: Tx): string;
        callAsync(_tradingPairAllocator: string, _startingBaseAssetAllocation: BigNumber, _startingUSDValue: BigNumber, _name: string, _symbol: string, _rebalancingSetCallData: string, txData?: Tx): Promise<void>;
    };
    updateAllocation: {
        sendTransactionAsync(_tradingPool: string, _newAllocation: BigNumber, _liquidatorData: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tradingPool: string, _newAllocation: BigNumber, _liquidatorData: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tradingPool: string, _newAllocation: BigNumber, _liquidatorData: string, txData?: Tx): string;
        callAsync(_tradingPool: string, _newAllocation: BigNumber, _liquidatorData: string, txData?: Tx): Promise<void>;
    };
    setTrader: {
        sendTransactionAsync(_tradingPool: string, _newTrader: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tradingPool: string, _newTrader: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tradingPool: string, _newTrader: string, txData?: Tx): string;
        callAsync(_tradingPool: string, _newTrader: string, txData?: Tx): Promise<void>;
    };
    setLiquidator: {
        sendTransactionAsync(_tradingPool: string, _newLiquidator: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tradingPool: string, _newLiquidator: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tradingPool: string, _newLiquidator: string, txData?: Tx): string;
        callAsync(_tradingPool: string, _newLiquidator: string, txData?: Tx): Promise<void>;
    };
    setFeeRecipient: {
        sendTransactionAsync(_tradingPool: string, _newFeeRecipient: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tradingPool: string, _newFeeRecipient: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tradingPool: string, _newFeeRecipient: string, txData?: Tx): string;
        callAsync(_tradingPool: string, _newFeeRecipient: string, txData?: Tx): Promise<void>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<ISocialTradingManagerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<ISocialTradingManagerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
