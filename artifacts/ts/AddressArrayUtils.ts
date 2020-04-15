export const AddressArrayUtils = 
{
  "contractName": "AddressArrayUtils",
  "abi": [],
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol\":\"AddressArrayUtils\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol\":{\"keccak256\":\"0xb716eab4e8c5a336a2f19078928530829af097912bd1b925644f914b63601f08\",\"urls\":[\"bzzr://d8a21d39779beb316adb5180d08dcba1941eeccd9412ff08feb21a631c18c269\"]}},\"version\":1}",
  "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582027b152405a92c2005db0e5d33c0294d745963471b6240318546fc1d1c672ddfc0029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582027b152405a92c2005db0e5d33c0294d745963471b6240318546fc1d1c672ddfc0029",
  "sourceMap": "228:6712:1:-;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24",
  "deployedSourceMap": "228:6712:1:-;;;;;;;;",
  "source": "// Pulled in from Cryptofin Solidity package in order to control Solidity compiler version\n// https://github.com/cryptofinlabs/cryptofin-solidity/blob/master/contracts/array-utils/AddressArrayUtils.sol\n\npragma solidity 0.5.7;\n\n\nlibrary AddressArrayUtils {\n\n    /**\n     * Finds the index of the first occurrence of the given element.\n     * @param A The input array to search\n     * @param a The value to find\n     * @return Returns (index and isIn) for the first occurrence starting from index 0\n     */\n    function indexOf(address[] memory A, address a) internal pure returns (uint256, bool) {\n        uint256 length = A.length;\n        for (uint256 i = 0; i < length; i++) {\n            if (A[i] == a) {\n                return (i, true);\n            }\n        }\n        return (0, false);\n    }\n\n    /**\n    * Returns true if the value is present in the list. Uses indexOf internally.\n    * @param A The input array to search\n    * @param a The value to find\n    * @return Returns isIn for the first occurrence starting from index 0\n    */\n    function contains(address[] memory A, address a) internal pure returns (bool) {\n        bool isIn;\n        (, isIn) = indexOf(A, a);\n        return isIn;\n    }\n\n    /**\n     * Returns the combination of the two arrays\n     * @param A The first array\n     * @param B The second array\n     * @return Returns A extended by B\n     */\n    function extend(address[] memory A, address[] memory B) internal pure returns (address[] memory) {\n        uint256 aLength = A.length;\n        uint256 bLength = B.length;\n        address[] memory newAddresses = new address[](aLength + bLength);\n        for (uint256 i = 0; i < aLength; i++) {\n            newAddresses[i] = A[i];\n        }\n        for (uint256 j = 0; j < bLength; j++) {\n            newAddresses[aLength + j] = B[j];\n        }\n        return newAddresses;\n    }\n\n    /**\n     * Returns the array with a appended to A.\n     * @param A The first array\n     * @param a The value to append\n     * @return Returns A appended by a\n     */\n    function append(address[] memory A, address a) internal pure returns (address[] memory) {\n        address[] memory newAddresses = new address[](A.length + 1);\n        for (uint256 i = 0; i < A.length; i++) {\n            newAddresses[i] = A[i];\n        }\n        newAddresses[A.length] = a;\n        return newAddresses;\n    }\n\n    /**\n     * Returns the intersection of two arrays. Arrays are treated as collections, so duplicates are kept.\n     * @param A The first array\n     * @param B The second array\n     * @return The intersection of the two arrays\n     */\n    function intersect(address[] memory A, address[] memory B) internal pure returns (address[] memory) {\n        uint256 length = A.length;\n        bool[] memory includeMap = new bool[](length);\n        uint256 newLength = 0;\n        for (uint256 i = 0; i < length; i++) {\n            if (contains(B, A[i])) {\n                includeMap[i] = true;\n                newLength++;\n            }\n        }\n        address[] memory newAddresses = new address[](newLength);\n        uint256 j = 0;\n        for (uint256 k = 0; k < length; k++) {\n            if (includeMap[k]) {\n                newAddresses[j] = A[k];\n                j++;\n            }\n        }\n        return newAddresses;\n    }\n\n    /**\n     * Returns the union of the two arrays. Order is not guaranteed.\n     * @param A The first array\n     * @param B The second array\n     * @return The union of the two arrays\n     */\n    function union(address[] memory A, address[] memory B) internal pure returns (address[] memory) {\n        address[] memory leftDifference = difference(A, B);\n        address[] memory rightDifference = difference(B, A);\n        address[] memory intersection = intersect(A, B);\n        return extend(leftDifference, extend(intersection, rightDifference));\n    }\n\n    /**\n     * Computes the difference of two arrays. Assumes there are no duplicates.\n     * @param A The first array\n     * @param B The second array\n     * @return The difference of the two arrays\n     */\n    function difference(address[] memory A, address[] memory B) internal pure returns (address[] memory) {\n        uint256 length = A.length;\n        bool[] memory includeMap = new bool[](length);\n        uint256 count = 0;\n        // First count the new length because can't push for in-memory arrays\n        for (uint256 i = 0; i < length; i++) {\n            address e = A[i];\n            if (!contains(B, e)) {\n                includeMap[i] = true;\n                count++;\n            }\n        }\n        address[] memory newAddresses = new address[](count);\n        uint256 j = 0;\n        for (uint256 k = 0; k < length; k++) {\n            if (includeMap[k]) {\n                newAddresses[j] = A[k];\n                j++;\n            }\n        }\n        return newAddresses;\n    }\n\n    /**\n    * Removes specified index from array\n    * Resulting ordering is not guaranteed\n    * @return Returns the new array and the removed entry\n    */\n    function pop(address[] memory A, uint256 index)\n        internal\n        pure\n        returns (address[] memory, address)\n    {\n        uint256 length = A.length;\n        address[] memory newAddresses = new address[](length - 1);\n        for (uint256 i = 0; i < index; i++) {\n            newAddresses[i] = A[i];\n        }\n        for (uint256 j = index + 1; j < length; j++) {\n            newAddresses[j - 1] = A[j];\n        }\n        return (newAddresses, A[index]);\n    }\n\n    /**\n     * @return Returns the new array\n     */\n    function remove(address[] memory A, address a)\n        internal\n        pure\n        returns (address[] memory)\n    {\n        (uint256 index, bool isIn) = indexOf(A, a);\n        if (!isIn) {\n            revert();\n        } else {\n            (address[] memory _A,) = pop(A, index);\n            return _A;\n        }\n    }\n\n    /**\n     * Returns whether or not there's a duplicate. Runs in O(n^2).\n     * @param A Array to search\n     * @return Returns true if duplicate, false otherwise\n     */\n    function hasDuplicate(address[] memory A) internal pure returns (bool) {\n        if (A.length == 0) { \n            return false;\n        }\n        for (uint256 i = 0; i < A.length - 1; i++) {\n            for (uint256 j = i + 1; j < A.length; j++) {\n                if (A[i] == A[j]) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns whether the two arrays are equal.\n     * @param A The first array\n     * @param B The second array\n     * @return True is the arrays are equal, false if not.\n     */\n    function isEqual(address[] memory A, address[] memory B) internal pure returns (bool) {\n        if (A.length != B.length) {\n            return false;\n        }\n        for (uint256 i = 0; i < A.length; i++) {\n            if (A[i] != B[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
    "exportedSymbols": {
      "AddressArrayUtils": [
        699
      ]
    },
    "id": 700,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "203:22:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 699,
        "linearizedBaseContracts": [
          699
        ],
        "name": "AddressArrayUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "595:203:1",
              "statements": [
                {
                  "assignments": [
                    17
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 48,
                      "src": "605:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 18,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "622:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 19,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "622:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:25:1"
                },
                {
                  "body": {
                    "id": 42,
                    "nodeType": "Block",
                    "src": "677:88:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 35,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 31,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7,
                              "src": "695:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 33,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 32,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "697:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "695:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "703:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "695:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 41,
                        "nodeType": "IfStatement",
                        "src": "691:64:1",
                        "trueBody": {
                          "id": 40,
                          "nodeType": "Block",
                          "src": "706:49:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "id": 36,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 22,
                                    "src": "732:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "74727565",
                                    "id": 37,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "735:4:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  }
                                ],
                                "id": 38,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "731:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                  "typeString": "tuple(uint256,bool)"
                                }
                              },
                              "functionReturnParameters": 15,
                              "id": 39,
                              "nodeType": "Return",
                              "src": "724:16:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 25,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "660:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 26,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "664:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "660:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43,
                  "initializationExpression": {
                    "assignments": [
                      22
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 22,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 43,
                        "src": "645:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "645:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 24,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 23,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "657:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "645:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 29,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "672:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 28,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "672:1:1",
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
                    "id": 30,
                    "nodeType": "ExpressionStatement",
                    "src": "672:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "640:125:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "782:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "785:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "id": 46,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "781:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                      "typeString": "tuple(int_const 0,bool)"
                    }
                  },
                  "functionReturnParameters": 15,
                  "id": 47,
                  "nodeType": "Return",
                  "src": "774:17:1"
                }
              ]
            },
            "documentation": "Finds the index of the first occurrence of the given element.\n@param A The input array to search\n@param a The value to find\n@return Returns (index and isIn) for the first occurrence starting from index 0",
            "id": 49,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "indexOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "526:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "526:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "526:9:1",
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
                  "id": 9,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "546:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:7:1",
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
              "src": "525:31:1"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "580:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "580:7:1",
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
                  "id": 14,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "589:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "589:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "579:15:1"
            },
            "scope": 699,
            "src": "509:289:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1126:81:1",
              "statements": [
                {
                  "assignments": [
                    60
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60,
                      "name": "isIn",
                      "nodeType": "VariableDeclaration",
                      "scope": 72,
                      "src": "1136:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1136:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 61,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1136:9:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        null,
                        {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "isIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "1158:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 63,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1155:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$_t_bool_$",
                        "typeString": "tuple(,bool)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 65,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52,
                          "src": "1174:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54,
                          "src": "1177:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 64,
                        "name": "indexOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1166:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_uint256_$_t_bool_$",
                          "typeString": "function (address[] memory,address) pure returns (uint256,bool)"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1166:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                        "typeString": "tuple(uint256,bool)"
                      }
                    },
                    "src": "1155:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "name": "isIn",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "1196:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1189:11:1"
                }
              ]
            },
            "documentation": "Returns true if the value is present in the list. Uses indexOf internally.\n@param A The input array to search\n@param a The value to find\n@return Returns isIn for the first occurrence starting from index 0",
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1066:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1066:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 51,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1066:9:1",
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
                  "id": 54,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1086:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:1",
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
              "src": "1065:31:1"
            },
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1120:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:6:1"
            },
            "scope": 699,
            "src": "1048:159:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 151,
              "nodeType": "Block",
              "src": "1479:380:1",
              "statements": [
                {
                  "assignments": [
                    86
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86,
                      "name": "aLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1489:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 85,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1489:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 89,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 87,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "1507:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1507:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1489:26:1"
                },
                {
                  "assignments": [
                    91
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 91,
                      "name": "bLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1525:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 90,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1525:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 94,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 92,
                      "name": "B",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "1543:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1543:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1525:26:1"
                },
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1561:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 96,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1561:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 97,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1561:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 106,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 102,
                          "name": "aLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "1607:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "bLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91,
                          "src": "1617:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1607:17:1",
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
                      "id": 101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1593:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 99,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1597:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 100,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1597:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1593:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1561:64:1"
                },
                {
                  "body": {
                    "id": 125,
                    "nodeType": "Block",
                    "src": "1673:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 98,
                              "src": "1687:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 119,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 118,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "1700:1:1",
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
                            "src": "1687:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 120,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 76,
                              "src": "1705:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 122,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 121,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "1707:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1705:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1687:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 124,
                        "nodeType": "ExpressionStatement",
                        "src": "1687:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 111,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 108,
                      "src": "1655:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 112,
                      "name": "aLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "1659:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1655:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 126,
                  "initializationExpression": {
                    "assignments": [
                      108
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 108,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "1640:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 107,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1640:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 110,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1652:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1640:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1668:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "1668:1:1",
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
                    "id": 116,
                    "nodeType": "ExpressionStatement",
                    "src": "1668:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1635:85:1"
                },
                {
                  "body": {
                    "id": 147,
                    "nodeType": "Block",
                    "src": "1767:57:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 137,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 98,
                              "src": "1781:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 141,
                            "indexExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 138,
                                "name": "aLength",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86,
                                "src": "1794:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 139,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 128,
                                "src": "1804:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1794:11:1",
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
                            "src": "1781:25:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "1809:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 144,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 128,
                              "src": "1811:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1809:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1781:32:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 146,
                        "nodeType": "ExpressionStatement",
                        "src": "1781:32:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 128,
                      "src": "1749:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 132,
                      "name": "bLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91,
                      "src": "1753:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1749:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 148,
                  "initializationExpression": {
                    "assignments": [
                      128
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 128,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 148,
                        "src": "1734:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 127,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1734:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 130,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1746:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1734:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1762:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 134,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 128,
                        "src": "1762:1:1",
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
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1762:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1729:95:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 98,
                    "src": "1840:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 84,
                  "id": 150,
                  "nodeType": "Return",
                  "src": "1833:19:1"
                }
              ]
            },
            "documentation": "Returns the combination of the two arrays\n@param A The first array\n@param B The second array\n@return Returns A extended by B",
            "id": 152,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "extend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1398:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 74,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1398:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 75,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1398:9:1",
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
                  "id": 79,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1418:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 77,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1418:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 78,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1418:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1397:40:1"
            },
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1461:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 81,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1461:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 82,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1461:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1460:18:1"
            },
            "scope": 699,
            "src": "1382:477:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "2123:236:1",
              "statements": [
                {
                  "assignments": [
                    166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 166,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "2133:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 164,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2133:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 165,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2133:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 175,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 170,
                            "name": "A",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 155,
                            "src": "2179:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2179:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2190:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "2179:12:1",
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
                      "id": 169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2165:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 167,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2169:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 168,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2169:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2165:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2133:59:1"
                },
                {
                  "body": {
                    "id": 195,
                    "nodeType": "Block",
                    "src": "2241:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 187,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 166,
                              "src": "2255:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 189,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 188,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "2268:1:1",
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
                            "src": "2255:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 190,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "2273:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 192,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "2275:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2273:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2255:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 194,
                        "nodeType": "ExpressionStatement",
                        "src": "2255:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 177,
                      "src": "2222:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 181,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 155,
                        "src": "2226:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2226:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2222:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 196,
                  "initializationExpression": {
                    "assignments": [
                      177
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 177,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 196,
                        "src": "2207:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 176,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2207:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 179,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2219:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2207:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 185,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2236:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 177,
                        "src": "2236:1:1",
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
                    "id": 186,
                    "nodeType": "ExpressionStatement",
                    "src": "2236:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2202:86:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 197,
                        "name": "newAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "2297:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 200,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2310:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2310:8:1",
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
                      "src": "2297:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 201,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 157,
                      "src": "2322:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2297:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "2297:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 204,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 166,
                    "src": "2340:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 162,
                  "id": 205,
                  "nodeType": "Return",
                  "src": "2333:19:1"
                }
              ]
            },
            "documentation": "Returns the array with a appended to A.\n@param A The first array\n@param a The value to append\n@return Returns A appended by a",
            "id": 207,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "append",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2051:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 153,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2051:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 154,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2051:9:1",
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
                  "id": 157,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2071:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2071:7:1",
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
              "src": "2050:31:1"
            },
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 161,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2105:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 159,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2105:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 160,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2105:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2104:18:1"
            },
            "scope": 699,
            "src": "2035:324:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 311,
              "nodeType": "Block",
              "src": "2702:586:1",
              "statements": [
                {
                  "assignments": [
                    220
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 220,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2712:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 219,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2712:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 223,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 221,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "2729:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2729:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2712:25:1"
                },
                {
                  "assignments": [
                    227
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 227,
                      "name": "includeMap",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2747:24:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 225,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2747:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 226,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2747:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 233,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 231,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 220,
                        "src": "2785:6:1",
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
                      "id": 230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2774:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bool_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (bool[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 228,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2778:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 229,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2778:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2774:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory",
                      "typeString": "bool[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2747:45:1"
                },
                {
                  "assignments": [
                    235
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 235,
                      "name": "newLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2802:17:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 234,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2802:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 237,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2822:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2802:21:1"
                },
                {
                  "body": {
                    "id": 265,
                    "nodeType": "Block",
                    "src": "2870:129:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 213,
                              "src": "2897:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 250,
                                "name": "A",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 210,
                                "src": "2900:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 252,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 251,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 239,
                                "src": "2902:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2900:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 248,
                            "name": "contains",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2888:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address[] memory,address) pure returns (bool)"
                            }
                          },
                          "id": 253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2888:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 264,
                        "nodeType": "IfStatement",
                        "src": "2884:105:1",
                        "trueBody": {
                          "id": 263,
                          "nodeType": "Block",
                          "src": "2907:82:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 258,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 254,
                                    "name": "includeMap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 227,
                                    "src": "2925:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 256,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 255,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 239,
                                    "src": "2936:1:1",
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
                                  "src": "2925:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "74727565",
                                  "id": 257,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2941:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "2925:20:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 259,
                              "nodeType": "ExpressionStatement",
                              "src": "2925:20:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 261,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "2963:11:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 260,
                                  "name": "newLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 235,
                                  "src": "2963:9:1",
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
                              "id": 262,
                              "nodeType": "ExpressionStatement",
                              "src": "2963:11:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 239,
                      "src": "2853:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 243,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2857:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2853:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 266,
                  "initializationExpression": {
                    "assignments": [
                      239
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 239,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 266,
                        "src": "2838:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 238,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2838:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2850:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2838:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2865:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 245,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 239,
                        "src": "2865:1:1",
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
                    "id": 247,
                    "nodeType": "ExpressionStatement",
                    "src": "2865:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2833:166:1"
                },
                {
                  "assignments": [
                    270
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 270,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "3008:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 268,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3008:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 269,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3008:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 276,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "newLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 235,
                        "src": "3054:9:1",
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
                      "id": 273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3040:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 271,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3044:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 272,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3044:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3040:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3008:56:1"
                },
                {
                  "assignments": [
                    278
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 278,
                      "name": "j",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "3074:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 277,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3074:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 280,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3086:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3074:13:1"
                },
                {
                  "body": {
                    "id": 307,
                    "nodeType": "Block",
                    "src": "3134:119:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 291,
                            "name": "includeMap",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "3152:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                              "typeString": "bool[] memory"
                            }
                          },
                          "id": 293,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 292,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 282,
                            "src": "3163:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3152:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 306,
                        "nodeType": "IfStatement",
                        "src": "3148:95:1",
                        "trueBody": {
                          "id": 305,
                          "nodeType": "Block",
                          "src": "3167:76:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 300,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 294,
                                    "name": "newAddresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 270,
                                    "src": "3185:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 296,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 295,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 278,
                                    "src": "3198:1:1",
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
                                  "src": "3185:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 297,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 210,
                                    "src": "3203:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 299,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 298,
                                    "name": "k",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 282,
                                    "src": "3205:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3203:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "3185:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 301,
                              "nodeType": "ExpressionStatement",
                              "src": "3185:22:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 303,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "3225:3:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 302,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 278,
                                  "src": "3225:1:1",
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
                              "id": 304,
                              "nodeType": "ExpressionStatement",
                              "src": "3225:3:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 285,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 282,
                      "src": "3117:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 286,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "3121:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3117:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 308,
                  "initializationExpression": {
                    "assignments": [
                      282
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 282,
                        "name": "k",
                        "nodeType": "VariableDeclaration",
                        "scope": 308,
                        "src": "3102:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 281,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3102:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 284,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3114:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3102:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3129:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 288,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 282,
                        "src": "3129:1:1",
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
                    "id": 290,
                    "nodeType": "ExpressionStatement",
                    "src": "3129:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "3097:156:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 309,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 270,
                    "src": "3269:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 218,
                  "id": 310,
                  "nodeType": "Return",
                  "src": "3262:19:1"
                }
              ]
            },
            "documentation": "Returns the intersection of two arrays. Arrays are treated as collections, so duplicates are kept.\n@param A The first array\n@param B The second array\n@return The intersection of the two arrays",
            "id": 312,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "intersect",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 210,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2621:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 209,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:1",
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
                  "id": 213,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2641:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 211,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2641:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 212,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2641:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2620:40:1"
            },
            "returnParameters": {
              "id": 218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 217,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2684:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 215,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2684:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 216,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2684:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2683:18:1"
            },
            "scope": 699,
            "src": "2602:686:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 359,
              "nodeType": "Block",
              "src": "3583:263:1",
              "statements": [
                {
                  "assignments": [
                    327
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 327,
                      "name": "leftDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3593:31:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 325,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3593:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 326,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3593:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 332,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 329,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3638:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 330,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3641:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 328,
                      "name": "difference",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 470,
                      "src": "3627:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3627:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3593:50:1"
                },
                {
                  "assignments": [
                    336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 336,
                      "name": "rightDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3653:32:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 334,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3653:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 335,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3653:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 341,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 338,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3699:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 339,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3702:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 337,
                      "name": "difference",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 470,
                      "src": "3688:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3688:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3653:51:1"
                },
                {
                  "assignments": [
                    345
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 345,
                      "name": "intersection",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3714:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 343,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3714:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 344,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3714:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 350,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 347,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3756:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 348,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3759:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 346,
                      "name": "intersect",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 312,
                      "src": "3746:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3746:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3714:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 352,
                        "name": "leftDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "3785:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "intersection",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "3808:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "rightDifference",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 336,
                            "src": "3822:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          ],
                          "id": 353,
                          "name": "extend",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 152,
                          "src": "3801:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                            "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                          }
                        },
                        "id": 356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3801:37:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 351,
                      "name": "extend",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 152,
                      "src": "3778:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3778:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 323,
                  "id": 358,
                  "nodeType": "Return",
                  "src": "3771:68:1"
                }
              ]
            },
            "documentation": "Returns the union of the two arrays. Order is not guaranteed.\n@param A The first array\n@param B The second array\n@return The union of the two arrays",
            "id": 360,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "union",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 315,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3502:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 313,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3502:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 314,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3502:9:1",
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
                  "id": 318,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3522:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 316,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3522:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 317,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3522:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3501:40:1"
            },
            "returnParameters": {
              "id": 323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 322,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3565:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 320,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3565:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 321,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3565:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3564:18:1"
            },
            "scope": 699,
            "src": "3487:359:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 469,
              "nodeType": "Block",
              "src": "4161:680:1",
              "statements": [
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4171:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 372,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4171:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 376,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 374,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 363,
                      "src": "4188:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "4188:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4171:25:1"
                },
                {
                  "assignments": [
                    380
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 380,
                      "name": "includeMap",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4206:24:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 378,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4206:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 379,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4206:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 386,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 384,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 373,
                        "src": "4244:6:1",
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
                      "id": 383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4233:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bool_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (bool[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 381,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4237:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 382,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4237:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      }
                    },
                    "id": 385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4233:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory",
                      "typeString": "bool[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4206:45:1"
                },
                {
                  "assignments": [
                    388
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 388,
                      "name": "count",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4261:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 387,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4261:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 390,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4277:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4261:17:1"
                },
                {
                  "body": {
                    "id": 423,
                    "nodeType": "Block",
                    "src": "4403:153:1",
                    "statements": [
                      {
                        "assignments": [
                          402
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 402,
                            "name": "e",
                            "nodeType": "VariableDeclaration",
                            "scope": 423,
                            "src": "4417:9:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 401,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4417:7:1",
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
                        "id": 406,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 403,
                            "name": "A",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 363,
                            "src": "4429:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 405,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 392,
                            "src": "4431:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4429:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4417:16:1"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "4451:15:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 408,
                                "name": "B",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 366,
                                "src": "4461:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 409,
                                "name": "e",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 402,
                                "src": "4464:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 407,
                              "name": "contains",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "4452:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address[] memory,address) pure returns (bool)"
                              }
                            },
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4452:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 422,
                        "nodeType": "IfStatement",
                        "src": "4447:99:1",
                        "trueBody": {
                          "id": 421,
                          "nodeType": "Block",
                          "src": "4468:78:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 416,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 412,
                                    "name": "includeMap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 380,
                                    "src": "4486:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 414,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 413,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 392,
                                    "src": "4497:1:1",
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
                                  "src": "4486:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "74727565",
                                  "id": 415,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4502:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "4486:20:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 417,
                              "nodeType": "ExpressionStatement",
                              "src": "4486:20:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 419,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4524:7:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 418,
                                  "name": "count",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 388,
                                  "src": "4524:5:1",
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
                              "id": 420,
                              "nodeType": "ExpressionStatement",
                              "src": "4524:7:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 395,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 392,
                      "src": "4386:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 396,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "4390:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4386:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 424,
                  "initializationExpression": {
                    "assignments": [
                      392
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 392,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 424,
                        "src": "4371:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 391,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4371:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 394,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4383:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4371:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4398:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 392,
                        "src": "4398:1:1",
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
                    "id": 400,
                    "nodeType": "ExpressionStatement",
                    "src": "4398:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "4366:190:1"
                },
                {
                  "assignments": [
                    428
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 428,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4565:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 426,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4565:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 427,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4565:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 434,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 432,
                        "name": "count",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 388,
                        "src": "4611:5:1",
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
                      "id": 431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4597:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 429,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4601:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 430,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4601:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4597:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4565:52:1"
                },
                {
                  "assignments": [
                    436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 436,
                      "name": "j",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4627:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4627:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 438,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4639:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4627:13:1"
                },
                {
                  "body": {
                    "id": 465,
                    "nodeType": "Block",
                    "src": "4687:119:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 449,
                            "name": "includeMap",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 380,
                            "src": "4705:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                              "typeString": "bool[] memory"
                            }
                          },
                          "id": 451,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 450,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 440,
                            "src": "4716:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4705:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 464,
                        "nodeType": "IfStatement",
                        "src": "4701:95:1",
                        "trueBody": {
                          "id": 463,
                          "nodeType": "Block",
                          "src": "4720:76:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 458,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 452,
                                    "name": "newAddresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 428,
                                    "src": "4738:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 454,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 453,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 436,
                                    "src": "4751:1:1",
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
                                  "src": "4738:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 455,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 363,
                                    "src": "4756:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 457,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 456,
                                    "name": "k",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 440,
                                    "src": "4758:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4756:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "4738:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 459,
                              "nodeType": "ExpressionStatement",
                              "src": "4738:22:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 461,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4778:3:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 460,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 436,
                                  "src": "4778:1:1",
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
                              "id": 462,
                              "nodeType": "ExpressionStatement",
                              "src": "4778:3:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 443,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "4670:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 444,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "4674:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4670:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 466,
                  "initializationExpression": {
                    "assignments": [
                      440
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 440,
                        "name": "k",
                        "nodeType": "VariableDeclaration",
                        "scope": 466,
                        "src": "4655:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 439,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4655:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 442,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4667:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4655:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4682:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 446,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 440,
                        "src": "4682:1:1",
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
                    "id": 448,
                    "nodeType": "ExpressionStatement",
                    "src": "4682:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "4650:156:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 467,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 428,
                    "src": "4822:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 371,
                  "id": 468,
                  "nodeType": "Return",
                  "src": "4815:19:1"
                }
              ]
            },
            "documentation": "Computes the difference of two arrays. Assumes there are no duplicates.\n@param A The first array\n@param B The second array\n@return The difference of the two arrays",
            "id": 470,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "difference",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 363,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4080:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 361,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4080:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 362,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4080:9:1",
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
                  "id": 366,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4100:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 364,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4100:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 365,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4100:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4079:40:1"
            },
            "returnParameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 370,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4143:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 368,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4143:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 369,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4143:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4142:18:1"
            },
            "scope": 699,
            "src": "4060:781:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 550,
              "nodeType": "Block",
              "src": "5130:347:1",
              "statements": [
                {
                  "assignments": [
                    484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 484,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 550,
                      "src": "5140:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 483,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5140:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 487,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 485,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 473,
                      "src": "5157:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "5157:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5140:25:1"
                },
                {
                  "assignments": [
                    491
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 491,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 550,
                      "src": "5175:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 489,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5175:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 490,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "5175:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 499,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 495,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 484,
                          "src": "5221:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5230:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5221:10:1",
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
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5207:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 492,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5211:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 493,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "5211:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5207:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5175:57:1"
                },
                {
                  "body": {
                    "id": 518,
                    "nodeType": "Block",
                    "src": "5278:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 510,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 491,
                              "src": "5292:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 512,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 511,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 501,
                              "src": "5305:1:1",
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
                            "src": "5292:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 513,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 473,
                              "src": "5310:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 515,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 514,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 501,
                              "src": "5312:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5310:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5292:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 517,
                        "nodeType": "ExpressionStatement",
                        "src": "5292:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 504,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 501,
                      "src": "5262:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 505,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 475,
                      "src": "5266:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5262:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 519,
                  "initializationExpression": {
                    "assignments": [
                      501
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 501,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 519,
                        "src": "5247:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 500,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5247:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 503,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5259:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5247:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5273:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 507,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 501,
                        "src": "5273:1:1",
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
                    "id": 509,
                    "nodeType": "ExpressionStatement",
                    "src": "5273:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "5242:83:1"
                },
                {
                  "body": {
                    "id": 542,
                    "nodeType": "Block",
                    "src": "5379:51:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 532,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 491,
                              "src": "5393:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 536,
                            "indexExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 535,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 533,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "5406:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 534,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5410:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "5406:5:1",
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
                            "src": "5393:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 537,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 473,
                              "src": "5415:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 539,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 538,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 521,
                              "src": "5417:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5415:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5393:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 541,
                        "nodeType": "ExpressionStatement",
                        "src": "5393:26:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 526,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 521,
                      "src": "5362:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 527,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 484,
                      "src": "5366:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5362:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 543,
                  "initializationExpression": {
                    "assignments": [
                      521
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 521,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 543,
                        "src": "5339:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 520,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5339:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 525,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 524,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 522,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "5351:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5359:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "5351:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5339:21:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5374:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 521,
                        "src": "5374:1:1",
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
                    "id": 531,
                    "nodeType": "ExpressionStatement",
                    "src": "5374:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "5334:96:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 544,
                        "name": "newAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 491,
                        "src": "5447:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 545,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 473,
                          "src": "5461:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 547,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 546,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "5463:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5461:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 548,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5446:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                      "typeString": "tuple(address[] memory,address)"
                    }
                  },
                  "functionReturnParameters": 482,
                  "id": 549,
                  "nodeType": "Return",
                  "src": "5439:31:1"
                }
              ]
            },
            "documentation": "Removes specified index from array\nResulting ordering is not guaranteed\n@return Returns the new array and the removed entry",
            "id": 551,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pop",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 473,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5017:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 471,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5017:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 472,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5017:9:1",
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
                  "id": 475,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5037:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5037:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5016:35:1"
            },
            "returnParameters": {
              "id": 482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 479,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5099:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 477,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5099:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 478,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5099:9:1",
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
                  "id": 481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5117:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 480,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5117:7:1",
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
              "src": "5098:27:1"
            },
            "scope": 699,
            "src": "5004:473:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 590,
              "nodeType": "Block",
              "src": "5652:204:1",
              "statements": [
                {
                  "assignments": [
                    563,
                    565
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 563,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 590,
                      "src": "5663:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 562,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5663:7:1",
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
                      "id": 565,
                      "name": "isIn",
                      "nodeType": "VariableDeclaration",
                      "scope": 590,
                      "src": "5678:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 564,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5678:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "5699:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 568,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5702:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 566,
                      "name": "indexOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49,
                      "src": "5691:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_uint256_$_t_bool_$",
                        "typeString": "function (address[] memory,address) pure returns (uint256,bool)"
                      }
                    },
                    "id": 569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5691:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                      "typeString": "tuple(uint256,bool)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5662:42:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5718:5:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 571,
                      "name": "isIn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 565,
                      "src": "5719:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 588,
                    "nodeType": "Block",
                    "src": "5764:86:1",
                    "statements": [
                      {
                        "assignments": [
                          580,
                          null
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 580,
                            "name": "_A",
                            "nodeType": "VariableDeclaration",
                            "scope": 588,
                            "src": "5779:19:1",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 578,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5779:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 579,
                              "length": null,
                              "nodeType": "ArrayTypeName",
                              "src": "5779:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          },
                          null
                        ],
                        "id": 585,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 582,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5807:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 563,
                              "src": "5810:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 581,
                            "name": "pop",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 551,
                            "src": "5803:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                              "typeString": "function (address[] memory,uint256) pure returns (address[] memory,address)"
                            }
                          },
                          "id": 584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5803:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                            "typeString": "tuple(address[] memory,address)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5778:38:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 586,
                          "name": "_A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 580,
                          "src": "5837:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "functionReturnParameters": 561,
                        "id": 587,
                        "nodeType": "Return",
                        "src": "5830:9:1"
                      }
                    ]
                  },
                  "id": 589,
                  "nodeType": "IfStatement",
                  "src": "5714:136:1",
                  "trueBody": {
                    "id": 576,
                    "nodeType": "Block",
                    "src": "5725:33:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 573,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3218,
                              3219
                            ],
                            "referencedDeclaration": 3218,
                            "src": "5739:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5739:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 575,
                        "nodeType": "ExpressionStatement",
                        "src": "5739:8:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@return Returns the new array",
            "id": 591,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 554,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5552:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 552,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5552:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 553,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5552:9:1",
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
                  "id": 556,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5572:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5572:7:1",
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
              "src": "5551:31:1"
            },
            "returnParameters": {
              "id": 561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 560,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5630:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 558,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5630:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 559,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5630:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5629:18:1"
            },
            "scope": 699,
            "src": "5536:320:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 650,
              "nodeType": "Block",
              "src": "6106:316:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 599,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 594,
                        "src": "6120:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6120:8:1",
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
                      "id": 601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6132:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6120:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 606,
                  "nodeType": "IfStatement",
                  "src": "6116:57:1",
                  "trueBody": {
                    "id": 605,
                    "nodeType": "Block",
                    "src": "6135:38:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6157:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 598,
                        "id": 604,
                        "nodeType": "Return",
                        "src": "6150:12:1"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 646,
                    "nodeType": "Block",
                    "src": "6225:169:1",
                    "statements": [
                      {
                        "body": {
                          "id": 644,
                          "nodeType": "Block",
                          "src": "6282:102:1",
                          "statements": [
                            {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 639,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 633,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 594,
                                    "src": "6304:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 635,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 634,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 608,
                                    "src": "6306:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6304:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 636,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 594,
                                    "src": "6312:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 638,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 637,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 621,
                                    "src": "6314:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6312:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "6304:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 643,
                              "nodeType": "IfStatement",
                              "src": "6300:70:1",
                              "trueBody": {
                                "id": 642,
                                "nodeType": "Block",
                                "src": "6318:52:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "74727565",
                                      "id": 640,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "bool",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6347:4:1",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      "value": "true"
                                    },
                                    "functionReturnParameters": 598,
                                    "id": 641,
                                    "nodeType": "Return",
                                    "src": "6340:11:1"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 629,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 626,
                            "name": "j",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 621,
                            "src": "6263:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 627,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 594,
                              "src": "6267:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6267:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6263:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 645,
                        "initializationExpression": {
                          "assignments": [
                            621
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 621,
                              "name": "j",
                              "nodeType": "VariableDeclaration",
                              "scope": 645,
                              "src": "6244:9:1",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 620,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "6244:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 625,
                          "initialValue": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 624,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 622,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 608,
                              "src": "6256:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 623,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6260:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6256:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "6244:17:1"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 631,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "6277:3:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 630,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "6277:1:1",
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
                          "id": 632,
                          "nodeType": "ExpressionStatement",
                          "src": "6277:3:1"
                        },
                        "nodeType": "ForStatement",
                        "src": "6239:145:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 611,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 608,
                      "src": "6202:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 612,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "6206:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 613,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6206:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6217:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "6206:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6202:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 647,
                  "initializationExpression": {
                    "assignments": [
                      608
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 608,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 647,
                        "src": "6187:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 607,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6187:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 610,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6199:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6187:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 618,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6220:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 617,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 608,
                        "src": "6220:1:1",
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
                    "id": 619,
                    "nodeType": "ExpressionStatement",
                    "src": "6220:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "6182:212:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6410:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 598,
                  "id": 649,
                  "nodeType": "Return",
                  "src": "6403:12:1"
                }
              ]
            },
            "documentation": "Returns whether or not there's a duplicate. Runs in O(n^2).\n@param A Array to search\n@return Returns true if duplicate, false otherwise",
            "id": 651,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasDuplicate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 594,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 651,
                  "src": "6057:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 592,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6057:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 593,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6057:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6056:20:1"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 651,
                  "src": "6100:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6100:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6099:6:1"
            },
            "scope": 699,
            "src": "6035:387:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 697,
              "nodeType": "Block",
              "src": "6703:235:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 662,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 654,
                        "src": "6717:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6717:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 664,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "6729:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6729:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6717:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 670,
                  "nodeType": "IfStatement",
                  "src": "6713:63:1",
                  "trueBody": {
                    "id": 669,
                    "nodeType": "Block",
                    "src": "6739:37:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 667,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6760:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 661,
                        "id": 668,
                        "nodeType": "Return",
                        "src": "6753:12:1"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 693,
                    "nodeType": "Block",
                    "src": "6824:87:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 682,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 654,
                              "src": "6842:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 684,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 683,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 672,
                              "src": "6844:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6842:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 685,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 657,
                              "src": "6850:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 687,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 686,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 672,
                              "src": "6852:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6850:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6842:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 692,
                        "nodeType": "IfStatement",
                        "src": "6838:63:1",
                        "trueBody": {
                          "id": 691,
                          "nodeType": "Block",
                          "src": "6856:45:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 689,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6881:5:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 661,
                              "id": 690,
                              "nodeType": "Return",
                              "src": "6874:12:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 675,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 672,
                      "src": "6805:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 676,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 654,
                        "src": "6809:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6809:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6805:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 694,
                  "initializationExpression": {
                    "assignments": [
                      672
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 672,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 694,
                        "src": "6790:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 671,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6790:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 674,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6802:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6790:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6819:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 679,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 672,
                        "src": "6819:1:1",
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
                    "id": 681,
                    "nodeType": "ExpressionStatement",
                    "src": "6819:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "6785:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6927:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 661,
                  "id": 696,
                  "nodeType": "Return",
                  "src": "6920:11:1"
                }
              ]
            },
            "documentation": "Returns whether the two arrays are equal.\n@param A The first array\n@param B The second array\n@return True is the arrays are equal, false if not.",
            "id": 698,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isEqual",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 654,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6634:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 652,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6634:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 653,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6634:9:1",
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
                  "id": 657,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6654:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 655,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6654:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 656,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6654:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6633:40:1"
            },
            "returnParameters": {
              "id": 661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 660,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6697:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6697:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6696:6:1"
            },
            "scope": 699,
            "src": "6617:321:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 700,
        "src": "228:6712:1"
      }
    ],
    "src": "203:6738:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
    "exportedSymbols": {
      "AddressArrayUtils": [
        699
      ]
    },
    "id": 700,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "203:22:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 699,
        "linearizedBaseContracts": [
          699
        ],
        "name": "AddressArrayUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "595:203:1",
              "statements": [
                {
                  "assignments": [
                    17
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 48,
                      "src": "605:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 18,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "622:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 19,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "622:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:25:1"
                },
                {
                  "body": {
                    "id": 42,
                    "nodeType": "Block",
                    "src": "677:88:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 35,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 31,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7,
                              "src": "695:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 33,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 32,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 22,
                              "src": "697:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "695:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "703:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "695:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 41,
                        "nodeType": "IfStatement",
                        "src": "691:64:1",
                        "trueBody": {
                          "id": 40,
                          "nodeType": "Block",
                          "src": "706:49:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "id": 36,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 22,
                                    "src": "732:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "74727565",
                                    "id": 37,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "bool",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "735:4:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    "value": "true"
                                  }
                                ],
                                "id": 38,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "731:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                  "typeString": "tuple(uint256,bool)"
                                }
                              },
                              "functionReturnParameters": 15,
                              "id": 39,
                              "nodeType": "Return",
                              "src": "724:16:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 25,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "660:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 26,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "664:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "660:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43,
                  "initializationExpression": {
                    "assignments": [
                      22
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 22,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 43,
                        "src": "645:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "645:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 24,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 23,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "657:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "645:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 29,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "672:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 28,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "672:1:1",
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
                    "id": 30,
                    "nodeType": "ExpressionStatement",
                    "src": "672:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "640:125:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "782:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "785:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "id": 46,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "781:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                      "typeString": "tuple(int_const 0,bool)"
                    }
                  },
                  "functionReturnParameters": 15,
                  "id": 47,
                  "nodeType": "Return",
                  "src": "774:17:1"
                }
              ]
            },
            "documentation": "Finds the index of the first occurrence of the given element.\n@param A The input array to search\n@param a The value to find\n@return Returns (index and isIn) for the first occurrence starting from index 0",
            "id": 49,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "indexOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "526:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "526:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "526:9:1",
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
                  "id": 9,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "546:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:7:1",
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
              "src": "525:31:1"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "580:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "580:7:1",
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
                  "id": 14,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 49,
                  "src": "589:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "589:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "579:15:1"
            },
            "scope": 699,
            "src": "509:289:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 72,
              "nodeType": "Block",
              "src": "1126:81:1",
              "statements": [
                {
                  "assignments": [
                    60
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 60,
                      "name": "isIn",
                      "nodeType": "VariableDeclaration",
                      "scope": 72,
                      "src": "1136:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1136:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 61,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1136:9:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        null,
                        {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "isIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 60,
                          "src": "1158:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 63,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1155:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$_t_bool_$",
                        "typeString": "tuple(,bool)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 65,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 52,
                          "src": "1174:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54,
                          "src": "1177:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 64,
                        "name": "indexOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1166:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_uint256_$_t_bool_$",
                          "typeString": "function (address[] memory,address) pure returns (uint256,bool)"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1166:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                        "typeString": "tuple(uint256,bool)"
                      }
                    },
                    "src": "1155:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "name": "isIn",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 60,
                    "src": "1196:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 58,
                  "id": 71,
                  "nodeType": "Return",
                  "src": "1189:11:1"
                }
              ]
            },
            "documentation": "Returns true if the value is present in the list. Uses indexOf internally.\n@param A The input array to search\n@param a The value to find\n@return Returns isIn for the first occurrence starting from index 0",
            "id": 73,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contains",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1066:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1066:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 51,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1066:9:1",
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
                  "id": 54,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1086:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:1",
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
              "src": "1065:31:1"
            },
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 73,
                  "src": "1120:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:6:1"
            },
            "scope": 699,
            "src": "1048:159:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 151,
              "nodeType": "Block",
              "src": "1479:380:1",
              "statements": [
                {
                  "assignments": [
                    86
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86,
                      "name": "aLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1489:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 85,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1489:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 89,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 87,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "1507:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1507:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1489:26:1"
                },
                {
                  "assignments": [
                    91
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 91,
                      "name": "bLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1525:15:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 90,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1525:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 94,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 92,
                      "name": "B",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "1543:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1543:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1525:26:1"
                },
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 151,
                      "src": "1561:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 96,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1561:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 97,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1561:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 106,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 102,
                          "name": "aLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "1607:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "bLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91,
                          "src": "1617:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1607:17:1",
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
                      "id": 101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1593:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 99,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1597:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 100,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1597:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1593:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1561:64:1"
                },
                {
                  "body": {
                    "id": 125,
                    "nodeType": "Block",
                    "src": "1673:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 98,
                              "src": "1687:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 119,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 118,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "1700:1:1",
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
                            "src": "1687:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 120,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 76,
                              "src": "1705:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 122,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 121,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 108,
                              "src": "1707:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1705:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1687:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 124,
                        "nodeType": "ExpressionStatement",
                        "src": "1687:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 111,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 108,
                      "src": "1655:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 112,
                      "name": "aLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "1659:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1655:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 126,
                  "initializationExpression": {
                    "assignments": [
                      108
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 108,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 126,
                        "src": "1640:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 107,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1640:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 110,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1652:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1640:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1668:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 108,
                        "src": "1668:1:1",
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
                    "id": 116,
                    "nodeType": "ExpressionStatement",
                    "src": "1668:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1635:85:1"
                },
                {
                  "body": {
                    "id": 147,
                    "nodeType": "Block",
                    "src": "1767:57:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 137,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 98,
                              "src": "1781:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 141,
                            "indexExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 138,
                                "name": "aLength",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86,
                                "src": "1794:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 139,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 128,
                                "src": "1804:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1794:11:1",
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
                            "src": "1781:25:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "1809:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 144,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 143,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 128,
                              "src": "1811:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1809:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1781:32:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 146,
                        "nodeType": "ExpressionStatement",
                        "src": "1781:32:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 128,
                      "src": "1749:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 132,
                      "name": "bLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91,
                      "src": "1753:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1749:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 148,
                  "initializationExpression": {
                    "assignments": [
                      128
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 128,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 148,
                        "src": "1734:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 127,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1734:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 130,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1746:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1734:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1762:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 134,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 128,
                        "src": "1762:1:1",
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
                    "id": 136,
                    "nodeType": "ExpressionStatement",
                    "src": "1762:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1729:95:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 98,
                    "src": "1840:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 84,
                  "id": 150,
                  "nodeType": "Return",
                  "src": "1833:19:1"
                }
              ]
            },
            "documentation": "Returns the combination of the two arrays\n@param A The first array\n@param B The second array\n@return Returns A extended by B",
            "id": 152,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "extend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1398:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 74,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1398:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 75,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1398:9:1",
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
                  "id": 79,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1418:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 77,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1418:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 78,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1418:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1397:40:1"
            },
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 152,
                  "src": "1461:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 81,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1461:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 82,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1461:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1460:18:1"
            },
            "scope": 699,
            "src": "1382:477:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 206,
              "nodeType": "Block",
              "src": "2123:236:1",
              "statements": [
                {
                  "assignments": [
                    166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 166,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 206,
                      "src": "2133:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 164,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2133:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 165,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2133:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 175,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 170,
                            "name": "A",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 155,
                            "src": "2179:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2179:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2190:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "2179:12:1",
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
                      "id": 169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2165:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 167,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2169:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 168,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2169:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2165:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2133:59:1"
                },
                {
                  "body": {
                    "id": 195,
                    "nodeType": "Block",
                    "src": "2241:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 187,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 166,
                              "src": "2255:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 189,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 188,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "2268:1:1",
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
                            "src": "2255:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 190,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 155,
                              "src": "2273:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 192,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 191,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 177,
                              "src": "2275:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2273:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2255:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 194,
                        "nodeType": "ExpressionStatement",
                        "src": "2255:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 177,
                      "src": "2222:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 181,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 155,
                        "src": "2226:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2226:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2222:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 196,
                  "initializationExpression": {
                    "assignments": [
                      177
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 177,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 196,
                        "src": "2207:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 176,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2207:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 179,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2219:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2207:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 185,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2236:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 177,
                        "src": "2236:1:1",
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
                    "id": 186,
                    "nodeType": "ExpressionStatement",
                    "src": "2236:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2202:86:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 197,
                        "name": "newAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "2297:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 200,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 155,
                          "src": "2310:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2310:8:1",
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
                      "src": "2297:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 201,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 157,
                      "src": "2322:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2297:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "2297:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 204,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 166,
                    "src": "2340:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 162,
                  "id": 205,
                  "nodeType": "Return",
                  "src": "2333:19:1"
                }
              ]
            },
            "documentation": "Returns the array with a appended to A.\n@param A The first array\n@param a The value to append\n@return Returns A appended by a",
            "id": 207,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "append",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 155,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2051:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 153,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2051:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 154,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2051:9:1",
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
                  "id": 157,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2071:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2071:7:1",
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
              "src": "2050:31:1"
            },
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 161,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 207,
                  "src": "2105:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 159,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2105:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 160,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2105:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2104:18:1"
            },
            "scope": 699,
            "src": "2035:324:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 311,
              "nodeType": "Block",
              "src": "2702:586:1",
              "statements": [
                {
                  "assignments": [
                    220
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 220,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2712:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 219,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2712:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 223,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 221,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 210,
                      "src": "2729:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2729:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2712:25:1"
                },
                {
                  "assignments": [
                    227
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 227,
                      "name": "includeMap",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2747:24:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 225,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2747:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 226,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2747:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 233,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 231,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 220,
                        "src": "2785:6:1",
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
                      "id": 230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2774:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bool_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (bool[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 228,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2778:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 229,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "2778:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      }
                    },
                    "id": 232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2774:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory",
                      "typeString": "bool[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2747:45:1"
                },
                {
                  "assignments": [
                    235
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 235,
                      "name": "newLength",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "2802:17:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 234,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2802:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 237,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2822:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2802:21:1"
                },
                {
                  "body": {
                    "id": 265,
                    "nodeType": "Block",
                    "src": "2870:129:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 249,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 213,
                              "src": "2897:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 250,
                                "name": "A",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 210,
                                "src": "2900:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 252,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 251,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 239,
                                "src": "2902:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2900:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 248,
                            "name": "contains",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "2888:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address[] memory,address) pure returns (bool)"
                            }
                          },
                          "id": 253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2888:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 264,
                        "nodeType": "IfStatement",
                        "src": "2884:105:1",
                        "trueBody": {
                          "id": 263,
                          "nodeType": "Block",
                          "src": "2907:82:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 258,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 254,
                                    "name": "includeMap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 227,
                                    "src": "2925:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 256,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 255,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 239,
                                    "src": "2936:1:1",
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
                                  "src": "2925:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "74727565",
                                  "id": 257,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2941:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "2925:20:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 259,
                              "nodeType": "ExpressionStatement",
                              "src": "2925:20:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 261,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "2963:11:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 260,
                                  "name": "newLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 235,
                                  "src": "2963:9:1",
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
                              "id": 262,
                              "nodeType": "ExpressionStatement",
                              "src": "2963:11:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 239,
                      "src": "2853:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 243,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "2857:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2853:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 266,
                  "initializationExpression": {
                    "assignments": [
                      239
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 239,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 266,
                        "src": "2838:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 238,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2838:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 241,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2850:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2838:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2865:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 245,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 239,
                        "src": "2865:1:1",
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
                    "id": 247,
                    "nodeType": "ExpressionStatement",
                    "src": "2865:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2833:166:1"
                },
                {
                  "assignments": [
                    270
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 270,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "3008:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 268,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3008:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 269,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3008:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 276,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "newLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 235,
                        "src": "3054:9:1",
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
                      "id": 273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3040:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 271,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3044:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 272,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3044:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3040:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3008:56:1"
                },
                {
                  "assignments": [
                    278
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 278,
                      "name": "j",
                      "nodeType": "VariableDeclaration",
                      "scope": 311,
                      "src": "3074:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 277,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3074:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 280,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3086:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3074:13:1"
                },
                {
                  "body": {
                    "id": 307,
                    "nodeType": "Block",
                    "src": "3134:119:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 291,
                            "name": "includeMap",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 227,
                            "src": "3152:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                              "typeString": "bool[] memory"
                            }
                          },
                          "id": 293,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 292,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 282,
                            "src": "3163:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3152:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 306,
                        "nodeType": "IfStatement",
                        "src": "3148:95:1",
                        "trueBody": {
                          "id": 305,
                          "nodeType": "Block",
                          "src": "3167:76:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 300,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 294,
                                    "name": "newAddresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 270,
                                    "src": "3185:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 296,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 295,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 278,
                                    "src": "3198:1:1",
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
                                  "src": "3185:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 297,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 210,
                                    "src": "3203:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 299,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 298,
                                    "name": "k",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 282,
                                    "src": "3205:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3203:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "3185:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 301,
                              "nodeType": "ExpressionStatement",
                              "src": "3185:22:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 303,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "3225:3:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 302,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 278,
                                  "src": "3225:1:1",
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
                              "id": 304,
                              "nodeType": "ExpressionStatement",
                              "src": "3225:3:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 285,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 282,
                      "src": "3117:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 286,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 220,
                      "src": "3121:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3117:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 308,
                  "initializationExpression": {
                    "assignments": [
                      282
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 282,
                        "name": "k",
                        "nodeType": "VariableDeclaration",
                        "scope": 308,
                        "src": "3102:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 281,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3102:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 284,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3114:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3102:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3129:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 288,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 282,
                        "src": "3129:1:1",
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
                    "id": 290,
                    "nodeType": "ExpressionStatement",
                    "src": "3129:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "3097:156:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 309,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 270,
                    "src": "3269:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 218,
                  "id": 310,
                  "nodeType": "Return",
                  "src": "3262:19:1"
                }
              ]
            },
            "documentation": "Returns the intersection of two arrays. Arrays are treated as collections, so duplicates are kept.\n@param A The first array\n@param B The second array\n@return The intersection of the two arrays",
            "id": 312,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "intersect",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 210,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2621:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2621:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 209,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2621:9:1",
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
                  "id": 213,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2641:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 211,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2641:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 212,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2641:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2620:40:1"
            },
            "returnParameters": {
              "id": 218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 217,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 312,
                  "src": "2684:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 215,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2684:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 216,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2684:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2683:18:1"
            },
            "scope": 699,
            "src": "2602:686:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 359,
              "nodeType": "Block",
              "src": "3583:263:1",
              "statements": [
                {
                  "assignments": [
                    327
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 327,
                      "name": "leftDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3593:31:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 325,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3593:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 326,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3593:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 332,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 329,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3638:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 330,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3641:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 328,
                      "name": "difference",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 470,
                      "src": "3627:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3627:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3593:50:1"
                },
                {
                  "assignments": [
                    336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 336,
                      "name": "rightDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3653:32:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 334,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3653:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 335,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3653:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 341,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 338,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3699:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 339,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3702:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 337,
                      "name": "difference",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 470,
                      "src": "3688:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3688:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3653:51:1"
                },
                {
                  "assignments": [
                    345
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 345,
                      "name": "intersection",
                      "nodeType": "VariableDeclaration",
                      "scope": 359,
                      "src": "3714:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 343,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3714:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 344,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3714:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 350,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 347,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 315,
                        "src": "3756:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 348,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 318,
                        "src": "3759:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 346,
                      "name": "intersect",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 312,
                      "src": "3746:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3746:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3714:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 352,
                        "name": "leftDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 327,
                        "src": "3785:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 354,
                            "name": "intersection",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "3808:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "rightDifference",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 336,
                            "src": "3822:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          ],
                          "id": 353,
                          "name": "extend",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 152,
                          "src": "3801:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                            "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                          }
                        },
                        "id": 356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3801:37:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      ],
                      "id": 351,
                      "name": "extend",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 152,
                      "src": "3778:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                        "typeString": "function (address[] memory,address[] memory) pure returns (address[] memory)"
                      }
                    },
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3778:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 323,
                  "id": 358,
                  "nodeType": "Return",
                  "src": "3771:68:1"
                }
              ]
            },
            "documentation": "Returns the union of the two arrays. Order is not guaranteed.\n@param A The first array\n@param B The second array\n@return The union of the two arrays",
            "id": 360,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "union",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 315,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3502:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 313,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3502:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 314,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3502:9:1",
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
                  "id": 318,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3522:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 316,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3522:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 317,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3522:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3501:40:1"
            },
            "returnParameters": {
              "id": 323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 322,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 360,
                  "src": "3565:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 320,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3565:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 321,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3565:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3564:18:1"
            },
            "scope": 699,
            "src": "3487:359:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 469,
              "nodeType": "Block",
              "src": "4161:680:1",
              "statements": [
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4171:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 372,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4171:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 376,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 374,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 363,
                      "src": "4188:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "4188:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4171:25:1"
                },
                {
                  "assignments": [
                    380
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 380,
                      "name": "includeMap",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4206:24:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                        "typeString": "bool[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 378,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4206:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 379,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4206:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 386,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 384,
                        "name": "length",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 373,
                        "src": "4244:6:1",
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
                      "id": 383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4233:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bool_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (bool[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 381,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4237:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 382,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4237:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                          "typeString": "bool[]"
                        }
                      }
                    },
                    "id": 385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4233:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_memory",
                      "typeString": "bool[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4206:45:1"
                },
                {
                  "assignments": [
                    388
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 388,
                      "name": "count",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4261:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 387,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4261:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 390,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4277:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4261:17:1"
                },
                {
                  "body": {
                    "id": 423,
                    "nodeType": "Block",
                    "src": "4403:153:1",
                    "statements": [
                      {
                        "assignments": [
                          402
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 402,
                            "name": "e",
                            "nodeType": "VariableDeclaration",
                            "scope": 423,
                            "src": "4417:9:1",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 401,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4417:7:1",
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
                        "id": 406,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 403,
                            "name": "A",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 363,
                            "src": "4429:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 405,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 392,
                            "src": "4431:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4429:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4417:16:1"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "4451:15:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 408,
                                "name": "B",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 366,
                                "src": "4461:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 409,
                                "name": "e",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 402,
                                "src": "4464:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 407,
                              "name": "contains",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "4452:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_bool_$",
                                "typeString": "function (address[] memory,address) pure returns (bool)"
                              }
                            },
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4452:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 422,
                        "nodeType": "IfStatement",
                        "src": "4447:99:1",
                        "trueBody": {
                          "id": 421,
                          "nodeType": "Block",
                          "src": "4468:78:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 416,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 412,
                                    "name": "includeMap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 380,
                                    "src": "4486:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                                      "typeString": "bool[] memory"
                                    }
                                  },
                                  "id": 414,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 413,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 392,
                                    "src": "4497:1:1",
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
                                  "src": "4486:13:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "74727565",
                                  "id": 415,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4502:4:1",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "true"
                                },
                                "src": "4486:20:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 417,
                              "nodeType": "ExpressionStatement",
                              "src": "4486:20:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 419,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4524:7:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 418,
                                  "name": "count",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 388,
                                  "src": "4524:5:1",
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
                              "id": 420,
                              "nodeType": "ExpressionStatement",
                              "src": "4524:7:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 395,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 392,
                      "src": "4386:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 396,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "4390:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4386:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 424,
                  "initializationExpression": {
                    "assignments": [
                      392
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 392,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 424,
                        "src": "4371:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 391,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4371:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 394,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4383:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4371:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4398:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 392,
                        "src": "4398:1:1",
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
                    "id": 400,
                    "nodeType": "ExpressionStatement",
                    "src": "4398:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "4366:190:1"
                },
                {
                  "assignments": [
                    428
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 428,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4565:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 426,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4565:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 427,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4565:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 434,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 432,
                        "name": "count",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 388,
                        "src": "4611:5:1",
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
                      "id": 431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4597:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 429,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4601:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 430,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "4601:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4597:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4565:52:1"
                },
                {
                  "assignments": [
                    436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 436,
                      "name": "j",
                      "nodeType": "VariableDeclaration",
                      "scope": 469,
                      "src": "4627:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4627:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 438,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4639:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4627:13:1"
                },
                {
                  "body": {
                    "id": 465,
                    "nodeType": "Block",
                    "src": "4687:119:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 449,
                            "name": "includeMap",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 380,
                            "src": "4705:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                              "typeString": "bool[] memory"
                            }
                          },
                          "id": 451,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 450,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 440,
                            "src": "4716:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4705:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 464,
                        "nodeType": "IfStatement",
                        "src": "4701:95:1",
                        "trueBody": {
                          "id": 463,
                          "nodeType": "Block",
                          "src": "4720:76:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 458,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 452,
                                    "name": "newAddresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 428,
                                    "src": "4738:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 454,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 453,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 436,
                                    "src": "4751:1:1",
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
                                  "src": "4738:15:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 455,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 363,
                                    "src": "4756:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 457,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 456,
                                    "name": "k",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 440,
                                    "src": "4758:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4756:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "4738:22:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 459,
                              "nodeType": "ExpressionStatement",
                              "src": "4738:22:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 461,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4778:3:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "id": 460,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 436,
                                  "src": "4778:1:1",
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
                              "id": 462,
                              "nodeType": "ExpressionStatement",
                              "src": "4778:3:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 443,
                      "name": "k",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 440,
                      "src": "4670:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 444,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "4674:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4670:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 466,
                  "initializationExpression": {
                    "assignments": [
                      440
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 440,
                        "name": "k",
                        "nodeType": "VariableDeclaration",
                        "scope": 466,
                        "src": "4655:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 439,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4655:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 442,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4667:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4655:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4682:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 446,
                        "name": "k",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 440,
                        "src": "4682:1:1",
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
                    "id": 448,
                    "nodeType": "ExpressionStatement",
                    "src": "4682:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "4650:156:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 467,
                    "name": "newAddresses",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 428,
                    "src": "4822:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 371,
                  "id": 468,
                  "nodeType": "Return",
                  "src": "4815:19:1"
                }
              ]
            },
            "documentation": "Computes the difference of two arrays. Assumes there are no duplicates.\n@param A The first array\n@param B The second array\n@return The difference of the two arrays",
            "id": 470,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "difference",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 363,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4080:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 361,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4080:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 362,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4080:9:1",
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
                  "id": 366,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4100:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 364,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4100:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 365,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4100:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4079:40:1"
            },
            "returnParameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 370,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 470,
                  "src": "4143:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 368,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4143:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 369,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4143:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4142:18:1"
            },
            "scope": 699,
            "src": "4060:781:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 550,
              "nodeType": "Block",
              "src": "5130:347:1",
              "statements": [
                {
                  "assignments": [
                    484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 484,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 550,
                      "src": "5140:14:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 483,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5140:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 487,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 485,
                      "name": "A",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 473,
                      "src": "5157:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "5157:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5140:25:1"
                },
                {
                  "assignments": [
                    491
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 491,
                      "name": "newAddresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 550,
                      "src": "5175:29:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 489,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5175:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 490,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "5175:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 499,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 495,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 484,
                          "src": "5221:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5230:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5221:10:1",
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
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5207:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 492,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5211:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 493,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "5211:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5207:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5175:57:1"
                },
                {
                  "body": {
                    "id": 518,
                    "nodeType": "Block",
                    "src": "5278:47:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 510,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 491,
                              "src": "5292:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 512,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 511,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 501,
                              "src": "5305:1:1",
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
                            "src": "5292:15:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 513,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 473,
                              "src": "5310:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 515,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 514,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 501,
                              "src": "5312:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5310:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5292:22:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 517,
                        "nodeType": "ExpressionStatement",
                        "src": "5292:22:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 504,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 501,
                      "src": "5262:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 505,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 475,
                      "src": "5266:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5262:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 519,
                  "initializationExpression": {
                    "assignments": [
                      501
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 501,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 519,
                        "src": "5247:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 500,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5247:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 503,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5259:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5247:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5273:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 507,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 501,
                        "src": "5273:1:1",
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
                    "id": 509,
                    "nodeType": "ExpressionStatement",
                    "src": "5273:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "5242:83:1"
                },
                {
                  "body": {
                    "id": 542,
                    "nodeType": "Block",
                    "src": "5379:51:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 532,
                              "name": "newAddresses",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 491,
                              "src": "5393:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 536,
                            "indexExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 535,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 533,
                                "name": "j",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "5406:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 534,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5410:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "5406:5:1",
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
                            "src": "5393:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 537,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 473,
                              "src": "5415:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 539,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 538,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 521,
                              "src": "5417:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5415:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5393:26:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 541,
                        "nodeType": "ExpressionStatement",
                        "src": "5393:26:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 526,
                      "name": "j",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 521,
                      "src": "5362:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 527,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 484,
                      "src": "5366:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5362:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 543,
                  "initializationExpression": {
                    "assignments": [
                      521
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 521,
                        "name": "j",
                        "nodeType": "VariableDeclaration",
                        "scope": 543,
                        "src": "5339:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 520,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5339:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 525,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 524,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 522,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "5351:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5359:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "5351:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5339:21:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5374:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "j",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 521,
                        "src": "5374:1:1",
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
                    "id": 531,
                    "nodeType": "ExpressionStatement",
                    "src": "5374:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "5334:96:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "id": 544,
                        "name": "newAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 491,
                        "src": "5447:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 545,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 473,
                          "src": "5461:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 547,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 546,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "5463:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5461:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 548,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5446:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                      "typeString": "tuple(address[] memory,address)"
                    }
                  },
                  "functionReturnParameters": 482,
                  "id": 549,
                  "nodeType": "Return",
                  "src": "5439:31:1"
                }
              ]
            },
            "documentation": "Removes specified index from array\nResulting ordering is not guaranteed\n@return Returns the new array and the removed entry",
            "id": 551,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pop",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 473,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5017:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 471,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5017:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 472,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5017:9:1",
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
                  "id": 475,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5037:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5037:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5016:35:1"
            },
            "returnParameters": {
              "id": 482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 479,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5099:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 477,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5099:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 478,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5099:9:1",
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
                  "id": 481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 551,
                  "src": "5117:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 480,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5117:7:1",
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
              "src": "5098:27:1"
            },
            "scope": 699,
            "src": "5004:473:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 590,
              "nodeType": "Block",
              "src": "5652:204:1",
              "statements": [
                {
                  "assignments": [
                    563,
                    565
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 563,
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "scope": 590,
                      "src": "5663:13:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 562,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5663:7:1",
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
                      "id": 565,
                      "name": "isIn",
                      "nodeType": "VariableDeclaration",
                      "scope": 590,
                      "src": "5678:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 564,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5678:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "5699:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 568,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 556,
                        "src": "5702:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 566,
                      "name": "indexOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 49,
                      "src": "5691:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_uint256_$_t_bool_$",
                        "typeString": "function (address[] memory,address) pure returns (uint256,bool)"
                      }
                    },
                    "id": 569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5691:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                      "typeString": "tuple(uint256,bool)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5662:42:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5718:5:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 571,
                      "name": "isIn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 565,
                      "src": "5719:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 588,
                    "nodeType": "Block",
                    "src": "5764:86:1",
                    "statements": [
                      {
                        "assignments": [
                          580,
                          null
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 580,
                            "name": "_A",
                            "nodeType": "VariableDeclaration",
                            "scope": 588,
                            "src": "5779:19:1",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 578,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5779:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 579,
                              "length": null,
                              "nodeType": "ArrayTypeName",
                              "src": "5779:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          },
                          null
                        ],
                        "id": 585,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 582,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 554,
                              "src": "5807:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 563,
                              "src": "5810:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 581,
                            "name": "pop",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 551,
                            "src": "5803:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                              "typeString": "function (address[] memory,uint256) pure returns (address[] memory,address)"
                            }
                          },
                          "id": 584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5803:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$",
                            "typeString": "tuple(address[] memory,address)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5778:38:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 586,
                          "name": "_A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 580,
                          "src": "5837:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "functionReturnParameters": 561,
                        "id": 587,
                        "nodeType": "Return",
                        "src": "5830:9:1"
                      }
                    ]
                  },
                  "id": 589,
                  "nodeType": "IfStatement",
                  "src": "5714:136:1",
                  "trueBody": {
                    "id": 576,
                    "nodeType": "Block",
                    "src": "5725:33:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 573,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3218,
                              3219
                            ],
                            "referencedDeclaration": 3218,
                            "src": "5739:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5739:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 575,
                        "nodeType": "ExpressionStatement",
                        "src": "5739:8:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@return Returns the new array",
            "id": 591,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 554,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5552:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 552,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5552:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 553,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5552:9:1",
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
                  "id": 556,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5572:9:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5572:7:1",
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
              "src": "5551:31:1"
            },
            "returnParameters": {
              "id": 561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 560,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 591,
                  "src": "5630:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 558,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5630:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 559,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5630:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5629:18:1"
            },
            "scope": 699,
            "src": "5536:320:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 650,
              "nodeType": "Block",
              "src": "6106:316:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 599,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 594,
                        "src": "6120:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6120:8:1",
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
                      "id": 601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6132:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6120:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 606,
                  "nodeType": "IfStatement",
                  "src": "6116:57:1",
                  "trueBody": {
                    "id": 605,
                    "nodeType": "Block",
                    "src": "6135:38:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6157:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 598,
                        "id": 604,
                        "nodeType": "Return",
                        "src": "6150:12:1"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 646,
                    "nodeType": "Block",
                    "src": "6225:169:1",
                    "statements": [
                      {
                        "body": {
                          "id": 644,
                          "nodeType": "Block",
                          "src": "6282:102:1",
                          "statements": [
                            {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 639,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 633,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 594,
                                    "src": "6304:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 635,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 634,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 608,
                                    "src": "6306:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6304:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 636,
                                    "name": "A",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 594,
                                    "src": "6312:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 638,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 637,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 621,
                                    "src": "6314:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "6312:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "6304:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": null,
                              "id": 643,
                              "nodeType": "IfStatement",
                              "src": "6300:70:1",
                              "trueBody": {
                                "id": 642,
                                "nodeType": "Block",
                                "src": "6318:52:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "74727565",
                                      "id": 640,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "bool",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "6347:4:1",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      "value": "true"
                                    },
                                    "functionReturnParameters": 598,
                                    "id": 641,
                                    "nodeType": "Return",
                                    "src": "6340:11:1"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 629,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 626,
                            "name": "j",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 621,
                            "src": "6263:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 627,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 594,
                              "src": "6267:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6267:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6263:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 645,
                        "initializationExpression": {
                          "assignments": [
                            621
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 621,
                              "name": "j",
                              "nodeType": "VariableDeclaration",
                              "scope": 645,
                              "src": "6244:9:1",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 620,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "6244:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 625,
                          "initialValue": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 624,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 622,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 608,
                              "src": "6256:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 623,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6260:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6256:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "6244:17:1"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 631,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "6277:3:1",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 630,
                              "name": "j",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "6277:1:1",
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
                          "id": 632,
                          "nodeType": "ExpressionStatement",
                          "src": "6277:3:1"
                        },
                        "nodeType": "ForStatement",
                        "src": "6239:145:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 611,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 608,
                      "src": "6202:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 612,
                          "name": "A",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "6206:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[] memory"
                          }
                        },
                        "id": 613,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6206:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6217:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "6206:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6202:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 647,
                  "initializationExpression": {
                    "assignments": [
                      608
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 608,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 647,
                        "src": "6187:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 607,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6187:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 610,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6199:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6187:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 618,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6220:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 617,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 608,
                        "src": "6220:1:1",
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
                    "id": 619,
                    "nodeType": "ExpressionStatement",
                    "src": "6220:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "6182:212:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6410:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 598,
                  "id": 649,
                  "nodeType": "Return",
                  "src": "6403:12:1"
                }
              ]
            },
            "documentation": "Returns whether or not there's a duplicate. Runs in O(n^2).\n@param A Array to search\n@return Returns true if duplicate, false otherwise",
            "id": 651,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasDuplicate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 594,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 651,
                  "src": "6057:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 592,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6057:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 593,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6057:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6056:20:1"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 651,
                  "src": "6100:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6100:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6099:6:1"
            },
            "scope": 699,
            "src": "6035:387:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 697,
              "nodeType": "Block",
              "src": "6703:235:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 662,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 654,
                        "src": "6717:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6717:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 664,
                        "name": "B",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "6729:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6729:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6717:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 670,
                  "nodeType": "IfStatement",
                  "src": "6713:63:1",
                  "trueBody": {
                    "id": 669,
                    "nodeType": "Block",
                    "src": "6739:37:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 667,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6760:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 661,
                        "id": 668,
                        "nodeType": "Return",
                        "src": "6753:12:1"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 693,
                    "nodeType": "Block",
                    "src": "6824:87:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 682,
                              "name": "A",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 654,
                              "src": "6842:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 684,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 683,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 672,
                              "src": "6844:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6842:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 685,
                              "name": "B",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 657,
                              "src": "6850:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 687,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 686,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 672,
                              "src": "6852:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6850:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "6842:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 692,
                        "nodeType": "IfStatement",
                        "src": "6838:63:1",
                        "trueBody": {
                          "id": 691,
                          "nodeType": "Block",
                          "src": "6856:45:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 689,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6881:5:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 661,
                              "id": 690,
                              "nodeType": "Return",
                              "src": "6874:12:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 675,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 672,
                      "src": "6805:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 676,
                        "name": "A",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 654,
                        "src": "6809:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6809:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6805:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 694,
                  "initializationExpression": {
                    "assignments": [
                      672
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 672,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 694,
                        "src": "6790:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 671,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6790:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 674,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6802:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6790:13:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6819:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 679,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 672,
                        "src": "6819:1:1",
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
                    "id": 681,
                    "nodeType": "ExpressionStatement",
                    "src": "6819:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "6785:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6927:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 661,
                  "id": 696,
                  "nodeType": "Return",
                  "src": "6920:11:1"
                }
              ]
            },
            "documentation": "Returns whether the two arrays are equal.\n@param A The first array\n@param B The second array\n@return True is the arrays are equal, false if not.",
            "id": 698,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isEqual",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 654,
                  "name": "A",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6634:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 652,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6634:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 653,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6634:9:1",
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
                  "id": 657,
                  "name": "B",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6654:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 655,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6654:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 656,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6654:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6633:40:1"
            },
            "returnParameters": {
              "id": 661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 660,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 698,
                  "src": "6697:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6697:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6696:6:1"
            },
            "scope": 699,
            "src": "6617:321:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 700,
        "src": "228:6712:1"
      }
    ],
    "src": "203:6738:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.854Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}