"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFeeCalculator = {
    "contractName": "IFeeCalculator",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_feeCalculatorData",
                    "type": "bytes"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getFee",
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
            "inputs": [],
            "name": "updateAndGetFee",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newFeeData",
                    "type": "bytes"
                }
            ],
            "name": "adjustFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"updateAndGetFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_feeCalculatorData\",\"type\":\"bytes\"}],\"name\":\"initialize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newFeeData\",\"type\":\"bytes\"}],\"name\":\"adjustFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol \",\"methods\":{},\"title\":\"IFeeCalculator\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":\"IFeeCalculator\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":{\"keccak256\":\"0xfdce9b333367bfed8f379738b0eabfe4be0045db735e9f24493de09729593d4d\",\"urls\":[\"bzzr://d2fa7438b492f4f08009810e3e9a2e2c22a429c307562e3f5274d4bfe2d21734\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n/**\n * @title IFeeCalculator\n * @author Set Protocol\n *\n */\ninterface IFeeCalculator {\n\n    /* ============ External Functions ============ */\n\n    function initialize(\n        bytes calldata _feeCalculatorData\n    )\n        external;\n\n    function getFee()\n        external\n        view\n        returns(uint256);\n\n    function updateAndGetFee()\n        external\n        returns(uint256);\n\n    function adjustFee(\n        bytes calldata _newFeeData\n    )\n        external;\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
        "exportedSymbols": {
            "IFeeCalculator": [
                1685
            ]
        },
        "id": 1686,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1664,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:13"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IFeeCalculator\n@author Set Protocol\n ",
                "fullyImplemented": false,
                "id": 1685,
                "linearizedBaseContracts": [
                    1685
                ],
                "name": "IFeeCalculator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1669,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1667,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1666,
                                    "name": "_feeCalculatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1669,
                                    "src": "798:33:13",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1665,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "798:5:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "788:49:13"
                        },
                        "returnParameters": {
                            "id": 1668,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "854:0:13"
                        },
                        "scope": 1685,
                        "src": "769:86:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1674,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1670,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "876:2:13"
                        },
                        "returnParameters": {
                            "id": 1673,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1672,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1674,
                                    "src": "925:7:13",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1671,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "925:7:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "924:9:13"
                        },
                        "scope": 1685,
                        "src": "861:73:13",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1679,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateAndGetFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1675,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "964:2:13"
                        },
                        "returnParameters": {
                            "id": 1678,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1677,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1679,
                                    "src": "1000:7:13",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1676,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1000:7:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "999:9:13"
                        },
                        "scope": 1685,
                        "src": "940:69:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1684,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adjustFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1682,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1681,
                                    "name": "_newFeeData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1684,
                                    "src": "1043:26:13",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1680,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1043:5:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1033:42:13"
                        },
                        "returnParameters": {
                            "id": 1683,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1092:0:13"
                        },
                        "scope": 1685,
                        "src": "1015:78:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1686,
                "src": "681:414:13"
            }
        ],
        "src": "597:499:13"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
        "exportedSymbols": {
            "IFeeCalculator": [
                1685
            ]
        },
        "id": 1686,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1664,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:13"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IFeeCalculator\n@author Set Protocol\n ",
                "fullyImplemented": false,
                "id": 1685,
                "linearizedBaseContracts": [
                    1685
                ],
                "name": "IFeeCalculator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1669,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1667,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1666,
                                    "name": "_feeCalculatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1669,
                                    "src": "798:33:13",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1665,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "798:5:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "788:49:13"
                        },
                        "returnParameters": {
                            "id": 1668,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "854:0:13"
                        },
                        "scope": 1685,
                        "src": "769:86:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1674,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1670,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "876:2:13"
                        },
                        "returnParameters": {
                            "id": 1673,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1672,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1674,
                                    "src": "925:7:13",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1671,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "925:7:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "924:9:13"
                        },
                        "scope": 1685,
                        "src": "861:73:13",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1679,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateAndGetFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1675,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "964:2:13"
                        },
                        "returnParameters": {
                            "id": 1678,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1677,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1679,
                                    "src": "1000:7:13",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1676,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1000:7:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "999:9:13"
                        },
                        "scope": 1685,
                        "src": "940:69:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1684,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adjustFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1682,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1681,
                                    "name": "_newFeeData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1684,
                                    "src": "1043:26:13",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1680,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1043:5:13",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1033:42:13"
                        },
                        "returnParameters": {
                            "id": 1683,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1092:0:13"
                        },
                        "scope": 1685,
                        "src": "1015:78:13",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1686,
                "src": "681:414:13"
            }
        ],
        "src": "597:499:13"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.700Z",
    "devdoc": {
        "author": "Set Protocol ",
        "methods": {},
        "title": "IFeeCalculator"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=IFeeCalculator.js.map