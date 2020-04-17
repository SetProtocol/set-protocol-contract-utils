"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMACOStrategyManagerV2 = {
    "contractName": "IMACOStrategyManagerV2",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "crossoverConfirmationMinTime",
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
            "name": "crossoverConfirmationMaxTime",
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
            "name": "lastCrossoverConfirmationTimestamp",
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"crossoverConfirmationMinTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastCrossoverConfirmationTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"crossoverConfirmationMaxTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for interacting with MACOStrategyManagerV2 contracts\",\"methods\":{},\"title\":\"IMACOStrategyManagerV2\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol\":\"IMACOStrategyManagerV2\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol\":{\"keccak256\":\"0x3c3781939154add585f57c15f1d84e5ada40076d61b583486a25468ed86abbd0\",\"urls\":[\"bzzr://045ba4616612c82978a798940120903865414f45a6c5ad98463910cfda9b973b\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\n/**\n * @title IMACOStrategyManagerV2\n * @author Set Protocol\n *\n * Interface for interacting with MACOStrategyManagerV2 contracts\n */\ninterface IMACOStrategyManagerV2 {\n    function crossoverConfirmationMinTime() external view returns (uint256);\n    function crossoverConfirmationMaxTime() external view returns (uint256);\n    function lastCrossoverConfirmationTimestamp() external view returns (uint256);\n}\n\n",
    "sourcePath": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
    "ast": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
        "exportedSymbols": {
            "IMACOStrategyManagerV2": [
                2616
            ]
        },
        "id": 2617,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2599,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:25"
            },
            {
                "id": 2600,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:25"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IMACOStrategyManagerV2\n@author Set Protocol\n * Interface for interacting with MACOStrategyManagerV2 contracts",
                "fullyImplemented": false,
                "id": 2616,
                "linearizedBaseContracts": [
                    2616
                ],
                "name": "IMACOStrategyManagerV2",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2605,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "crossoverConfirmationMinTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2601,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "867:2:25"
                        },
                        "returnParameters": {
                            "id": 2604,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2603,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2605,
                                    "src": "893:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2602,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "893:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "892:9:25"
                        },
                        "scope": 2616,
                        "src": "830:72:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2610,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "crossoverConfirmationMaxTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2606,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "944:2:25"
                        },
                        "returnParameters": {
                            "id": 2609,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2608,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2610,
                                    "src": "970:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2607,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:9:25"
                        },
                        "scope": 2616,
                        "src": "907:72:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2615,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastCrossoverConfirmationTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2611,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1027:2:25"
                        },
                        "returnParameters": {
                            "id": 2614,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2613,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2615,
                                    "src": "1053:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2612,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1053:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1052:9:25"
                        },
                        "scope": 2616,
                        "src": "984:78:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2617,
                "src": "791:273:25"
            }
        ],
        "src": "597:469:25"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
        "exportedSymbols": {
            "IMACOStrategyManagerV2": [
                2616
            ]
        },
        "id": 2617,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2599,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:25"
            },
            {
                "id": 2600,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:25"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IMACOStrategyManagerV2\n@author Set Protocol\n * Interface for interacting with MACOStrategyManagerV2 contracts",
                "fullyImplemented": false,
                "id": 2616,
                "linearizedBaseContracts": [
                    2616
                ],
                "name": "IMACOStrategyManagerV2",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2605,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "crossoverConfirmationMinTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2601,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "867:2:25"
                        },
                        "returnParameters": {
                            "id": 2604,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2603,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2605,
                                    "src": "893:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2602,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "893:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "892:9:25"
                        },
                        "scope": 2616,
                        "src": "830:72:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2610,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "crossoverConfirmationMaxTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2606,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "944:2:25"
                        },
                        "returnParameters": {
                            "id": 2609,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2608,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2610,
                                    "src": "970:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2607,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "969:9:25"
                        },
                        "scope": 2616,
                        "src": "907:72:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2615,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastCrossoverConfirmationTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2611,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1027:2:25"
                        },
                        "returnParameters": {
                            "id": 2614,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2613,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2615,
                                    "src": "1053:7:25",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2612,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1053:7:25",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1052:9:25"
                        },
                        "scope": 2616,
                        "src": "984:78:25",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2617,
                "src": "791:273:25"
            }
        ],
        "src": "597:469:25"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.729Z",
    "devdoc": {
        "author": "Set Protocol * Interface for interacting with MACOStrategyManagerV2 contracts",
        "methods": {},
        "title": "IMACOStrategyManagerV2"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=IMACOStrategyManagerV2.js.map