"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISetToken = {
    "contractName": "ISetToken",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "naturalUnit",
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
            "name": "getComponents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getUnits",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
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
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "name": "tokenIsComponent",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
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
                    "name": "_issuer",
                    "type": "address"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "mint",
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
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"getUnits\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"tokenIsComponent\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_issuer\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"naturalUnit\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getComponents\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * The ISetToken interface provides a light-weight, structured way to interact with the SetToken contract from another contract.\",\"methods\":{\"transfer(address,uint256)\":{\"params\":{\"to\":\"The address to transfer to.\",\"value\":\"The amount to be transferred.\"}}},\"title\":\"ISetToken\"},\"userdoc\":{\"methods\":{\"transfer(address,uint256)\":{\"notice\":\"Transfer token for a specified address\"}}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":\"ISetToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n/**\n * @title ISetToken\n * @author Set Protocol\n *\n * The ISetToken interface provides a light-weight, structured way to interact with the\n * SetToken contract from another contract.\n */\ninterface ISetToken {\n\n    /* ============ External Functions ============ */\n\n    /*\n     * Get natural unit of Set\n     *\n     * @return  uint256       Natural unit of Set\n     */\n    function naturalUnit()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get addresses of all components in the Set\n     *\n     * @return  componentAddresses       Array of component tokens\n     */\n    function getComponents()\n        external\n        view\n        returns (address[] memory);\n\n    /*\n     * Get units of all tokens in Set\n     *\n     * @return  units       Array of component units\n     */\n    function getUnits()\n        external\n        view\n        returns (uint256[] memory);\n\n    /*\n     * Checks to make sure token is component of Set\n     *\n     * @param  _tokenAddress     Address of token being checked\n     * @return  bool             True if token is component of Set\n     */\n    function tokenIsComponent(\n        address _tokenAddress\n    )\n        external\n        view\n        returns (bool);\n\n    /*\n     * Mint set token for given address.\n     * Can only be called by authorized contracts.\n     *\n     * @param  _issuer      The address of the issuing account\n     * @param  _quantity    The number of sets to attribute to issuer\n     */\n    function mint(\n        address _issuer,\n        uint256 _quantity\n    )\n        external;\n\n    /*\n     * Burn set token for given address\n     * Can only be called by authorized contracts\n     *\n     * @param  _from        The address of the redeeming account\n     * @param  _quantity    The number of sets to burn from redeemer\n     */\n    function burn(\n        address _from,\n        uint256 _quantity\n    )\n        external;\n\n    /**\n    * Transfer token for a specified address\n    *\n    * @param to The address to transfer to.\n    * @param value The amount to be transferred.\n    */\n    function transfer(\n        address to,\n        uint256 value\n    )\n        external;\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
        "exportedSymbols": {
            "ISetToken": [
                2359
            ]
        },
        "id": 2360,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2313,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:19"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISetToken\n@author Set Protocol\n * The ISetToken interface provides a light-weight, structured way to interact with the\nSetToken contract from another contract.",
                "fullyImplemented": false,
                "id": 2359,
                "linearizedBaseContracts": [
                    2359
                ],
                "name": "ISetToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2318,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2314,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1014:2:19"
                        },
                        "returnParameters": {
                            "id": 2317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2316,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2318,
                                    "src": "1064:7:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2315,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:9:19"
                        },
                        "scope": 2359,
                        "src": "994:79:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2324,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getComponents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2319,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1240:2:19"
                        },
                        "returnParameters": {
                            "id": 2323,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2322,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2324,
                                    "src": "1290:16:19",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2320,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1290:7:19",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2321,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1290:9:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1289:18:19"
                        },
                        "scope": 2359,
                        "src": "1218:90:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2330,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2325,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1444:2:19"
                        },
                        "returnParameters": {
                            "id": 2329,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2328,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2330,
                                    "src": "1494:16:19",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2326,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1494:7:19",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2327,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1494:9:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1493:18:19"
                        },
                        "scope": 2359,
                        "src": "1427:85:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2337,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenIsComponent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2333,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2332,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2337,
                                    "src": "1759:21:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2331,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1759:7:19",
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
                            "src": "1749:37:19"
                        },
                        "returnParameters": {
                            "id": 2336,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2335,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2337,
                                    "src": "1834:4:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2334,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1834:4:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1833:6:19"
                        },
                        "scope": 2359,
                        "src": "1724:116:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2344,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2339,
                                    "name": "_issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "2116:15:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2338,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2116:7:19",
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
                                    "id": 2341,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "2141:17:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2340,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2141:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2106:58:19"
                        },
                        "returnParameters": {
                            "id": 2343,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2181:0:19"
                        },
                        "scope": 2359,
                        "src": "2093:89:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2351,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2346,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2351,
                                    "src": "2457:13:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2345,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2457:7:19",
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
                                    "id": 2348,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2351,
                                    "src": "2480:17:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2347,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2480:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2447:56:19"
                        },
                        "returnParameters": {
                            "id": 2350,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2520:0:19"
                        },
                        "scope": 2359,
                        "src": "2434:87:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Transfer token for a specified address\n    * @param to The address to transfer to.\n@param value The amount to be transferred.",
                        "id": 2358,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2353,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2358,
                                    "src": "2713:10:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2352,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2713:7:19",
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
                                    "id": 2355,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2358,
                                    "src": "2733:13:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2354,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2733:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2703:49:19"
                        },
                        "returnParameters": {
                            "id": 2357,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2769:0:19"
                        },
                        "scope": 2359,
                        "src": "2686:84:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2360,
                "src": "808:1964:19"
            }
        ],
        "src": "597:2176:19"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
        "exportedSymbols": {
            "ISetToken": [
                2359
            ]
        },
        "id": 2360,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2313,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:19"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ISetToken\n@author Set Protocol\n * The ISetToken interface provides a light-weight, structured way to interact with the\nSetToken contract from another contract.",
                "fullyImplemented": false,
                "id": 2359,
                "linearizedBaseContracts": [
                    2359
                ],
                "name": "ISetToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2318,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2314,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1014:2:19"
                        },
                        "returnParameters": {
                            "id": 2317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2316,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2318,
                                    "src": "1064:7:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2315,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:9:19"
                        },
                        "scope": 2359,
                        "src": "994:79:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2324,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getComponents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2319,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1240:2:19"
                        },
                        "returnParameters": {
                            "id": 2323,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2322,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2324,
                                    "src": "1290:16:19",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2320,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1290:7:19",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2321,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1290:9:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1289:18:19"
                        },
                        "scope": 2359,
                        "src": "1218:90:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2330,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUnits",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2325,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1444:2:19"
                        },
                        "returnParameters": {
                            "id": 2329,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2328,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2330,
                                    "src": "1494:16:19",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2326,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1494:7:19",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2327,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1494:9:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1493:18:19"
                        },
                        "scope": 2359,
                        "src": "1427:85:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2337,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenIsComponent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2333,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2332,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2337,
                                    "src": "1759:21:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2331,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1759:7:19",
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
                            "src": "1749:37:19"
                        },
                        "returnParameters": {
                            "id": 2336,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2335,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2337,
                                    "src": "1834:4:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2334,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1834:4:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1833:6:19"
                        },
                        "scope": 2359,
                        "src": "1724:116:19",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2344,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2339,
                                    "name": "_issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "2116:15:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2338,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2116:7:19",
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
                                    "id": 2341,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2344,
                                    "src": "2141:17:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2340,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2141:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2106:58:19"
                        },
                        "returnParameters": {
                            "id": 2343,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2181:0:19"
                        },
                        "scope": 2359,
                        "src": "2093:89:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2351,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "burn",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2346,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2351,
                                    "src": "2457:13:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2345,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2457:7:19",
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
                                    "id": 2348,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2351,
                                    "src": "2480:17:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2347,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2480:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2447:56:19"
                        },
                        "returnParameters": {
                            "id": 2350,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2520:0:19"
                        },
                        "scope": 2359,
                        "src": "2434:87:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Transfer token for a specified address\n    * @param to The address to transfer to.\n@param value The amount to be transferred.",
                        "id": 2358,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2353,
                                    "name": "to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2358,
                                    "src": "2713:10:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2352,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2713:7:19",
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
                                    "id": 2355,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2358,
                                    "src": "2733:13:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2354,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2733:7:19",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2703:49:19"
                        },
                        "returnParameters": {
                            "id": 2357,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2769:0:19"
                        },
                        "scope": 2359,
                        "src": "2686:84:19",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2360,
                "src": "808:1964:19"
            }
        ],
        "src": "597:2176:19"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.719Z",
    "devdoc": {
        "author": "Set Protocol * The ISetToken interface provides a light-weight, structured way to interact with the SetToken contract from another contract.",
        "methods": {
            "transfer(address,uint256)": {
                "params": {
                    "to": "The address to transfer to.",
                    "value": "The amount to be transferred."
                }
            }
        },
        "title": "ISetToken"
    },
    "userdoc": {
        "methods": {
            "transfer(address,uint256)": {
                "notice": "Transfer token for a specified address"
            }
        }
    }
};
//# sourceMappingURL=ISetToken.js.map