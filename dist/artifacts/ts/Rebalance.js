"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rebalance = {
    "contractName": "Rebalance",
    "abi": [],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Set Protocol * Types and functions for Rebalance-related data.\",\"methods\":{},\"title\":\"Rebalance\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":\"Rebalance\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820bc36073623d12fa42b6a3b0a22ebfc7f15d61ced442f7501949a9b6865d82bad0029",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820bc36073623d12fa42b6a3b0a22ebfc7f15d61ced442f7501949a9b6865d82bad0029",
    "sourceMap": "808:2046:20:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "808:2046:20:-;;;;;;;;",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { IRebalancingSetToken } from \"../interfaces/IRebalancingSetToken.sol\";\n\n\n/**\n * @title Rebalance\n * @author Set Protocol\n *\n * Types and functions for Rebalance-related data.\n */\nlibrary Rebalance {\n\n    struct TokenFlow {\n        address[] addresses;\n        uint256[] inflow;\n        uint256[] outflow;\n    }\n\n    function composeTokenFlow(\n        address[] memory _addresses,\n        uint256[] memory _inflow,\n        uint256[] memory _outflow\n    )\n        internal\n        pure\n        returns(TokenFlow memory)\n    {\n        return TokenFlow({addresses: _addresses, inflow: _inflow, outflow: _outflow });\n    }\n\n    function decomposeTokenFlow(TokenFlow memory _tokenFlow)\n        internal\n        pure\n        returns (address[] memory, uint256[] memory, uint256[] memory)\n    {\n        return (_tokenFlow.addresses, _tokenFlow.inflow, _tokenFlow.outflow);\n    }\n\n    function decomposeTokenFlowToBidPrice(TokenFlow memory _tokenFlow)\n        internal\n        pure\n        returns (uint256[] memory, uint256[] memory)\n    {\n        return (_tokenFlow.inflow, _tokenFlow.outflow);\n    }\n\n    /**\n     * Get token flows array of addresses, inflows and outflows\n     *\n     * @param    _rebalancingSetToken   The rebalancing Set Token instance\n     * @param    _quantity              The amount of currentSet to be rebalanced\n     * @return   combinedTokenArray     Array of token addresses\n     * @return   inflowArray            Array of amount of tokens inserted into system in bid\n     * @return   outflowArray           Array of amount of tokens returned from system in bid\n     */\n    function getTokenFlows(\n        IRebalancingSetToken _rebalancingSetToken,\n        uint256 _quantity\n    )\n        internal\n        view\n        returns (address[] memory, uint256[] memory, uint256[] memory)\n    {\n        // Get token addresses\n        address[] memory combinedTokenArray = _rebalancingSetToken.getCombinedTokenArray();\n\n        // Get inflow and outflow arrays for the given bid quantity\n        (\n            uint256[] memory inflowArray,\n            uint256[] memory outflowArray\n        ) = _rebalancingSetToken.getBidPrice(_quantity);\n\n        return (combinedTokenArray, inflowArray, outflowArray);\n    }\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/lib/Rebalance.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/lib/Rebalance.sol",
        "exportedSymbols": {
            "Rebalance": [
                2478
            ]
        },
        "id": 2479,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2361,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:20"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol",
                "file": "../interfaces/IRebalancingSetToken.sol",
                "id": 2363,
                "nodeType": "ImportDirective",
                "scope": 2479,
                "sourceUnit": 1952,
                "src": "621:78:20",
                "symbolAliases": [
                    {
                        "foreign": 2362,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title Rebalance\n@author Set Protocol\n * Types and functions for Rebalance-related data.",
                "fullyImplemented": true,
                "id": 2478,
                "linearizedBaseContracts": [
                    2478
                ],
                "name": "Rebalance",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "Rebalance.TokenFlow",
                        "id": 2373,
                        "members": [
                            {
                                "constant": false,
                                "id": 2366,
                                "name": "addresses",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "860:19:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2364,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "860:7:20",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2365,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "860:9:20",
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
                                "id": 2369,
                                "name": "inflow",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "889:16:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2367,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "889:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2368,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "889:9:20",
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
                                "id": 2372,
                                "name": "outflow",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "915:17:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2370,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "915:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2371,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "915:9:20",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                        "typeString": "uint256[]"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "TokenFlow",
                        "nodeType": "StructDefinition",
                        "scope": 2478,
                        "src": "833:106:20",
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2393,
                            "nodeType": "Block",
                            "src": "1151:95:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2388,
                                                "name": "_addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2376,
                                                "src": "1190:10:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2389,
                                                "name": "_inflow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2379,
                                                "src": "1210:7:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2390,
                                                "name": "_outflow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2382,
                                                "src": "1228:8:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            ],
                                            "id": 2387,
                                            "name": "TokenFlow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2373,
                                            "src": "1168:9:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_TokenFlow_$2373_storage_ptr_$",
                                                "typeString": "type(struct Rebalance.TokenFlow storage pointer)"
                                            }
                                        },
                                        "id": 2391,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [
                                            "addresses",
                                            "inflow",
                                            "outflow"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "1168:71:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_memory",
                                            "typeString": "struct Rebalance.TokenFlow memory"
                                        }
                                    },
                                    "functionReturnParameters": 2386,
                                    "id": 2392,
                                    "nodeType": "Return",
                                    "src": "1161:78:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2394,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "composeTokenFlow",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2383,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2376,
                                    "name": "_addresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "980:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2374,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "980:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2375,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "980:9:20",
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
                                    "id": 2379,
                                    "name": "_inflow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1017:24:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2377,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1017:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2378,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1017:9:20",
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
                                    "id": 2382,
                                    "name": "_outflow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1051:25:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2380,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1051:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2381,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1051:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "970:112:20"
                        },
                        "returnParameters": {
                            "id": 2386,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2385,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1129:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2384,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1129:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1128:18:20"
                        },
                        "scope": 2478,
                        "src": "945:301:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2416,
                            "nodeType": "Block",
                            "src": "1414:85:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2408,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1432:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2409,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "addresses",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2366,
                                                "src": "1432:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2410,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1454:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2411,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "inflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2369,
                                                "src": "1454:17:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2412,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1473:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2413,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "outflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2372,
                                                "src": "1473:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2414,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1431:61:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$",
                                            "typeString": "tuple(address[] memory,uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2407,
                                    "id": 2415,
                                    "nodeType": "Return",
                                    "src": "1424:68:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2417,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decomposeTokenFlow",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2397,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2396,
                                    "name": "_tokenFlow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1280:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2395,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1280:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1279:29:20"
                        },
                        "returnParameters": {
                            "id": 2407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2400,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1356:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2398,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1356:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2399,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1356:9:20",
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
                                    "id": 2403,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1374:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2401,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1374:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2402,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1374:9:20",
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
                                    "id": 2406,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1392:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2404,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1392:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2405,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1392:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1355:54:20"
                        },
                        "scope": 2478,
                        "src": "1252:247:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2434,
                            "nodeType": "Block",
                            "src": "1659:63:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2428,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2419,
                                                    "src": "1677:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2429,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "inflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2369,
                                                "src": "1677:17:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2430,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2419,
                                                    "src": "1696:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2431,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "outflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2372,
                                                "src": "1696:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2432,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1676:39:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$",
                                            "typeString": "tuple(uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2427,
                                    "id": 2433,
                                    "nodeType": "Return",
                                    "src": "1669:46:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2435,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decomposeTokenFlowToBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2419,
                                    "name": "_tokenFlow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1543:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2418,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1543:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1542:29:20"
                        },
                        "returnParameters": {
                            "id": 2427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2423,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1619:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2421,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1619:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2422,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1619:9:20",
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
                                    "id": 2426,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1637:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2424,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1637:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2425,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1637:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1618:36:20"
                        },
                        "scope": 2478,
                        "src": "1505:217:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2476,
                            "nodeType": "Block",
                            "src": "2437:415:20",
                            "statements": [
                                {
                                    "assignments": [
                                        2454
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2454,
                                            "name": "combinedTokenArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2478:35:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2452,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2478:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2453,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2478:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2458,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2455,
                                                "name": "_rebalancingSetToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2437,
                                                "src": "2516:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                                    "typeString": "contract IRebalancingSetToken"
                                                }
                                            },
                                            "id": 2456,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getCombinedTokenArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1921,
                                            "src": "2516:42:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$__$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "function () view external returns (address[] memory)"
                                            }
                                        },
                                        "id": 2457,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2516:44:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2478:82:20"
                                },
                                {
                                    "assignments": [
                                        2462,
                                        2465
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2462,
                                            "name": "inflowArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2653:28:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2460,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2653:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2461,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2653:9:20",
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
                                            "id": 2465,
                                            "name": "outflowArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2695:29:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2463,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2695:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2464,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2695:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2470,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2468,
                                                "name": "_quantity",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2439,
                                                "src": "2770:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2466,
                                                "name": "_rebalancingSetToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2437,
                                                "src": "2737:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                                    "typeString": "contract IRebalancingSetToken"
                                                }
                                            },
                                            "id": 2467,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getBidPrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1950,
                                            "src": "2737:32:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                "typeString": "function (uint256) view external returns (uint256[] memory,uint256[] memory)"
                                            }
                                        },
                                        "id": 2469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2737:43:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                            "typeString": "tuple(uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2639:141:20"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2471,
                                                "name": "combinedTokenArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2454,
                                                "src": "2799:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2472,
                                                "name": "inflowArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2462,
                                                "src": "2819:11:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2473,
                                                "name": "outflowArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2465,
                                                "src": "2832:12:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2474,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "2798:47:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                            "typeString": "tuple(address[] memory,uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2450,
                                    "id": 2475,
                                    "nodeType": "Return",
                                    "src": "2791:54:20"
                                }
                            ]
                        },
                        "documentation": "Get token flows array of addresses, inflows and outflows\n     * @param    _rebalancingSetToken   The rebalancing Set Token instance\n@param    _quantity              The amount of currentSet to be rebalanced\n@return   combinedTokenArray     Array of token addresses\n@return   inflowArray            Array of amount of tokens inserted into system in bid\n@return   outflowArray           Array of amount of tokens returned from system in bid",
                        "id": 2477,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTokenFlows",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2437,
                                    "name": "_rebalancingSetToken",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2257:41:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                        "typeString": "contract IRebalancingSetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2436,
                                        "name": "IRebalancingSetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1951,
                                        "src": "2257:20:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                            "typeString": "contract IRebalancingSetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2439,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2308:17:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2438,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2308:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2247:84:20"
                        },
                        "returnParameters": {
                            "id": 2450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2443,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2379:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2441,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2379:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2442,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2379:9:20",
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
                                    "id": 2446,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2397:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2444,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2397:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2445,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2397:9:20",
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
                                    "id": 2449,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2415:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2447,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2415:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2448,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2415:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2378:54:20"
                        },
                        "scope": 2478,
                        "src": "2225:627:20",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 2479,
                "src": "808:2046:20"
            }
        ],
        "src": "597:2258:20"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/lib/Rebalance.sol",
        "exportedSymbols": {
            "Rebalance": [
                2478
            ]
        },
        "id": 2479,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2361,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:20"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol",
                "file": "../interfaces/IRebalancingSetToken.sol",
                "id": 2363,
                "nodeType": "ImportDirective",
                "scope": 2479,
                "sourceUnit": 1952,
                "src": "621:78:20",
                "symbolAliases": [
                    {
                        "foreign": 2362,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title Rebalance\n@author Set Protocol\n * Types and functions for Rebalance-related data.",
                "fullyImplemented": true,
                "id": 2478,
                "linearizedBaseContracts": [
                    2478
                ],
                "name": "Rebalance",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "Rebalance.TokenFlow",
                        "id": 2373,
                        "members": [
                            {
                                "constant": false,
                                "id": 2366,
                                "name": "addresses",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "860:19:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2364,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "860:7:20",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2365,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "860:9:20",
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
                                "id": 2369,
                                "name": "inflow",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "889:16:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2367,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "889:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2368,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "889:9:20",
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
                                "id": 2372,
                                "name": "outflow",
                                "nodeType": "VariableDeclaration",
                                "scope": 2373,
                                "src": "915:17:20",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                    "typeString": "uint256[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 2370,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "915:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2371,
                                    "length": null,
                                    "nodeType": "ArrayTypeName",
                                    "src": "915:9:20",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                        "typeString": "uint256[]"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "TokenFlow",
                        "nodeType": "StructDefinition",
                        "scope": 2478,
                        "src": "833:106:20",
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2393,
                            "nodeType": "Block",
                            "src": "1151:95:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2388,
                                                "name": "_addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2376,
                                                "src": "1190:10:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2389,
                                                "name": "_inflow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2379,
                                                "src": "1210:7:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2390,
                                                "name": "_outflow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2382,
                                                "src": "1228:8:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            ],
                                            "id": 2387,
                                            "name": "TokenFlow",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2373,
                                            "src": "1168:9:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_TokenFlow_$2373_storage_ptr_$",
                                                "typeString": "type(struct Rebalance.TokenFlow storage pointer)"
                                            }
                                        },
                                        "id": 2391,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [
                                            "addresses",
                                            "inflow",
                                            "outflow"
                                        ],
                                        "nodeType": "FunctionCall",
                                        "src": "1168:71:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_memory",
                                            "typeString": "struct Rebalance.TokenFlow memory"
                                        }
                                    },
                                    "functionReturnParameters": 2386,
                                    "id": 2392,
                                    "nodeType": "Return",
                                    "src": "1161:78:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2394,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "composeTokenFlow",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2383,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2376,
                                    "name": "_addresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "980:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2374,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "980:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2375,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "980:9:20",
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
                                    "id": 2379,
                                    "name": "_inflow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1017:24:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2377,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1017:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2378,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1017:9:20",
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
                                    "id": 2382,
                                    "name": "_outflow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1051:25:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2380,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1051:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2381,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1051:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "970:112:20"
                        },
                        "returnParameters": {
                            "id": 2386,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2385,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2394,
                                    "src": "1129:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2384,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1129:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1128:18:20"
                        },
                        "scope": 2478,
                        "src": "945:301:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2416,
                            "nodeType": "Block",
                            "src": "1414:85:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2408,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1432:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2409,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "addresses",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2366,
                                                "src": "1432:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2410,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1454:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2411,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "inflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2369,
                                                "src": "1454:17:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2412,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2396,
                                                    "src": "1473:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2413,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "outflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2372,
                                                "src": "1473:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2414,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1431:61:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$",
                                            "typeString": "tuple(address[] memory,uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2407,
                                    "id": 2415,
                                    "nodeType": "Return",
                                    "src": "1424:68:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2417,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decomposeTokenFlow",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2397,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2396,
                                    "name": "_tokenFlow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1280:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2395,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1280:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1279:29:20"
                        },
                        "returnParameters": {
                            "id": 2407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2400,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1356:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2398,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1356:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2399,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1356:9:20",
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
                                    "id": 2403,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1374:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2401,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1374:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2402,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1374:9:20",
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
                                    "id": 2406,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2417,
                                    "src": "1392:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2404,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1392:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2405,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1392:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1355:54:20"
                        },
                        "scope": 2478,
                        "src": "1252:247:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2434,
                            "nodeType": "Block",
                            "src": "1659:63:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2428,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2419,
                                                    "src": "1677:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2429,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "inflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2369,
                                                "src": "1677:17:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2430,
                                                    "name": "_tokenFlow",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2419,
                                                    "src": "1696:10:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                                        "typeString": "struct Rebalance.TokenFlow memory"
                                                    }
                                                },
                                                "id": 2431,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "outflow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2372,
                                                "src": "1696:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2432,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1676:39:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_$_t_array$_t_uint256_$dyn_memory_$",
                                            "typeString": "tuple(uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2427,
                                    "id": 2433,
                                    "nodeType": "Return",
                                    "src": "1669:46:20"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2435,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decomposeTokenFlowToBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2419,
                                    "name": "_tokenFlow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1543:27:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenFlow_$2373_memory_ptr",
                                        "typeString": "struct Rebalance.TokenFlow"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2418,
                                        "name": "TokenFlow",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2373,
                                        "src": "1543:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_TokenFlow_$2373_storage_ptr",
                                            "typeString": "struct Rebalance.TokenFlow"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1542:29:20"
                        },
                        "returnParameters": {
                            "id": 2427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2423,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1619:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2421,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1619:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2422,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1619:9:20",
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
                                    "id": 2426,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2435,
                                    "src": "1637:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2424,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1637:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2425,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1637:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1618:36:20"
                        },
                        "scope": 2478,
                        "src": "1505:217:20",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2476,
                            "nodeType": "Block",
                            "src": "2437:415:20",
                            "statements": [
                                {
                                    "assignments": [
                                        2454
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2454,
                                            "name": "combinedTokenArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2478:35:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2452,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2478:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2453,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2478:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2458,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2455,
                                                "name": "_rebalancingSetToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2437,
                                                "src": "2516:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                                    "typeString": "contract IRebalancingSetToken"
                                                }
                                            },
                                            "id": 2456,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getCombinedTokenArray",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1921,
                                            "src": "2516:42:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$__$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                                                "typeString": "function () view external returns (address[] memory)"
                                            }
                                        },
                                        "id": 2457,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2516:44:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2478:82:20"
                                },
                                {
                                    "assignments": [
                                        2462,
                                        2465
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2462,
                                            "name": "inflowArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2653:28:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2460,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2653:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2461,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2653:9:20",
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
                                            "id": 2465,
                                            "name": "outflowArray",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2476,
                                            "src": "2695:29:20",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2463,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2695:7:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2464,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2695:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2470,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2468,
                                                "name": "_quantity",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2439,
                                                "src": "2770:9:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2466,
                                                "name": "_rebalancingSetToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2437,
                                                "src": "2737:20:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                                    "typeString": "contract IRebalancingSetToken"
                                                }
                                            },
                                            "id": 2467,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getBidPrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1950,
                                            "src": "2737:32:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                "typeString": "function (uint256) view external returns (uint256[] memory,uint256[] memory)"
                                            }
                                        },
                                        "id": 2469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2737:43:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                            "typeString": "tuple(uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2639:141:20"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2471,
                                                "name": "combinedTokenArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2454,
                                                "src": "2799:18:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2472,
                                                "name": "inflowArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2462,
                                                "src": "2819:11:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2473,
                                                "name": "outflowArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2465,
                                                "src": "2832:12:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            }
                                        ],
                                        "id": 2474,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "2798:47:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                            "typeString": "tuple(address[] memory,uint256[] memory,uint256[] memory)"
                                        }
                                    },
                                    "functionReturnParameters": 2450,
                                    "id": 2475,
                                    "nodeType": "Return",
                                    "src": "2791:54:20"
                                }
                            ]
                        },
                        "documentation": "Get token flows array of addresses, inflows and outflows\n     * @param    _rebalancingSetToken   The rebalancing Set Token instance\n@param    _quantity              The amount of currentSet to be rebalanced\n@return   combinedTokenArray     Array of token addresses\n@return   inflowArray            Array of amount of tokens inserted into system in bid\n@return   outflowArray           Array of amount of tokens returned from system in bid",
                        "id": 2477,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTokenFlows",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2437,
                                    "name": "_rebalancingSetToken",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2257:41:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                        "typeString": "contract IRebalancingSetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2436,
                                        "name": "IRebalancingSetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1951,
                                        "src": "2257:20:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetToken_$1951",
                                            "typeString": "contract IRebalancingSetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2439,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2308:17:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2438,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2308:7:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2247:84:20"
                        },
                        "returnParameters": {
                            "id": 2450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2443,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2379:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2441,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2379:7:20",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2442,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2379:9:20",
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
                                    "id": 2446,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2397:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2444,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2397:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2445,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2397:9:20",
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
                                    "id": 2449,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2477,
                                    "src": "2415:16:20",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2447,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2415:7:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2448,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2415:9:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2378:54:20"
                        },
                        "scope": 2478,
                        "src": "2225:627:20",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 2479,
                "src": "808:2046:20"
            }
        ],
        "src": "597:2258:20"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.720Z",
    "devdoc": {
        "author": "Set Protocol * Types and functions for Rebalance-related data.",
        "methods": {},
        "title": "Rebalance"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=Rebalance.js.map