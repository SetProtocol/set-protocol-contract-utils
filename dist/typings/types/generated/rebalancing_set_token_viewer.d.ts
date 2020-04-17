import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class RebalancingSetTokenViewerContract extends BaseContract {
    fetchRebalanceProposalStateAsync: {
        sendTransactionAsync(_rebalancingSetToken: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_rebalancingSetToken: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_rebalancingSetToken: string, txData?: Tx): string;
        callAsync(_rebalancingSetToken: string, txData?: Tx): Promise<[BigNumber, string[], BigNumber[]]>;
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
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<RebalancingSetTokenViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<RebalancingSetTokenViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
