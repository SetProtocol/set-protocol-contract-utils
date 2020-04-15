"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonValidationsLibrary = {
    "contractName": "CommonValidationsLibrary",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addressArray",
                    "type": "address[]"
                }
            ],
            "name": "validateNonEmpty",
            "outputs": [],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addressArray",
                    "type": "address[]"
                },
                {
                    "name": "_uint256Array",
                    "type": "uint256[]"
                }
            ],
            "name": "validateEqualLength",
            "outputs": [],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_addressArray\",\"type\":\"address[]\"},{\"name\":\"_uint256Array\",\"type\":\"uint256[]\"}],\"name\":\"validateEqualLength\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_addressArray\",\"type\":\"address[]\"}],\"name\":\"validateNonEmpty\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"validateEqualLength(address[],uint256[])\":{\"params\":{\"_addressArray\":\"Address array input\",\"_uint256Array\":\"Uint256 array input\"}},\"validateNonEmpty(address[])\":{\"params\":{\"_addressArray\":\"Address array input\"}}}},\"userdoc\":{\"methods\":{\"validateEqualLength(address[],uint256[])\":{\"notice\":\"Ensures that an address array and uint256 array are equal length\"},\"validateNonEmpty(address[])\":{\"notice\":\"Ensures that an address array is not empty.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol\":\"CommonValidationsLibrary\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol\":{\"keccak256\":\"0x757ec17c9c86093af15b08fbdf99ee15203c0e64a3185d2e4745e9a6be1b2d20\",\"urls\":[\"bzzr://f14bb668c341da6994edece64b35601e000591434eee90c9454cb9a1f9f7d60e\"]}},\"version\":1}",
    "bytecode": "0x6102a5610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061005c577c010000000000000000000000000000000000000000000000000000000060003504632c183f43811461006157806364cf166f14610125575b600080fd5b6101236004803603604081101561007757600080fd5b81019060208101813564010000000081111561009257600080fd5b8201836020820111156100a457600080fd5b803590602001918460208302840111640100000000831117156100c657600080fd5b9193909290916020810190356401000000008111156100e457600080fd5b8201836020820111156100f657600080fd5b8035906020019184602083028401116401000000008311171561011857600080fd5b509092509050610195565b005b6101236004803603602081101561013b57600080fd5b81019060208101813564010000000081111561015657600080fd5b82018360208201111561016857600080fd5b8035906020019184602083028401116401000000008311171561018a57600080fd5b509092509050610209565b82811461020357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e707574206c656e677468206d69736d617463680000000000000000000000604482015290519081900360640190fd5b50505050565b8061027557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f41646472657373206172726179206c656e677468206d757374206265203e2030604482015290519081900360640190fd5b505056fea165627a7a72305820994779c7750fd3accdca9f858ce8c3aef071e92fa7d4b212fa251410518379300029",
    "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040526004361061005c577c010000000000000000000000000000000000000000000000000000000060003504632c183f43811461006157806364cf166f14610125575b600080fd5b6101236004803603604081101561007757600080fd5b81019060208101813564010000000081111561009257600080fd5b8201836020820111156100a457600080fd5b803590602001918460208302840111640100000000831117156100c657600080fd5b9193909290916020810190356401000000008111156100e457600080fd5b8201836020820111156100f657600080fd5b8035906020019184602083028401116401000000008311171561011857600080fd5b509092509050610195565b005b6101236004803603602081101561013b57600080fd5b81019060208101813564010000000081111561015657600080fd5b82018360208201111561016857600080fd5b8035906020019184602083028401116401000000008311171561018a57600080fd5b509092509050610209565b82811461020357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e707574206c656e677468206d69736d617463680000000000000000000000604482015290519081900360640190fd5b50505050565b8061027557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f41646472657373206172726179206c656e677468206d757374206265203e2030604482015290519081900360640190fd5b505056fea165627a7a72305820994779c7750fd3accdca9f858ce8c3aef071e92fa7d4b212fa251410518379300029",
    "sourceMap": "622:901:6:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "622:901:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1239:282;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1239:282:6;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;1239:282:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1239:282:6;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1239:282:6;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;1239:282:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1239:282:6;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;1239:282:6;;-1:-1:-1;1239:282:6;-1:-1:-1;1239:282:6;:::i;:::-;;795:229;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;795:229:6;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;795:229:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;795:229:6;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;795:229:6;;-1:-1:-1;795:229:6;-1:-1:-1;795:229:6;:::i;1239:282::-;1423:44;;;1402:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1239:282;;;;:::o;795:229::-;934:24;913:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;795:229;;:::o",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\nlibrary CommonValidationsLibrary {\n\n    /**\n     * Ensures that an address array is not empty.\n     *\n     * @param  _addressArray       Address array input\n     */    \n    function validateNonEmpty(\n        address[] calldata _addressArray\n    )\n        external\n        pure\n    {\n        require(\n            _addressArray.length > 0,\n            \"Address array length must be > 0\"\n        ); \n    }\n\n    /**\n     * Ensures that an address array and uint256 array are equal length\n     *\n     * @param  _addressArray       Address array input\n     * @param  _uint256Array       Uint256 array input\n     */    \n    function validateEqualLength(\n        address[] calldata _addressArray,\n        uint256[] calldata _uint256Array\n    )\n        external\n        pure\n    {\n        require(\n            _addressArray.length == _uint256Array.length,\n            \"Input length mismatch\"\n        );\n    }\n}\n\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol",
        "exportedSymbols": {
            "CommonValidationsLibrary": [
                1662
            ]
        },
        "id": 1663,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1627,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:6"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": null,
                "fullyImplemented": true,
                "id": 1662,
                "linearizedBaseContracts": [
                    1662
                ],
                "name": "CommonValidationsLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 1641,
                            "nodeType": "Block",
                            "src": "903:121:6",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 1637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1634,
                                                        "name": "_addressArray",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1630,
                                                        "src": "934:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                            "typeString": "address[] calldata"
                                                        }
                                                    },
                                                    "id": 1635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "934:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 1636,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "957:1:6",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "934:24:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "41646472657373206172726179206c656e677468206d757374206265203e2030",
                                                "id": 1638,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "972:34:6",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9f2d80011274b534a47fd6d670406a8cd8469a977bbd6736f1fad38a4f8e7acd",
                                                    "typeString": "literal_string \"Address array length must be > 0\""
                                                },
                                                "value": "Address array length must be > 0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9f2d80011274b534a47fd6d670406a8cd8469a977bbd6736f1fad38a4f8e7acd",
                                                    "typeString": "literal_string \"Address array length must be > 0\""
                                                }
                                            ],
                                            "id": 1633,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "913:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1639,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "913:103:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1640,
                                    "nodeType": "ExpressionStatement",
                                    "src": "913:103:6"
                                }
                            ]
                        },
                        "documentation": "Ensures that an address array is not empty.\n     * @param  _addressArray       Address array input",
                        "id": 1642,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateNonEmpty",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1631,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1630,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1642,
                                    "src": "830:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1628,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "830:7:6",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1629,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "830:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "820:48:6"
                        },
                        "returnParameters": {
                            "id": 1632,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "903:0:6"
                        },
                        "scope": 1662,
                        "src": "795:229:6",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1660,
                            "nodeType": "Block",
                            "src": "1392:129:6",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 1656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1652,
                                                        "name": "_addressArray",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1645,
                                                        "src": "1423:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                            "typeString": "address[] calldata"
                                                        }
                                                    },
                                                    "id": 1653,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1423:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1654,
                                                        "name": "_uint256Array",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1648,
                                                        "src": "1447:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 1655,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1447:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1423:44:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "496e707574206c656e677468206d69736d61746368",
                                                "id": 1657,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1481:23:6",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_dc19fe55dda09e2f4f64b65497237f322b48746fa0e785a34867f93b6d1319be",
                                                    "typeString": "literal_string \"Input length mismatch\""
                                                },
                                                "value": "Input length mismatch"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_dc19fe55dda09e2f4f64b65497237f322b48746fa0e785a34867f93b6d1319be",
                                                    "typeString": "literal_string \"Input length mismatch\""
                                                }
                                            ],
                                            "id": 1651,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1402:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1658,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1402:112:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1659,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1402:112:6"
                                }
                            ]
                        },
                        "documentation": "Ensures that an address array and uint256 array are equal length\n     * @param  _addressArray       Address array input\n@param  _uint256Array       Uint256 array input",
                        "id": 1661,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateEqualLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1649,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1645,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1277:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1643,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1277:7:6",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1644,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1277:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1648,
                                    "name": "_uint256Array",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1319:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1646,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1319:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1647,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1319:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1267:90:6"
                        },
                        "returnParameters": {
                            "id": 1650,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1392:0:6"
                        },
                        "scope": 1662,
                        "src": "1239:282:6",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1663,
                "src": "622:901:6"
            }
        ],
        "src": "597:928:6"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonValidationsLibrary.sol",
        "exportedSymbols": {
            "CommonValidationsLibrary": [
                1662
            ]
        },
        "id": 1663,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1627,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:6"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": null,
                "fullyImplemented": true,
                "id": 1662,
                "linearizedBaseContracts": [
                    1662
                ],
                "name": "CommonValidationsLibrary",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 1641,
                            "nodeType": "Block",
                            "src": "903:121:6",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 1637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1634,
                                                        "name": "_addressArray",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1630,
                                                        "src": "934:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                            "typeString": "address[] calldata"
                                                        }
                                                    },
                                                    "id": 1635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "934:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 1636,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "957:1:6",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "934:24:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "41646472657373206172726179206c656e677468206d757374206265203e2030",
                                                "id": 1638,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "972:34:6",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9f2d80011274b534a47fd6d670406a8cd8469a977bbd6736f1fad38a4f8e7acd",
                                                    "typeString": "literal_string \"Address array length must be > 0\""
                                                },
                                                "value": "Address array length must be > 0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9f2d80011274b534a47fd6d670406a8cd8469a977bbd6736f1fad38a4f8e7acd",
                                                    "typeString": "literal_string \"Address array length must be > 0\""
                                                }
                                            ],
                                            "id": 1633,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "913:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1639,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "913:103:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1640,
                                    "nodeType": "ExpressionStatement",
                                    "src": "913:103:6"
                                }
                            ]
                        },
                        "documentation": "Ensures that an address array is not empty.\n     * @param  _addressArray       Address array input",
                        "id": 1642,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateNonEmpty",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1631,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1630,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1642,
                                    "src": "830:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1628,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "830:7:6",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1629,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "830:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "820:48:6"
                        },
                        "returnParameters": {
                            "id": 1632,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "903:0:6"
                        },
                        "scope": 1662,
                        "src": "795:229:6",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1660,
                            "nodeType": "Block",
                            "src": "1392:129:6",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 1656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1652,
                                                        "name": "_addressArray",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1645,
                                                        "src": "1423:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                            "typeString": "address[] calldata"
                                                        }
                                                    },
                                                    "id": 1653,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1423:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1654,
                                                        "name": "_uint256Array",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1648,
                                                        "src": "1447:13:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 1655,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1447:20:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1423:44:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "496e707574206c656e677468206d69736d61746368",
                                                "id": 1657,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1481:23:6",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_dc19fe55dda09e2f4f64b65497237f322b48746fa0e785a34867f93b6d1319be",
                                                    "typeString": "literal_string \"Input length mismatch\""
                                                },
                                                "value": "Input length mismatch"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_dc19fe55dda09e2f4f64b65497237f322b48746fa0e785a34867f93b6d1319be",
                                                    "typeString": "literal_string \"Input length mismatch\""
                                                }
                                            ],
                                            "id": 1651,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1402:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1658,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1402:112:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1659,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1402:112:6"
                                }
                            ]
                        },
                        "documentation": "Ensures that an address array and uint256 array are equal length\n     * @param  _addressArray       Address array input\n@param  _uint256Array       Uint256 array input",
                        "id": 1661,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateEqualLength",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1649,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1645,
                                    "name": "_addressArray",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1277:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1643,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1277:7:6",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1644,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1277:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1648,
                                    "name": "_uint256Array",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1319:32:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1646,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1319:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1647,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1319:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1267:90:6"
                        },
                        "returnParameters": {
                            "id": 1650,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1392:0:6"
                        },
                        "scope": 1662,
                        "src": "1239:282:6",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1663,
                "src": "622:901:6"
            }
        ],
        "src": "597:928:6"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.872Z",
    "devdoc": {
        "methods": {
            "validateEqualLength(address[],uint256[])": {
                "params": {
                    "_addressArray": "Address array input",
                    "_uint256Array": "Uint256 array input"
                }
            },
            "validateNonEmpty(address[])": {
                "params": {
                    "_addressArray": "Address array input"
                }
            }
        }
    },
    "userdoc": {
        "methods": {
            "validateEqualLength(address[],uint256[])": {
                "notice": "Ensures that an address array and uint256 array are equal length"
            },
            "validateNonEmpty(address[])": {
                "notice": "Ensures that an address array is not empty."
            }
        }
    }
};
//# sourceMappingURL=CommonValidationsLibrary.js.map