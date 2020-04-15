import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class ILiquidatorContract extends BaseContract {
    startRebalance: {
        sendTransactionAsync(_currentSet: string, _nextSet: string, _startingCurrentSetQuantity: BigNumber, _liquidatorData: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_currentSet: string, _nextSet: string, _startingCurrentSetQuantity: BigNumber, _liquidatorData: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_currentSet: string, _nextSet: string, _startingCurrentSetQuantity: BigNumber, _liquidatorData: string, txData?: Tx): string;
        callAsync(_currentSet: string, _nextSet: string, _startingCurrentSetQuantity: BigNumber, _liquidatorData: string, txData?: Tx): Promise<void>;
    };
    getBidPrice: {
        callAsync(_set: string, _quantity: BigNumber, defaultBlock?: any): Promise<{
            addresses: string[];
            inflow: BigNumber[];
            outflow: BigNumber[];
        }>;
    };
    placeBid: {
        sendTransactionAsync(_quantity: BigNumber, txData?: Tx): Promise<string>;
        estimateGasAsync(_quantity: BigNumber, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_quantity: BigNumber, txData?: Tx): string;
        callAsync(_quantity: BigNumber, txData?: Tx): Promise<{
            addresses: string[];
            inflow: BigNumber[];
            outflow: BigNumber[];
        }>;
    };
    settleRebalance: {
        sendTransactionAsync(txData?: Tx): Promise<string>;
        estimateGasAsync(txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(txData?: Tx): string;
        callAsync(txData?: Tx): Promise<void>;
    };
    endFailedRebalance: {
        sendTransactionAsync(txData?: Tx): Promise<string>;
        estimateGasAsync(txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(txData?: Tx): string;
        callAsync(txData?: Tx): Promise<void>;
    };
    auctionPriceParameters: {
        callAsync(_set: string, defaultBlock?: any): Promise<{
            auctionStartTime: BigNumber;
            auctionTimeToPivot: BigNumber;
            auctionStartPrice: BigNumber;
            auctionPivotPrice: BigNumber;
        }>;
    };
    hasRebalanceFailed: {
        callAsync(_set: string, defaultBlock?: any): Promise<boolean>;
    };
    minimumBid: {
        callAsync(_set: string, defaultBlock?: any): Promise<BigNumber>;
    };
    startingCurrentSets: {
        callAsync(_set: string, defaultBlock?: any): Promise<BigNumber>;
    };
    remainingCurrentSets: {
        callAsync(_set: string, defaultBlock?: any): Promise<BigNumber>;
    };
    getCombinedCurrentSetUnits: {
        callAsync(_set: string, defaultBlock?: any): Promise<BigNumber[]>;
    };
    getCombinedNextSetUnits: {
        callAsync(_set: string, defaultBlock?: any): Promise<BigNumber[]>;
    };
    getCombinedTokenArray: {
        callAsync(_set: string, defaultBlock?: any): Promise<string[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<ILiquidatorContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<ILiquidatorContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
