import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class ERC20ViewerContract extends BaseContract {
    batchFetchBalancesOf: {
        sendTransactionAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], _owner: string, txData?: Tx): string;
        callAsync(_tokenAddresses: string[], _owner: string, txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchUsersBalances: {
        sendTransactionAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): string;
        callAsync(_tokenAddresses: string[], _tokenOwners: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    batchFetchSupplies: {
        sendTransactionAsync(_tokenAddresses: string[], txData?: Tx): Promise<string>;
        estimateGasAsync(_tokenAddresses: string[], txData?: Tx): Promise<number>;
        getABIEncodedTransactionData(_tokenAddresses: string[], txData?: Tx): string;
        callAsync(_tokenAddresses: string[], txData?: Tx): Promise<BigNumber[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<ERC20ViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<ERC20ViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
