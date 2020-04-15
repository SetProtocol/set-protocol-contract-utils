"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebalancingLibrary = {
    "contractName": "RebalancingLibrary",
    "abi": [],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Set Protocol * The RebalancingLibrary contains functions for facilitating the rebalancing process for Rebalancing Set Tokens. Removes the old calculation functions \",\"methods\":{},\"title\":\"RebalancingLibrary\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":\"RebalancingLibrary\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a05abee85be231672b824151f7988efa10b0b8812727295df1a6852c1cf071cb0029",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820a05abee85be231672b824151f7988efa10b0b8812727295df1a6852c1cf071cb0029",
    "sourceMap": "844:582:21:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "844:582:21:-;;;;;;;;",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\n/**\n * @title RebalancingLibrary\n * @author Set Protocol\n *\n * The RebalancingLibrary contains functions for facilitating the rebalancing process for\n * Rebalancing Set Tokens. Removes the old calculation functions\n *\n */\nlibrary RebalancingLibrary {\n\n    /* ============ Enums ============ */\n\n    enum State { Default, Proposal, Rebalance, Drawdown }\n\n    /* ============ Structs ============ */\n\n    struct AuctionPriceParameters {\n        uint256 auctionStartTime;\n        uint256 auctionTimeToPivot;\n        uint256 auctionStartPrice;\n        uint256 auctionPivotPrice;\n    }\n\n    struct BiddingParameters {\n        uint256 minimumBid;\n        uint256 remainingCurrentSets;\n        uint256[] combinedCurrentUnits;\n        uint256[] combinedNextSetUnits;\n        address[] combinedTokenArray;\n    }\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
        "exportedSymbols": {
            "RebalancingLibrary": [
                2509
            ]
        },
        "id": 2510,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2480,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:21"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title RebalancingLibrary\n@author Set Protocol\n * The RebalancingLibrary contains functions for facilitating the rebalancing process for\nRebalancing Set Tokens. Removes the old calculation functions\n ",
                "fullyImplemented": true,
                "id": 2509,
                "linearizedBaseContracts": [
                    2509
                ],
                "name": "RebalancingLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "RebalancingLibrary.State",
                        "id": 2485,
                        "members": [
                            {
                                "id": 2481,
                                "name": "Default",
                                "nodeType": "EnumValue",
                                "src": "934:7:21"
                            },
                            {
                                "id": 2482,
                                "name": "Proposal",
                                "nodeType": "EnumValue",
                                "src": "943:8:21"
                            },
                            {
                                "id": 2483,
                                "name": "Rebalance",
                                "nodeType": "EnumValue",
                                "src": "953:9:21"
                            },
                            {
                                "id": 2484,
                                "name": "Drawdown",
                                "nodeType": "EnumValue",
                                "src": "964:8:21"
                            }
                        ],
                        "name": "State",
                        "nodeType": "EnumDefinition",
                        "src": "921:53:21"
                    },
                    {
                        "canonicalName": "RebalancingLibrary.AuctionPriceParameters",
                        "id": 2494,
                        "members": [
                            {
                                "constant": false,
                                "id": 2487,
                                "name": "auctionStartTime",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1065:24:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2486,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1065:7:21",
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
                                "id": 2489,
                                "name": "auctionTimeToPivot",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1099:26:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2488,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1099:7:21",
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
                                "id": 2491,
                                "name": "auctionStartPrice",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1135:25:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2490,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1135:7:21",
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
                                "id": 2493,
                                "name": "auctionPivotPrice",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1170:25:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2492,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1170:7:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "AuctionPriceParameters",
                        "nodeType": "StructDefinition",
                        "scope": 2509,
                        "src": "1025:177:21",
                        "visibility": "public"
                    },
                    {
                        "canonicalName": "RebalancingLibrary.BiddingParameters",
                        "id": 2508,
                        "members": [
                            {
                                "constant": false,
                                "id": 2496,
                                "name": "minimumBid",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1243:18:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2495,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1243:7:21",
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
                                "id": 2498,
                                "name": "remainingCurrentSets",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1271:28:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2497,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1271:7:21",
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
                                "id": 2501,
                                "name": "combinedCurrentUnits",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1309:30:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2499,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1309:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2500,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1309:9:21",
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
                                "id": 2504,
                                "name": "combinedNextSetUnits",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1349:30:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2502,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1349:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2503,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1349:9:21",
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
                                "id": 2507,
                                "name": "combinedTokenArray",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1389:28:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2505,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1389:7:21",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2506,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1389:9:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                        "typeString": "address[]"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "BiddingParameters",
                        "nodeType": "StructDefinition",
                        "scope": 2509,
                        "src": "1208:216:21",
                        "visibility": "public"
                    }
                ],
                "scope": 2510,
                "src": "844:582:21"
            }
        ],
        "src": "597:830:21"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
        "exportedSymbols": {
            "RebalancingLibrary": [
                2509
            ]
        },
        "id": 2510,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2480,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:21"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title RebalancingLibrary\n@author Set Protocol\n * The RebalancingLibrary contains functions for facilitating the rebalancing process for\nRebalancing Set Tokens. Removes the old calculation functions\n ",
                "fullyImplemented": true,
                "id": 2509,
                "linearizedBaseContracts": [
                    2509
                ],
                "name": "RebalancingLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "RebalancingLibrary.State",
                        "id": 2485,
                        "members": [
                            {
                                "id": 2481,
                                "name": "Default",
                                "nodeType": "EnumValue",
                                "src": "934:7:21"
                            },
                            {
                                "id": 2482,
                                "name": "Proposal",
                                "nodeType": "EnumValue",
                                "src": "943:8:21"
                            },
                            {
                                "id": 2483,
                                "name": "Rebalance",
                                "nodeType": "EnumValue",
                                "src": "953:9:21"
                            },
                            {
                                "id": 2484,
                                "name": "Drawdown",
                                "nodeType": "EnumValue",
                                "src": "964:8:21"
                            }
                        ],
                        "name": "State",
                        "nodeType": "EnumDefinition",
                        "src": "921:53:21"
                    },
                    {
                        "canonicalName": "RebalancingLibrary.AuctionPriceParameters",
                        "id": 2494,
                        "members": [
                            {
                                "constant": false,
                                "id": 2487,
                                "name": "auctionStartTime",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1065:24:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2486,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1065:7:21",
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
                                "id": 2489,
                                "name": "auctionTimeToPivot",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1099:26:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2488,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1099:7:21",
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
                                "id": 2491,
                                "name": "auctionStartPrice",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1135:25:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2490,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1135:7:21",
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
                                "id": 2493,
                                "name": "auctionPivotPrice",
                                "nodeType": "VariableDeclaration",
                                "scope": 2494,
                                "src": "1170:25:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2492,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1170:7:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "AuctionPriceParameters",
                        "nodeType": "StructDefinition",
                        "scope": 2509,
                        "src": "1025:177:21",
                        "visibility": "public"
                    },
                    {
                        "canonicalName": "RebalancingLibrary.BiddingParameters",
                        "id": 2508,
                        "members": [
                            {
                                "constant": false,
                                "id": 2496,
                                "name": "minimumBid",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1243:18:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2495,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1243:7:21",
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
                                "id": 2498,
                                "name": "remainingCurrentSets",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1271:28:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2497,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1271:7:21",
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
                                "id": 2501,
                                "name": "combinedCurrentUnits",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1309:30:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2499,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1309:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2500,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1309:9:21",
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
                                "id": 2504,
                                "name": "combinedNextSetUnits",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1349:30:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2502,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1349:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2503,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1349:9:21",
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
                                "id": 2507,
                                "name": "combinedTokenArray",
                                "nodeType": "VariableDeclaration",
                                "scope": 2508,
                                "src": "1389:28:21",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2505,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1389:7:21",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2506,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "1389:9:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                        "typeString": "address[]"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "BiddingParameters",
                        "nodeType": "StructDefinition",
                        "scope": 2509,
                        "src": "1208:216:21",
                        "visibility": "public"
                    }
                ],
                "scope": 2510,
                "src": "844:582:21"
            }
        ],
        "src": "597:830:21"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.726Z",
    "devdoc": {
        "author": "Set Protocol * The RebalancingLibrary contains functions for facilitating the rebalancing process for Rebalancing Set Tokens. Removes the old calculation functions ",
        "methods": {},
        "title": "RebalancingLibrary"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=RebalancingLibrary.js.map