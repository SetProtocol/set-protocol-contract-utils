"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialTradingLibrary = {
    "contractName": "SocialTradingLibrary",
    "abi": [],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Set Protocol * Library for use in SocialTrading system.\",\"methods\":{},\"title\":\"SocialTradingLibrary\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol\":\"SocialTradingLibrary\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\":{\"keccak256\":\"0x814f90da260a6a7f2306339d0bd6ab282f4cc7f2b13c525537989ed2b4967cc8\",\"urls\":[\"bzzr://3d7ea70e8d36639cc1f37e05d3cbc9b5a5e6bc6918aa982cab29bf12e7351fc3\"]},\"set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol\":{\"keccak256\":\"0x842d0e504e7a219a3f2537f149f8535e3f6d0ad9c6a23c9f8367b02e1cca94da\",\"urls\":[\"bzzr://f096b40a2880280e370f465a7f348032a587aaf57b1120fd3c206565484b263f\"]}},\"version\":1}",
    "bytecode": "0x605a6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a7230582071edb372ebb207119c3e54161d5b7b11d062fb97353acea2bcb14d79a14b1dda6c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea265627a7a7230582071edb372ebb207119c3e54161d5b7b11d062fb97353acea2bcb14d79a14b1dda6c6578706572696d656e74616cf50037",
    "sourceMap": "840:635:27:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "840:635:27:-;;;;;;;;",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { ISocialAllocator } from \"../allocators/ISocialAllocator.sol\";\n\n\n/**\n * @title SocialTradingLibrary\n * @author Set Protocol\n *\n * Library for use in SocialTrading system.\n */\nlibrary SocialTradingLibrary {\n\n    /* ============ Structs ============ */\n    struct PoolInfo {\n        address trader;                 // Address allowed to make admin and allocation decisions\n        ISocialAllocator allocator;     // Allocator used to make collateral Sets, defines asset pair being used\n        uint256 currentAllocation;      // Current base asset allocation of tradingPool\n        uint256 newEntryFee;            // New fee percentage to change to after time lock passes, defaults to 0\n        uint256 feeUpdateTimestamp;     // Timestamp when fee update process can be finalized, defaults to maxUint256\n    }\n}",
    "sourcePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
    "ast": {
        "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
        "exportedSymbols": {
            "SocialTradingLibrary": [
                2697
            ]
        },
        "id": 2698,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2682,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:27"
            },
            {
                "id": 2683,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:27"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "../allocators/ISocialAllocator.sol",
                "id": 2685,
                "nodeType": "ImportDirective",
                "scope": 2698,
                "sourceUnit": 2579,
                "src": "657:70:27",
                "symbolAliases": [
                    {
                        "foreign": 2684,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title SocialTradingLibrary\n@author Set Protocol\n * Library for use in SocialTrading system.",
                "fullyImplemented": true,
                "id": 2697,
                "linearizedBaseContracts": [
                    2697
                ],
                "name": "SocialTradingLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "SocialTradingLibrary.PoolInfo",
                        "id": 2696,
                        "members": [
                            {
                                "constant": false,
                                "id": 2687,
                                "name": "trader",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "946:14:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2686,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "946:7:27",
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
                                "id": 2689,
                                "name": "allocator",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1044:26:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                    "typeString": "contract ISocialAllocator"
                                },
                                "typeName": {
                                    "contractScope": null,
                                    "id": 2688,
                                    "name": "ISocialAllocator",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 2578,
                                    "src": "1044:16:27",
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
                                "id": 2691,
                                "name": "currentAllocation",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1157:25:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2690,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1157:7:27",
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
                                "id": 2693,
                                "name": "newEntryFee",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1245:19:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2692,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1245:7:27",
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
                                "id": 2695,
                                "name": "feeUpdateTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1358:26:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2694,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1358:7:27",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "PoolInfo",
                        "nodeType": "StructDefinition",
                        "scope": 2697,
                        "src": "920:553:27",
                        "visibility": "public"
                    }
                ],
                "scope": 2698,
                "src": "840:635:27"
            }
        ],
        "src": "597:878:27"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
        "exportedSymbols": {
            "SocialTradingLibrary": [
                2697
            ]
        },
        "id": 2698,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2682,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:27"
            },
            {
                "id": 2683,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:27"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "../allocators/ISocialAllocator.sol",
                "id": 2685,
                "nodeType": "ImportDirective",
                "scope": 2698,
                "sourceUnit": 2579,
                "src": "657:70:27",
                "symbolAliases": [
                    {
                        "foreign": 2684,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title SocialTradingLibrary\n@author Set Protocol\n * Library for use in SocialTrading system.",
                "fullyImplemented": true,
                "id": 2697,
                "linearizedBaseContracts": [
                    2697
                ],
                "name": "SocialTradingLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "SocialTradingLibrary.PoolInfo",
                        "id": 2696,
                        "members": [
                            {
                                "constant": false,
                                "id": 2687,
                                "name": "trader",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "946:14:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2686,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "946:7:27",
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
                                "id": 2689,
                                "name": "allocator",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1044:26:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                    "typeString": "contract ISocialAllocator"
                                },
                                "typeName": {
                                    "contractScope": null,
                                    "id": 2688,
                                    "name": "ISocialAllocator",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 2578,
                                    "src": "1044:16:27",
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
                                "id": 2691,
                                "name": "currentAllocation",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1157:25:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2690,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1157:7:27",
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
                                "id": 2693,
                                "name": "newEntryFee",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1245:19:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2692,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1245:7:27",
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
                                "id": 2695,
                                "name": "feeUpdateTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 2696,
                                "src": "1358:26:27",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2694,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1358:7:27",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "PoolInfo",
                        "nodeType": "StructDefinition",
                        "scope": 2697,
                        "src": "920:553:27",
                        "visibility": "public"
                    }
                ],
                "scope": 2698,
                "src": "840:635:27"
            }
        ],
        "src": "597:878:27"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.730Z",
    "devdoc": {
        "author": "Set Protocol * Library for use in SocialTrading system.",
        "methods": {},
        "title": "SocialTradingLibrary"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=SocialTradingLibrary.js.map