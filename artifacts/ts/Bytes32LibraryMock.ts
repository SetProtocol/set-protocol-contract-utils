export const Bytes32LibraryMock = 
{
  "contractName": "Bytes32LibraryMock",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "data",
          "type": "bytes32"
        }
      ],
      "name": "testBytes32ToBytes",
      "outputs": [
        {
          "name": "",
          "type": "bytes"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "data",
          "type": "bytes32"
        }
      ],
      "name": "testBytes32ToString",
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
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"data\",\"type\":\"bytes32\"}],\"name\":\"testBytes32ToString\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"data\",\"type\":\"bytes32\"}],\"name\":\"testBytes32ToBytes\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/Bytes32LibraryMock.sol\":\"Bytes32LibraryMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol\":{\"keccak256\":\"0xec5d4196384bd2765af4a2cab42f9a52b36b4cb471d445b5150c97c0507c8bce\",\"urls\":[\"bzzr://f7efc4b2ad1e1b0ab4e2bd6731eb0bf4cd3c43501b05ecfb407f2209335e6d51\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/Bytes32LibraryMock.sol\":{\"keccak256\":\"0x3ba912ac7453d6fb9f0dca0454dc7bb614f799734c16b76df9e0d571d3e72484\",\"urls\":[\"bzzr://db925ffb7b6fdf8f18a8b74cd3bb2ff494a693230321380b466d6918c9b18077\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5061037e806100206000396000f3fe608060405234801561001057600080fd5b5060043610610052577c010000000000000000000000000000000000000000000000000000000060003504630a21ef958114610057578063c76ecf99146100e9575b600080fd5b6100746004803603602081101561006d57600080fd5b5035610106565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100ae578181015183820152602001610096565b50505050905090810190601f1680156100db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610074600480360360208110156100ff57600080fd5b5035610201565b606073__Bytes32Library________________________639201de55836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038186803b15801561017357600080fd5b505af4158015610187573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101b057600080fd5b8101908080516401000000008111156101c857600080fd5b820160208101848111156101db57600080fd5b81516401000000008111828201871017156101f557600080fd5b50909695505050505050565b606061020c82610212565b92915050565b606060005b602081108015610260575082816020811061022e57fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660019004600014155b1561026d57600101610217565b6060816040519080825280601f01601f19166020018201604052801561029a576020820181803883390190505b509050600091505b6020821080156102ed57508382602081106102b957fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916600060f860020a0214155b1561034b578382602081106102fe57fe5b1a60f860020a0281838151811061031157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508160010191506102a2565b939250505056fea165627a7a72305820b7a931c0eb66694aade089c8c1b5deb967efcbf916171d59a6ddc4dec0b0acfd0029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610052577c010000000000000000000000000000000000000000000000000000000060003504630a21ef958114610057578063c76ecf99146100e9575b600080fd5b6100746004803603602081101561006d57600080fd5b5035610106565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100ae578181015183820152602001610096565b50505050905090810190601f1680156100db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610074600480360360208110156100ff57600080fd5b5035610201565b606073__Bytes32Library________________________639201de55836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060006040518083038186803b15801561017357600080fd5b505af4158015610187573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101b057600080fd5b8101908080516401000000008111156101c857600080fd5b820160208101848111156101db57600080fd5b81516401000000008111828201871017156101f557600080fd5b50909695505050505050565b606061020c82610212565b92915050565b606060005b602081108015610260575082816020811061022e57fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660019004600014155b1561026d57600101610217565b6060816040519080825280601f01601f19166020018201604052801561029a576020820181803883390190505b509050600091505b6020821080156102ed57508382602081106102b957fe5b1a60f860020a027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916600060f860020a0214155b1561034b578382602081106102fe57fe5b1a60f860020a0281838151811061031157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508160010191506102a2565b939250505056fea165627a7a72305820b7a931c0eb66694aade089c8c1b5deb967efcbf916171d59a6ddc4dec0b0acfd0029",
  "sourceMap": "85:377:15:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:377:15;;;;;;;",
  "deployedSourceMap": "85:377:15:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:377:15;;;;;;;;;;;;;;;;;;;;;;;;291:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;291:169:15;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;291:169:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;119:166;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;119:166:15;;:::i;291:169::-;381:13;417:14;:30;448:4;417:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;417:36:15;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;417:36:15;;;;;;39:16:-1;36:1;17:17;2:54;101:4;417:36:15;80:15:-1;;;-1:-1;;76:31;65:43;;120:4;113:20;13:2;5:11;;2:2;;;29:1;26;19:12;2:2;417:36:15;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;62:21;;123:4;114:14;;138:31;;;135:2;;;182:1;179;172:12;135:2;213:10;;261:11;244:29;;285:43;;;282:58;-1:-1;233:115;230:2;;;361:1;358;351:12;230:2;-1:-1;417:36:15;;291:169;-1:-1:-1;;;;;;291:169:15:o;119:166::-;208:12;243:35;273:4;243:29;:35::i;:::-;236:42;119:166;-1:-1:-1;;119:166:15:o;984:402:4:-;1069:12;1097:9;1120:77;1131:2;1127:1;:6;:40;;;;;1153:4;1158:1;1153:7;;;;;;;;-1:-1:-1;;;1153:7:4;1145:16;;;1137:25;;;1166:1;1137:30;;1127:40;1120:77;;;1183:3;;1120:77;;;1206:19;1238:1;1228:12;;;;;;;;;;;;;;;;;;;;;;;;;21:6:-1;;104:10;1228:12:4;87:34:-1;135:17;;-1:-1;1228:12:4;;1206:34;;1254:1;1250:5;;1265:92;1276:2;1272:1;:6;:22;;;;;1282:4;1287:1;1282:7;;;;;;;;-1:-1:-1;;;1282:7:4;:12;;;1293:1;-1:-1:-1;;;1282:12:4;;;1272:22;1265:92;;;1322:4;1327:1;1322:7;;;;;;;;-1:-1:-1;;;1322:7:4;1310:6;1317:1;1310:9;;;;;;;;;;;:19;;;;;;;;;;;1343:3;;;;;1265:92;;;1373:6;984:402;-1:-1:-1;;;984:402:4:o",
  "source": "pragma solidity 0.5.7;\n\nimport { Bytes32Library } from \"../lib/Bytes32Library.sol\";\n\ncontract Bytes32LibraryMock {\n    function testBytes32ToBytes(bytes32 data)\n        external\n        pure\n        returns (bytes memory)\n    {\n        return Bytes32Library.bytes32ToBytes(data);\n    }\n\n    function testBytes32ToString(bytes32 data)\n        external\n        pure\n        returns (string memory)\n    {\n        return Bytes32Library.bytes32ToString(data);\n    }\n}\n",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/Bytes32LibraryMock.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/Bytes32LibraryMock.sol",
    "exportedSymbols": {
      "Bytes32LibraryMock": [
        2671
      ]
    },
    "id": 2672,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2642,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:15"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol",
        "file": "../lib/Bytes32Library.sol",
        "id": 2644,
        "nodeType": "ImportDirective",
        "scope": 2672,
        "sourceUnit": 1287,
        "src": "24:59:15",
        "symbolAliases": [
          {
            "foreign": 2643,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2671,
        "linearizedBaseContracts": [
          2671
        ],
        "name": "Bytes32LibraryMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2656,
              "nodeType": "Block",
              "src": "226:59:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2653,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2646,
                        "src": "273:4:15",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2651,
                        "name": "Bytes32Library",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1286,
                        "src": "243:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Bytes32Library_$1286_$",
                          "typeString": "type(library Bytes32Library)"
                        }
                      },
                      "id": 2652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32ToBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1264,
                      "src": "243:29:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes32) pure returns (bytes memory)"
                      }
                    },
                    "id": 2654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "243:35:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 2650,
                  "id": 2655,
                  "nodeType": "Return",
                  "src": "236:42:15"
                }
              ]
            },
            "documentation": null,
            "id": 2657,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "testBytes32ToBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2646,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 2657,
                  "src": "147:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2645,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "146:14:15"
            },
            "returnParameters": {
              "id": 2650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2657,
                  "src": "208:12:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:14:15"
            },
            "scope": 2671,
            "src": "119:166:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2669,
              "nodeType": "Block",
              "src": "400:60:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2666,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2659,
                        "src": "448:4:15",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2664,
                        "name": "Bytes32Library",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1286,
                        "src": "417:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Bytes32Library_$1286_$",
                          "typeString": "type(library Bytes32Library)"
                        }
                      },
                      "id": 2665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32ToString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1285,
                      "src": "417:30:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (bytes32) pure returns (string memory)"
                      }
                    },
                    "id": 2667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "417:36:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2663,
                  "id": 2668,
                  "nodeType": "Return",
                  "src": "410:43:15"
                }
              ]
            },
            "documentation": null,
            "id": 2670,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "testBytes32ToString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2659,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 2670,
                  "src": "320:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2658,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:14:15"
            },
            "returnParameters": {
              "id": 2663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2670,
                  "src": "381:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2661,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:15:15"
            },
            "scope": 2671,
            "src": "291:169:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2672,
        "src": "85:377:15"
      }
    ],
    "src": "0:463:15"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/Bytes32LibraryMock.sol",
    "exportedSymbols": {
      "Bytes32LibraryMock": [
        2671
      ]
    },
    "id": 2672,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2642,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:15"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Bytes32Library.sol",
        "file": "../lib/Bytes32Library.sol",
        "id": 2644,
        "nodeType": "ImportDirective",
        "scope": 2672,
        "sourceUnit": 1287,
        "src": "24:59:15",
        "symbolAliases": [
          {
            "foreign": 2643,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2671,
        "linearizedBaseContracts": [
          2671
        ],
        "name": "Bytes32LibraryMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2656,
              "nodeType": "Block",
              "src": "226:59:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2653,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2646,
                        "src": "273:4:15",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2651,
                        "name": "Bytes32Library",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1286,
                        "src": "243:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Bytes32Library_$1286_$",
                          "typeString": "type(library Bytes32Library)"
                        }
                      },
                      "id": 2652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32ToBytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1264,
                      "src": "243:29:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes32) pure returns (bytes memory)"
                      }
                    },
                    "id": 2654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "243:35:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 2650,
                  "id": 2655,
                  "nodeType": "Return",
                  "src": "236:42:15"
                }
              ]
            },
            "documentation": null,
            "id": 2657,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "testBytes32ToBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2646,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 2657,
                  "src": "147:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2645,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "146:14:15"
            },
            "returnParameters": {
              "id": 2650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2657,
                  "src": "208:12:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:14:15"
            },
            "scope": 2671,
            "src": "119:166:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2669,
              "nodeType": "Block",
              "src": "400:60:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2666,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2659,
                        "src": "448:4:15",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2664,
                        "name": "Bytes32Library",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1286,
                        "src": "417:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Bytes32Library_$1286_$",
                          "typeString": "type(library Bytes32Library)"
                        }
                      },
                      "id": 2665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32ToString",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1285,
                      "src": "417:30:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (bytes32) pure returns (string memory)"
                      }
                    },
                    "id": 2667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "417:36:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2663,
                  "id": 2668,
                  "nodeType": "Return",
                  "src": "410:43:15"
                }
              ]
            },
            "documentation": null,
            "id": 2670,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "testBytes32ToString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2659,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 2670,
                  "src": "320:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2658,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:14:15"
            },
            "returnParameters": {
              "id": 2663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2670,
                  "src": "381:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2661,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:15:15"
            },
            "scope": 2671,
            "src": "291:169:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2672,
        "src": "85:377:15"
      }
    ],
    "src": "0:463:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.920Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}