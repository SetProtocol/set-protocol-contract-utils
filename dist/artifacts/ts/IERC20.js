"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC20 = {
    "contractName": "IERC20",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not fully ERC20 compliant and return something other than true on successful transfers.\",\"methods\":{},\"title\":\"IERC20\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/lib/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/lib/IERC20.sol\":{\"keccak256\":\"0xe4f71b1797f6421de91c6ce3b55199c5845693a58eddfd417a60b81d0198a9dd\",\"urls\":[\"bzzr://a6a4cebcffaff1db8ef9b78ea58d2d7391cc2b1ed533a1e1309286989f6d4ea0\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\n/**\n * @title IERC20\n * @author Set Protocol\n *\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\n * fully ERC20 compliant and return something other than true on successful transfers.\n */\ninterface IERC20 {\n    function balanceOf(\n        address _owner\n    )\n        external\n        view\n        returns (uint256);\n\n    function allowance(\n        address _owner,\n        address _spender\n    )\n        external\n        view\n        returns (uint256);\n\n    function transfer(\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function transferFrom(\n        address _from,\n        address _to,\n        uint256 _quantity\n    )\n        external;\n\n    function approve(\n        address _spender,\n        uint256 _quantity\n    )\n        external\n        returns (bool);\n\n    function totalSupply()\n        external\n        returns (uint256);\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/lib/IERC20.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/lib/IERC20.sol",
        "exportedSymbols": {
            "IERC20": [
                2558
            ]
        },
        "id": 2559,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2511,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:22"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
                "fullyImplemented": false,
                "id": 2558,
                "linearizedBaseContracts": [
                    2558
                ],
                "name": "IERC20",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2518,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2514,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2513,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2518,
                                    "src": "911:14:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2512,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "911:7:22",
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
                            "src": "901:30:22"
                        },
                        "returnParameters": {
                            "id": 2517,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2516,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2518,
                                    "src": "979:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2515,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "979:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "978:9:22"
                        },
                        "scope": 2558,
                        "src": "883:105:22",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2527,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "allowance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2523,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2520,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1022:14:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2519,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1022:7:22",
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
                                    "id": 2522,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1046:16:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2521,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1046:7:22",
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
                            "src": "1012:56:22"
                        },
                        "returnParameters": {
                            "id": 2526,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2525,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1116:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2524,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1116:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1115:9:22"
                        },
                        "scope": 2558,
                        "src": "994:131:22",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2534,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2532,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2529,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2534,
                                    "src": "1158:11:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2528,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1158:7:22",
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
                                    "id": 2531,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2534,
                                    "src": "1179:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2530,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1179:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1148:54:22"
                        },
                        "returnParameters": {
                            "id": 2533,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1219:0:22"
                        },
                        "scope": 2558,
                        "src": "1131:89:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2543,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2541,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2536,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1257:13:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2535,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1257:7:22",
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
                                    "id": 2538,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1280:11:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2537,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1280:7:22",
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
                                    "id": 2540,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1301:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2539,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1301:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1247:77:22"
                        },
                        "returnParameters": {
                            "id": 2542,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1341:0:22"
                        },
                        "scope": 2558,
                        "src": "1226:116:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2552,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2548,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2545,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1374:16:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2544,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1374:7:22",
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
                                    "id": 2547,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1400:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2546,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1400:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1364:59:22"
                        },
                        "returnParameters": {
                            "id": 2551,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2550,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1458:4:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2549,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1458:4:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1457:6:22"
                        },
                        "scope": 2558,
                        "src": "1348:116:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2557,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2553,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1490:2:22"
                        },
                        "returnParameters": {
                            "id": 2556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2555,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2557,
                                    "src": "1527:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2554,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1527:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1526:9:22"
                        },
                        "scope": 2558,
                        "src": "1470:66:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2559,
                "src": "860:678:22"
            }
        ],
        "src": "597:942:22"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/lib/IERC20.sol",
        "exportedSymbols": {
            "IERC20": [
                2558
            ]
        },
        "id": 2559,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2511,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:22"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IERC20\n@author Set Protocol\n * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not\nfully ERC20 compliant and return something other than true on successful transfers.",
                "fullyImplemented": false,
                "id": 2558,
                "linearizedBaseContracts": [
                    2558
                ],
                "name": "IERC20",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2518,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2514,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2513,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2518,
                                    "src": "911:14:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2512,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "911:7:22",
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
                            "src": "901:30:22"
                        },
                        "returnParameters": {
                            "id": 2517,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2516,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2518,
                                    "src": "979:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2515,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "979:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "978:9:22"
                        },
                        "scope": 2558,
                        "src": "883:105:22",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2527,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "allowance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2523,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2520,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1022:14:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2519,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1022:7:22",
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
                                    "id": 2522,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1046:16:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2521,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1046:7:22",
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
                            "src": "1012:56:22"
                        },
                        "returnParameters": {
                            "id": 2526,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2525,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2527,
                                    "src": "1116:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2524,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1116:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1115:9:22"
                        },
                        "scope": 2558,
                        "src": "994:131:22",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2534,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2532,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2529,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2534,
                                    "src": "1158:11:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2528,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1158:7:22",
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
                                    "id": 2531,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2534,
                                    "src": "1179:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2530,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1179:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1148:54:22"
                        },
                        "returnParameters": {
                            "id": 2533,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1219:0:22"
                        },
                        "scope": 2558,
                        "src": "1131:89:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2543,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2541,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2536,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1257:13:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2535,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1257:7:22",
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
                                    "id": 2538,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1280:11:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2537,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1280:7:22",
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
                                    "id": 2540,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2543,
                                    "src": "1301:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2539,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1301:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1247:77:22"
                        },
                        "returnParameters": {
                            "id": 2542,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1341:0:22"
                        },
                        "scope": 2558,
                        "src": "1226:116:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2552,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2548,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2545,
                                    "name": "_spender",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1374:16:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2544,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1374:7:22",
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
                                    "id": 2547,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1400:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2546,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1400:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1364:59:22"
                        },
                        "returnParameters": {
                            "id": 2551,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2550,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2552,
                                    "src": "1458:4:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2549,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1458:4:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1457:6:22"
                        },
                        "scope": 2558,
                        "src": "1348:116:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2557,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2553,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1490:2:22"
                        },
                        "returnParameters": {
                            "id": 2556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2555,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2557,
                                    "src": "1527:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2554,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1527:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1526:9:22"
                        },
                        "scope": 2558,
                        "src": "1470:66:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2559,
                "src": "860:678:22"
            }
        ],
        "src": "597:942:22"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.698Z",
    "devdoc": {
        "author": "Set Protocol * Interface for using ERC20 Tokens. This interface is needed to interact with tokens that are not fully ERC20 compliant and return something other than true on successful transfers.",
        "methods": {},
        "title": "IERC20"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=IERC20.js.map