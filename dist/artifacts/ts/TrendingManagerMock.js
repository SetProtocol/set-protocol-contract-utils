"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingManagerMock = {
    "contractName": "TrendingManagerMock",
    "abi": [
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
        },
        {
            "inputs": [
                {
                    "name": "_crossoverTimestamp",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"recentInitialProposeTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastCrossoverConfirmationTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_crossoverTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"author\":\"Set Protocol * Mock for TrendingManagerMock to test viewer.\",\"methods\":{},\"title\":\"TrendingManagerMock\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/TrendingManagerMock.sol\":\"TrendingManagerMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/TrendingManagerMock.sol\":{\"keccak256\":\"0x4c170d554e44b483c1ee112a1b115d9e490c60ea85b910e0a9be61199cf12cd6\",\"urls\":[\"bzzr://6a3e59f7ce2a7be540e5abeff30970ccacd607f11d71c3f881939ee6dba615c8\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051602080610161833981018060405261002f919081019061004f565b6000819055600155610078565b60006100488251610075565b9392505050565b60006020828403121561006157600080fd5b600061006d848461003c565b949350505050565b90565b60db806100866000396000f3fe6080604052348015600f57600080fd5b5060043610604e577c0100000000000000000000000000000000000000000000000000000000600035046335d6a68681146053578063ca537dc914606d575b600080fd5b60596073565b60405160649190608c565b60405180910390f35b60596079565b60015481565b60005481565b608681609e565b82525050565b6020810160988284607f565b92915050565b9056fea265627a7a72305820dd63ef52193616b214f97d1d40799d0fdd81c97575314551bb5e5e3fbe233ac46c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x6080604052348015600f57600080fd5b5060043610604e577c0100000000000000000000000000000000000000000000000000000000600035046335d6a68681146053578063ca537dc914606d575b600080fd5b60596073565b60405160649190608c565b60405180910390f35b60596079565b60015481565b60005481565b608681609e565b82525050565b6020810160988284607f565b92915050565b9056fea265627a7a72305820dd63ef52193616b214f97d1d40799d0fdd81c97575314551bb5e5e3fbe233ac46c6578706572696d656e74616cf50037",
    "sourceMap": "771:351:2:-;;;912:208;8:9:-1;5:2;;;30:1;27;20:12;5:2;912:208:2;;;;;;;;;;;;;;;;;;;;;;996:34;:56;;;1062:29;:51;771:351;;5:122:-1;;83:39;114:6;108:13;83:39;;;74:48;68:59;-1:-1;;;68:59;134:263;;249:2;237:9;228:7;224:23;220:32;217:2;;;265:1;262;255:12;217:2;300:1;317:64;373:7;353:9;317:64;;;307:74;211:186;-1:-1;;;;211:186;404:79;473:5;456:27;;771:351:2;;;;;;",
    "deployedSourceMap": "771:351:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;771:351:2;;;;;;;;;;;;;;;;;;;;;;;;861:44;;;:::i;:::-;;;;;;;;;;;;;;;;806:49;;;:::i;861:44::-;;;;:::o;806:49::-;;;;:::o;5:120:-1:-;88:31;113:5;88:31;;;83:3;76:44;70:55;;;132:213;250:2;235:18;;264:71;239:9;308:6;264:71;;;221:124;;;;;352:79;421:5;404:27",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\n\n/**\n * @title TrendingManagerMock\n * @author Set Protocol\n *\n * Mock for TrendingManagerMock to test viewer.\n */\ncontract TrendingManagerMock {\n    uint256 public lastCrossoverConfirmationTimestamp;\n    uint256 public recentInitialProposeTimestamp;\n\n    constructor(\n        uint256 _crossoverTimestamp\n    )\n        public\n    {\n        lastCrossoverConfirmationTimestamp = _crossoverTimestamp;\n        recentInitialProposeTimestamp = _crossoverTimestamp;\n    }\n}",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/TrendingManagerMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/TrendingManagerMock.sol",
        "exportedSymbols": {
            "TrendingManagerMock": [
                126
            ]
        },
        "id": 127,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 106,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:2"
            },
            {
                "id": 107,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:2"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title TrendingManagerMock\n@author Set Protocol\n * Mock for TrendingManagerMock to test viewer.",
                "fullyImplemented": true,
                "id": 126,
                "linearizedBaseContracts": [
                    126
                ],
                "name": "TrendingManagerMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 109,
                        "name": "lastCrossoverConfirmationTimestamp",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "806:49:2",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 108,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "806:7:2",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 111,
                        "name": "recentInitialProposeTimestamp",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "861:44:2",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 110,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "861:7:2",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 124,
                            "nodeType": "Block",
                            "src": "986:134:2",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 116,
                                            "name": "lastCrossoverConfirmationTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 109,
                                            "src": "996:34:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 117,
                                            "name": "_crossoverTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 113,
                                            "src": "1033:19:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "996:56:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "996:56:2"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 120,
                                            "name": "recentInitialProposeTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 111,
                                            "src": "1062:29:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "name": "_crossoverTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 113,
                                            "src": "1094:19:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1062:51:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 123,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1062:51:2"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 125,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 113,
                                    "name": "_crossoverTimestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 125,
                                    "src": "933:27:2",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 112,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "933:7:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "923:43:2"
                        },
                        "returnParameters": {
                            "id": 115,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "986:0:2"
                        },
                        "scope": 126,
                        "src": "912:208:2",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 127,
                "src": "771:351:2"
            }
        ],
        "src": "597:525:2"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/TrendingManagerMock.sol",
        "exportedSymbols": {
            "TrendingManagerMock": [
                126
            ]
        },
        "id": 127,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 106,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:2"
            },
            {
                "id": 107,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:2"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title TrendingManagerMock\n@author Set Protocol\n * Mock for TrendingManagerMock to test viewer.",
                "fullyImplemented": true,
                "id": 126,
                "linearizedBaseContracts": [
                    126
                ],
                "name": "TrendingManagerMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 109,
                        "name": "lastCrossoverConfirmationTimestamp",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "806:49:2",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 108,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "806:7:2",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 111,
                        "name": "recentInitialProposeTimestamp",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "861:44:2",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 110,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "861:7:2",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 124,
                            "nodeType": "Block",
                            "src": "986:134:2",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 116,
                                            "name": "lastCrossoverConfirmationTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 109,
                                            "src": "996:34:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 117,
                                            "name": "_crossoverTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 113,
                                            "src": "1033:19:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "996:56:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "996:56:2"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 120,
                                            "name": "recentInitialProposeTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 111,
                                            "src": "1062:29:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "name": "_crossoverTimestamp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 113,
                                            "src": "1094:19:2",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1062:51:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 123,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1062:51:2"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 125,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 113,
                                    "name": "_crossoverTimestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 125,
                                    "src": "933:27:2",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 112,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "933:7:2",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "923:43:2"
                        },
                        "returnParameters": {
                            "id": 115,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "986:0:2"
                        },
                        "scope": 126,
                        "src": "912:208:2",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 127,
                "src": "771:351:2"
            }
        ],
        "src": "597:525:2"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.677Z",
    "devdoc": {
        "author": "Set Protocol * Mock for TrendingManagerMock to test viewer.",
        "methods": {},
        "title": "TrendingManagerMock"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=TrendingManagerMock.js.map