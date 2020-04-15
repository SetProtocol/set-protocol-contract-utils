"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceFeeLibrary = {
    "contractName": "PerformanceFeeLibrary",
    "abi": [],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Set Protocol * The PerformanceFeeLibrary contains struct definition for feeState so it can be used elsewhere.\",\"methods\":{},\"title\":\"PerformanceFeeLibrary\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol\":\"PerformanceFeeLibrary\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol\":{\"keccak256\":\"0xe080b6c950b013ee7780ba0bdad4b4e1eed00d4387f2a91b1fc8362d5f8cbfb8\",\"urls\":[\"bzzr://819d12664c009c2ec9f93bd781d0e7cdf78048d5e83947e4eba5776e72320a49\"]}},\"version\":1}",
    "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f3677f33d775250bbb8e8b3d6037cee5b0eee4324b3f474d922197bb781960670029",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f3677f33d775250bbb8e8b3d6037cee5b0eee4324b3f474d922197bb781960670029",
    "sourceMap": "790:777:11:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "790:777:11:-;;;;;;;;",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\n/**\n * @title PerformanceFeeLibrary\n * @author Set Protocol\n *\n * The PerformanceFeeLibrary contains struct definition for feeState so it can\n * be used elsewhere.\n */\nlibrary PerformanceFeeLibrary {\n\n    /* ============ Structs ============ */\n\n    struct FeeState {\n        uint256 profitFeePeriod;                // Time required between accruing profit fees\n        uint256 highWatermarkResetPeriod;       // Time required after last profit fee to reset high watermark\n        uint256 profitFeePercentage;            // Percent of profits that accrue to manager\n        uint256 streamingFeePercentage;         // Percent of Set that accrues to manager each year\n        uint256 highWatermark;                  // Value of Set at last profit fee accrual\n        uint256 lastProfitFeeTimestamp;         // Timestamp last profit fee was accrued\n        uint256 lastStreamingFeeTimestamp;      // Timestamp last streaming fee was accrued\n    }\n}",
    "sourcePath": "set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol",
        "exportedSymbols": {
            "PerformanceFeeLibrary": [
                1630
            ]
        },
        "id": 1631,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1614,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:11"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title PerformanceFeeLibrary\n@author Set Protocol\n * The PerformanceFeeLibrary contains struct definition for feeState so it can\nbe used elsewhere.",
                "fullyImplemented": true,
                "id": 1630,
                "linearizedBaseContracts": [
                    1630
                ],
                "name": "PerformanceFeeLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "PerformanceFeeLibrary.FeeState",
                        "id": 1629,
                        "members": [
                            {
                                "constant": false,
                                "id": 1616,
                                "name": "profitFeePeriod",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "898:23:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1615,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "898:7:11",
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
                                "id": 1618,
                                "name": "highWatermarkResetPeriod",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "992:32:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1617,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "992:7:11",
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
                                "id": 1620,
                                "name": "profitFeePercentage",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1103:27:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1619,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1103:7:11",
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
                                "id": 1622,
                                "name": "streamingFeePercentage",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1196:30:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1621,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1196:7:11",
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
                                "id": 1624,
                                "name": "highWatermark",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1296:21:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1623,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1296:7:11",
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
                                "id": 1626,
                                "name": "lastProfitFeeTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1387:30:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1625,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1387:7:11",
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
                                "id": 1628,
                                "name": "lastStreamingFeeTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1476:33:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1627,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1476:7:11",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "FeeState",
                        "nodeType": "StructDefinition",
                        "scope": 1630,
                        "src": "872:693:11",
                        "visibility": "public"
                    }
                ],
                "scope": 1631,
                "src": "790:777:11"
            }
        ],
        "src": "597:970:11"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/fee-calculators/lib/PerformanceFeeLibrary.sol",
        "exportedSymbols": {
            "PerformanceFeeLibrary": [
                1630
            ]
        },
        "id": 1631,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1614,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:11"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title PerformanceFeeLibrary\n@author Set Protocol\n * The PerformanceFeeLibrary contains struct definition for feeState so it can\nbe used elsewhere.",
                "fullyImplemented": true,
                "id": 1630,
                "linearizedBaseContracts": [
                    1630
                ],
                "name": "PerformanceFeeLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "canonicalName": "PerformanceFeeLibrary.FeeState",
                        "id": 1629,
                        "members": [
                            {
                                "constant": false,
                                "id": 1616,
                                "name": "profitFeePeriod",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "898:23:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1615,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "898:7:11",
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
                                "id": 1618,
                                "name": "highWatermarkResetPeriod",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "992:32:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1617,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "992:7:11",
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
                                "id": 1620,
                                "name": "profitFeePercentage",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1103:27:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1619,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1103:7:11",
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
                                "id": 1622,
                                "name": "streamingFeePercentage",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1196:30:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1621,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1196:7:11",
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
                                "id": 1624,
                                "name": "highWatermark",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1296:21:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1623,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1296:7:11",
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
                                "id": 1626,
                                "name": "lastProfitFeeTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1387:30:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1625,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1387:7:11",
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
                                "id": 1628,
                                "name": "lastStreamingFeeTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 1629,
                                "src": "1476:33:11",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 1627,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1476:7:11",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "FeeState",
                        "nodeType": "StructDefinition",
                        "scope": 1630,
                        "src": "872:693:11",
                        "visibility": "public"
                    }
                ],
                "scope": 1631,
                "src": "790:777:11"
            }
        ],
        "src": "597:970:11"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.699Z",
    "devdoc": {
        "author": "Set Protocol * The PerformanceFeeLibrary contains struct definition for feeState so it can be used elsewhere.",
        "methods": {},
        "title": "PerformanceFeeLibrary"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=PerformanceFeeLibrary.js.map