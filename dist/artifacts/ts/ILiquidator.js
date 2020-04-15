"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILiquidator = {
    "contractName": "ILiquidator",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_currentSet",
                    "type": "address"
                },
                {
                    "name": "_nextSet",
                    "type": "address"
                },
                {
                    "name": "_startingCurrentSetQuantity",
                    "type": "uint256"
                },
                {
                    "name": "_liquidatorData",
                    "type": "bytes"
                }
            ],
            "name": "startRebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_set",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "getBidPrice",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "addresses",
                            "type": "address[]"
                        },
                        {
                            "name": "inflow",
                            "type": "uint256[]"
                        },
                        {
                            "name": "outflow",
                            "type": "uint256[]"
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
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "placeBid",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "addresses",
                            "type": "address[]"
                        },
                        {
                            "name": "inflow",
                            "type": "uint256[]"
                        },
                        {
                            "name": "outflow",
                            "type": "uint256[]"
                        }
                    ],
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "settleRebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "endFailedRebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "auctionPriceParameters",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "auctionStartTime",
                            "type": "uint256"
                        },
                        {
                            "name": "auctionTimeToPivot",
                            "type": "uint256"
                        },
                        {
                            "name": "auctionStartPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "auctionPivotPrice",
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
            "constant": true,
            "inputs": [
                {
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "hasRebalanceFailed",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
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
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "minimumBid",
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
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "startingCurrentSets",
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
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "remainingCurrentSets",
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
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "getCombinedCurrentSetUnits",
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
                    "name": "_set",
                    "type": "address"
                }
            ],
            "name": "getCombinedNextSetUnits",
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
                    "name": "_set",
                    "type": "address"
                }
            ],
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
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"minimumBid\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"getBidPrice\",\"outputs\":[{\"components\":[{\"name\":\"addresses\",\"type\":\"address[]\"},{\"name\":\"inflow\",\"type\":\"uint256[]\"},{\"name\":\"outflow\",\"type\":\"uint256[]\"}],\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"getCombinedCurrentSetUnits\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"getCombinedNextSetUnits\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"hasRebalanceFailed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"remainingCurrentSets\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"auctionPriceParameters\",\"outputs\":[{\"components\":[{\"name\":\"auctionStartTime\",\"type\":\"uint256\"},{\"name\":\"auctionTimeToPivot\",\"type\":\"uint256\"},{\"name\":\"auctionStartPrice\",\"type\":\"uint256\"},{\"name\":\"auctionPivotPrice\",\"type\":\"uint256\"}],\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"startingCurrentSets\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_set\",\"type\":\"address\"}],\"name\":\"getCombinedTokenArray\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"endFailedRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"placeBid\",\"outputs\":[{\"components\":[{\"name\":\"addresses\",\"type\":\"address[]\"},{\"name\":\"inflow\",\"type\":\"uint256[]\"},{\"name\":\"outflow\",\"type\":\"uint256[]\"}],\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"settleRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_currentSet\",\"type\":\"address\"},{\"name\":\"_nextSet\",\"type\":\"address\"},{\"name\":\"_startingCurrentSetQuantity\",\"type\":\"uint256\"},{\"name\":\"_liquidatorData\",\"type\":\"bytes\"}],\"name\":\"startRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol \",\"methods\":{},\"title\":\"ILiquidator\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":\"ILiquidator\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":{\"keccak256\":\"0x9d1e66d56cd51d14787cce5ff8fb378eb6a0bb704e7102d7c4eda5de7f585af3\",\"urls\":[\"bzzr://c44220025ac21fda1dda68e236572c5c4f82bf53ccf504a020487b8c746c7b26\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { ISetToken } from \"./ISetToken.sol\";\nimport { Rebalance } from \"../lib/Rebalance.sol\";\nimport { RebalancingLibrary } from \"../lib/RebalancingLibrary.sol\";\n\n/**\n * @title ILiquidator\n * @author Set Protocol\n *\n */\ninterface ILiquidator {\n\n    /* ============ External Functions ============ */\n\n    function startRebalance(\n        ISetToken _currentSet,\n        ISetToken _nextSet,\n        uint256 _startingCurrentSetQuantity,\n        bytes calldata _liquidatorData\n    )\n        external;\n\n    function getBidPrice(\n        address _set,\n        uint256 _quantity\n    )\n        external\n        view\n        returns (Rebalance.TokenFlow memory);\n\n    function placeBid(\n        uint256 _quantity\n    )\n        external\n        returns (Rebalance.TokenFlow memory);\n\n\n    function settleRebalance()\n        external;\n\n    function endFailedRebalance() external;\n\n    // ----------------------------------------------------------------------\n    // Auction Price\n    // ----------------------------------------------------------------------\n\n    function auctionPriceParameters(address _set)\n        external\n        view\n        returns (RebalancingLibrary.AuctionPriceParameters memory);\n\n    // ----------------------------------------------------------------------\n    // Auction\n    // ----------------------------------------------------------------------\n\n    function hasRebalanceFailed(address _set) external view returns (bool);        \n    function minimumBid(address _set) external view returns (uint256);\n    function startingCurrentSets(address _set) external view returns (uint256);\n    function remainingCurrentSets(address _set) external view returns (uint256);\n    function getCombinedCurrentSetUnits(address _set) external view returns (uint256[] memory);\n    function getCombinedNextSetUnits(address _set) external view returns (uint256[] memory);\n    function getCombinedTokenArray(address _set) external view returns (address[] memory);\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
        "exportedSymbols": {
            "ILiquidator": [
                1787
            ]
        },
        "id": 1788,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1687,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:14"
            },
            {
                "id": 1688,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:14"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 1690,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2360,
                "src": "657:44:14",
                "symbolAliases": [
                    {
                        "foreign": 1689,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/Rebalance.sol",
                "file": "../lib/Rebalance.sol",
                "id": 1692,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2479,
                "src": "702:49:14",
                "symbolAliases": [
                    {
                        "foreign": 1691,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1694,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2510,
                "src": "752:67:14",
                "symbolAliases": [
                    {
                        "foreign": 1693,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ILiquidator\n@author Set Protocol\n ",
                "fullyImplemented": false,
                "id": 1787,
                "linearizedBaseContracts": [
                    1787
                ],
                "name": "ILiquidator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1705,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1703,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1696,
                                    "name": "_currentSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "996:21:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1695,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "996:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1698,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1027:18:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1697,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1027:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1700,
                                    "name": "_startingCurrentSetQuantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1055:35:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1699,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1055:7:14",
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
                                    "id": 1702,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1100:30:14",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1701,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1100:5:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "986:150:14"
                        },
                        "returnParameters": {
                            "id": 1704,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1153:0:14"
                        },
                        "scope": 1787,
                        "src": "963:191:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1714,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1710,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1707,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1190:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1706,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1190:7:14",
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
                                    "id": 1709,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1212:17:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1708,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1212:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1180:55:14"
                        },
                        "returnParameters": {
                            "id": 1713,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1712,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1283:26:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1711,
                                        "name": "Rebalance.TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1283:19:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1282:28:14"
                        },
                        "scope": 1787,
                        "src": "1160:151:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1721,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1717,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1716,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1721,
                                    "src": "1344:17:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1715,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1344:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1334:33:14"
                        },
                        "returnParameters": {
                            "id": 1720,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1719,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1721,
                                    "src": "1402:26:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1718,
                                        "name": "Rebalance.TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1402:19:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1401:28:14"
                        },
                        "scope": 1787,
                        "src": "1317:113:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1724,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1722,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1461:2:14"
                        },
                        "returnParameters": {
                            "id": 1723,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1480:0:14"
                        },
                        "scope": 1787,
                        "src": "1437:44:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1727,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "endFailedRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1725,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1514:2:14"
                        },
                        "returnParameters": {
                            "id": 1726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1525:0:14"
                        },
                        "scope": 1787,
                        "src": "1487:39:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1734,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "auctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1730,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1729,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1734,
                                    "src": "1742:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1728,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1742:7:14",
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
                            "src": "1741:14:14"
                        },
                        "returnParameters": {
                            "id": 1733,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1732,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1734,
                                    "src": "1803:48:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AuctionPriceParameters_$2494_memory_ptr",
                                        "typeString": "struct RebalancingLibrary.AuctionPriceParameters"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1731,
                                        "name": "RebalancingLibrary.AuctionPriceParameters",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2494,
                                        "src": "1803:41:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_AuctionPriceParameters_$2494_storage_ptr",
                                            "typeString": "struct RebalancingLibrary.AuctionPriceParameters"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1802:50:14"
                        },
                        "scope": 1787,
                        "src": "1710:143:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1741,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "hasRebalanceFailed",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1737,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1736,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1741,
                                    "src": "2059:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1735,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2059:7:14",
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
                            "src": "2058:14:14"
                        },
                        "returnParameters": {
                            "id": 1740,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1739,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1741,
                                    "src": "2096:4:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1738,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2096:4:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2095:6:14"
                        },
                        "scope": 1787,
                        "src": "2031:71:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1748,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "minimumBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1744,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1743,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1748,
                                    "src": "2135:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1742,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:14",
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
                            "src": "2134:14:14"
                        },
                        "returnParameters": {
                            "id": 1747,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1746,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1748,
                                    "src": "2172:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1745,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2172:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2171:9:14"
                        },
                        "scope": 1787,
                        "src": "2115:66:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1755,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSets",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1751,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1750,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1755,
                                    "src": "2215:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1749,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2215:7:14",
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
                            "src": "2214:14:14"
                        },
                        "returnParameters": {
                            "id": 1754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1753,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1755,
                                    "src": "2252:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1752,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2252:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2251:9:14"
                        },
                        "scope": 1787,
                        "src": "2186:75:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1762,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "remainingCurrentSets",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1758,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1757,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1762,
                                    "src": "2296:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1756,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2296:7:14",
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
                            "src": "2295:14:14"
                        },
                        "returnParameters": {
                            "id": 1761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1762,
                                    "src": "2333:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2333:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2332:9:14"
                        },
                        "scope": 1787,
                        "src": "2266:76:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1770,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedCurrentSetUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1765,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1764,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1770,
                                    "src": "2383:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1763,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2383:7:14",
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
                            "src": "2382:14:14"
                        },
                        "returnParameters": {
                            "id": 1769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1768,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1770,
                                    "src": "2420:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1766,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2420:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1767,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2420:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2419:18:14"
                        },
                        "scope": 1787,
                        "src": "2347:91:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1778,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedNextSetUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1772,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1778,
                                    "src": "2476:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1771,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2476:7:14",
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
                            "src": "2475:14:14"
                        },
                        "returnParameters": {
                            "id": 1777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1776,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1778,
                                    "src": "2513:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1774,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2513:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1775,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2513:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2512:18:14"
                        },
                        "scope": 1787,
                        "src": "2443:88:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1786,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArray",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1780,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1786,
                                    "src": "2567:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1779,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2567:7:14",
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
                            "src": "2566:14:14"
                        },
                        "returnParameters": {
                            "id": 1785,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1784,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1786,
                                    "src": "2604:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1782,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2604:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1783,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2604:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2603:18:14"
                        },
                        "scope": 1787,
                        "src": "2536:86:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1788,
                "src": "878:1746:14"
            }
        ],
        "src": "597:2028:14"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
        "exportedSymbols": {
            "ILiquidator": [
                1787
            ]
        },
        "id": 1788,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1687,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:14"
            },
            {
                "id": 1688,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:14"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 1690,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2360,
                "src": "657:44:14",
                "symbolAliases": [
                    {
                        "foreign": 1689,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/Rebalance.sol",
                "file": "../lib/Rebalance.sol",
                "id": 1692,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2479,
                "src": "702:49:14",
                "symbolAliases": [
                    {
                        "foreign": 1691,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1694,
                "nodeType": "ImportDirective",
                "scope": 1788,
                "sourceUnit": 2510,
                "src": "752:67:14",
                "symbolAliases": [
                    {
                        "foreign": 1693,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ILiquidator\n@author Set Protocol\n ",
                "fullyImplemented": false,
                "id": 1787,
                "linearizedBaseContracts": [
                    1787
                ],
                "name": "ILiquidator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1705,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1703,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1696,
                                    "name": "_currentSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "996:21:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1695,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "996:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1698,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1027:18:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1697,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1027:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1700,
                                    "name": "_startingCurrentSetQuantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1055:35:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1699,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1055:7:14",
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
                                    "id": 1702,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1705,
                                    "src": "1100:30:14",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1701,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1100:5:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "986:150:14"
                        },
                        "returnParameters": {
                            "id": 1704,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1153:0:14"
                        },
                        "scope": 1787,
                        "src": "963:191:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1714,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1710,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1707,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1190:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1706,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1190:7:14",
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
                                    "id": 1709,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1212:17:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1708,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1212:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1180:55:14"
                        },
                        "returnParameters": {
                            "id": 1713,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1712,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1714,
                                    "src": "1283:26:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1711,
                                        "name": "Rebalance.TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1283:19:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1282:28:14"
                        },
                        "scope": 1787,
                        "src": "1160:151:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1721,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1717,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1716,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1721,
                                    "src": "1344:17:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1715,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1344:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1334:33:14"
                        },
                        "returnParameters": {
                            "id": 1720,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1719,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1721,
                                    "src": "1402:26:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1718,
                                        "name": "Rebalance.TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1402:19:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1401:28:14"
                        },
                        "scope": 1787,
                        "src": "1317:113:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1724,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1722,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1461:2:14"
                        },
                        "returnParameters": {
                            "id": 1723,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1480:0:14"
                        },
                        "scope": 1787,
                        "src": "1437:44:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1727,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "endFailedRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1725,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1514:2:14"
                        },
                        "returnParameters": {
                            "id": 1726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1525:0:14"
                        },
                        "scope": 1787,
                        "src": "1487:39:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1734,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "auctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1730,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1729,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1734,
                                    "src": "1742:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1728,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1742:7:14",
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
                            "src": "1741:14:14"
                        },
                        "returnParameters": {
                            "id": 1733,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1732,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1734,
                                    "src": "1803:48:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_AuctionPriceParameters_$2494_memory_ptr",
                                        "typeString": "struct RebalancingLibrary.AuctionPriceParameters"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1731,
                                        "name": "RebalancingLibrary.AuctionPriceParameters",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2494,
                                        "src": "1803:41:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_AuctionPriceParameters_$2494_storage_ptr",
                                            "typeString": "struct RebalancingLibrary.AuctionPriceParameters"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1802:50:14"
                        },
                        "scope": 1787,
                        "src": "1710:143:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1741,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "hasRebalanceFailed",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1737,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1736,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1741,
                                    "src": "2059:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1735,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2059:7:14",
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
                            "src": "2058:14:14"
                        },
                        "returnParameters": {
                            "id": 1740,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1739,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1741,
                                    "src": "2096:4:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 1738,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2096:4:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2095:6:14"
                        },
                        "scope": 1787,
                        "src": "2031:71:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1748,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "minimumBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1744,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1743,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1748,
                                    "src": "2135:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1742,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:14",
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
                            "src": "2134:14:14"
                        },
                        "returnParameters": {
                            "id": 1747,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1746,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1748,
                                    "src": "2172:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1745,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2172:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2171:9:14"
                        },
                        "scope": 1787,
                        "src": "2115:66:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1755,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSets",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1751,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1750,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1755,
                                    "src": "2215:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1749,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2215:7:14",
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
                            "src": "2214:14:14"
                        },
                        "returnParameters": {
                            "id": 1754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1753,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1755,
                                    "src": "2252:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1752,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2252:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2251:9:14"
                        },
                        "scope": 1787,
                        "src": "2186:75:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1762,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "remainingCurrentSets",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1758,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1757,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1762,
                                    "src": "2296:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1756,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2296:7:14",
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
                            "src": "2295:14:14"
                        },
                        "returnParameters": {
                            "id": 1761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1762,
                                    "src": "2333:7:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2333:7:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2332:9:14"
                        },
                        "scope": 1787,
                        "src": "2266:76:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1770,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedCurrentSetUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1765,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1764,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1770,
                                    "src": "2383:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1763,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2383:7:14",
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
                            "src": "2382:14:14"
                        },
                        "returnParameters": {
                            "id": 1769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1768,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1770,
                                    "src": "2420:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1766,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2420:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1767,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2420:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2419:18:14"
                        },
                        "scope": 1787,
                        "src": "2347:91:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1778,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedNextSetUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1772,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1778,
                                    "src": "2476:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1771,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2476:7:14",
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
                            "src": "2475:14:14"
                        },
                        "returnParameters": {
                            "id": 1777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1776,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1778,
                                    "src": "2513:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1774,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2513:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1775,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2513:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2512:18:14"
                        },
                        "scope": 1787,
                        "src": "2443:88:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1786,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCombinedTokenArray",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1780,
                                    "name": "_set",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1786,
                                    "src": "2567:12:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1779,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2567:7:14",
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
                            "src": "2566:14:14"
                        },
                        "returnParameters": {
                            "id": 1785,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1784,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1786,
                                    "src": "2604:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1782,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2604:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1783,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2604:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2603:18:14"
                        },
                        "scope": 1787,
                        "src": "2536:86:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1788,
                "src": "878:1746:14"
            }
        ],
        "src": "597:2028:14"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.701Z",
    "devdoc": {
        "author": "Set Protocol ",
        "methods": {},
        "title": "ILiquidator"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ILiquidator.js.map