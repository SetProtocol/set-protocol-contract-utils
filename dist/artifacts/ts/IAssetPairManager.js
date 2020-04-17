"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAssetPairManager = {
    "contractName": "IAssetPairManager",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "signalConfirmationMinTime",
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
            "name": "signalConfirmationMaxTime",
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
            "name": "recentInitialProposeTimestamp",
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"recentInitialProposeTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signalConfirmationMaxTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"signalConfirmationMinTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for interacting with AssetPairManager contracts\",\"methods\":{},\"title\":\"IAssetPairManager\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol\":\"IAssetPairManager\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol\":{\"keccak256\":\"0xe91b5a887f1ab039a8bbdd3e142e9d690a73a09cb7e39b9b6cb79f4d762af64b\",\"urls\":[\"bzzr://8c32db51bd5e3ac522f269933f11fc336efbc84985489c00348014fffb66c200\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\n/**\n * @title IAssetPairManager\n * @author Set Protocol\n *\n * Interface for interacting with AssetPairManager contracts\n */\ninterface IAssetPairManager {\n    function signalConfirmationMinTime() external view returns (uint256);\n    function signalConfirmationMaxTime() external view returns (uint256);\n    function recentInitialProposeTimestamp() external view returns (uint256);\n}\n\n",
    "sourcePath": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
    "ast": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
        "exportedSymbols": {
            "IAssetPairManager": [
                2597
            ]
        },
        "id": 2598,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2580,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:24"
            },
            {
                "id": 2581,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:24"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IAssetPairManager\n@author Set Protocol\n * Interface for interacting with AssetPairManager contracts",
                "fullyImplemented": false,
                "id": 2597,
                "linearizedBaseContracts": [
                    2597
                ],
                "name": "IAssetPairManager",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2586,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "signalConfirmationMinTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2582,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "849:2:24"
                        },
                        "returnParameters": {
                            "id": 2585,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2584,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2586,
                                    "src": "875:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2583,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "875:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "874:9:24"
                        },
                        "scope": 2597,
                        "src": "815:69:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2591,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "signalConfirmationMaxTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2587,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "923:2:24"
                        },
                        "returnParameters": {
                            "id": 2590,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2589,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2591,
                                    "src": "949:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2588,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "949:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "948:9:24"
                        },
                        "scope": 2597,
                        "src": "889:69:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2596,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recentInitialProposeTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2592,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1001:2:24"
                        },
                        "returnParameters": {
                            "id": 2595,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2594,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2596,
                                    "src": "1027:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2593,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1027:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1026:9:24"
                        },
                        "scope": 2597,
                        "src": "963:73:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2598,
                "src": "781:257:24"
            }
        ],
        "src": "597:443:24"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
        "exportedSymbols": {
            "IAssetPairManager": [
                2597
            ]
        },
        "id": 2598,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2580,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:24"
            },
            {
                "id": 2581,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:24"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IAssetPairManager\n@author Set Protocol\n * Interface for interacting with AssetPairManager contracts",
                "fullyImplemented": false,
                "id": 2597,
                "linearizedBaseContracts": [
                    2597
                ],
                "name": "IAssetPairManager",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2586,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "signalConfirmationMinTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2582,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "849:2:24"
                        },
                        "returnParameters": {
                            "id": 2585,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2584,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2586,
                                    "src": "875:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2583,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "875:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "874:9:24"
                        },
                        "scope": 2597,
                        "src": "815:69:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2591,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "signalConfirmationMaxTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2587,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "923:2:24"
                        },
                        "returnParameters": {
                            "id": 2590,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2589,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2591,
                                    "src": "949:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2588,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "949:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "948:9:24"
                        },
                        "scope": 2597,
                        "src": "889:69:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2596,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recentInitialProposeTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2592,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1001:2:24"
                        },
                        "returnParameters": {
                            "id": 2595,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2594,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2596,
                                    "src": "1027:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2593,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1027:7:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1026:9:24"
                        },
                        "scope": 2597,
                        "src": "963:73:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2598,
                "src": "781:257:24"
            }
        ],
        "src": "597:443:24"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.728Z",
    "devdoc": {
        "author": "Set Protocol * Interface for interacting with AssetPairManager contracts",
        "methods": {},
        "title": "IAssetPairManager"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=IAssetPairManager.js.map