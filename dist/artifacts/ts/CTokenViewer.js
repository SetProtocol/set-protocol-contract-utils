"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTokenViewer = {
    "contractName": "CTokenViewer",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_cTokenAddresses",
                    "type": "address[]"
                }
            ],
            "name": "batchFetchExchangeRateStored",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_cTokenAddresses\",\"type\":\"address[]\"}],\"name\":\"batchFetchExchangeRateStored\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for batch fetching the on-chain Compound exchange rate\",\"methods\":{},\"title\":\"CTokenViewer\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/CTokenViewer.sol\":\"CTokenViewer\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/CTokenViewer.sol\":{\"keccak256\":\"0x88ab0f0135d48e86c6ee148d2ae2861331b71e3528c2a38d23cb91c3b7256724\",\"urls\":[\"bzzr://38977fcb6a079c4a7718cc8658b7c30d292371deee3a52a119490c4fb482e6eb\"]},\"set-protocol-contracts/contracts/core/interfaces/ICToken.sol\":{\"keccak256\":\"0x661dd1d6e349160dd01e275b8138c9c78fe296abbb7d54ecdbc03b6be35cc5e8\",\"urls\":[\"bzzr://731700a131b20732ffba3070eaa6e0cdec2f42c7493d5af3f24e605cb3022fcb\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5061033a806100206000396000f3fe608060405234801561001057600080fd5b5060043610610047577c01000000000000000000000000000000000000000000000000000000006000350463bb69e831811461004c575b600080fd5b61005f61005a3660046101f9565b610075565b60405161006c91906102d9565b60405180910390f35b604080518281526020808402820101909152606090829082908280156100a5578160200160208202803883390190505b50905060005b82811015610194578585828181106100bf57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663182df0f56040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b15801561013d57600080fd5b505afa158015610151573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610175919081019061023b565b82828151811061018157fe5b60209081029190910101526001016100ab565b50949350505050565b60008083601f8401126101af57600080fd5b50813567ffffffffffffffff8111156101c757600080fd5b6020830191508360208202830111156101df57600080fd5b9250929050565b60006101f282516102fd565b9392505050565b6000806020838503121561020c57600080fd5b823567ffffffffffffffff81111561022357600080fd5b61022f8582860161019d565b92509250509250929050565b60006020828403121561024d57600080fd5b600061025984846101e6565b949350505050565b600061026d83836102ca565b505060200190565b6000610280826102f0565b61028a81856102f4565b9350610295836102ea565b60005b828110156102c0576102ab868351610261565b95506102b6826102ea565b9150600101610298565b5093949350505050565b6102d3816102fd565b82525050565b602080825281016101f28184610275565b60200190565b5190565b90815260200190565b9056fea265627a7a723058200f5a219719137c59eef6b775cda8c5796f94ecef7c284aec99ed10f9be5802286c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610047577c01000000000000000000000000000000000000000000000000000000006000350463bb69e831811461004c575b600080fd5b61005f61005a3660046101f9565b610075565b60405161006c91906102d9565b60405180910390f35b604080518281526020808402820101909152606090829082908280156100a5578160200160208202803883390190505b50905060005b82811015610194578585828181106100bf57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663182df0f56040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b15801561013d57600080fd5b505afa158015610151573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610175919081019061023b565b82828151811061018157fe5b60209081029190910101526001016100ab565b50949350505050565b60008083601f8401126101af57600080fd5b50813567ffffffffffffffff8111156101c757600080fd5b6020830191508360208202830111156101df57600080fd5b9250929050565b60006101f282516102fd565b9392505050565b6000806020838503121561020c57600080fd5b823567ffffffffffffffff81111561022357600080fd5b61022f8582860161019d565b92509250509250929050565b60006020828403121561024d57600080fd5b600061025984846101e6565b949350505050565b600061026d83836102ca565b505060200190565b6000610280826102f0565b61028a81856102f4565b9350610295836102ea565b60005b828110156102c0576102ab868351610261565b95506102b6826102ea565b9150600101610298565b5093949350505050565b6102d3816102fd565b82525050565b602080825281016101f28184610275565b60200190565b5190565b90815260200190565b9056fea265627a7a723058200f5a219719137c59eef6b775cda8c5796f94ecef7c284aec99ed10f9be5802286c6578706572696d656e74616cf50037",
    "sourceMap": "873:749:4:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;873:749:4;;;;;;;",
    "deployedSourceMap": "873:749:4:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;873:749:4;;;;;;;;;;;;;;;;;;;902:718;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;1288:30;;;;;;;;;;;;;;;;1038:16;;1161;;1038;;1161;1288:30;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;1288:30:4;-1:-1:-1;1249:69:4;-1:-1:-1;1437:9:4;1432:145;1456:15;1452:1;:19;1432:145;;;1525:16;;1542:1;1525:19;;;;;;;;;;;;;;;1517:47;;;:49;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1517:49:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1517:49:4;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1517:49:4;;;;;;;;;1492:19;1512:1;1492:22;;;;;;;;;;;;;;;;;:74;1473:3;;1432:145;;;-1:-1:-1;1594:19:4;902:718;-1:-1:-1;;;;902:718:4:o;23:352:-1:-;;;153:3;146:4;138:6;134:17;130:27;120:2;;171:1;168;161:12;120:2;-1:-1;191:20;;231:18;220:30;;217:2;;;263:1;260;253:12;217:2;297:4;289:6;285:17;273:29;;348:3;340:4;332:6;328:17;318:8;314:32;311:41;308:2;;;365:1;362;355:12;308:2;113:262;;;;;;383:122;;461:39;492:6;486:13;461:39;;;452:48;446:59;-1:-1;;;446:59;512:397;;;651:2;639:9;630:7;626:23;622:32;619:2;;;667:1;664;657:12;619:2;702:31;;753:18;742:30;;739:2;;;785:1;782;775:12;739:2;813:80;885:7;876:6;865:9;861:22;813:80;;;803:90;;;;681:218;613:296;;;;;;916:263;;1031:2;1019:9;1010:7;1006:23;1002:32;999:2;;;1047:1;1044;1037:12;999:2;1082:1;1099:64;1155:7;1135:9;1099:64;;;1089:74;993:186;-1:-1;;;;993:186;1187:173;;1274:46;1316:3;1308:6;1274:46;;;-1:-1;;1349:4;1340:14;;1267:93;1399:621;;1544:54;1592:5;1544:54;;;1611:86;1690:6;1685:3;1611:86;;;1604:93;;1717:56;1767:5;1717:56;;;1794:1;1779:219;1804:6;1801:1;1798:13;1779:219;;;1851:63;1910:3;1901:6;1895:13;1851:63;;;1844:70;;1931:60;1984:6;1931:60;;;1921:70;-1:-1;1826:1;1819:9;1779:219;;;-1:-1;2011:3;;1523:497;-1:-1;;;;1523:497;2028:110;2101:31;2126:5;2101:31;;;2096:3;2089:44;2083:55;;;2145:361;2313:2;2327:47;;;2298:18;;2388:108;2298:18;2482:6;2388:108;;2515:121;2624:4;2612:17;;2593:43;2645:107;2735:12;;2719:33;2891:178;3009:19;;;3058:4;3049:14;;3002:67;3077:79;3146:5;3129:27",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { ICToken } from \"set-protocol-contracts/contracts/core/interfaces/ICToken.sol\";\n\n\n/**\n * @title CTokenViewer\n * @author Set Protocol\n *\n * Interface for batch fetching the on-chain Compound exchange rate\n */\ncontract CTokenViewer {\n\n    function batchFetchExchangeRateStored(\n        address[] calldata _cTokenAddresses\n    )\n        external\n        view\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch exchange rates for\n        uint256 _addressesCount = _cTokenAddresses.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory cTokenExchangeRates = new uint256[](_addressesCount);\n\n        // Cycle through contract addresses array and fetching the exchange rate of each for the owner\n        for (uint256 i = 0; i < _addressesCount; i++) {\n            cTokenExchangeRates[i] = ICToken(_cTokenAddresses[i]).exchangeRateStored();\n        }\n\n        return cTokenExchangeRates;\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/CTokenViewer.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/CTokenViewer.sol",
        "exportedSymbols": {
            "CTokenViewer": [
                207
            ]
        },
        "id": 208,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 152,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:4"
            },
            {
                "id": 153,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:4"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
                "id": 155,
                "nodeType": "ImportDirective",
                "scope": 208,
                "sourceUnit": 1663,
                "src": "657:87:4",
                "symbolAliases": [
                    {
                        "foreign": 154,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title CTokenViewer\n@author Set Protocol\n * Interface for batch fetching the on-chain Compound exchange rate",
                "fullyImplemented": true,
                "id": 207,
                "linearizedBaseContracts": [
                    207
                ],
                "name": "CTokenViewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 205,
                            "nodeType": "Block",
                            "src": "1060:560:4",
                            "statements": [
                                {
                                    "assignments": [
                                        165
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 165,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 205,
                                            "src": "1135:23:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 164,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1135:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 168,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 166,
                                            "name": "_cTokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 158,
                                            "src": "1161:16:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 167,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1161:23:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1135:49:4"
                                },
                                {
                                    "assignments": [
                                        172
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 172,
                                            "name": "cTokenExchangeRates",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 205,
                                            "src": "1249:36:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 170,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1249:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 171,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1249:9:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 178,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 176,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 165,
                                                "src": "1302:15:4",
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
                                            "id": 175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1288:13:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 173,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1292:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 174,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1292:9:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 177,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1288:30:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1249:69:4"
                                },
                                {
                                    "body": {
                                        "id": 201,
                                        "nodeType": "Block",
                                        "src": "1478:99:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 199,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 189,
                                                            "name": "cTokenExchangeRates",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 172,
                                                            "src": "1492:19:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 191,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 190,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 180,
                                                            "src": "1512:1:4",
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
                                                        "src": "1492:22:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 193,
                                                                            "name": "_cTokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 158,
                                                                            "src": "1525:16:4",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 195,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 194,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 180,
                                                                            "src": "1542:1:4",
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
                                                                        "src": "1525:19:4",
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
                                                                    "id": 192,
                                                                    "name": "ICToken",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1662,
                                                                    "src": "1517:7:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_ICToken_$1662_$",
                                                                        "typeString": "type(contract ICToken)"
                                                                    }
                                                                },
                                                                "id": 196,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1517:28:4",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ICToken_$1662",
                                                                    "typeString": "contract ICToken"
                                                                }
                                                            },
                                                            "id": 197,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "exchangeRateStored",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 1642,
                                                            "src": "1517:47:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 198,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1517:49:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1492:74:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 200,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1492:74:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 183,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 180,
                                            "src": "1452:1:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 184,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 165,
                                            "src": "1456:15:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1452:19:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 202,
                                    "initializationExpression": {
                                        "assignments": [
                                            180
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 180,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 202,
                                                "src": "1437:9:4",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 179,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1437:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 182,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1449:1:4",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1437:13:4"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 187,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1473:3:4",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 186,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 180,
                                                "src": "1473:1:4",
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
                                        "id": 188,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1473:3:4"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1432:145:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 203,
                                        "name": "cTokenExchangeRates",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 172,
                                        "src": "1594:19:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 163,
                                    "id": 204,
                                    "nodeType": "Return",
                                    "src": "1587:26:4"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 206,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchExchangeRateStored",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 158,
                                    "name": "_cTokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 206,
                                    "src": "949:35:4",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 156,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "949:7:4",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 157,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "949:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "939:51:4"
                        },
                        "returnParameters": {
                            "id": 163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 162,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 206,
                                    "src": "1038:16:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 160,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1038:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 161,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1038:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1037:18:4"
                        },
                        "scope": 207,
                        "src": "902:718:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 208,
                "src": "873:749:4"
            }
        ],
        "src": "597:1026:4"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/CTokenViewer.sol",
        "exportedSymbols": {
            "CTokenViewer": [
                207
            ]
        },
        "id": 208,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 152,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:4"
            },
            {
                "id": 153,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:4"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
                "id": 155,
                "nodeType": "ImportDirective",
                "scope": 208,
                "sourceUnit": 1663,
                "src": "657:87:4",
                "symbolAliases": [
                    {
                        "foreign": 154,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title CTokenViewer\n@author Set Protocol\n * Interface for batch fetching the on-chain Compound exchange rate",
                "fullyImplemented": true,
                "id": 207,
                "linearizedBaseContracts": [
                    207
                ],
                "name": "CTokenViewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 205,
                            "nodeType": "Block",
                            "src": "1060:560:4",
                            "statements": [
                                {
                                    "assignments": [
                                        165
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 165,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 205,
                                            "src": "1135:23:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 164,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1135:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 168,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 166,
                                            "name": "_cTokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 158,
                                            "src": "1161:16:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 167,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1161:23:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1135:49:4"
                                },
                                {
                                    "assignments": [
                                        172
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 172,
                                            "name": "cTokenExchangeRates",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 205,
                                            "src": "1249:36:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 170,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1249:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 171,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1249:9:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 178,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 176,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 165,
                                                "src": "1302:15:4",
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
                                            "id": 175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1288:13:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 173,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1292:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 174,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1292:9:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 177,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1288:30:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1249:69:4"
                                },
                                {
                                    "body": {
                                        "id": 201,
                                        "nodeType": "Block",
                                        "src": "1478:99:4",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 199,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 189,
                                                            "name": "cTokenExchangeRates",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 172,
                                                            "src": "1492:19:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 191,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 190,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 180,
                                                            "src": "1512:1:4",
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
                                                        "src": "1492:22:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 193,
                                                                            "name": "_cTokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 158,
                                                                            "src": "1525:16:4",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 195,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 194,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 180,
                                                                            "src": "1542:1:4",
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
                                                                        "src": "1525:19:4",
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
                                                                    "id": 192,
                                                                    "name": "ICToken",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1662,
                                                                    "src": "1517:7:4",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_ICToken_$1662_$",
                                                                        "typeString": "type(contract ICToken)"
                                                                    }
                                                                },
                                                                "id": 196,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1517:28:4",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ICToken_$1662",
                                                                    "typeString": "contract ICToken"
                                                                }
                                                            },
                                                            "id": 197,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "exchangeRateStored",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 1642,
                                                            "src": "1517:47:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 198,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1517:49:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1492:74:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 200,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1492:74:4"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 183,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 180,
                                            "src": "1452:1:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 184,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 165,
                                            "src": "1456:15:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1452:19:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 202,
                                    "initializationExpression": {
                                        "assignments": [
                                            180
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 180,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 202,
                                                "src": "1437:9:4",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 179,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1437:7:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 182,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1449:1:4",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1437:13:4"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 187,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1473:3:4",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 186,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 180,
                                                "src": "1473:1:4",
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
                                        "id": 188,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1473:3:4"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1432:145:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 203,
                                        "name": "cTokenExchangeRates",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 172,
                                        "src": "1594:19:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 163,
                                    "id": 204,
                                    "nodeType": "Return",
                                    "src": "1587:26:4"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 206,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchExchangeRateStored",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 158,
                                    "name": "_cTokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 206,
                                    "src": "949:35:4",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 156,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "949:7:4",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 157,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "949:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "939:51:4"
                        },
                        "returnParameters": {
                            "id": 163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 162,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 206,
                                    "src": "1038:16:4",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 160,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1038:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 161,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1038:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1037:18:4"
                        },
                        "scope": 207,
                        "src": "902:718:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 208,
                "src": "873:749:4"
            }
        ],
        "src": "597:1026:4"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.679Z",
    "devdoc": {
        "author": "Set Protocol * Interface for batch fetching the on-chain Compound exchange rate",
        "methods": {},
        "title": "CTokenViewer"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=CTokenViewer.js.map