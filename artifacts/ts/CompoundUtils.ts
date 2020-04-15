export const CompoundUtils = 
{
  "contractName": "CompoundUtils",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Set Protocol * Collection of common Compound functions for use in Set Protocol contracts\",\"methods\":{},\"title\":\"CompoundUtils\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol\":\"CompoundUtils\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol\":{\"keccak256\":\"0x3d1d08c6efc2a973fe2c02ddcb02fd99a8c8eb75f74dcbd93e8e15864eee2b6b\",\"urls\":[\"bzzr://580815dd1cf648a4521d923e59087de21143d9c48115ab71579a1f5a8f3d36af\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol\":{\"keccak256\":\"0x2fae8240526a689d919a67792626c9df1e8048a59eed6643ff4ce685a87a36dc\",\"urls\":[\"bzzr://5a5709236aaa10d93f1746e765fd4e10693277f5cbc3e24d5173738f87a01072\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]}},\"version\":1}",
  "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f8802038123f89565cce9b278b66bf9c24b63da62350b4d72dfacfe5a06cea460029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f8802038123f89565cce9b278b66bf9c24b63da62350b4d72dfacfe5a06cea460029",
  "sourceMap": "884:890:7:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
  "deployedSourceMap": "884:890:7:-;;;;;;;;",
  "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\nimport { CommonMath } from \"./CommonMath.sol\";\n\n\n/**\n * @title CompoundUtils\n * @author Set Protocol\n *\n * Collection of common Compound functions for use in Set Protocol contracts\n */\nlibrary CompoundUtils\n{\n    using SafeMath for uint256;\n\n    /*\n     * Utility function to convert a specified amount of cTokens to underlying \n     * token based on the cToken's exchange rate\n     *\n     * @param _cTokenAmount         Amount of cTokens that will be converted to underlying\n     * @param _cTokenExchangeRate   Exchange rate for the cToken\n     * @return underlyingAmount     Amount of underlying ERC20 tokens\n     */\n    function convertCTokenToUnderlying(\n        uint256 _cTokenAmount,\n        uint256 _cTokenExchangeRate\n    )\n    internal\n    pure\n    returns (uint256)\n    {\n        // Underlying units is calculated as cToken quantity * exchangeRate divided by 10 ** 18 and rounded up.\n        uint256 a = _cTokenAmount.mul(_cTokenExchangeRate);\n        uint256 b = CommonMath.scaleFactor();\n\n        // Round value up\n        return CommonMath.divCeil(a, b);\n    }\n}",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol",
    "exportedSymbols": {
      "CompoundUtils": [
        1701
      ]
    },
    "id": 1702,
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
        "src": "597:22:7"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1666,
        "nodeType": "ImportDirective",
        "scope": 1702,
        "sourceUnit": 3090,
        "src": "621:77:7",
        "symbolAliases": [
          {
            "foreign": 1665,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 1668,
        "nodeType": "ImportDirective",
        "scope": 1702,
        "sourceUnit": 1626,
        "src": "699:46:7",
        "symbolAliases": [
          {
            "foreign": 1667,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title CompoundUtils\n@author Set Protocol\n * Collection of common Compound functions for use in Set Protocol contracts",
        "fullyImplemented": true,
        "id": 1701,
        "linearizedBaseContracts": [
          1701
        ],
        "name": "CompoundUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1671,
            "libraryName": {
              "contractScope": null,
              "id": 1669,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3089,
              "src": "918:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$3089",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "912:27:7",
            "typeName": {
              "id": 1670,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "931:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1699,
              "nodeType": "Block",
              "src": "1479:293:7",
              "statements": [
                {
                  "assignments": [
                    1681
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1681,
                      "name": "a",
                      "nodeType": "VariableDeclaration",
                      "scope": 1699,
                      "src": "1601:9:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1680,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1601:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1686,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1684,
                        "name": "_cTokenExchangeRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1675,
                        "src": "1631:19:7",
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
                        "id": 1682,
                        "name": "_cTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1673,
                        "src": "1613:13:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2996,
                      "src": "1613:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1613:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1601:50:7"
                },
                {
                  "assignments": [
                    1688
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1688,
                      "name": "b",
                      "nodeType": "VariableDeclaration",
                      "scope": 1699,
                      "src": "1661:9:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1687,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1661:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1692,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1689,
                        "name": "CommonMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "1673:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                          "typeString": "type(library CommonMath)"
                        }
                      },
                      "id": 1690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "scaleFactor",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1313,
                      "src": "1673:22:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                        "typeString": "function () pure returns (uint256)"
                      }
                    },
                    "id": 1691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1673:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1661:36:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1695,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1681,
                        "src": "1760:1:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1696,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1688,
                        "src": "1763:1:7",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1693,
                        "name": "CommonMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "1741:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                          "typeString": "type(library CommonMath)"
                        }
                      },
                      "id": 1694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "divCeil",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1421,
                      "src": "1741:18:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1741:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1679,
                  "id": 1698,
                  "nodeType": "Return",
                  "src": "1734:31:7"
                }
              ]
            },
            "documentation": null,
            "id": 1700,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertCTokenToUnderlying",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1673,
                  "name": "_cTokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1366:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1672,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:7",
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
                  "id": 1675,
                  "name": "_cTokenExchangeRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1397:27:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1397:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1356:74:7"
            },
            "returnParameters": {
              "id": 1679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1678,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1466:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1465:9:7"
            },
            "scope": 1701,
            "src": "1322:450:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1702,
        "src": "884:890:7"
      }
    ],
    "src": "597:1177:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol",
    "exportedSymbols": {
      "CompoundUtils": [
        1701
      ]
    },
    "id": 1702,
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
        "src": "597:22:7"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1666,
        "nodeType": "ImportDirective",
        "scope": 1702,
        "sourceUnit": 3090,
        "src": "621:77:7",
        "symbolAliases": [
          {
            "foreign": 1665,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 1668,
        "nodeType": "ImportDirective",
        "scope": 1702,
        "sourceUnit": 1626,
        "src": "699:46:7",
        "symbolAliases": [
          {
            "foreign": 1667,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title CompoundUtils\n@author Set Protocol\n * Collection of common Compound functions for use in Set Protocol contracts",
        "fullyImplemented": true,
        "id": 1701,
        "linearizedBaseContracts": [
          1701
        ],
        "name": "CompoundUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1671,
            "libraryName": {
              "contractScope": null,
              "id": 1669,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3089,
              "src": "918:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$3089",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "912:27:7",
            "typeName": {
              "id": 1670,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "931:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1699,
              "nodeType": "Block",
              "src": "1479:293:7",
              "statements": [
                {
                  "assignments": [
                    1681
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1681,
                      "name": "a",
                      "nodeType": "VariableDeclaration",
                      "scope": 1699,
                      "src": "1601:9:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1680,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1601:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1686,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1684,
                        "name": "_cTokenExchangeRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1675,
                        "src": "1631:19:7",
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
                        "id": 1682,
                        "name": "_cTokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1673,
                        "src": "1613:13:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2996,
                      "src": "1613:17:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1613:38:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1601:50:7"
                },
                {
                  "assignments": [
                    1688
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1688,
                      "name": "b",
                      "nodeType": "VariableDeclaration",
                      "scope": 1699,
                      "src": "1661:9:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1687,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1661:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1692,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1689,
                        "name": "CommonMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "1673:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                          "typeString": "type(library CommonMath)"
                        }
                      },
                      "id": 1690,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "scaleFactor",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1313,
                      "src": "1673:22:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                        "typeString": "function () pure returns (uint256)"
                      }
                    },
                    "id": 1691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1673:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1661:36:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1695,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1681,
                        "src": "1760:1:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1696,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1688,
                        "src": "1763:1:7",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1693,
                        "name": "CommonMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "1741:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                          "typeString": "type(library CommonMath)"
                        }
                      },
                      "id": 1694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "divCeil",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1421,
                      "src": "1741:18:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1741:24:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1679,
                  "id": 1698,
                  "nodeType": "Return",
                  "src": "1734:31:7"
                }
              ]
            },
            "documentation": null,
            "id": 1700,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertCTokenToUnderlying",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1673,
                  "name": "_cTokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1366:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1672,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:7",
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
                  "id": 1675,
                  "name": "_cTokenExchangeRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1397:27:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1397:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1356:74:7"
            },
            "returnParameters": {
              "id": 1679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1678,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1700,
                  "src": "1466:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1465:9:7"
            },
            "scope": 1701,
            "src": "1322:450:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1702,
        "src": "884:890:7"
      }
    ],
    "src": "597:1177:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.873Z",
  "devdoc": {
    "author": "Set Protocol * Collection of common Compound functions for use in Set Protocol contracts",
    "methods": {},
    "title": "CompoundUtils"
  },
  "userdoc": {
    "methods": {}
  }
}