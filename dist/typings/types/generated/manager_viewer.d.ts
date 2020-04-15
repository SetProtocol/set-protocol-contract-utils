import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class ManagerViewerContract extends BaseContract {
    batchFetchMACOV2CrossoverTimestamp: {
        callAsync(_managers: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    batchFetchAssetPairCrossoverTimestamp: {
        callAsync(_managers: string[], defaultBlock?: any): Promise<BigNumber[]>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<ManagerViewerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<ManagerViewerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
