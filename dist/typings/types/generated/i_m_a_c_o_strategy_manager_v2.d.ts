import Web3 from 'web3';
import Contract from "web3/eth/contract";
import { Tx } from "web3/eth/types";
import { BigNumber } from 'set-protocol-utils';
import { BaseContract } from '../base_contract';
export declare class IMACOStrategyManagerV2Contract extends BaseContract {
    crossoverConfirmationMinTime: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    crossoverConfirmationMaxTime: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    lastCrossoverConfirmationTimestamp: {
        callAsync(defaultBlock?: any): Promise<BigNumber>;
    };
    deploy(data: string, args: any[]): Promise<any>;
    static deployed(web3: Web3, defaults: Tx): Promise<IMACOStrategyManagerV2Contract>;
    static at(address: string, web3: Web3, defaults: Tx): Promise<IMACOStrategyManagerV2Contract>;
    constructor(web3ContractInstance: Contract, defaults: Tx);
}
