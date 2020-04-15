"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPerformanceFeeCalculator = {
    "contractName": "IPerformanceFeeCalculator",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_rebalancingSetToken",
                    "type": "address"
                }
            ],
            "name": "feeState",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "profitFeePeriod",
                            "type": "uint256"
                        },
                        {
                            "name": "highWatermarkResetPeriod",
                            "type": "uint256"
                        },
                        {
                            "name": "profitFeePercentage",
                            "type": "uint256"
                        },
                        {
                            "name": "streamingFeePercentage",
                            "type": "uint256"
                        },
                        {
                            "name": "highWatermark",
                            "type": "uint256"
                        },
                        {
                            "name": "lastProfitFeeTimestamp",
                            "type": "uint256"
                        },
                        {
                            "name": "lastStreamingFeeTimestamp",
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
                    "name": "_setAddress",
                    "type": "address"
                }
            ],
            "name": "getCalculatedFees",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_setAddress\",\"type\":\"address\"}],\"name\":\"getCalculatedFees\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_rebalancingSetToken\",\"type\":\"address\"}],\"name\":\"feeState\",\"outputs\":[{\"components\":[{\"name\":\"profitFeePeriod\",\"type\":\"uint256\"},{\"name\":\"highWatermarkResetPeriod\",\"type\":\"uint256\"},{\"name\":\"profitFeePercentage\",\"type\":\"uint256\"},{\"name\":\"streamingFeePercentage\",\"type\":\"uint256\"},{\"name\":\"highWatermark\",\"type\":\"uint256\"},{\"name\":\"lastProfitFeeTimestamp\",\"type\":\"uint256\"},{\"name\":\"lastStreamingFeeTimestamp\",\"type\":\"uint256\"}],\"name\":\"\",\"type\":\"tuple\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for accessing state on PerformanceFeeCalculator (function calls defined in IFeeCalculator)\",\"methods\":{},\"title\":\"IPerformanceFeeCalculator\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/IPerformanceFeeCalculator.sol\":\"IPerformanceFeeCalculator\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol\":{\"keccak256\":\"0xe080b6c950b013ee7780ba0bdad4b4e1eed00d4387f2a91b1fc8362d5f8cbfb8\",\"urls\":[\"bzzr://819d12664c009c2ec9f93bd781d0e7cdf78048d5e83947e4eba5776e72320a49\"]},\"set-protocol-contracts/contracts/core/interfaces/IPerformanceFeeCalculator.sol\":{\"keccak256\":\"0xbec7ffc4e2c7d2acd4f7f10b1b560ccb11047ac91e4af74f8cd8e5e36da00f98\",\"urls\":[\"bzzr://4fa54cc10c420b87d29219fb8db90e97b4054ea92018a299a560401c152d9a74\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental ABIEncoderV2;\n\nimport { PerformanceFeeLibrary } from \"../fee-calculators/lib/PerformanceFeeLibrary.sol\";\n\n/**\n * @title IPerformanceFeeCalculator\n * @author Set Protocol\n *\n * Interface for accessing state on PerformanceFeeCalculator (function calls defined in IFeeCalculator)\n */\ninterface IPerformanceFeeCalculator {\n\n    /* ============ External Functions ============ */\n\n    function feeState(\n        address _rebalancingSetToken\n    )\n        external\n        view\n        returns (PerformanceFeeLibrary.FeeState memory);\n\n    function getCalculatedFees(\n        address _setAddress\n    )\n        external\n        view\n        returns (uint256, uint256);\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/IPerformanceFeeCalculator.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IPerformanceFeeCalculator.sol",
        "exportedSymbols": {
            "IPerformanceFeeCalculator": [
                1809
            ]
        },
        "id": 1810,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1789,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:15"
            },
            {
                "id": 1790,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:33:15"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol",
                "file": "../fee-calculators/lib/PerformanceFeeLibrary.sol",
                "id": 1792,
                "nodeType": "ImportDirective",
                "scope": 1810,
                "sourceUnit": 1631,
                "src": "655:89:15",
                "symbolAliases": [
                    {
                        "foreign": 1791,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IPerformanceFeeCalculator\n@author Set Protocol\n * Interface for accessing state on PerformanceFeeCalculator (function calls defined in IFeeCalculator)",
                "fullyImplemented": false,
                "id": 1809,
                "linearizedBaseContracts": [
                    1809
                ],
                "name": "IPerformanceFeeCalculator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1799,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1794,
                                    "name": "_rebalancingSetToken",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1799,
                                    "src": "1047:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1793,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1047:7:15",
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
                            "src": "1037:44:15"
                        },
                        "returnParameters": {
                            "id": 1798,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1797,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1799,
                                    "src": "1129:37:15",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FeeState_$1629_memory_ptr",
                                        "typeString": "struct PerformanceFeeLibrary.FeeState"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1796,
                                        "name": "PerformanceFeeLibrary.FeeState",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1629,
                                        "src": "1129:30:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FeeState_$1629_storage_ptr",
                                            "typeString": "struct PerformanceFeeLibrary.FeeState"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1128:39:15"
                        },
                        "scope": 1809,
                        "src": "1020:148:15",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1808,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCalculatedFees",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1801,
                                    "name": "_setAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1210:19:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1800,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1210:7:15",
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
                            "src": "1200:35:15"
                        },
                        "returnParameters": {
                            "id": 1807,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1804,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1283:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1803,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1283:7:15",
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
                                    "id": 1806,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1292:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1805,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1292:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1282:18:15"
                        },
                        "scope": 1809,
                        "src": "1174:127:15",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1810,
                "src": "921:382:15"
            }
        ],
        "src": "597:707:15"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IPerformanceFeeCalculator.sol",
        "exportedSymbols": {
            "IPerformanceFeeCalculator": [
                1809
            ]
        },
        "id": 1810,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1789,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:15"
            },
            {
                "id": 1790,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:33:15"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol",
                "file": "../fee-calculators/lib/PerformanceFeeLibrary.sol",
                "id": 1792,
                "nodeType": "ImportDirective",
                "scope": 1810,
                "sourceUnit": 1631,
                "src": "655:89:15",
                "symbolAliases": [
                    {
                        "foreign": 1791,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IPerformanceFeeCalculator\n@author Set Protocol\n * Interface for accessing state on PerformanceFeeCalculator (function calls defined in IFeeCalculator)",
                "fullyImplemented": false,
                "id": 1809,
                "linearizedBaseContracts": [
                    1809
                ],
                "name": "IPerformanceFeeCalculator",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1799,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1794,
                                    "name": "_rebalancingSetToken",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1799,
                                    "src": "1047:28:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1793,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1047:7:15",
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
                            "src": "1037:44:15"
                        },
                        "returnParameters": {
                            "id": 1798,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1797,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1799,
                                    "src": "1129:37:15",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FeeState_$1629_memory_ptr",
                                        "typeString": "struct PerformanceFeeLibrary.FeeState"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1796,
                                        "name": "PerformanceFeeLibrary.FeeState",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1629,
                                        "src": "1129:30:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FeeState_$1629_storage_ptr",
                                            "typeString": "struct PerformanceFeeLibrary.FeeState"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1128:39:15"
                        },
                        "scope": 1809,
                        "src": "1020:148:15",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1808,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCalculatedFees",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1801,
                                    "name": "_setAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1210:19:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1800,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1210:7:15",
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
                            "src": "1200:35:15"
                        },
                        "returnParameters": {
                            "id": 1807,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1804,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1283:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1803,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1283:7:15",
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
                                    "id": 1806,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1808,
                                    "src": "1292:7:15",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1805,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1292:7:15",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1282:18:15"
                        },
                        "scope": 1809,
                        "src": "1174:127:15",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1810,
                "src": "921:382:15"
            }
        ],
        "src": "597:707:15"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.702Z",
    "devdoc": {
        "author": "Set Protocol * Interface for accessing state on PerformanceFeeCalculator (function calls defined in IFeeCalculator)",
        "methods": {},
        "title": "IPerformanceFeeCalculator"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=IPerformanceFeeCalculator.js.map