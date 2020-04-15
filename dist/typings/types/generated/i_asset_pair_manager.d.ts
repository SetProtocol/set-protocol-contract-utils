import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class IAssetPairManagerContract extends BaseContract {
    signalConfirmationMinTime: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    signalConfirmationMaxTime: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    recentInitialProposeTimestamp: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<IAssetPairManagerContract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<IAssetPairManagerContract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
