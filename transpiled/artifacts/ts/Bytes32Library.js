"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bytes32Library = {
    "contractName": "Bytes32Library",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "data",
                    "type": "bytes32"
                }
            ],
            "name": "bytes32ToString",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"data\",\"type\":\"bytes32\"}],\"name\":\"bytes32ToString\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * As of version contracts 1.3.36-beta Bytes32Library is made external in order for library to be linked.\",\"methods\":{\"bytes32ToString(bytes32)\":{\"params\":{\"data\":\"Piece of data encoded as bytes32\"},\"return\":\"string\"}},\"title\":\"Bytes32Library\"},\"userdoc\":{\"methods\":{\"bytes32ToString(bytes32)\":{\"notice\":\"Converts a piece of data encoded as bytes32 into a string.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol\":\"Bytes32Library\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol\":{\"keccak256\":\"0xec5d4196384bd2765af4a2cab42f9a52b36b4cb471d445b5150c97c0507c8bce\",\"urls\":[\"bzzr://f7efc4b2ad1e1b0ab4e2bd6731eb0bf4cd3c43501b05ecfb407f2209335e6d51\"]}},\"version\":1}",
    "bytecode": "0x6102d1610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610610051577c010000000000000000000000000000000000000000000000000000000060003504639201de558114610056575b600080fd5b6100736004803603602081101561006c57600080fd5b50356100e8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060806100f483610165565b9050806040516020018082805190602001908083835b602083106101295780518252601f19909201916020918201910161010a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052915050919050565b606060005b6020811080156101b3575082816020811061018157fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660019004600014155b156101c05760010161016a565b6060816040519080825280601f01601f1916602001820160405280156101ed576020820181803883390190505b509050600091505b602082108015610240575083826020811061020c57fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916600060f860020a0214155b1561029e5783826020811061025157fe5b1a60f860020a0281838151811061026457fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508160010191506101f5565b939250505056fea165627a7a72305820d5bb974e156eb68266ce51bfa65634de09ed0b40ac9e97325da57df4321b64130029",
    "deployedBytecode": "0x7300000000000000000000000000000000000000003014608060405260043610610051577c010000000000000000000000000000000000000000000000000000000060003504639201de558114610056575b600080fd5b6100736004803603602081101561006c57600080fd5b50356100e8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060806100f483610165565b9050806040516020018082805190602001908083835b602083106101295780518252601f19909201916020918201910161010a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052915050919050565b606060005b6020811080156101b3575082816020811061018157fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660019004600014155b156101c05760010161016a565b6060816040519080825280601f01601f1916602001820160405280156101ed576020820181803883390190505b509050600091505b602082108015610240575083826020811061020c57fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916600060f860020a0214155b1561029e5783826020811061025157fe5b1a60f860020a0281838151811061026457fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508160010191506101f5565b939250505056fea165627a7a72305820d5bb974e156eb68266ce51bfa65634de09ed0b40ac9e97325da57df4321b64130029",
    "sourceMap": "791:998:4:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "791:998:4:-;;;;;;;;;;;;;;;;;;;;;;;;1562:225;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1562:225:4;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1562:225:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1648:13;1677:25;1705:20;1720:4;1705:14;:20::i;:::-;1677:48;;1766:12;1749:30;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1749:30:4;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1749:30:4;;;1735:45;;;1562:225;;;:::o;984:402::-;1069:12;1097:9;1120:77;1131:2;1127:1;:6;:40;;;;;1153:4;1158:1;1153:7;;;;;;;;-1:-1:-1;;;1153:7:4;1145:16;;;1137:25;;;1166:1;1137:30;;1127:40;1120:77;;;1183:3;;1120:77;;;1206:19;1238:1;1228:12;;;;;;;;;;;;;;;;;;;;;;;;;21:6:-1;;104:10;1228:12:4;87:34:-1;135:17;;-1:-1;1228:12:4;;1206:34;;1254:1;1250:5;;1265:92;1276:2;1272:1;:6;:22;;;;;1282:4;1287:1;1282:7;;;;;;;;-1:-1:-1;;;1282:7:4;:12;;;1293:1;-1:-1:-1;;;1282:12:4;;;1272:22;1265:92;;;1322:4;1327:1;1322:7;;;;;;;;-1:-1:-1;;;1322:7:4;1310:6;1317:1;1310:9;;;;;;;;;;;:19;;;;;;;;;;;1343:3;;;;;1265:92;;;1373:6;984:402;-1:-1:-1;;;984:402:4:o",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\n/**\n * @title Bytes32Library\n * @author Set Protocol\n *\n * As of version contracts 1.3.36-beta Bytes32Library is made external in order for library\n * to be linked.\n */\nlibrary Bytes32Library {\n    /**\n     * Converts a bytes32 data structure into a bytes array.\n     *\n     * @param  data       Piece of data encoded as bytes32\n     * @return bytes\n     */\n    function bytes32ToBytes(bytes32 data)\n        internal\n        pure\n        returns (bytes memory)\n    {\n        uint256 i = 0;\n        while (i < 32 && uint256(bytes32(data[i])) != 0) {\n            ++i;\n        }\n        bytes memory result = new bytes(i);\n        i = 0;\n        while (i < 32 && data[i] != 0) {\n            result[i] = data[i];\n            ++i;\n        }\n        return result;\n    }\n\n    /**\n     * Converts a piece of data encoded as bytes32 into a string.\n     *\n     * @param  data       Piece of data encoded as bytes32\n     * @return string\n     */\n    function bytes32ToString(bytes32 data)\n        external\n        pure\n        returns (string memory)\n    {\n        bytes memory intermediate = bytes32ToBytes(data);\n        return string(abi.encodePacked(intermediate));\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol",
        "exportedSymbols": {
            "Bytes32Library": [
                1286
            ]
        },
        "id": 1287,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1199,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:4"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title Bytes32Library\n@author Set Protocol\n * As of version contracts 1.3.36-beta Bytes32Library is made external in order for library\nto be linked.",
                "fullyImplemented": true,
                "id": 1286,
                "linearizedBaseContracts": [
                    1286
                ],
                "name": "Bytes32Library",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 1263,
                            "nodeType": "Block",
                            "src": "1087:299:4",
                            "statements": [
                                {
                                    "assignments": [
                                        1207
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1207,
                                            "name": "i",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1263,
                                            "src": "1097:9:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 1206,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1097:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1209,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "hexValue": "30",
                                        "id": 1208,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1109:1:4",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1097:13:4"
                                },
                                {
                                    "body": {
                                        "id": 1226,
                                        "nodeType": "Block",
                                        "src": "1169:28:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1224,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": true,
                                                    "src": "1183:3:4",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1223,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1207,
                                                        "src": "1185:1:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1225,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1183:3:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 1222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1212,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 1210,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1127:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "3332",
                                                "id": 1211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1131:2:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_32_by_1",
                                                    "typeString": "int_const 32"
                                                },
                                                "value": "32"
                                            },
                                            "src": "1127:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 1215,
                                                                    "name": "data",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1201,
                                                                    "src": "1153:4:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "id": 1217,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 1216,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1207,
                                                                    "src": "1158:1:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "1153:7:4",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            ],
                                                            "id": 1214,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1145:7:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes32_$",
                                                                "typeString": "type(bytes32)"
                                                            },
                                                            "typeName": "bytes32"
                                                        },
                                                        "id": 1218,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1145:16:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    ],
                                                    "id": 1213,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1137:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": "uint256"
                                                },
                                                "id": 1219,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1137:25:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 1220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1166:1:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "1137:30:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1127:40:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1227,
                                    "nodeType": "WhileStatement",
                                    "src": "1120:77:4"
                                },
                                {
                                    "assignments": [
                                        1229
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1229,
                                            "name": "result",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1263,
                                            "src": "1206:19:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 1228,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1206:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1234,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1232,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1238:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 1231,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1228:9:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 1230,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1232:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 1233,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1228:12:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1206:34:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1237,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1235,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1207,
                                            "src": "1250:1:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1236,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1254:1:4",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1250:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1238,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1250:5:4"
                                },
                                {
                                    "body": {
                                        "id": 1259,
                                        "nodeType": "Block",
                                        "src": "1296:61:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1254,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1248,
                                                            "name": "result",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1229,
                                                            "src": "1310:6:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 1250,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1249,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1207,
                                                            "src": "1317:1:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1310:9:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1251,
                                                            "name": "data",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1201,
                                                            "src": "1322:4:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "id": 1253,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1252,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1207,
                                                            "src": "1327:1:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1322:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "src": "1310:19:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "id": 1255,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1310:19:4"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": true,
                                                    "src": "1343:3:4",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1256,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1207,
                                                        "src": "1345:1:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1258,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1343:3:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 1247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1241,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 1239,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1272:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "3332",
                                                "id": 1240,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1276:2:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_32_by_1",
                                                    "typeString": "int_const 32"
                                                },
                                                "value": "32"
                                            },
                                            "src": "1272:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            },
                                            "id": 1246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1242,
                                                    "name": "data",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1201,
                                                    "src": "1282:4:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 1244,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1243,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1207,
                                                    "src": "1287:1:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1282:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes1",
                                                    "typeString": "bytes1"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 1245,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1293:1:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "1282:12:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1272:22:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1260,
                                    "nodeType": "WhileStatement",
                                    "src": "1265:92:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1261,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1229,
                                        "src": "1373:6:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 1205,
                                    "id": 1262,
                                    "nodeType": "Return",
                                    "src": "1366:13:4"
                                }
                            ]
                        },
                        "documentation": "Converts a bytes32 data structure into a bytes array.\n     * @param  data       Piece of data encoded as bytes32\n@return bytes",
                        "id": 1264,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bytes32ToBytes",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1201,
                                    "name": "data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1264,
                                    "src": "1008:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1200,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1008:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1007:14:4"
                        },
                        "returnParameters": {
                            "id": 1205,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1204,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1264,
                                    "src": "1069:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1203,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1068:14:4"
                        },
                        "scope": 1286,
                        "src": "984:402:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 1284,
                            "nodeType": "Block",
                            "src": "1667:120:4",
                            "statements": [
                                {
                                    "assignments": [
                                        1272
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1272,
                                            "name": "intermediate",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1284,
                                            "src": "1677:25:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 1271,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1677:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1276,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1274,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1266,
                                                "src": "1720:4:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 1273,
                                            "name": "bytes32ToBytes",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1264,
                                            "src": "1705:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes32) pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 1275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1705:20:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1677:48:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 1280,
                                                        "name": "intermediate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1272,
                                                        "src": "1766:12:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1278,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3200,
                                                        "src": "1749:3:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 1279,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1749:16:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 1281,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1749:30:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 1277,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1742:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": "string"
                                        },
                                        "id": 1282,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1742:38:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 1270,
                                    "id": 1283,
                                    "nodeType": "Return",
                                    "src": "1735:45:4"
                                }
                            ]
                        },
                        "documentation": "Converts a piece of data encoded as bytes32 into a string.\n     * @param  data       Piece of data encoded as bytes32\n@return string",
                        "id": 1285,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bytes32ToString",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1266,
                                    "name": "data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1285,
                                    "src": "1587:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1265,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1587:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1586:14:4"
                        },
                        "returnParameters": {
                            "id": 1270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1269,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1285,
                                    "src": "1648:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1268,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1648:6:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1647:15:4"
                        },
                        "scope": 1286,
                        "src": "1562:225:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1287,
                "src": "791:998:4"
            }
        ],
        "src": "597:1193:4"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol",
        "exportedSymbols": {
            "Bytes32Library": [
                1286
            ]
        },
        "id": 1287,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1199,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:4"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": "@title Bytes32Library\n@author Set Protocol\n * As of version contracts 1.3.36-beta Bytes32Library is made external in order for library\nto be linked.",
                "fullyImplemented": true,
                "id": 1286,
                "linearizedBaseContracts": [
                    1286
                ],
                "name": "Bytes32Library",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 1263,
                            "nodeType": "Block",
                            "src": "1087:299:4",
                            "statements": [
                                {
                                    "assignments": [
                                        1207
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1207,
                                            "name": "i",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1263,
                                            "src": "1097:9:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 1206,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1097:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1209,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "hexValue": "30",
                                        "id": 1208,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1109:1:4",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1097:13:4"
                                },
                                {
                                    "body": {
                                        "id": 1226,
                                        "nodeType": "Block",
                                        "src": "1169:28:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1224,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": true,
                                                    "src": "1183:3:4",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1223,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1207,
                                                        "src": "1185:1:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1225,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1183:3:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 1222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1212,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 1210,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1127:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "3332",
                                                "id": 1211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1131:2:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_32_by_1",
                                                    "typeString": "int_const 32"
                                                },
                                                "value": "32"
                                            },
                                            "src": "1127:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 1215,
                                                                    "name": "data",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1201,
                                                                    "src": "1153:4:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "id": 1217,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 1216,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1207,
                                                                    "src": "1158:1:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "1153:7:4",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            ],
                                                            "id": 1214,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1145:7:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes32_$",
                                                                "typeString": "type(bytes32)"
                                                            },
                                                            "typeName": "bytes32"
                                                        },
                                                        "id": 1218,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1145:16:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    ],
                                                    "id": 1213,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1137:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": "uint256"
                                                },
                                                "id": 1219,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1137:25:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 1220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1166:1:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "1137:30:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1127:40:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1227,
                                    "nodeType": "WhileStatement",
                                    "src": "1120:77:4"
                                },
                                {
                                    "assignments": [
                                        1229
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1229,
                                            "name": "result",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1263,
                                            "src": "1206:19:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 1228,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1206:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1234,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1232,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1238:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 1231,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1228:9:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 1230,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1232:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 1233,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1228:12:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1206:34:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1237,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1235,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1207,
                                            "src": "1250:1:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1236,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1254:1:4",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1250:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1238,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1250:5:4"
                                },
                                {
                                    "body": {
                                        "id": 1259,
                                        "nodeType": "Block",
                                        "src": "1296:61:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1254,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1248,
                                                            "name": "result",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1229,
                                                            "src": "1310:6:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 1250,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1249,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1207,
                                                            "src": "1317:1:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1310:9:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1251,
                                                            "name": "data",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1201,
                                                            "src": "1322:4:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "id": 1253,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1252,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1207,
                                                            "src": "1327:1:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1322:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "src": "1310:19:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "id": 1255,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1310:19:4"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": true,
                                                    "src": "1343:3:4",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1256,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1207,
                                                        "src": "1345:1:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1258,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1343:3:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 1247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 1241,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 1239,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1207,
                                                "src": "1272:1:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "3332",
                                                "id": 1240,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1276:2:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_32_by_1",
                                                    "typeString": "int_const 32"
                                                },
                                                "value": "32"
                                            },
                                            "src": "1272:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            },
                                            "id": 1246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1242,
                                                    "name": "data",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1201,
                                                    "src": "1282:4:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "id": 1244,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1243,
                                                    "name": "i",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1207,
                                                    "src": "1287:1:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1282:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes1",
                                                    "typeString": "bytes1"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 1245,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1293:1:4",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "1282:12:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1272:22:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1260,
                                    "nodeType": "WhileStatement",
                                    "src": "1265:92:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1261,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1229,
                                        "src": "1373:6:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 1205,
                                    "id": 1262,
                                    "nodeType": "Return",
                                    "src": "1366:13:4"
                                }
                            ]
                        },
                        "documentation": "Converts a bytes32 data structure into a bytes array.\n     * @param  data       Piece of data encoded as bytes32\n@return bytes",
                        "id": 1264,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bytes32ToBytes",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1201,
                                    "name": "data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1264,
                                    "src": "1008:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1200,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1008:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1007:14:4"
                        },
                        "returnParameters": {
                            "id": 1205,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1204,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1264,
                                    "src": "1069:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 1203,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1069:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1068:14:4"
                        },
                        "scope": 1286,
                        "src": "984:402:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 1284,
                            "nodeType": "Block",
                            "src": "1667:120:4",
                            "statements": [
                                {
                                    "assignments": [
                                        1272
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1272,
                                            "name": "intermediate",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1284,
                                            "src": "1677:25:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 1271,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1677:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 1276,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1274,
                                                "name": "data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1266,
                                                "src": "1720:4:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 1273,
                                            "name": "bytes32ToBytes",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1264,
                                            "src": "1705:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes32) pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 1275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1705:20:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1677:48:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 1280,
                                                        "name": "intermediate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1272,
                                                        "src": "1766:12:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1278,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3200,
                                                        "src": "1749:3:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 1279,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1749:16:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 1281,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1749:30:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 1277,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1742:6:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": "string"
                                        },
                                        "id": 1282,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1742:38:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 1270,
                                    "id": 1283,
                                    "nodeType": "Return",
                                    "src": "1735:45:4"
                                }
                            ]
                        },
                        "documentation": "Converts a piece of data encoded as bytes32 into a string.\n     * @param  data       Piece of data encoded as bytes32\n@return string",
                        "id": 1285,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bytes32ToString",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1266,
                                    "name": "data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1285,
                                    "src": "1587:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1265,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1587:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1586:14:4"
                        },
                        "returnParameters": {
                            "id": 1270,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1269,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1285,
                                    "src": "1648:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 1268,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1648:6:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1647:15:4"
                        },
                        "scope": 1286,
                        "src": "1562:225:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1287,
                "src": "791:998:4"
            }
        ],
        "src": "597:1193:4"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.865Z",
    "devdoc": {
        "author": "Set Protocol * As of version contracts 1.3.36-beta Bytes32Library is made external in order for library to be linked.",
        "methods": {
            "bytes32ToString(bytes32)": {
                "params": {
                    "data": "Piece of data encoded as bytes32"
                },
                "return": "string"
            }
        },
        "title": "Bytes32Library"
    },
    "userdoc": {
        "methods": {
            "bytes32ToString(bytes32)": {
                "notice": "Converts a piece of data encoded as bytes32 into a string."
            }
        }
    }
};
//# sourceMappingURL=Bytes32Library.js.map