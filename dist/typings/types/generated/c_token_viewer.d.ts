import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class CTokenViewerContract extends BaseContract {
    batchFetchExchangeRateStored: {
        callAsync(_cTokenAddresses: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<CTokenViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<CTokenViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
