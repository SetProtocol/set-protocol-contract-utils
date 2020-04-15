"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ownable = {
    "contractName": "Ownable",
    "abi": [
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
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
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"The Ownable contract has an owner address, and provides basic authorization control functions, this simplifies the implementation of \\\"user permissions\\\".\",\"methods\":{\"constructor\":{\"details\":\"The Ownable constructor sets the original `owner` of the contract to the sender account.\"},\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"Ownable\"},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"}}}},\"settings\":{\"compilationTarget\":{\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":\"Ownable\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity ^0.5.2;\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n    address private _owner;\n\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n    /**\n     * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n     * account.\n     */\n    constructor () internal {\n        _owner = msg.sender;\n        emit OwnershipTransferred(address(0), _owner);\n    }\n\n    /**\n     * @return the address of the owner.\n     */\n    function owner() public view returns (address) {\n        return _owner;\n    }\n\n    /**\n     * @dev Throws if called by any account other than the owner.\n     */\n    modifier onlyOwner() {\n        require(isOwner());\n        _;\n    }\n\n    /**\n     * @return true if `msg.sender` is the owner of the contract.\n     */\n    function isOwner() public view returns (bool) {\n        return msg.sender == _owner;\n    }\n\n    /**\n     * @dev Allows the current owner to relinquish control of the contract.\n     * It will not be possible to call the functions with the `onlyOwner`\n     * modifier anymore.\n     * @notice Renouncing ownership will leave the contract without an owner,\n     * thereby removing any functionality that is only available to the owner.\n     */\n    function renounceOwnership() public onlyOwner {\n        emit OwnershipTransferred(_owner, address(0));\n        _owner = address(0);\n    }\n\n    /**\n     * @dev Allows the current owner to transfer control of the contract to a newOwner.\n     * @param newOwner The address to transfer ownership to.\n     */\n    function transferOwnership(address newOwner) public onlyOwner {\n        _transferOwnership(newOwner);\n    }\n\n    /**\n     * @dev Transfers control of the contract to a newOwner.\n     * @param newOwner The address to transfer ownership to.\n     */\n    function _transferOwnership(address newOwner) internal {\n        require(newOwner != address(0));\n        emit OwnershipTransferred(_owner, newOwner);\n        _owner = newOwner;\n    }\n}\n",
    "sourcePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
    "ast": {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "exportedSymbols": {
            "Ownable": [
                3198
            ]
        },
        "id": 3199,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 3091,
                "literals": [
                    "solidity",
                    "^",
                    "0.5",
                    ".2"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:24"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
                "fullyImplemented": true,
                "id": 3198,
                "linearizedBaseContracts": [
                    3198
                ],
                "name": "Ownable",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 3093,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 3198,
                        "src": "238:22:24",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 3092,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "238:7:24",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 3099,
                        "name": "OwnershipTransferred",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 3098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3095,
                                    "indexed": true,
                                    "name": "previousOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3099,
                                    "src": "294:29:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3094,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "294:7:24",
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
                                    "id": 3097,
                                    "indexed": true,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3099,
                                    "src": "325:24:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3096,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "325:7:24",
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
                            "src": "293:57:24"
                        },
                        "src": "267:84:24"
                    },
                    {
                        "body": {
                            "id": 3114,
                            "nodeType": "Block",
                            "src": "505:91:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3102,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "515:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3103,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3213,
                                                "src": "524:3:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 3104,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "524:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "515:19:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3106,
                                    "nodeType": "ExpressionStatement",
                                    "src": "515:19:24"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 3109,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "578:1:24",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 3108,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "570:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 3110,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "570:10:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3111,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "582:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3107,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "549:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "549:40:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3113,
                                    "nodeType": "EmitStatement",
                                    "src": "544:45:24"
                                }
                            ]
                        },
                        "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
                        "id": 3115,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3100,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "493:2:24"
                        },
                        "returnParameters": {
                            "id": 3101,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "505:0:24"
                        },
                        "scope": 3198,
                        "src": "481:115:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 3122,
                            "nodeType": "Block",
                            "src": "706:30:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3120,
                                        "name": "_owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3093,
                                        "src": "723:6:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3119,
                                    "id": 3121,
                                    "nodeType": "Return",
                                    "src": "716:13:24"
                                }
                            ]
                        },
                        "documentation": "@return the address of the owner.",
                        "id": 3123,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "owner",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3116,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "673:2:24"
                        },
                        "returnParameters": {
                            "id": 3119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3118,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3123,
                                    "src": "697:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3117,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "697:7:24",
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
                            "src": "696:9:24"
                        },
                        "scope": 3198,
                        "src": "659:77:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3131,
                            "nodeType": "Block",
                            "src": "845:46:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 3126,
                                                    "name": "isOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3143,
                                                    "src": "863:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                                                        "typeString": "function () view returns (bool)"
                                                    }
                                                },
                                                "id": 3127,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "863:9:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 3125,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3216,
                                            "src": "855:7:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "855:18:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "855:18:24"
                                },
                                {
                                    "id": 3130,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "883:1:24"
                                }
                            ]
                        },
                        "documentation": "@dev Throws if called by any account other than the owner.",
                        "id": 3132,
                        "name": "onlyOwner",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 3124,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "842:2:24"
                        },
                        "src": "824:67:24",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 3142,
                            "nodeType": "Block",
                            "src": "1025:44:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 3140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3137,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3213,
                                                "src": "1042:3:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 3138,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1042:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 3139,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "1056:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1042:20:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 3136,
                                    "id": 3141,
                                    "nodeType": "Return",
                                    "src": "1035:27:24"
                                }
                            ]
                        },
                        "documentation": "@return true if `msg.sender` is the owner of the contract.",
                        "id": 3143,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isOwner",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3133,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "995:2:24"
                        },
                        "returnParameters": {
                            "id": 3136,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3135,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3143,
                                    "src": "1019:4:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3134,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1019:4:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1018:6:24"
                        },
                        "scope": 3198,
                        "src": "979:90:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3161,
                            "nodeType": "Block",
                            "src": "1469:91:24",
                            "statements": [
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3149,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "1505:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 3151,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1521:1:24",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 3150,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1513:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 3152,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1513:10:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 3148,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "1484:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3153,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1484:40:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3154,
                                    "nodeType": "EmitStatement",
                                    "src": "1479:45:24"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3155,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "1534:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 3157,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1551:1:24",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    }
                                                ],
                                                "id": 3156,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1543:7:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 3158,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1543:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "1534:19:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3160,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1534:19:24"
                                }
                            ]
                        },
                        "documentation": "@dev Allows the current owner to relinquish control of the contract.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.\n@notice Renouncing ownership will leave the contract without an owner,\nthereby removing any functionality that is only available to the owner.",
                        "id": 3162,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 3146,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3145,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "1459:9:24",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1459:9:24"
                            }
                        ],
                        "name": "renounceOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1449:2:24"
                        },
                        "returnParameters": {
                            "id": 3147,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1469:0:24"
                        },
                        "scope": 3198,
                        "src": "1423:137:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3173,
                            "nodeType": "Block",
                            "src": "1793:45:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3170,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3164,
                                                "src": "1822:8:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3169,
                                            "name": "_transferOwnership",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3197,
                                            "src": "1803:18:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 3171,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1803:28:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3172,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1803:28:24"
                                }
                            ]
                        },
                        "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
                        "id": 3174,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 3167,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3166,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "1783:9:24",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1783:9:24"
                            }
                        ],
                        "name": "transferOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3164,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3174,
                                    "src": "1758:16:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3163,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1758:7:24",
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
                            "src": "1757:18:24"
                        },
                        "returnParameters": {
                            "id": 3168,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1793:0:24"
                        },
                        "scope": 3198,
                        "src": "1731:107:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3196,
                            "nodeType": "Block",
                            "src": "2037:128:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 3184,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 3180,
                                                    "name": "newOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3176,
                                                    "src": "2055:8:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 3182,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2075:1:24",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 3181,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2067:7:24",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 3183,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2067:10:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "2055:22:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 3179,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3216,
                                            "src": "2047:7:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2047:31:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2047:31:24"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3188,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "2114:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3189,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3176,
                                                "src": "2122:8:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3187,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "2093:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2093:38:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3191,
                                    "nodeType": "EmitStatement",
                                    "src": "2088:43:24"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3192,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "2141:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 3193,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3176,
                                            "src": "2150:8:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2141:17:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3195,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2141:17:24"
                                }
                            ]
                        },
                        "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
                        "id": 3197,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_transferOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3176,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3197,
                                    "src": "2010:16:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3175,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2010:7:24",
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
                            "src": "2009:18:24"
                        },
                        "returnParameters": {
                            "id": 3178,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2037:0:24"
                        },
                        "scope": 3198,
                        "src": "1982:183:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3199,
                "src": "215:1952:24"
            }
        ],
        "src": "0:2168:24"
    },
    "legacyAST": {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "exportedSymbols": {
            "Ownable": [
                3198
            ]
        },
        "id": 3199,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 3091,
                "literals": [
                    "solidity",
                    "^",
                    "0.5",
                    ".2"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:24"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
                "fullyImplemented": true,
                "id": 3198,
                "linearizedBaseContracts": [
                    3198
                ],
                "name": "Ownable",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 3093,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 3198,
                        "src": "238:22:24",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 3092,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "238:7:24",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": null,
                        "visibility": "private"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 3099,
                        "name": "OwnershipTransferred",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 3098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3095,
                                    "indexed": true,
                                    "name": "previousOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3099,
                                    "src": "294:29:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3094,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "294:7:24",
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
                                    "id": 3097,
                                    "indexed": true,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3099,
                                    "src": "325:24:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3096,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "325:7:24",
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
                            "src": "293:57:24"
                        },
                        "src": "267:84:24"
                    },
                    {
                        "body": {
                            "id": 3114,
                            "nodeType": "Block",
                            "src": "505:91:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3102,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "515:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3103,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3213,
                                                "src": "524:3:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 3104,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "524:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "515:19:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3106,
                                    "nodeType": "ExpressionStatement",
                                    "src": "515:19:24"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 3109,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "578:1:24",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 3108,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "570:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 3110,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "570:10:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3111,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "582:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3107,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "549:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "549:40:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3113,
                                    "nodeType": "EmitStatement",
                                    "src": "544:45:24"
                                }
                            ]
                        },
                        "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
                        "id": 3115,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3100,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "493:2:24"
                        },
                        "returnParameters": {
                            "id": 3101,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "505:0:24"
                        },
                        "scope": 3198,
                        "src": "481:115:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 3122,
                            "nodeType": "Block",
                            "src": "706:30:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3120,
                                        "name": "_owner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3093,
                                        "src": "723:6:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3119,
                                    "id": 3121,
                                    "nodeType": "Return",
                                    "src": "716:13:24"
                                }
                            ]
                        },
                        "documentation": "@return the address of the owner.",
                        "id": 3123,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "owner",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3116,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "673:2:24"
                        },
                        "returnParameters": {
                            "id": 3119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3118,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3123,
                                    "src": "697:7:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3117,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "697:7:24",
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
                            "src": "696:9:24"
                        },
                        "scope": 3198,
                        "src": "659:77:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3131,
                            "nodeType": "Block",
                            "src": "845:46:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 3126,
                                                    "name": "isOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3143,
                                                    "src": "863:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                                                        "typeString": "function () view returns (bool)"
                                                    }
                                                },
                                                "id": 3127,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "863:9:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 3125,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3216,
                                            "src": "855:7:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "855:18:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "855:18:24"
                                },
                                {
                                    "id": 3130,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "883:1:24"
                                }
                            ]
                        },
                        "documentation": "@dev Throws if called by any account other than the owner.",
                        "id": 3132,
                        "name": "onlyOwner",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 3124,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "842:2:24"
                        },
                        "src": "824:67:24",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 3142,
                            "nodeType": "Block",
                            "src": "1025:44:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 3140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3137,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3213,
                                                "src": "1042:3:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 3138,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1042:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 3139,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "1056:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1042:20:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 3136,
                                    "id": 3141,
                                    "nodeType": "Return",
                                    "src": "1035:27:24"
                                }
                            ]
                        },
                        "documentation": "@return true if `msg.sender` is the owner of the contract.",
                        "id": 3143,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isOwner",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3133,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "995:2:24"
                        },
                        "returnParameters": {
                            "id": 3136,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3135,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3143,
                                    "src": "1019:4:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3134,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1019:4:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1018:6:24"
                        },
                        "scope": 3198,
                        "src": "979:90:24",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3161,
                            "nodeType": "Block",
                            "src": "1469:91:24",
                            "statements": [
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3149,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "1505:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 3151,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1521:1:24",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 3150,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1513:7:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 3152,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1513:10:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 3148,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "1484:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3153,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1484:40:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3154,
                                    "nodeType": "EmitStatement",
                                    "src": "1479:45:24"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3155,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "1534:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 3157,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1551:1:24",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    }
                                                ],
                                                "id": 3156,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1543:7:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 3158,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1543:10:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "1534:19:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3160,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1534:19:24"
                                }
                            ]
                        },
                        "documentation": "@dev Allows the current owner to relinquish control of the contract.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.\n@notice Renouncing ownership will leave the contract without an owner,\nthereby removing any functionality that is only available to the owner.",
                        "id": 3162,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 3146,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3145,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "1459:9:24",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1459:9:24"
                            }
                        ],
                        "name": "renounceOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1449:2:24"
                        },
                        "returnParameters": {
                            "id": 3147,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1469:0:24"
                        },
                        "scope": 3198,
                        "src": "1423:137:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3173,
                            "nodeType": "Block",
                            "src": "1793:45:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3170,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3164,
                                                "src": "1822:8:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3169,
                                            "name": "_transferOwnership",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3197,
                                            "src": "1803:18:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 3171,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1803:28:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3172,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1803:28:24"
                                }
                            ]
                        },
                        "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
                        "id": 3174,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 3167,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3166,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "1783:9:24",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1783:9:24"
                            }
                        ],
                        "name": "transferOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3164,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3174,
                                    "src": "1758:16:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3163,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1758:7:24",
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
                            "src": "1757:18:24"
                        },
                        "returnParameters": {
                            "id": 3168,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1793:0:24"
                        },
                        "scope": 3198,
                        "src": "1731:107:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3196,
                            "nodeType": "Block",
                            "src": "2037:128:24",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 3184,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 3180,
                                                    "name": "newOwner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3176,
                                                    "src": "2055:8:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 3182,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2075:1:24",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 3181,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2067:7:24",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 3183,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2067:10:24",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "2055:22:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 3179,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3216,
                                            "src": "2047:7:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2047:31:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2047:31:24"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3188,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3093,
                                                "src": "2114:6:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3189,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3176,
                                                "src": "2122:8:24",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3187,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3099,
                                            "src": "2093:20:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 3190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2093:38:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3191,
                                    "nodeType": "EmitStatement",
                                    "src": "2088:43:24"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3194,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3192,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3093,
                                            "src": "2141:6:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 3193,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3176,
                                            "src": "2150:8:24",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2141:17:24",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 3195,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2141:17:24"
                                }
                            ]
                        },
                        "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
                        "id": 3197,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_transferOwnership",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3176,
                                    "name": "newOwner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3197,
                                    "src": "2010:16:24",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3175,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2010:7:24",
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
                            "src": "2009:18:24"
                        },
                        "returnParameters": {
                            "id": 3178,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2037:0:24"
                        },
                        "scope": 3198,
                        "src": "1982:183:24",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3199,
                "src": "215:1952:24"
            }
        ],
        "src": "0:2168:24"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.957Z",
    "devdoc": {
        "details": "The Ownable contract has an owner address, and provides basic authorization control functions, this simplifies the implementation of \"user permissions\".",
        "methods": {
            "constructor": {
                "details": "The Ownable constructor sets the original `owner` of the contract to the sender account."
            },
            "isOwner()": {
                "return": "true if `msg.sender` is the owner of the contract."
            },
            "owner()": {
                "return": "the address of the owner."
            },
            "renounceOwnership()": {
                "details": "Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore."
            },
            "transferOwnership(address)": {
                "details": "Allows the current owner to transfer control of the contract to a newOwner.",
                "params": {
                    "newOwner": "The address to transfer ownership to."
                }
            }
        },
        "title": "Ownable"
    },
    "userdoc": {
        "methods": {
            "renounceOwnership()": {
                "notice": "Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
            }
        }
    }
};
//# sourceMappingURL=Ownable.js.map