"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISocialTradingManager = {
    "contractName": "ISocialTradingManager",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                }
            ],
            "name": "pools",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "trader",
                            "type": "address"
                        },
                        {
                            "name": "allocator",
                            "type": "address"
                        },
                        {
                            "name": "currentAllocation",
                            "type": "uint256"
                        },
                        {
                            "name": "newEntryFee",
                            "type": "uint256"
                        },
                        {
                            "name": "feeUpdateTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "name": "",
                    "type": "tuple"
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
                    "name": "_tradingPairAllocator",
                    "type": "address"
                },
                {
                    "name": "_startingBaseAssetAllocation",
                    "type": "uint256"
                },
                {
                    "name": "_startingUSDValue",
                    "type": "uint256"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_symbol",
                    "type": "bytes32"
                },
                {
                    "name": "_rebalancingSetCallData",
                    "type": "bytes"
                }
            ],
            "name": "createTradingPool",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_newAllocation",
                    "type": "uint256"
                },
                {
                    "name": "_liquidatorData",
                    "type": "bytes"
                }
            ],
            "name": "updateAllocation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_newTrader",
                    "type": "address"
                }
            ],
            "name": "setTrader",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_newLiquidator",
                    "type": "address"
                }
            ],
            "name": "setLiquidator",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_newFeeRecipient",
                    "type": "address"
                }
            ],
            "name": "setFeeRecipient",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_newAllocation\",\"type\":\"uint256\"},{\"name\":\"_liquidatorData\",\"type\":\"bytes\"}],\"name\":\"updateAllocation\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_newTrader\",\"type\":\"address\"}],\"name\":\"setTrader\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_newFeeRecipient\",\"type\":\"address\"}],\"name\":\"setFeeRecipient\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPairAllocator\",\"type\":\"address\"},{\"name\":\"_startingBaseAssetAllocation\",\"type\":\"uint256\"},{\"name\":\"_startingUSDValue\",\"type\":\"uint256\"},{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_symbol\",\"type\":\"bytes32\"},{\"name\":\"_rebalancingSetCallData\",\"type\":\"bytes\"}],\"name\":\"createTradingPool\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_newLiquidator\",\"type\":\"address\"}],\"name\":\"setLiquidator\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"}],\"name\":\"pools\",\"outputs\":[{\"components\":[{\"name\":\"trader\",\"type\":\"address\"},{\"name\":\"allocator\",\"type\":\"address\"},{\"name\":\"currentAllocation\",\"type\":\"uint256\"},{\"name\":\"newEntryFee\",\"type\":\"uint256\"},{\"name\":\"feeUpdateTimestamp\",\"type\":\"uint256\"}],\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for interacting with SocialTradingManager contracts\",\"methods\":{},\"title\":\"ISocialTradingManager\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-strategies/contracts/managers/interfaces/ISocialTradingManager.sol\":\"ISocialTradingManager\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":{\"keccak256\":\"0xfdce9b333367bfed8f379738b0eabfe4be0045db735e9f24493de09729593d4d\",\"urls\":[\"bzzr://d2fa7438b492f4f08009810e3e9a2e2c22a429c307562e3f5274d4bfe2d21734\"]},\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":{\"keccak256\":\"0x9d1e66d56cd51d14787cce5ff8fb378eb6a0bb704e7102d7c4eda5de7f585af3\",\"urls\":[\"bzzr://c44220025ac21fda1dda68e236572c5c4f82bf53ccf504a020487b8c746c7b26\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\":{\"keccak256\":\"0x46c9dc7c09957eaa4f896b33d8d25ff5268e710172330f033379eed62a052ace\",\"urls\":[\"bzzr://c5b5cdc4e58c0905a03ef70954ac23eefe4776c243049f37e7b93cd8277bb7cb\"]},\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]},\"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\":{\"keccak256\":\"0x814f90da260a6a7f2306339d0bd6ab282f4cc7f2b13c525537989ed2b4967cc8\",\"urls\":[\"bzzr://3d7ea70e8d36639cc1f37e05d3cbc9b5a5e6bc6918aa982cab29bf12e7351fc3\"]},\"set-protocol-strategies/contracts/managers/interfaces/ISocialTradingManager.sol\":{\"keccak256\":\"0x922ae1ac4d641c63a51653a4d0d419568a523c84979126838c5b4f63a2d993d4\",\"urls\":[\"bzzr://3462925c7e312bc9524c317948226cf40d5b4e1c78feb9dd1a0823de698d7ff8\"]},\"set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol\":{\"keccak256\":\"0x842d0e504e7a219a3f2537f149f8535e3f6d0ad9c6a23c9f8367b02e1cca94da\",\"urls\":[\"bzzr://f096b40a2880280e370f465a7f348032a587aaf57b1120fd3c206565484b263f\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { ILiquidator } from \"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\";\nimport { IRebalancingSetTokenV2 } from \"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\";\n\nimport { ISocialAllocator } from \"../allocators/ISocialAllocator.sol\";\nimport { SocialTradingLibrary } from \"../lib/SocialTradingLibrary.sol\";\n\n/**\n * @title ISocialTradingManager\n * @author Set Protocol\n *\n * Interface for interacting with SocialTradingManager contracts\n */\ninterface ISocialTradingManager {\n\n    /*\n     * Get trading pool info.\n     *\n     * @param _tradingPool        The address of the trading pool being queried\n     *\n     * @return                    PoolInfo struct of trading pool\n     */\n    function pools(address _tradingPool) external view returns (SocialTradingLibrary.PoolInfo memory);\n\n    /*\n     * Create a trading pool. Create or select new collateral and create RebalancingSetToken contract to\n     * administer pool. Save relevant data to pool's entry in pools state variable under the Rebalancing\n     * Set Token address.\n     *\n     * @param _tradingPairAllocator             The address of the allocator the trader wishes to use\n     * @param _startingBaseAssetAllocation      Starting base asset allocation in a scaled decimal value\n     *                                          (e.g. 100% = 1e18, 1% = 1e16)\n     * @param _startingUSDValue                 Starting value of one share of the trading pool to 18 decimals of precision\n     * @param _name                             The name of the new RebalancingSetTokenV2\n     * @param _symbol                           The symbol of the new RebalancingSetTokenV2\n     * @param _rebalancingSetCallData           Byte string containing additional call parameters to pass to factory\n     */\n    function createTradingPool(\n        ISocialAllocator _tradingPairAllocator,\n        uint256 _startingBaseAssetAllocation,\n        uint256 _startingUSDValue,\n        bytes32 _name,\n        bytes32 _symbol,\n        bytes calldata _rebalancingSetCallData\n    )\n        external;\n\n    /*\n     * Update trading pool allocation. Issue new collateral Set and initiate rebalance on RebalancingSetTokenV2.\n     *\n     * @param _tradingPool        The address of the trading pool being updated\n     * @param _newAllocation      New base asset allocation in a scaled decimal value\n     *                                          (e.g. 100% = 1e18, 1% = 1e16)\n     * @param _liquidatorData     Extra parameters passed to the liquidator\n     */\n    function updateAllocation(\n        IRebalancingSetTokenV2 _tradingPool,\n        uint256 _newAllocation,\n        bytes calldata _liquidatorData\n    )\n        external;\n\n    /*\n     * Update trader allowed to manage trading pool.\n     *\n     * @param _tradingPool        The address of the trading pool being updated\n     * @param _newTrader          Address of new traders\n     */\n    function setTrader(\n        IRebalancingSetTokenV2 _tradingPool,\n        address _newTrader\n    )\n        external;\n\n    /*\n     * Update liquidator used by tradingPool.\n     *\n     * @param _tradingPool        The address of the trading pool being updated\n     * @param _newLiquidator      Address of new Liquidator\n     */\n    function setLiquidator(\n        IRebalancingSetTokenV2 _tradingPool,\n        ILiquidator _newLiquidator\n    )\n        external;\n\n    /*\n     * Update fee recipient of tradingPool.\n     *\n     * @param _tradingPool          The address of the trading pool being updated\n     * @param _newFeeRecipient      Address of new fee recipient\n     */\n    function setFeeRecipient(\n        IRebalancingSetTokenV2 _tradingPool,\n        address _newFeeRecipient\n    )\n        external;\n}",
    "sourcePath": "set-protocol-strategies/contracts/managers/interfaces/ISocialTradingManager.sol",
    "ast": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/ISocialTradingManager.sol",
        "exportedSymbols": {
            "ISocialTradingManager": [
                2680
            ]
        },
        "id": 2681,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2618,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:26"
            },
            {
                "id": 2619,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:26"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "id": 2621,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 1788,
                "src": "657:95:26",
                "symbolAliases": [
                    {
                        "foreign": 2620,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "id": 2623,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2128,
                "src": "753:117:26",
                "symbolAliases": [
                    {
                        "foreign": 2622,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "../allocators/ISocialAllocator.sol",
                "id": 2625,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2579,
                "src": "872:70:26",
                "symbolAliases": [
                    {
                        "foreign": 2624,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "file": "../lib/SocialTradingLibrary.sol",
                "id": 2627,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2698,
                "src": "943:71:26",
                "symbolAliases": [
                    {
                        "foreign": 2626,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISocialTradingManager\n@author Set Protocol\n * Interface for interacting with SocialTradingManager contracts",
                "fullyImplemented": false,
                "id": 2680,
                "linearizedBaseContracts": [
                    2680
                ],
                "name": "ISocialTradingManager",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2634,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pools",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2630,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2629,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2634,
                                    "src": "1407:20:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2628,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1407:7:26",
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
                            "src": "1406:22:26"
                        },
                        "returnParameters": {
                            "id": 2633,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2632,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2634,
                                    "src": "1452:36:26",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$2696_memory_ptr",
                                        "typeString": "struct SocialTradingLibrary.PoolInfo"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2631,
                                        "name": "SocialTradingLibrary.PoolInfo",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2696,
                                        "src": "1452:29:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$2696_storage_ptr",
                                            "typeString": "struct SocialTradingLibrary.PoolInfo"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1451:38:26"
                        },
                        "scope": 2680,
                        "src": "1392:98:26",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2649,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "createTradingPool",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2647,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2636,
                                    "name": "_tradingPairAllocator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2498:38:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                        "typeString": "contract ISocialAllocator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2635,
                                        "name": "ISocialAllocator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2578,
                                        "src": "2498:16:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2638,
                                    "name": "_startingBaseAssetAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2546:36:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2637,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2546:7:26",
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
                                    "id": 2640,
                                    "name": "_startingUSDValue",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2592:25:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2639,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2592:7:26",
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
                                    "id": 2642,
                                    "name": "_name",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2627:13:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2641,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2627:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2644,
                                    "name": "_symbol",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2650:15:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2643,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2650:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2646,
                                    "name": "_rebalancingSetCallData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2675:38:26",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2645,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2675:5:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2488:231:26"
                        },
                        "returnParameters": {
                            "id": 2648,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2736:0:26"
                        },
                        "scope": 2680,
                        "src": "2462:275:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2658,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateAllocation",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2656,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2651,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3233:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2650,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3233:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2653,
                                    "name": "_newAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3278:22:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2652,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3278:7:26",
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
                                    "id": 2655,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3310:30:26",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2654,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3310:5:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3223:123:26"
                        },
                        "returnParameters": {
                            "id": 2657,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3363:0:26"
                        },
                        "scope": 2680,
                        "src": "3198:166:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2665,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setTrader",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2663,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2660,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2665,
                                    "src": "3610:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2659,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3610:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2662,
                                    "name": "_newTrader",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2665,
                                    "src": "3655:18:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2661,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3655:7:26",
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
                            "src": "3600:79:26"
                        },
                        "returnParameters": {
                            "id": 2664,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3696:0:26"
                        },
                        "scope": 2680,
                        "src": "3582:115:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2672,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2670,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2667,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2672,
                                    "src": "3943:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2666,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3943:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2669,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2672,
                                    "src": "3988:26:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2668,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "3988:11:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3933:87:26"
                        },
                        "returnParameters": {
                            "id": 2671,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4037:0:26"
                        },
                        "scope": 2680,
                        "src": "3911:127:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2679,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2677,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2674,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2679,
                                    "src": "4291:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2673,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "4291:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2676,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2679,
                                    "src": "4336:24:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2675,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4336:7:26",
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
                            "src": "4281:85:26"
                        },
                        "returnParameters": {
                            "id": 2678,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4383:0:26"
                        },
                        "scope": 2680,
                        "src": "4257:127:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2681,
                "src": "1148:3238:26"
            }
        ],
        "src": "597:3789:26"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/ISocialTradingManager.sol",
        "exportedSymbols": {
            "ISocialTradingManager": [
                2680
            ]
        },
        "id": 2681,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2618,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:26"
            },
            {
                "id": 2619,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:26"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "id": 2621,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 1788,
                "src": "657:95:26",
                "symbolAliases": [
                    {
                        "foreign": 2620,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "id": 2623,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2128,
                "src": "753:117:26",
                "symbolAliases": [
                    {
                        "foreign": 2622,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "../allocators/ISocialAllocator.sol",
                "id": 2625,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2579,
                "src": "872:70:26",
                "symbolAliases": [
                    {
                        "foreign": 2624,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "file": "../lib/SocialTradingLibrary.sol",
                "id": 2627,
                "nodeType": "ImportDirective",
                "scope": 2681,
                "sourceUnit": 2698,
                "src": "943:71:26",
                "symbolAliases": [
                    {
                        "foreign": 2626,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISocialTradingManager\n@author Set Protocol\n * Interface for interacting with SocialTradingManager contracts",
                "fullyImplemented": false,
                "id": 2680,
                "linearizedBaseContracts": [
                    2680
                ],
                "name": "ISocialTradingManager",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2634,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pools",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2630,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2629,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2634,
                                    "src": "1407:20:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2628,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1407:7:26",
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
                            "src": "1406:22:26"
                        },
                        "returnParameters": {
                            "id": 2633,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2632,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2634,
                                    "src": "1452:36:26",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$2696_memory_ptr",
                                        "typeString": "struct SocialTradingLibrary.PoolInfo"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2631,
                                        "name": "SocialTradingLibrary.PoolInfo",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2696,
                                        "src": "1452:29:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$2696_storage_ptr",
                                            "typeString": "struct SocialTradingLibrary.PoolInfo"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1451:38:26"
                        },
                        "scope": 2680,
                        "src": "1392:98:26",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2649,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "createTradingPool",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2647,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2636,
                                    "name": "_tradingPairAllocator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2498:38:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                        "typeString": "contract ISocialAllocator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2635,
                                        "name": "ISocialAllocator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2578,
                                        "src": "2498:16:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2638,
                                    "name": "_startingBaseAssetAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2546:36:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2637,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2546:7:26",
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
                                    "id": 2640,
                                    "name": "_startingUSDValue",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2592:25:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2639,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2592:7:26",
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
                                    "id": 2642,
                                    "name": "_name",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2627:13:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2641,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2627:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2644,
                                    "name": "_symbol",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2650:15:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2643,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2650:7:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2646,
                                    "name": "_rebalancingSetCallData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2649,
                                    "src": "2675:38:26",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2645,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2675:5:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2488:231:26"
                        },
                        "returnParameters": {
                            "id": 2648,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2736:0:26"
                        },
                        "scope": 2680,
                        "src": "2462:275:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2658,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateAllocation",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2656,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2651,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3233:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2650,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3233:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2653,
                                    "name": "_newAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3278:22:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2652,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3278:7:26",
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
                                    "id": 2655,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2658,
                                    "src": "3310:30:26",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2654,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3310:5:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3223:123:26"
                        },
                        "returnParameters": {
                            "id": 2657,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3363:0:26"
                        },
                        "scope": 2680,
                        "src": "3198:166:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2665,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setTrader",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2663,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2660,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2665,
                                    "src": "3610:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2659,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3610:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2662,
                                    "name": "_newTrader",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2665,
                                    "src": "3655:18:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2661,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3655:7:26",
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
                            "src": "3600:79:26"
                        },
                        "returnParameters": {
                            "id": 2664,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3696:0:26"
                        },
                        "scope": 2680,
                        "src": "3582:115:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2672,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2670,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2667,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2672,
                                    "src": "3943:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2666,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "3943:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2669,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2672,
                                    "src": "3988:26:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2668,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "3988:11:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3933:87:26"
                        },
                        "returnParameters": {
                            "id": 2671,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4037:0:26"
                        },
                        "scope": 2680,
                        "src": "3911:127:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2679,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2677,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2674,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2679,
                                    "src": "4291:35:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2673,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "4291:22:26",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2676,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2679,
                                    "src": "4336:24:26",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2675,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4336:7:26",
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
                            "src": "4281:85:26"
                        },
                        "returnParameters": {
                            "id": 2678,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4383:0:26"
                        },
                        "scope": 2680,
                        "src": "4257:127:26",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2681,
                "src": "1148:3238:26"
            }
        ],
        "src": "597:3789:26"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.729Z",
    "devdoc": {
        "author": "Set Protocol * Interface for interacting with SocialTradingManager contracts",
        "methods": {},
        "title": "ISocialTradingManager"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ISocialTradingManager.js.map