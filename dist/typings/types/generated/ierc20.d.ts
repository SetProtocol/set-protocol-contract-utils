import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class IERC20Contract extends BaseContract {
    balanceOf: {
        callAsync(_owner: string, defaultBlock?: any): Promise<BigNumber>;
    };
    allowance: {
        callAsync(_owner: string, _spender: string, defaultBlock?: any): Promise<BigNumber>;
    };
    transfer: {
        sendTransactionAsync(_to: string, _quantity: BigNumber, txData?: Tx): Promise<string>;
        estimateGasAsync(_to: string, _quantity: BigNumber, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_to: string, _quantity: BigNumber, txData?: Tx): string;
        callAsync(_to: string, _quantity: BigNumber, txData?: Tx): Promise<void>;
    };
    transferFrom: {
        sendTransactionAsync(_from: string, _to: string, _quantity: BigNumber, txData?: Tx): Promise<string>;
        estimateGasAsync(_from: string, _to: string, _quantity: BigNumber, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_from: string, _to: string, _quantity: BigNumber, txData?: Tx): string;
        callAsync(_from: string, _to: string, _quantity: BigNumber, txData?: Tx): Promise<void>;
    };
    approve: {
        sendTransactionAsync(_spender: string, _quantity: BigNumber, txData?: Tx): Promise<string>;
        estimateGasAsync(_spender: string, _quantity: BigNumber, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_spender: string, _quantity: BigNumber, txData?: Tx): string;
        callAsync(_spender: string, _quantity: BigNumber, txData?: Tx): Promise<boolean>;
    };
    totalSupply: {
        sendTransactionAsync(txData?: Tx): Promise<string>;
        estimateGasAsync(txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(txData?: Tx): string;
        callAsync(txData?: Tx): Promise<BigNumber>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<IERC20Contract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<IERC20Contract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
