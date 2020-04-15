"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompoundUtilsMock = {
    "contractName": "CompoundUtilsMock",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_cTokenUnits",
                    "type": "uint256"
                },
                {
                    "name": "_exchangeRate",
                    "type": "uint256"
                }
            ],
            "name": "testConvertCTokenToUnderlying",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_cTokenUnits\",\"type\":\"uint256\"},{\"name\":\"_exchangeRate\",\"type\":\"uint256\"}],\"name\":\"testConvertCTokenToUnderlying\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CompoundUtilsMock.sol\":\"CompoundUtilsMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol\":{\"keccak256\":\"0x3d1d08c6efc2a973fe2c02ddcb02fd99a8c8eb75f74dcbd93e8e15864eee2b6b\",\"urls\":[\"bzzr://580815dd1cf648a4521d923e59087de21143d9c48115ab71579a1f5a8f3d36af\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol\":{\"keccak256\":\"0x2fae8240526a689d919a67792626c9df1e8048a59eed6643ff4ce685a87a36dc\",\"urls\":[\"bzzr://5a5709236aaa10d93f1746e765fd4e10693277f5cbc3e24d5173738f87a01072\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CompoundUtilsMock.sol\":{\"keccak256\":\"0x473abd61995ca1fdecd37a209e93fb89aff21032e0becc6b5d3dbc83a0e1d3b2\",\"urls\":[\"bzzr://73e1b94ddacddcd60df903fbbe6375ae6eeefc14815dec4433eb30fe3ef7934b\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610230806100206000396000f3fe608060405234801561001057600080fd5b5060043610610047577c010000000000000000000000000000000000000000000000000000000060003504637b164ece811461004c575b600080fd5b61005f61005a36600461019c565b610075565b60405161006c91906101e5565b60405180910390f35b6000610081838361008a565b90505b92915050565b60008061009d848463ffffffff6100be16565b905060006100a96100e5565b90506100b582826100f1565b95945050505050565b6000826100cd57506000610084565b828202828482816100da57fe5b041461008157600080fd5b670de0b6b3a764000090565b600080610104848463ffffffff61013f16565b1161011e57610119838363ffffffff61015c16565b610081565b6100816001610133858563ffffffff61015c16565b9063ffffffff61017e16565b60008161014b57600080fd5b81838161015457fe5b069392505050565b600080821161016a57600080fd5b600082848161017557fe5b04949350505050565b60008282018381101561008157600080fd5b600061008182356101f3565b600080604083850312156101af57600080fd5b60006101bb8585610190565b92505060206101cc85828601610190565b9150509250929050565b6101df816101f3565b82525050565b6020810161008482846101d6565b9056fea265627a7a7230582055fb80842b30a4a313e1448a1e7e3e7ff698062984525118602366bb57c7997c6c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610047577c010000000000000000000000000000000000000000000000000000000060003504637b164ece811461004c575b600080fd5b61005f61005a36600461019c565b610075565b60405161006c91906101e5565b60405180910390f35b6000610081838361008a565b90505b92915050565b60008061009d848463ffffffff6100be16565b905060006100a96100e5565b90506100b582826100f1565b95945050505050565b6000826100cd57506000610084565b828202828482816100da57fe5b041461008157600080fd5b670de0b6b3a764000090565b600080610104848463ffffffff61013f16565b1161011e57610119838363ffffffff61015c16565b610081565b6100816001610133858563ffffffff61015c16565b9063ffffffff61017e16565b60008161014b57600080fd5b81838161015457fe5b069392505050565b600080821161016a57600080fd5b600082848161017557fe5b04949350505050565b60008282018381101561008157600080fd5b600061008182356101f3565b600080604083850312156101af57600080fd5b60006101bb8585610190565b92505060206101cc85828601610190565b9150509250929050565b6101df816101f3565b82525050565b6020810161008482846101d6565b9056fea265627a7a7230582055fb80842b30a4a313e1448a1e7e3e7ff698062984525118602366bb57c7997c6c6578706572696d656e74616cf50037",
    "sourceMap": "178:327:18:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;178:327:18;;;;;;;",
    "deployedSourceMap": "178:327:18:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;178:327:18;;;;;;;;;;;;;;;;;;;211:292;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;364:7;394:102;447:12;473:13;394:39;:102::i;:::-;387:109;;211:292;;;;;:::o;1322:450:7:-;1466:7;;1613:38;:13;1631:19;1613:38;:17;:38;:::i;:::-;1601:50;;1661:9;1673:24;:22;:24::i;:::-;1661:36;;1741:24;1760:1;1763;1741:18;:24::i;:::-;1734:31;1322:450;-1:-1:-1;;;;;1322:450:7:o;231:421:23:-;289:7;529:6;525:45;;-1:-1:-1;558:1:23;551:8;;525:45;592:5;;;596:1;592;:5;:1;615:5;;;;;:10;607:19;;;;;964:119:5;798:8;964:119;:::o;2513:163::-;2598:7;;2628:8;:1;2634;2628:8;:5;:8;:::i;:::-;:12;:41;;2661:8;:1;2667;2661:8;:5;:8;:::i;:::-;2628:41;;;2643:15;2656:1;2643:8;:1;2649;2643:8;:5;:8;:::i;:::-;:12;:15;:12;:15;:::i;1739:121:23:-;1797:7;1824:6;1816:15;;;;;;1852:1;1848;:5;;;;;;;1739:121;-1:-1:-1;;;1739:121:23:o;782:296::-;840:7;937:1;933;:5;925:14;;;;;;949:9;965:1;961;:5;;;;;;;782:296;-1:-1:-1;;;;782:296:23:o;1439:145::-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;5:118:-1;;72:46;110:6;97:20;72:46;;130:366;;;251:2;239:9;230:7;226:23;222:32;219:2;;;267:1;264;257:12;219:2;302:1;319:53;364:7;344:9;319:53;;;309:63;;281:97;409:2;427:53;472:7;463:6;452:9;448:22;427:53;;;417:63;;388:98;213:283;;;;;;503:120;586:31;611:5;586:31;;;581:3;574:44;568:55;;;630:213;748:2;733:18;;762:71;737:9;806:6;762:71;;850:79;919:5;902:27",
    "source": "pragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { CompoundUtils } from \"../lib/CompoundUtils.sol\";\n\n// Mock contract implementation of CompoundUtils functions\ncontract CompoundUtilsMock {\n    function testConvertCTokenToUnderlying(\n        uint256 _cTokenUnits,\n        uint256 _exchangeRate\n    )\n        external\n        pure\n        returns (uint256)\n    {\n        return CompoundUtils.convertCTokenToUnderlying(\n            _cTokenUnits,\n            _exchangeRate\n        );\n    }\n}",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CompoundUtilsMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CompoundUtilsMock.sol",
        "exportedSymbols": {
            "CompoundUtilsMock": [
                2844
            ]
        },
        "id": 2845,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2824,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:18"
            },
            {
                "id": 2825,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:18"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol",
                "file": "../lib/CompoundUtils.sol",
                "id": 2827,
                "nodeType": "ImportDirective",
                "scope": 2845,
                "sourceUnit": 1702,
                "src": "60:57:18",
                "symbolAliases": [
                    {
                        "foreign": 2826,
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
                "id": 2844,
                "linearizedBaseContracts": [
                    2844
                ],
                "name": "CompoundUtilsMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2842,
                            "nodeType": "Block",
                            "src": "377:126:18",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2838,
                                                "name": "_cTokenUnits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2829,
                                                "src": "447:12:18",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2839,
                                                "name": "_exchangeRate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2831,
                                                "src": "473:13:18",
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
                                                "id": 2836,
                                                "name": "CompoundUtils",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1701,
                                                "src": "394:13:18",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CompoundUtils_$1701_$",
                                                    "typeString": "type(library CompoundUtils)"
                                                }
                                            },
                                            "id": 2837,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "convertCTokenToUnderlying",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1700,
                                            "src": "394:39:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2840,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "394:102:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2835,
                                    "id": 2841,
                                    "nodeType": "Return",
                                    "src": "387:109:18"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2843,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testConvertCTokenToUnderlying",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2832,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2829,
                                    "name": "_cTokenUnits",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "259:20:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2828,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "259:7:18",
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
                                    "id": 2831,
                                    "name": "_exchangeRate",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "289:21:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2830,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "289:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "249:67:18"
                        },
                        "returnParameters": {
                            "id": 2835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2834,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "364:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2833,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "364:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "363:9:18"
                        },
                        "scope": 2844,
                        "src": "211:292:18",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2845,
                "src": "178:327:18"
            }
        ],
        "src": "0:505:18"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CompoundUtilsMock.sol",
        "exportedSymbols": {
            "CompoundUtilsMock": [
                2844
            ]
        },
        "id": 2845,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2824,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:18"
            },
            {
                "id": 2825,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:18"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CompoundUtils.sol",
                "file": "../lib/CompoundUtils.sol",
                "id": 2827,
                "nodeType": "ImportDirective",
                "scope": 2845,
                "sourceUnit": 1702,
                "src": "60:57:18",
                "symbolAliases": [
                    {
                        "foreign": 2826,
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
                "id": 2844,
                "linearizedBaseContracts": [
                    2844
                ],
                "name": "CompoundUtilsMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2842,
                            "nodeType": "Block",
                            "src": "377:126:18",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2838,
                                                "name": "_cTokenUnits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2829,
                                                "src": "447:12:18",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2839,
                                                "name": "_exchangeRate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2831,
                                                "src": "473:13:18",
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
                                                "id": 2836,
                                                "name": "CompoundUtils",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1701,
                                                "src": "394:13:18",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CompoundUtils_$1701_$",
                                                    "typeString": "type(library CompoundUtils)"
                                                }
                                            },
                                            "id": 2837,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "convertCTokenToUnderlying",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1700,
                                            "src": "394:39:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2840,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "394:102:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2835,
                                    "id": 2841,
                                    "nodeType": "Return",
                                    "src": "387:109:18"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2843,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testConvertCTokenToUnderlying",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2832,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2829,
                                    "name": "_cTokenUnits",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "259:20:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2828,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "259:7:18",
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
                                    "id": 2831,
                                    "name": "_exchangeRate",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "289:21:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2830,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "289:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "249:67:18"
                        },
                        "returnParameters": {
                            "id": 2835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2834,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2843,
                                    "src": "364:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2833,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "364:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "363:9:18"
                        },
                        "scope": 2844,
                        "src": "211:292:18",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2845,
                "src": "178:327:18"
            }
        ],
        "src": "0:505:18"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.929Z",
    "devdoc": {
        "methods": {}
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=CompoundUtilsMock.js.map