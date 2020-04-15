"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonValidationsLibraryMock = {
    "contractName": "CommonValidationsLibraryMock",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_arr1",
                    "type": "address[]"
                }
            ],
            "name": "testValidateNonEmpty",
            "outputs": [],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addressArray",
                    "type": "address[]"
                },
                {
                    "name": "_uint256Array",
                    "type": "uint256[]"
                }
            ],
            "name": "testValidateEqualLength",
            "outputs": [],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_arr1\",\"type\":\"address[]\"}],\"name\":\"testValidateNonEmpty\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_addressArray\",\"type\":\"address[]\"},{\"name\":\"_uint256Array\",\"type\":\"uint256[]\"}],\"name\":\"testValidateEqualLength\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonValidationsLibraryMock.sol\":\"CommonValidationsLibraryMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol\":{\"keccak256\":\"0x757ec17c9c86093af15b08fbdf99ee15203c0e64a3185d2e4745e9a6be1b2d20\",\"urls\":[\"bzzr://f14bb668c341da6994edece64b35601e000591434eee90c9454cb9a1f9f7d60e\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonValidationsLibraryMock.sol\":{\"keccak256\":\"0xe101ec7e5d339696eac221b226d14e069f5221c3a9fe222edaf0c7c5b89b0acb\",\"urls\":[\"bzzr://7c01a0c72babab8ecacb068f217a48c36a7265dbaea45868b37fec061c1ac598\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5061030a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100395760e060020a6000350463a14e7546811461003e578063abca078c146100b0575b600080fd5b6100ae6004803603602081101561005457600080fd5b81019060208101813564010000000081111561006f57600080fd5b82018360208201111561008157600080fd5b803590602001918460208302840111640100000000831117156100a357600080fd5b509092509050610172565b005b6100ae600480360360408110156100c657600080fd5b8101906020810181356401000000008111156100e157600080fd5b8201836020820111156100f357600080fd5b8035906020019184602083028401116401000000008311171561011557600080fd5b91939092909160208101903564010000000081111561013357600080fd5b82018360208201111561014557600080fd5b8035906020019184602083028401116401000000008311171561016757600080fd5b50909250905061020f565b73__CommonValidationsLibrary______________6364cf166f83836040518363ffffffff1660e060020a02815260040180806020018281038252848482818152602001925060200280828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b1580156101f357600080fd5b505af4158015610207573d6000803e3d6000fd5b505050505050565b73__CommonValidationsLibrary______________632c183f43858585856040518563ffffffff1660e060020a0281526004018080602001806020018381038352878782818152602001925060200280828437600083820152601f01601f19169091018481038352858152602090810191508690860280828437600081840152601f19601f820116905080830192505050965050505050505060006040518083038186803b1580156102c057600080fd5b505af41580156102d4573d6000803e3d6000fd5b505050505050505056fea165627a7a723058200455fb58492156acb2874f33167acd2e9eeb5abf7264936523339a4faed7f0270029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100395760e060020a6000350463a14e7546811461003e578063abca078c146100b0575b600080fd5b6100ae6004803603602081101561005457600080fd5b81019060208101813564010000000081111561006f57600080fd5b82018360208201111561008157600080fd5b803590602001918460208302840111640100000000831117156100a357600080fd5b509092509050610172565b005b6100ae600480360360408110156100c657600080fd5b8101906020810181356401000000008111156100e157600080fd5b8201836020820111156100f357600080fd5b8035906020019184602083028401116401000000008311171561011557600080fd5b91939092909160208101903564010000000081111561013357600080fd5b82018360208201111561014557600080fd5b8035906020019184602083028401116401000000008311171561016757600080fd5b50909250905061020f565b73__CommonValidationsLibrary______________6364cf166f83836040518363ffffffff1660e060020a02815260040180806020018281038252848482818152602001925060200280828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b1580156101f357600080fd5b505af4158015610207573d6000803e3d6000fd5b505050505050565b73__CommonValidationsLibrary______________632c183f43858585856040518563ffffffff1660e060020a0281526004018080602001806020018381038352878782818152602001925060200280828437600083820152601f01601f19169091018481038352858152602090810191508690860280828437600081840152601f19601f820116905080830192505050965050505050505060006040518083038186803b1580156102c057600080fd5b505af41580156102d4573d6000803e3d6000fd5b505050505050505056fea165627a7a723058200455fb58492156acb2874f33167acd2e9eeb5abf7264936523339a4faed7f0270029",
    "sourceMap": "105:469:17:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;105:469:17;;;;;;;",
    "deployedSourceMap": "105:469:17:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;105:469:17;;;;;;-1:-1:-1;;;105:469:17;;;;;;;;;;;;;;;;;149:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;149:169:17;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;149:169:17;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;149:169:17;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;149:169:17;;-1:-1:-1;149:169:17;-1:-1:-1;149:169:17;:::i;:::-;;324:248;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;324:248:17;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;324:248:17;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;324:248:17;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;324:248:17;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;324:248:17;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;324:248:17;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;324:248:17;;-1:-1:-1;324:248:17;-1:-1:-1;324:248:17;:::i;149:169::-;263:24;:41;305:5;;263:48;;;;;-1:-1:-1;;;263:48:17;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;263:48:17;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;263:48:17;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;263:48:17;;;;149:169;;:::o;324:248::-;491:24;:44;536:13;;551;;491:74;;;;;-1:-1:-1;;;491:74:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;;74:27;137:4;117:14;-1:-1;;113:30;157:16;;;491:74:17;;;;;;;;;;;;;-1:-1:-1;491:74:17;;;;;;;1:33:-1;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;491:74:17;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;491:74:17;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;491:74:17;;;;324:248;;;;:::o",
    "source": "pragma solidity 0.5.7;\n\nimport { CommonValidationsLibrary } from \"../lib/CommonValidationsLibrary.sol\";\n\ncontract CommonValidationsLibraryMock {\n    function testValidateNonEmpty(\n        address[] calldata _arr1\n    )\n        external\n        pure\n    {\n        CommonValidationsLibrary.validateNonEmpty(_arr1);\n    }\n\n    function testValidateEqualLength(\n        address[] calldata _addressArray,\n        uint256[] calldata _uint256Array\n    )\n        external\n        pure\n    {\n        CommonValidationsLibrary.validateEqualLength(_addressArray, _uint256Array);\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonValidationsLibraryMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonValidationsLibraryMock.sol",
        "exportedSymbols": {
            "CommonValidationsLibraryMock": [
                2822
            ]
        },
        "id": 2823,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2789,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:17"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol",
                "file": "../lib/CommonValidationsLibrary.sol",
                "id": 2791,
                "nodeType": "ImportDirective",
                "scope": 2823,
                "sourceUnit": 1663,
                "src": "24:79:17",
                "symbolAliases": [
                    {
                        "foreign": 2790,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2822,
                "linearizedBaseContracts": [
                    2822
                ],
                "name": "CommonValidationsLibraryMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2803,
                            "nodeType": "Block",
                            "src": "253:65:17",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2800,
                                                "name": "_arr1",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2794,
                                                "src": "305:5:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2797,
                                                "name": "CommonValidationsLibrary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1662,
                                                "src": "263:24:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonValidationsLibrary_$1662_$",
                                                    "typeString": "type(library CommonValidationsLibrary)"
                                                }
                                            },
                                            "id": 2799,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "validateNonEmpty",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1642,
                                            "src": "263:41:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_delegatecall_pure$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                                                "typeString": "function (address[] memory) pure"
                                            }
                                        },
                                        "id": 2801,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "263:48:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2802,
                                    "nodeType": "ExpressionStatement",
                                    "src": "263:48:17"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2804,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testValidateNonEmpty",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2794,
                                    "name": "_arr1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2804,
                                    "src": "188:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2792,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "188:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2793,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "188:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "178:40:17"
                        },
                        "returnParameters": {
                            "id": 2796,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "253:0:17"
                        },
                        "scope": 2822,
                        "src": "149:169:17",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2820,
                            "nodeType": "Block",
                            "src": "481:91:17",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2816,
                                                "name": "_addressArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2807,
                                                "src": "536:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2817,
                                                "name": "_uint256Array",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2810,
                                                "src": "551:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2813,
                                                "name": "CommonValidationsLibrary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1662,
                                                "src": "491:24:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonValidationsLibrary_$1662_$",
                                                    "typeString": "type(library CommonValidationsLibrary)"
                                                }
                                            },
                                            "id": 2815,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "validateEqualLength",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1661,
                                            "src": "491:44:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_delegatecall_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                                                "typeString": "function (address[] memory,uint256[] memory) pure"
                                            }
                                        },
                                        "id": 2818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "491:74:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2819,
                                    "nodeType": "ExpressionStatement",
                                    "src": "491:74:17"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2821,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testValidateEqualLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2811,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2807,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2821,
                                    "src": "366:32:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2805,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "366:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2806,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "366:9:17",
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
                                    "id": 2810,
                                    "name": "_uint256Array",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2821,
                                    "src": "408:32:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2808,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "408:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2809,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "408:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "356:90:17"
                        },
                        "returnParameters": {
                            "id": 2812,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "481:0:17"
                        },
                        "scope": 2822,
                        "src": "324:248:17",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2823,
                "src": "105:469:17"
            }
        ],
        "src": "0:575:17"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonValidationsLibraryMock.sol",
        "exportedSymbols": {
            "CommonValidationsLibraryMock": [
                2822
            ]
        },
        "id": 2823,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2789,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:17"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol",
                "file": "../lib/CommonValidationsLibrary.sol",
                "id": 2791,
                "nodeType": "ImportDirective",
                "scope": 2823,
                "sourceUnit": 1663,
                "src": "24:79:17",
                "symbolAliases": [
                    {
                        "foreign": 2790,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2822,
                "linearizedBaseContracts": [
                    2822
                ],
                "name": "CommonValidationsLibraryMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2803,
                            "nodeType": "Block",
                            "src": "253:65:17",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2800,
                                                "name": "_arr1",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2794,
                                                "src": "305:5:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2797,
                                                "name": "CommonValidationsLibrary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1662,
                                                "src": "263:24:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonValidationsLibrary_$1662_$",
                                                    "typeString": "type(library CommonValidationsLibrary)"
                                                }
                                            },
                                            "id": 2799,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "validateNonEmpty",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1642,
                                            "src": "263:41:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_delegatecall_pure$_t_array$_t_address_$dyn_memory_ptr_$returns$__$",
                                                "typeString": "function (address[] memory) pure"
                                            }
                                        },
                                        "id": 2801,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "263:48:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2802,
                                    "nodeType": "ExpressionStatement",
                                    "src": "263:48:17"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2804,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testValidateNonEmpty",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2794,
                                    "name": "_arr1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2804,
                                    "src": "188:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2792,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "188:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2793,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "188:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "178:40:17"
                        },
                        "returnParameters": {
                            "id": 2796,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "253:0:17"
                        },
                        "scope": 2822,
                        "src": "149:169:17",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2820,
                            "nodeType": "Block",
                            "src": "481:91:17",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2816,
                                                "name": "_addressArray",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2807,
                                                "src": "536:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2817,
                                                "name": "_uint256Array",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2810,
                                                "src": "551:13:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2813,
                                                "name": "CommonValidationsLibrary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1662,
                                                "src": "491:24:17",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonValidationsLibrary_$1662_$",
                                                    "typeString": "type(library CommonValidationsLibrary)"
                                                }
                                            },
                                            "id": 2815,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "validateEqualLength",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1661,
                                            "src": "491:44:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_delegatecall_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                                                "typeString": "function (address[] memory,uint256[] memory) pure"
                                            }
                                        },
                                        "id": 2818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "491:74:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2819,
                                    "nodeType": "ExpressionStatement",
                                    "src": "491:74:17"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2821,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testValidateEqualLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2811,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2807,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2821,
                                    "src": "366:32:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2805,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "366:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2806,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "366:9:17",
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
                                    "id": 2810,
                                    "name": "_uint256Array",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2821,
                                    "src": "408:32:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2808,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "408:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2809,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "408:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "356:90:17"
                        },
                        "returnParameters": {
                            "id": 2812,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "481:0:17"
                        },
                        "scope": 2822,
                        "src": "324:248:17",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2823,
                "src": "105:469:17"
            }
        ],
        "src": "0:575:17"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.928Z",
    "devdoc": {
        "methods": {}
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=CommonValidationsLibraryMock.js.map