"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRebalancingSetToken = {
    "contractName": "IRebalancingSetToken",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "auctionLibrary",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "proposalStartTime",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "lastRebalanceTimestamp",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rebalanceInterval",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rebalanceState",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "startingCurrentSetAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_nextSet",
                    "type": "address"
                },
                {
                    "name": "_auctionLibrary",
                    "type": "address"
                },
                {
                    "name": "_auctionTimeToPivot",
                    "type": "uint256"
                },
                {
                    "name": "_auctionStartPrice",
                    "type": "uint256"
                },
                {
                    "name": "_auctionPivotPrice",
                    "type": "uint256"
                }
            ],
            "name": "propose",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "naturalUnit",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "currentSet",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nextSet",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "unitShares",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "placeBid",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCombinedTokenArrayLength",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCombinedTokenArray",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getFailedAuctionWithdrawComponents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuctionPriceParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBiddingParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "getBidPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"unitShares\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceInterval\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"naturalUnit\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startingCurrentSetAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCombinedTokenArrayLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_nextSet\",\"type\":\"address\"},{\"name\":\"_auctionLibrary\",\"type\":\"address\"},{\"name\":\"_auctionTimeToPivot\",\"type\":\"uint256\"},{\"name\":\"_auctionStartPrice\",\"type\":\"uint256\"},{\"name\":\"_auctionPivotPrice\",\"type\":\"uint256\"}],\"name\":\"propose\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCombinedTokenArray\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"auctionLibrary\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"placeBid\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"},{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"getBidPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuctionPriceParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBiddingParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"proposalStartTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastRebalanceTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getFailedAuctionWithdrawComponents\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceState\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * The IRebalancingSetToken interface provides a light-weight, structured way to interact with the RebalancingSetToken contract from another contract.\",\"methods\":{\"balanceOf(address)\":{\"params\":{\"owner\":\"The address to query the balance of.\"},\"return\":\"A uint256 representing the amount owned by the passed address.\"},\"currentSet()\":{\"return\":\"A address representing the base SetToken\"},\"nextSet()\":{\"return\":\"address    Address representing the base SetToken\"},\"propose(address,address,uint256,uint256,uint256)\":{\"params\":{\"_auctionLibrary\":\"The library used to calculate the Dutch Auction price\",\"_auctionPivotPrice\":\"The price at which the price curve switches from linear to exponential\",\"_auctionStartPrice\":\"The price to start the auction at\",\"_auctionTimeToPivot\":\"The amount of time for the auction to go ffrom start to pivot price\",\"_nextSet\":\"The Set to rebalance into\"}}},\"title\":\"IRebalancingSetToken\"},\"userdoc\":{\"methods\":{\"balanceOf(address)\":{\"notice\":\"Gets the balance of the specified address.\"},\"currentSet()\":{\"notice\":\"Returns the address of the current base SetToken with the current allocation\"},\"nextSet()\":{\"notice\":\"Returns the address of the next base SetToken with the post auction allocation\"},\"propose(address,address,uint256,uint256,uint256)\":{\"notice\":\"Function used to set the terms of the next rebalance and start the proposal period\"}}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":\"IRebalancingSetToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { RebalancingLibrary } from \"../lib/RebalancingLibrary.sol\";\n\n/**\n * @title IRebalancingSetToken\n * @author Set Protocol\n *\n * The IRebalancingSetToken interface provides a light-weight, structured way to interact with the\n * RebalancingSetToken contract from another contract.\n */\n\ninterface IRebalancingSetToken {\n\n    /*\n     * Get the auction library contract used for the current rebalance\n     *\n     * @return address    Address of auction library used in the upcoming auction\n     */\n    function auctionLibrary()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get totalSupply of Rebalancing Set\n     *\n     * @return  totalSupply\n     */\n    function totalSupply()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get proposalTimeStamp of Rebalancing Set\n     *\n     * @return  proposalTimeStamp\n     */\n    function proposalStartTime()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get lastRebalanceTimestamp of Rebalancing Set\n     *\n     * @return  lastRebalanceTimestamp\n     */\n    function lastRebalanceTimestamp()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceInterval of Rebalancing Set\n     *\n     * @return  rebalanceInterval\n     */\n    function rebalanceInterval()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceState of Rebalancing Set\n     *\n     * @return RebalancingLibrary.State    Current rebalance state of the RebalancingSetToken\n     */\n    function rebalanceState()\n        external\n        view\n        returns (RebalancingLibrary.State);\n\n    /*\n     * Get the starting amount of current SetToken for the current auction\n     *\n     * @return  rebalanceState\n     */\n    function startingCurrentSetAmount()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Gets the balance of the specified address.\n     *\n     * @param owner      The address to query the balance of.\n     * @return           A uint256 representing the amount owned by the passed address.\n     */\n    function balanceOf(\n        address owner\n    )\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Function used to set the terms of the next rebalance and start the proposal period\n     *\n     * @param _nextSet                      The Set to rebalance into\n     * @param _auctionLibrary               The library used to calculate the Dutch Auction price\n     * @param _auctionTimeToPivot           The amount of time for the auction to go ffrom start to pivot price\n     * @param _auctionStartPrice            The price to start the auction at\n     * @param _auctionPivotPrice            The price at which the price curve switches from linear to exponential\n     */\n    function propose(\n        address _nextSet,\n        address _auctionLibrary,\n        uint256 _auctionTimeToPivot,\n        uint256 _auctionStartPrice,\n        uint256 _auctionPivotPrice\n    )\n        external;\n\n    /*\n     * Get natural unit of Set\n     *\n     * @return  uint256       Natural unit of Set\n     */\n    function naturalUnit()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Returns the address of the current base SetToken with the current allocation\n     *\n     * @return           A address representing the base SetToken\n     */\n    function currentSet()\n        external\n        view\n        returns (address);\n\n    /**\n     * Returns the address of the next base SetToken with the post auction allocation\n     *\n     * @return  address    Address representing the base SetToken\n     */\n    function nextSet()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get the unit shares of the rebalancing Set\n     *\n     * @return  unitShares       Unit Shares of the base Set\n     */\n    function unitShares()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Burn set token for given address.\n     * Can only be called by authorized contracts.\n     *\n     * @param  _from        The address of the redeeming account\n     * @param  _quantity    The number of sets to burn from redeemer\n     */\n    function burn(\n        address _from,\n        uint256 _quantity\n    )\n        external;\n\n    /*\n     * Place bid during rebalance auction. Can only be called by Core.\n     *\n     * @param _quantity                 The amount of currentSet to be rebalanced\n     * @return combinedTokenArray       Array of token addresses invovled in rebalancing\n     * @return inflowUnitArray          Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray         Array of amount of tokens taken out of system in bid\n     */\n    function placeBid(\n        uint256 _quantity\n    )\n        external\n        returns (address[] memory, uint256[] memory, uint256[] memory);\n\n    /*\n     * Get combinedTokenArray of Rebalancing Set\n     *\n     * @return  combinedTokenArray\n     */\n    function getCombinedTokenArrayLength()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get combinedTokenArray of Rebalancing Set\n     *\n     * @return  combinedTokenArray\n     */\n    function getCombinedTokenArray()\n        external\n        view\n        returns (address[] memory);\n\n    /*\n     * Get failedAuctionWithdrawComponents of Rebalancing Set\n     *\n     * @return  failedAuctionWithdrawComponents\n     */\n    function getFailedAuctionWithdrawComponents()\n        external\n        view\n        returns (address[] memory);\n\n    /*\n     * Get auctionPriceParameters for current auction\n     *\n     * @return uint256[4]    AuctionPriceParameters for current rebalance auction\n     */\n    function getAuctionPriceParameters()\n        external\n        view\n        returns (uint256[] memory);\n\n    /*\n     * Get biddingParameters for current auction\n     *\n     * @return uint256[2]    BiddingParameters for current rebalance auction\n     */\n    function getBiddingParameters()\n        external\n        view\n        returns (uint256[] memory);\n\n    /*\n     * Get token inflows and outflows required for bid. Also the amount of Rebalancing\n     * Sets that would be generated.\n     *\n     * @param _quantity               The amount of currentSet to be rebalanced\n     * @return inflowUnitArray        Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray       Array of amount of tokens taken out of system in bid\n     */\n    function getBidPrice(\n        uint256 _quantity\n    )\n        external\n        view\n        returns (uint256[] memory, uint256[] memory);\n\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol",
        "exportedSymbols": {
            "IRebalancingSetToken": [
                1951
            ]
        },
        "id": 1952,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1811,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:16"
            },
            {
                "id": 1812,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:16"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1814,
                "nodeType": "ImportDirective",
                "scope": 1952,
                "sourceUnit": 2510,
                "src": "657:67:16",
                "symbolAliases": [
                    {
                        "foreign": 1813,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetToken\n@author Set Protocol\n * The IRebalancingSetToken interface provides a light-weight, structured way to interact with the\nRebalancingSetToken contract from another contract.",
                "fullyImplemented": false,
                "id": 1951,
                "linearizedBaseContracts": [
                    1951
                ],
                "name": "IRebalancingSetToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1819,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "auctionLibrary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1815,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1183:2:16"
                        },
                        "returnParameters": {
                            "id": 1818,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1817,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1819,
                                    "src": "1233:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1816,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1233:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1232:9:16"
                        },
                        "scope": 1951,
                        "src": "1160:82:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1824,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1820,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1360:2:16"
                        },
                        "returnParameters": {
                            "id": 1823,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1822,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1824,
                                    "src": "1410:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1821,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1410:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1409:9:16"
                        },
                        "scope": 1951,
                        "src": "1340:79:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1829,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "proposalStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1825,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1555:2:16"
                        },
                        "returnParameters": {
                            "id": 1828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1827,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1829,
                                    "src": "1605:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1826,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1605:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1604:9:16"
                        },
                        "scope": 1951,
                        "src": "1529:85:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1834,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1830,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1765:2:16"
                        },
                        "returnParameters": {
                            "id": 1833,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1832,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1834,
                                    "src": "1815:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:9:16"
                        },
                        "scope": 1951,
                        "src": "1734:90:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1839,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1835,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1960:2:16"
                        },
                        "returnParameters": {
                            "id": 1838,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1837,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1839,
                                    "src": "2010:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1836,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2010:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2009:9:16"
                        },
                        "scope": 1951,
                        "src": "1934:85:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1844,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1840,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2209:2:16"
                        },
                        "returnParameters": {
                            "id": 1843,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1842,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1844,
                                    "src": "2259:24:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1841,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2259:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2258:26:16"
                        },
                        "scope": 1951,
                        "src": "2186:99:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1849,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1845,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2452:2:16"
                        },
                        "returnParameters": {
                            "id": 1848,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1847,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1849,
                                    "src": "2502:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1846,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2502:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2501:9:16"
                        },
                        "scope": 1951,
                        "src": "2419:92:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 1856,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1852,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1851,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1856,
                                    "src": "2768:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1850,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2768:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2758:29:16"
                        },
                        "returnParameters": {
                            "id": 1855,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1854,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1856,
                                    "src": "2835:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1853,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:9:16"
                        },
                        "scope": 1951,
                        "src": "2740:104:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Function used to set the terms of the next rebalance and start the proposal period\n     * @param _nextSet                      The Set to rebalance into\n@param _auctionLibrary               The library used to calculate the Dutch Auction price\n@param _auctionTimeToPivot           The amount of time for the auction to go ffrom start to pivot price\n@param _auctionStartPrice            The price to start the auction at\n@param _auctionPivotPrice            The price at which the price curve switches from linear to exponential",
                        "id": 1869,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "propose",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1867,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1858,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3462:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1857,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3462:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1860,
                                    "name": "_auctionLibrary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3488:23:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1859,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3488:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1862,
                                    "name": "_auctionTimeToPivot",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3521:27:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1861,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3521:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1864,
                                    "name": "_auctionStartPrice",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3558:26:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1863,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3558:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1866,
                                    "name": "_auctionPivotPrice",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3594:26:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1865,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3594:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3452:174:16"
                        },
                        "returnParameters": {
                            "id": 1868,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3643:0:16"
                        },
                        "scope": 1951,
                        "src": "3436:208:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1874,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1870,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3773:2:16"
                        },
                        "returnParameters": {
                            "id": 1873,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1872,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1874,
                                    "src": "3823:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1871,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3823:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3822:9:16"
                        },
                        "scope": 1951,
                        "src": "3753:79:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 1879,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1875,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4030:2:16"
                        },
                        "returnParameters": {
                            "id": 1878,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1877,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1879,
                                    "src": "4080:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1876,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4080:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4079:9:16"
                        },
                        "scope": 1951,
                        "src": "4011:78:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 1884,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1880,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4286:2:16"
                        },
                        "returnParameters": {
                            "id": 1883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1882,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1884,
                                    "src": "4336:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1881,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4336:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4335:9:16"
                        },
                        "scope": 1951,
                        "src": "4270:75:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1889,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4503:2:16"
                        },
                        "returnParameters": {
                            "id": 1888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1887,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1889,
                                    "src": "4553:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1886,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4553:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4552:9:16"
                        },
                        "scope": 1951,
                        "src": "4484:78:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1896,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1894,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1891,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1896,
                                    "src": "4839:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1890,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4839:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1893,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1896,
                                    "src": "4862:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4862:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4829:56:16"
                        },
                        "returnParameters": {
                            "id": 1895,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4902:0:16"
                        },
                        "scope": 1951,
                        "src": "4816:87:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1910,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1898,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5387:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5387:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5377:33:16"
                        },
                        "returnParameters": {
                            "id": 1909,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1902,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5445:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1900,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5445:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1901,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5445:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1905,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5463:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1903,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5463:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1904,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5463:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1908,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5481:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1906,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5481:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1907,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5481:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5444:54:16"
                        },
                        "scope": 1951,
                        "src": "5360:139:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1915,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArrayLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1911,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5647:2:16"
                        },
                        "returnParameters": {
                            "id": 1914,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1913,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "5697:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1912,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5697:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5696:9:16"
                        },
                        "scope": 1951,
                        "src": "5611:95:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1921,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArray",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1916,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5848:2:16"
                        },
                        "returnParameters": {
                            "id": 1920,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1919,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1921,
                                    "src": "5898:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1917,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5898:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1918,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5898:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5897:18:16"
                        },
                        "scope": 1951,
                        "src": "5818:98:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1927,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getFailedAuctionWithdrawComponents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1922,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6097:2:16"
                        },
                        "returnParameters": {
                            "id": 1926,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1925,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1927,
                                    "src": "6147:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1923,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6147:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1924,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6147:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6146:18:16"
                        },
                        "scope": 1951,
                        "src": "6054:111:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1933,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1928,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6363:2:16"
                        },
                        "returnParameters": {
                            "id": 1932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1931,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1933,
                                    "src": "6413:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1929,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6413:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1930,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6413:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6412:18:16"
                        },
                        "scope": 1951,
                        "src": "6329:102:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1939,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1934,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6614:2:16"
                        },
                        "returnParameters": {
                            "id": 1938,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1937,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1939,
                                    "src": "6664:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1935,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6664:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1936,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6664:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6663:18:16"
                        },
                        "scope": 1951,
                        "src": "6585:97:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1950,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1941,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7127:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1940,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7127:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7117:33:16"
                        },
                        "returnParameters": {
                            "id": 1949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1945,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7198:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1943,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7198:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1944,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7198:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1948,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7216:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1946,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7216:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1947,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7216:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7197:36:16"
                        },
                        "scope": 1951,
                        "src": "7097:137:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1952,
                "src": "947:6290:16"
            }
        ],
        "src": "597:6641:16"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol",
        "exportedSymbols": {
            "IRebalancingSetToken": [
                1951
            ]
        },
        "id": 1952,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1811,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:16"
            },
            {
                "id": 1812,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:16"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1814,
                "nodeType": "ImportDirective",
                "scope": 1952,
                "sourceUnit": 2510,
                "src": "657:67:16",
                "symbolAliases": [
                    {
                        "foreign": 1813,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetToken\n@author Set Protocol\n * The IRebalancingSetToken interface provides a light-weight, structured way to interact with the\nRebalancingSetToken contract from another contract.",
                "fullyImplemented": false,
                "id": 1951,
                "linearizedBaseContracts": [
                    1951
                ],
                "name": "IRebalancingSetToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1819,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "auctionLibrary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1815,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1183:2:16"
                        },
                        "returnParameters": {
                            "id": 1818,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1817,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1819,
                                    "src": "1233:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1816,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1233:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1232:9:16"
                        },
                        "scope": 1951,
                        "src": "1160:82:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1824,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1820,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1360:2:16"
                        },
                        "returnParameters": {
                            "id": 1823,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1822,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1824,
                                    "src": "1410:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1821,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1410:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1409:9:16"
                        },
                        "scope": 1951,
                        "src": "1340:79:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1829,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "proposalStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1825,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1555:2:16"
                        },
                        "returnParameters": {
                            "id": 1828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1827,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1829,
                                    "src": "1605:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1826,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1605:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1604:9:16"
                        },
                        "scope": 1951,
                        "src": "1529:85:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1834,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1830,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1765:2:16"
                        },
                        "returnParameters": {
                            "id": 1833,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1832,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1834,
                                    "src": "1815:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1815:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1814:9:16"
                        },
                        "scope": 1951,
                        "src": "1734:90:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1839,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1835,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1960:2:16"
                        },
                        "returnParameters": {
                            "id": 1838,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1837,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1839,
                                    "src": "2010:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1836,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2010:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2009:9:16"
                        },
                        "scope": 1951,
                        "src": "1934:85:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1844,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1840,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2209:2:16"
                        },
                        "returnParameters": {
                            "id": 1843,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1842,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1844,
                                    "src": "2259:24:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1841,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2259:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2258:26:16"
                        },
                        "scope": 1951,
                        "src": "2186:99:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1849,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1845,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2452:2:16"
                        },
                        "returnParameters": {
                            "id": 1848,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1847,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1849,
                                    "src": "2502:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1846,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2502:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2501:9:16"
                        },
                        "scope": 1951,
                        "src": "2419:92:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 1856,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1852,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1851,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1856,
                                    "src": "2768:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1850,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2768:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2758:29:16"
                        },
                        "returnParameters": {
                            "id": 1855,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1854,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1856,
                                    "src": "2835:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1853,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2835:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:9:16"
                        },
                        "scope": 1951,
                        "src": "2740:104:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Function used to set the terms of the next rebalance and start the proposal period\n     * @param _nextSet                      The Set to rebalance into\n@param _auctionLibrary               The library used to calculate the Dutch Auction price\n@param _auctionTimeToPivot           The amount of time for the auction to go ffrom start to pivot price\n@param _auctionStartPrice            The price to start the auction at\n@param _auctionPivotPrice            The price at which the price curve switches from linear to exponential",
                        "id": 1869,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "propose",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1867,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1858,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3462:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1857,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3462:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1860,
                                    "name": "_auctionLibrary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3488:23:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1859,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3488:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1862,
                                    "name": "_auctionTimeToPivot",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3521:27:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1861,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3521:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1864,
                                    "name": "_auctionStartPrice",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3558:26:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1863,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3558:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1866,
                                    "name": "_auctionPivotPrice",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1869,
                                    "src": "3594:26:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1865,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3594:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3452:174:16"
                        },
                        "returnParameters": {
                            "id": 1868,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3643:0:16"
                        },
                        "scope": 1951,
                        "src": "3436:208:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1874,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1870,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3773:2:16"
                        },
                        "returnParameters": {
                            "id": 1873,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1872,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1874,
                                    "src": "3823:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1871,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3823:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3822:9:16"
                        },
                        "scope": 1951,
                        "src": "3753:79:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 1879,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1875,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4030:2:16"
                        },
                        "returnParameters": {
                            "id": 1878,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1877,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1879,
                                    "src": "4080:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1876,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4080:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4079:9:16"
                        },
                        "scope": 1951,
                        "src": "4011:78:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 1884,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1880,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4286:2:16"
                        },
                        "returnParameters": {
                            "id": 1883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1882,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1884,
                                    "src": "4336:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1881,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4336:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4335:9:16"
                        },
                        "scope": 1951,
                        "src": "4270:75:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1889,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4503:2:16"
                        },
                        "returnParameters": {
                            "id": 1888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1887,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1889,
                                    "src": "4553:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1886,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4553:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4552:9:16"
                        },
                        "scope": 1951,
                        "src": "4484:78:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1896,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1894,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1891,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1896,
                                    "src": "4839:13:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1890,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4839:7:16",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1893,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1896,
                                    "src": "4862:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4862:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4829:56:16"
                        },
                        "returnParameters": {
                            "id": 1895,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4902:0:16"
                        },
                        "scope": 1951,
                        "src": "4816:87:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1910,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1898,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5387:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5387:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5377:33:16"
                        },
                        "returnParameters": {
                            "id": 1909,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1902,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5445:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1900,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5445:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1901,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5445:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1905,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5463:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1903,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5463:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1904,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5463:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1908,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1910,
                                    "src": "5481:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1906,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5481:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1907,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5481:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5444:54:16"
                        },
                        "scope": 1951,
                        "src": "5360:139:16",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1915,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArrayLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1911,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5647:2:16"
                        },
                        "returnParameters": {
                            "id": 1914,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1913,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "5697:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1912,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5697:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5696:9:16"
                        },
                        "scope": 1951,
                        "src": "5611:95:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1921,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArray",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1916,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5848:2:16"
                        },
                        "returnParameters": {
                            "id": 1920,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1919,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1921,
                                    "src": "5898:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1917,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5898:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1918,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5898:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5897:18:16"
                        },
                        "scope": 1951,
                        "src": "5818:98:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1927,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getFailedAuctionWithdrawComponents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1922,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6097:2:16"
                        },
                        "returnParameters": {
                            "id": 1926,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1925,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1927,
                                    "src": "6147:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1923,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6147:7:16",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1924,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6147:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6146:18:16"
                        },
                        "scope": 1951,
                        "src": "6054:111:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1933,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1928,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6363:2:16"
                        },
                        "returnParameters": {
                            "id": 1932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1931,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1933,
                                    "src": "6413:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1929,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6413:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1930,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6413:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6412:18:16"
                        },
                        "scope": 1951,
                        "src": "6329:102:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1939,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1934,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6614:2:16"
                        },
                        "returnParameters": {
                            "id": 1938,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1937,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1939,
                                    "src": "6664:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1935,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6664:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1936,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "6664:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6663:18:16"
                        },
                        "scope": 1951,
                        "src": "6585:97:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1950,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1941,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7127:17:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1940,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7127:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7117:33:16"
                        },
                        "returnParameters": {
                            "id": 1949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1945,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7198:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1943,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7198:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1944,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7198:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1948,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1950,
                                    "src": "7216:16:16",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1946,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7216:7:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1947,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7216:9:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7197:36:16"
                        },
                        "scope": 1951,
                        "src": "7097:137:16",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1952,
                "src": "947:6290:16"
            }
        ],
        "src": "597:6641:16"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.702Z",
    "devdoc": {
        "author": "Set Protocol * The IRebalancingSetToken interface provides a light-weight, structured way to interact with the RebalancingSetToken contract from another contract.",
        "methods": {
            "balanceOf(address)": {
                "params": {
                    "owner": "The address to query the balance of."
                },
                "return": "A uint256 representing the amount owned by the passed address."
            },
            "currentSet()": {
                "return": "A address representing the base SetToken"
            },
            "nextSet()": {
                "return": "address    Address representing the base SetToken"
            },
            "propose(address,address,uint256,uint256,uint256)": {
                "params": {
                    "_auctionLibrary": "The library used to calculate the Dutch Auction price",
                    "_auctionPivotPrice": "The price at which the price curve switches from linear to exponential",
                    "_auctionStartPrice": "The price to start the auction at",
                    "_auctionTimeToPivot": "The amount of time for the auction to go ffrom start to pivot price",
                    "_nextSet": "The Set to rebalance into"
                }
            }
        },
        "title": "IRebalancingSetToken"
    },
    "userdoc": {
        "methods": {
            "balanceOf(address)": {
                "notice": "Gets the balance of the specified address."
            },
            "currentSet()": {
                "notice": "Returns the address of the current base SetToken with the current allocation"
            },
            "nextSet()": {
                "notice": "Returns the address of the next base SetToken with the post auction allocation"
            },
            "propose(address,address,uint256,uint256,uint256)": {
                "notice": "Function used to set the terms of the next rebalance and start the proposal period"
            }
        }
    }
};
//# sourceMappingURL=IRebalancingSetToken.js.map