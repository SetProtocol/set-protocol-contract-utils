"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISocialAllocator = {
    "contractName": "ISocialAllocator",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_targetBaseAssetAllocation",
                    "type": "uint256"
                }
            ],
            "name": "determineNewAllocation",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_collateralSet",
                    "type": "address"
                }
            ],
            "name": "calculateCollateralSetValue",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_collateralSet\",\"type\":\"address\"}],\"name\":\"calculateCollateralSetValue\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_targetBaseAssetAllocation\",\"type\":\"uint256\"}],\"name\":\"determineNewAllocation\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for interacting with SocialAllocator contracts\",\"methods\":{},\"title\":\"ISocialAllocator\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\":\"ISocialAllocator\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\":{\"keccak256\":\"0x814f90da260a6a7f2306339d0bd6ab282f4cc7f2b13c525537989ed2b4967cc8\",\"urls\":[\"bzzr://3d7ea70e8d36639cc1f37e05d3cbc9b5a5e6bc6918aa982cab29bf12e7351fc3\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { ISetToken } from \"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\";\n\n/**\n * @title ISocialAllocator\n * @author Set Protocol\n *\n * Interface for interacting with SocialAllocator contracts\n */\ninterface ISocialAllocator {\n\n    /*\n     * Determine the next allocation to rebalance into.\n     *\n     * @param  _targetBaseAssetAllocation       Target allocation of the base asset\n     * @return ISetToken                        The address of the proposed nextSet\n     */\n    function determineNewAllocation(\n        uint256 _targetBaseAssetAllocation\n    )\n        external\n        returns (ISetToken);\n\n    /*\n     * Calculate value of passed collateral set.\n     *\n     * @param  _collateralSet        Instance of current set collateralizing RebalancingSetToken\n     * @return uint256               USD value of passed Set\n     */\n    function calculateCollateralSetValue(\n        ISetToken _collateralSet\n    )\n        external\n        view\n        returns(uint256);\n}",
    "sourcePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
    "ast": {
        "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
        "exportedSymbols": {
            "ISocialAllocator": [
                2578
            ]
        },
        "id": 2579,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2560,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:23"
            },
            {
                "id": 2561,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:23"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "id": 2563,
                "nodeType": "ImportDirective",
                "scope": 2579,
                "sourceUnit": 2360,
                "src": "657:91:23",
                "symbolAliases": [
                    {
                        "foreign": 2562,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISocialAllocator\n@author Set Protocol\n * Interface for interacting with SocialAllocator contracts",
                "fullyImplemented": false,
                "id": 2578,
                "linearizedBaseContracts": [
                    2578
                ],
                "name": "ISocialAllocator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2570,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "determineNewAllocation",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2565,
                                    "name": "_targetBaseAssetAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2570,
                                    "src": "1193:34:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2564,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1193:7:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1183:50:23"
                        },
                        "returnParameters": {
                            "id": 2569,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2568,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2570,
                                    "src": "1268:9:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2567,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1268:9:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1267:11:23"
                        },
                        "scope": 2578,
                        "src": "1152:127:23",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2577,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateCollateralSetValue",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2572,
                                    "name": "_collateralSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2577,
                                    "src": "1560:24:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2571,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1560:9:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1550:40:23"
                        },
                        "returnParameters": {
                            "id": 2576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2575,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2577,
                                    "src": "1637:7:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2574,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1637:7:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1636:9:23"
                        },
                        "scope": 2578,
                        "src": "1514:132:23",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2579,
                "src": "872:776:23"
            }
        ],
        "src": "597:1051:23"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
        "exportedSymbols": {
            "ISocialAllocator": [
                2578
            ]
        },
        "id": 2579,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2560,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:23"
            },
            {
                "id": 2561,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:23"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "id": 2563,
                "nodeType": "ImportDirective",
                "scope": 2579,
                "sourceUnit": 2360,
                "src": "657:91:23",
                "symbolAliases": [
                    {
                        "foreign": 2562,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISocialAllocator\n@author Set Protocol\n * Interface for interacting with SocialAllocator contracts",
                "fullyImplemented": false,
                "id": 2578,
                "linearizedBaseContracts": [
                    2578
                ],
                "name": "ISocialAllocator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2570,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "determineNewAllocation",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2565,
                                    "name": "_targetBaseAssetAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2570,
                                    "src": "1193:34:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2564,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1193:7:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1183:50:23"
                        },
                        "returnParameters": {
                            "id": 2569,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2568,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2570,
                                    "src": "1268:9:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2567,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1268:9:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1267:11:23"
                        },
                        "scope": 2578,
                        "src": "1152:127:23",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2577,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateCollateralSetValue",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2572,
                                    "name": "_collateralSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2577,
                                    "src": "1560:24:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2571,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1560:9:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1550:40:23"
                        },
                        "returnParameters": {
                            "id": 2576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2575,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2577,
                                    "src": "1637:7:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2574,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1637:7:23",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1636:9:23"
                        },
                        "scope": 2578,
                        "src": "1514:132:23",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2579,
                "src": "872:776:23"
            }
        ],
        "src": "597:1051:23"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.728Z",
    "devdoc": {
        "author": "Set Protocol * Interface for interacting with SocialAllocator contracts",
        "methods": {},
        "title": "ISocialAllocator"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ISocialAllocator.js.map