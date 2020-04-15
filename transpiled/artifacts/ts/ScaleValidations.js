"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleValidations = {
    "contractName": "ScaleValidations",
    "abi": [],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/ScaleValidations.sol\":\"ScaleValidations\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/ScaleValidations.sol\":{\"keccak256\":\"0xba602c9dda228b4552744ef0ba26329a3ada2610c42cb085a373d873d58d1391\",\"urls\":[\"bzzr://78110cdd43a9f5b4092cb51867e79da62e6d8b324ffb24d0dd448ad3e27048ee\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]}},\"version\":1}",
    "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820e8e37d18b763898922d023d40d624883b8bc65469f87a24328a81f495adeb9a50029",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820e8e37d18b763898922d023d40d624883b8bc65469f87a24328a81f495adeb9a50029",
    "sourceMap": "701:524:10:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
    "deployedSourceMap": "701:524:10:-;;;;;;;;",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\nlibrary ScaleValidations {\n    using SafeMath for uint256;\n\n    uint256 private constant ONE_HUNDRED_PERCENT = 1e18;\n    uint256 private constant ONE_BASIS_POINT = 1e14;\n\n    function validateLessThanEqualOneHundredPercent(uint256 _value) internal view {\n        require(_value <= ONE_HUNDRED_PERCENT, \"Must be <= 100%\");\n    }\n\n    function validateMultipleOfBasisPoint(uint256 _value) internal view {\n        require(\n            _value.mod(ONE_BASIS_POINT) == 0,\n            \"Must be multiple of 0.01%\"\n        );\n    }\n}\n\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/ScaleValidations.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/ScaleValidations.sol",
        "exportedSymbols": {
            "ScaleValidations": [
                2172
            ]
        },
        "id": 2173,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2131,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:10"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2133,
                "nodeType": "ImportDirective",
                "scope": 2173,
                "sourceUnit": 3090,
                "src": "621:77:10",
                "symbolAliases": [
                    {
                        "foreign": 2132,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2172,
                "linearizedBaseContracts": [
                    2172
                ],
                "name": "ScaleValidations",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2136,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2134,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "738:8:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "732:27:10",
                        "typeName": {
                            "id": 2135,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "751:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "constant": true,
                        "id": 2139,
                        "name": "ONE_HUNDRED_PERCENT",
                        "nodeType": "VariableDeclaration",
                        "scope": 2172,
                        "src": "765:51:10",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2137,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "765:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "31653138",
                            "id": 2138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "812:4:10",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "private"
                    },
                    {
                        "constant": true,
                        "id": 2142,
                        "name": "ONE_BASIS_POINT",
                        "nodeType": "VariableDeclaration",
                        "scope": 2172,
                        "src": "822:47:10",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2140,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "822:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "31653134",
                            "id": 2141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "865:4:10",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_100000000000000_by_1",
                                "typeString": "int_const 100000000000000"
                            },
                            "value": "1e14"
                        },
                        "visibility": "private"
                    },
                    {
                        "body": {
                            "id": 2154,
                            "nodeType": "Block",
                            "src": "954:74:10",
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
                                                "id": 2150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2148,
                                                    "name": "_value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2144,
                                                    "src": "972:6:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2149,
                                                    "name": "ONE_HUNDRED_PERCENT",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2139,
                                                    "src": "982:19:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "972:29:10",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4d757374206265203c3d2031303025",
                                                "id": 2151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1003:17:10",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_cea5d9a0dfc08ee3cf0ae15bde1cce04f7a9676d198de1830773148e406aed3f",
                                                    "typeString": "literal_string \"Must be <= 100%\""
                                                },
                                                "value": "Must be <= 100%"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_cea5d9a0dfc08ee3cf0ae15bde1cce04f7a9676d198de1830773148e406aed3f",
                                                    "typeString": "literal_string \"Must be <= 100%\""
                                                }
                                            ],
                                            "id": 2147,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "964:7:10",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "964:57:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "964:57:10"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2155,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateLessThanEqualOneHundredPercent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2144,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2155,
                                    "src": "924:14:10",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "924:7:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "923:16:10"
                        },
                        "returnParameters": {
                            "id": 2146,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "954:0:10"
                        },
                        "scope": 2172,
                        "src": "876:152:10",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2170,
                            "nodeType": "Block",
                            "src": "1102:121:10",
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
                                                "id": 2166,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2163,
                                                            "name": "ONE_BASIS_POINT",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2142,
                                                            "src": "1144:15:10",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2161,
                                                            "name": "_value",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2157,
                                                            "src": "1133:6:10",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 2162,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "mod",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3088,
                                                        "src": "1133:10:10",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2164,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1133:27:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 2165,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1164:1:10",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "1133:32:10",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4d757374206265206d756c7469706c65206f6620302e303125",
                                                "id": 2167,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1179:27:10",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_5898843086d32df697b27980249cf7d2b45672211a063eb135205c045480c978",
                                                    "typeString": "literal_string \"Must be multiple of 0.01%\""
                                                },
                                                "value": "Must be multiple of 0.01%"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_5898843086d32df697b27980249cf7d2b45672211a063eb135205c045480c978",
                                                    "typeString": "literal_string \"Must be multiple of 0.01%\""
                                                }
                                            ],
                                            "id": 2160,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1112:7:10",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2168,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1112:104:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2169,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1112:104:10"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2171,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateMultipleOfBasisPoint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2157,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2171,
                                    "src": "1072:14:10",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1072:7:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1071:16:10"
                        },
                        "returnParameters": {
                            "id": 2159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1102:0:10"
                        },
                        "scope": 2172,
                        "src": "1034:189:10",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 2173,
                "src": "701:524:10"
            }
        ],
        "src": "597:630:10"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/ScaleValidations.sol",
        "exportedSymbols": {
            "ScaleValidations": [
                2172
            ]
        },
        "id": 2173,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2131,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:10"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2133,
                "nodeType": "ImportDirective",
                "scope": 2173,
                "sourceUnit": 3090,
                "src": "621:77:10",
                "symbolAliases": [
                    {
                        "foreign": 2132,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2172,
                "linearizedBaseContracts": [
                    2172
                ],
                "name": "ScaleValidations",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2136,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2134,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "738:8:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "732:27:10",
                        "typeName": {
                            "id": 2135,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "751:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "constant": true,
                        "id": 2139,
                        "name": "ONE_HUNDRED_PERCENT",
                        "nodeType": "VariableDeclaration",
                        "scope": 2172,
                        "src": "765:51:10",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2137,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "765:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "31653138",
                            "id": 2138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "812:4:10",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                        },
                        "visibility": "private"
                    },
                    {
                        "constant": true,
                        "id": 2142,
                        "name": "ONE_BASIS_POINT",
                        "nodeType": "VariableDeclaration",
                        "scope": 2172,
                        "src": "822:47:10",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2140,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "822:7:10",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "31653134",
                            "id": 2141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "865:4:10",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_100000000000000_by_1",
                                "typeString": "int_const 100000000000000"
                            },
                            "value": "1e14"
                        },
                        "visibility": "private"
                    },
                    {
                        "body": {
                            "id": 2154,
                            "nodeType": "Block",
                            "src": "954:74:10",
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
                                                "id": 2150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2148,
                                                    "name": "_value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2144,
                                                    "src": "972:6:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2149,
                                                    "name": "ONE_HUNDRED_PERCENT",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2139,
                                                    "src": "982:19:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "972:29:10",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4d757374206265203c3d2031303025",
                                                "id": 2151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1003:17:10",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_cea5d9a0dfc08ee3cf0ae15bde1cce04f7a9676d198de1830773148e406aed3f",
                                                    "typeString": "literal_string \"Must be <= 100%\""
                                                },
                                                "value": "Must be <= 100%"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_cea5d9a0dfc08ee3cf0ae15bde1cce04f7a9676d198de1830773148e406aed3f",
                                                    "typeString": "literal_string \"Must be <= 100%\""
                                                }
                                            ],
                                            "id": 2147,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "964:7:10",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2152,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "964:57:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2153,
                                    "nodeType": "ExpressionStatement",
                                    "src": "964:57:10"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2155,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateLessThanEqualOneHundredPercent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2144,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2155,
                                    "src": "924:14:10",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "924:7:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "923:16:10"
                        },
                        "returnParameters": {
                            "id": 2146,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "954:0:10"
                        },
                        "scope": 2172,
                        "src": "876:152:10",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2170,
                            "nodeType": "Block",
                            "src": "1102:121:10",
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
                                                "id": 2166,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2163,
                                                            "name": "ONE_BASIS_POINT",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2142,
                                                            "src": "1144:15:10",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2161,
                                                            "name": "_value",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2157,
                                                            "src": "1133:6:10",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 2162,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "mod",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3088,
                                                        "src": "1133:10:10",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2164,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1133:27:10",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 2165,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1164:1:10",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "1133:32:10",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4d757374206265206d756c7469706c65206f6620302e303125",
                                                "id": 2167,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1179:27:10",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_5898843086d32df697b27980249cf7d2b45672211a063eb135205c045480c978",
                                                    "typeString": "literal_string \"Must be multiple of 0.01%\""
                                                },
                                                "value": "Must be multiple of 0.01%"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_5898843086d32df697b27980249cf7d2b45672211a063eb135205c045480c978",
                                                    "typeString": "literal_string \"Must be multiple of 0.01%\""
                                                }
                                            ],
                                            "id": 2160,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1112:7:10",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2168,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1112:104:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2169,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1112:104:10"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2171,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validateMultipleOfBasisPoint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2157,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2171,
                                    "src": "1072:14:10",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1072:7:10",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1071:16:10"
                        },
                        "returnParameters": {
                            "id": 2159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1102:0:10"
                        },
                        "scope": 2172,
                        "src": "1034:189:10",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 2173,
                "src": "701:524:10"
            }
        ],
        "src": "597:630:10"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.911Z",
    "devdoc": {
        "methods": {}
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ScaleValidations.js.map