"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerViewer = {
    "contractName": "ManagerViewer",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_managers",
                    "type": "address[]"
                }
            ],
            "name": "batchFetchMACOV2CrossoverTimestamp",
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
                    "name": "_managers",
                    "type": "address[]"
                }
            ],
            "name": "batchFetchAssetPairCrossoverTimestamp",
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_managers\",\"type\":\"address[]\"}],\"name\":\"batchFetchMACOV2CrossoverTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_managers\",\"type\":\"address[]\"}],\"name\":\"batchFetchAssetPairCrossoverTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interfaces for fetching multiple managers state in a single read\",\"methods\":{},\"title\":\"ManagerViewer\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ManagerViewer.sol\":\"ManagerViewer\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ManagerViewer.sol\":{\"keccak256\":\"0xbc9e2b7cead95fa532b2ed26d3b849d37dee92ffe7e22b5ee0b80491167fb134\",\"urls\":[\"bzzr://9896aff2f202837550f9ee107f0245094eae1286e0b658b9bd54630f052b7e9c\"]},\"set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol\":{\"keccak256\":\"0xe91b5a887f1ab039a8bbdd3e142e9d690a73a09cb7e39b9b6cb79f4d762af64b\",\"urls\":[\"bzzr://8c32db51bd5e3ac522f269933f11fc336efbc84985489c00348014fffb66c200\"]},\"set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol\":{\"keccak256\":\"0x3c3781939154add585f57c15f1d84e5ada40076d61b583486a25468ed86abbd0\",\"urls\":[\"bzzr://045ba4616612c82978a798940120903865414f45a6c5ad98463910cfda9b973b\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610438806100206000396000f3fe608060405234801561001057600080fd5b50600436106100395760e060020a60003504634a484bfa811461003e578063a3325e1e14610067575b600080fd5b61005161004c3660046102f7565b61007a565b60405161005e91906103d7565b60405180910390f35b6100516100753660046102f7565b61018f565b604080518281526020808402820101909152606090829082908280156100aa578160200160208202803883390190505b50905060005b828110156101865760008686838181106100c657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ca537dc96040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561012e57600080fd5b505afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101669190810190610339565b83838151811061017257fe5b6020908102919091010152506001016100b0565b50949350505050565b604080518281526020808402820101909152606090829082908280156101bf578160200160208202803883390190505b50905060005b828110156101865760008686838181106101db57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166335d6a6866040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561024357600080fd5b505afa158015610257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061027b9190810190610339565b83838151811061028757fe5b6020908102919091010152506001016101c5565b60008083601f8401126102ad57600080fd5b50813567ffffffffffffffff8111156102c557600080fd5b6020830191508360208202830111156102dd57600080fd5b9250929050565b60006102f082516103fb565b9392505050565b6000806020838503121561030a57600080fd5b823567ffffffffffffffff81111561032157600080fd5b61032d8582860161029b565b92509250509250929050565b60006020828403121561034b57600080fd5b600061035784846102e4565b949350505050565b600061036b83836103c8565b505060200190565b600061037e826103ee565b61038881856103f2565b9350610393836103e8565b60005b828110156103be576103a986835161035f565b95506103b4826103e8565b9150600101610396565b5093949350505050565b6103d1816103fb565b82525050565b602080825281016102f08184610373565b60200190565b5190565b90815260200190565b9056fea265627a7a72305820f55e39c86e73a5d687dc6d9bb4c2363af735a79d0639b11b889f6b9a12d2e3596c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100395760e060020a60003504634a484bfa811461003e578063a3325e1e14610067575b600080fd5b61005161004c3660046102f7565b61007a565b60405161005e91906103d7565b60405180910390f35b6100516100753660046102f7565b61018f565b604080518281526020808402820101909152606090829082908280156100aa578160200160208202803883390190505b50905060005b828110156101865760008686838181106100c657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ca537dc96040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561012e57600080fd5b505afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101669190810190610339565b83838151811061017257fe5b6020908102919091010152506001016100b0565b50949350505050565b604080518281526020808402820101909152606090829082908280156101bf578160200160208202803883390190505b50905060005b828110156101865760008686838181106101db57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166335d6a6866040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561024357600080fd5b505afa158015610257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061027b9190810190610339565b83838151811061028757fe5b6020908102919091010152506001016101c5565b60008083601f8401126102ad57600080fd5b50813567ffffffffffffffff8111156102c557600080fd5b6020830191508360208202830111156102dd57600080fd5b9250929050565b60006102f082516103fb565b9392505050565b6000806020838503121561030a57600080fd5b823567ffffffffffffffff81111561032157600080fd5b61032d8582860161029b565b92509250509250929050565b60006020828403121561034b57600080fd5b600061035784846102e4565b949350505050565b600061036b83836103c8565b505060200190565b600061037e826103ee565b61038881856103f2565b9350610393836103e8565b60005b828110156103be576103a986835161035f565b95506103b4826103e8565b9150600101610396565b5093949350505050565b6103d1816103fb565b82525050565b602080825281016102f08184610373565b60200190565b5190565b90815260200190565b9056fea265627a7a72305820f55e39c86e73a5d687dc6d9bb4c2363af735a79d0639b11b889f6b9a12d2e3596c6578706572696d656e74616cf50037",
    "sourceMap": "1022:1301:6:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1022:1301:6;;;;;;;",
    "deployedSourceMap": "1022:1301:6:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1022:1301:6;;;;;;-1:-1:-1;;;1022:1301:6;;;;;;;;;;;;;;;;;1052:635;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1693:623;;;;;;;;;:::i;1052:635::-;1425:28;;;;;;;;;;;;;;;;1202:16;;1314:9;;1202:16;;1314:9;1425:28;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;1425:28:6;-1:-1:-1;1395:58:6;-1:-1:-1;1469:9:6;1464:189;1488:13;1484:1;:17;1464:189;;;1522:30;1555:9;;1565:1;1555:12;;;;;;;;;;;;;;;1522:45;;1598:7;:42;;;:44;;;;;-1:-1:-1;;;1598:44:6;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1598:44:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1598:44:6;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;1598:44:6;;;;;;;;;1582:10;1593:1;1582:13;;;;;;;;;;;;;;;;;:60;-1:-1:-1;1503:3:6;;1464:189;;;-1:-1:-1;1670:10:6;1052:635;-1:-1:-1;;;;1052:635:6:o;1693:623::-;2064:28;;;;;;;;;;;;;;;;1841:16;;1953:9;;1841:16;;1953:9;2064:28;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;2064:28:6;-1:-1:-1;2034:58:6;-1:-1:-1;2108:9:6;2103:179;2127:13;2123:1;:17;2103:179;;;2161:25;2189:9;;2199:1;2189:12;;;;;;;;;;;;;;;2161:40;;2232:7;:37;;;:39;;;;;-1:-1:-1;;;2232:39:6;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2232:39:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2232:39:6;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;2232:39:6;;;;;;;;;2216:10;2227:1;2216:13;;;;;;;;;;;;;;;;;:55;-1:-1:-1;2142:3:6;;2103:179;;42:378:-1;;;198:3;191:4;183:6;179:17;175:27;165:2;;216:1;213;206:12;165:2;-1:-1;236:20;;276:18;265:30;;262:2;;;308:1;305;298:12;262:2;342:4;334:6;330:17;318:29;;393:3;385:4;377:6;373:17;363:8;359:32;356:41;353:2;;;410:1;407;400:12;353:2;158:262;;;;;;861:122;;939:39;970:6;964:13;939:39;;;930:48;924:59;-1:-1;;;924:59;990:449;;;1155:2;1143:9;1134:7;1130:23;1126:32;1123:2;;;1171:1;1168;1161:12;1123:2;1206:31;;1257:18;1246:30;;1243:2;;;1289:1;1286;1279:12;1243:2;1317:106;1415:7;1406:6;1395:9;1391:22;1317:106;;;1307:116;;;;1185:244;1117:322;;;;;;1912:263;;2027:2;2015:9;2006:7;2002:23;1998:32;1995:2;;;2043:1;2040;2033:12;1995:2;2078:1;2095:64;2151:7;2131:9;2095:64;;;2085:74;1989:186;-1:-1;;;;1989:186;2183:173;;2270:46;2312:3;2304:6;2270:46;;;-1:-1;;2345:4;2336:14;;2263:93;2395:621;;2540:54;2588:5;2540:54;;;2607:86;2686:6;2681:3;2607:86;;;2600:93;;2713:56;2763:5;2713:56;;;2790:1;2775:219;2800:6;2797:1;2794:13;2775:219;;;2847:63;2906:3;2897:6;2891:13;2847:63;;;2840:70;;2927:60;2980:6;2927:60;;;2917:70;-1:-1;2822:1;2815:9;2775:219;;;-1:-1;3007:3;;2519:497;-1:-1;;;;2519:497;3024:110;3097:31;3122:5;3097:31;;;3092:3;3085:44;3079:55;;;3141:361;3309:2;3323:47;;;3294:18;;3384:108;3294:18;3478:6;3384:108;;3511:121;3620:4;3608:17;;3589:43;3641:107;3731:12;;3715:33;3887:178;4005:19;;;4054:4;4045:14;;3998:67;4073:79;4142:5;4125:27",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { IAssetPairManager } from \"set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol\";\nimport { IMACOStrategyManagerV2 } from \"set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol\";\n\n\n/**\n * @title ManagerViewer\n * @author Set Protocol\n *\n * Interfaces for fetching multiple managers state in a single read\n */\ncontract ManagerViewer {\n\n    function batchFetchMACOV2CrossoverTimestamp(\n        IMACOStrategyManagerV2[] calldata _managers\n    )\n        external\n        view\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch owner for\n        uint256 _managerCount = _managers.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory timestamps = new uint256[](_managerCount);\n\n        for (uint256 i = 0; i < _managerCount; i++) {\n            IMACOStrategyManagerV2 manager = _managers[i];\n\n            timestamps[i] = manager.lastCrossoverConfirmationTimestamp();\n        }\n\n        return timestamps;\n    }\n\n    function batchFetchAssetPairCrossoverTimestamp(\n        IAssetPairManager[] calldata _managers\n    )\n        external\n        view\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch owner for\n        uint256 _managerCount = _managers.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory timestamps = new uint256[](_managerCount);\n\n        for (uint256 i = 0; i < _managerCount; i++) {\n            IAssetPairManager manager = _managers[i];\n\n            timestamps[i] = manager.recentInitialProposeTimestamp();\n        }\n\n        return timestamps;\n    }\n    \n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ManagerViewer.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ManagerViewer.sol",
        "exportedSymbols": {
            "ManagerViewer": [
                488
            ]
        },
        "id": 489,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 376,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:6"
            },
            {
                "id": 377,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:6"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
                "file": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
                "id": 379,
                "nodeType": "ImportDirective",
                "scope": 489,
                "sourceUnit": 2598,
                "src": "657:112:6",
                "symbolAliases": [
                    {
                        "foreign": 378,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
                "file": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
                "id": 381,
                "nodeType": "ImportDirective",
                "scope": 489,
                "sourceUnit": 2617,
                "src": "770:122:6",
                "symbolAliases": [
                    {
                        "foreign": 380,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ManagerViewer\n@author Set Protocol\n * Interfaces for fetching multiple managers state in a single read",
                "fullyImplemented": true,
                "id": 488,
                "linearizedBaseContracts": [
                    488
                ],
                "name": "ManagerViewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 433,
                            "nodeType": "Block",
                            "src": "1224:463:6",
                            "statements": [
                                {
                                    "assignments": [
                                        391
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 391,
                                            "name": "_managerCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 433,
                                            "src": "1290:21:6",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 390,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1290:7:6",
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
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 392,
                                            "name": "_managers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 384,
                                            "src": "1314:9:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                                "typeString": "contract IMACOStrategyManagerV2[] calldata"
                                            }
                                        },
                                        "id": 393,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1314:16:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1290:40:6"
                                },
                                {
                                    "assignments": [
                                        398
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 398,
                                            "name": "timestamps",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 433,
                                            "src": "1395:27:6",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 396,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1395:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 397,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1395:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 404,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 402,
                                                "name": "_managerCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 391,
                                                "src": "1439:13:6",
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
                                            "id": 401,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1425:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 399,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1429:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 400,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1429:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 403,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1425:28:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1395:58:6"
                                },
                                {
                                    "body": {
                                        "id": 429,
                                        "nodeType": "Block",
                                        "src": "1508:145:6",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    416
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 416,
                                                        "name": "manager",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 429,
                                                        "src": "1522:30:6",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                            "typeString": "contract IMACOStrategyManagerV2"
                                                        },
                                                        "typeName": {
                                                            "contractScope": null,
                                                            "id": 415,
                                                            "name": "IMACOStrategyManagerV2",
                                                            "nodeType": "UserDefinedTypeName",
                                                            "referencedDeclaration": 2616,
                                                            "src": "1522:22:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                                "typeString": "contract IMACOStrategyManagerV2"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 420,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 417,
                                                        "name": "_managers",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 384,
                                                        "src": "1555:9:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                                            "typeString": "contract IMACOStrategyManagerV2[] calldata"
                                                        }
                                                    },
                                                    "id": 419,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 418,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 406,
                                                        "src": "1565:1:6",
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
                                                    "src": "1555:12:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                        "typeString": "contract IMACOStrategyManagerV2"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1522:45:6"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 427,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 421,
                                                            "name": "timestamps",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 398,
                                                            "src": "1582:10:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 423,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 422,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 406,
                                                            "src": "1593:1:6",
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
                                                        "src": "1582:13:6",
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
                                                                "id": 424,
                                                                "name": "manager",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 416,
                                                                "src": "1598:7:6",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                                    "typeString": "contract IMACOStrategyManagerV2"
                                                                }
                                                            },
                                                            "id": 425,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "lastCrossoverConfirmationTimestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2615,
                                                            "src": "1598:42:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 426,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1598:44:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1582:60:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 428,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1582:60:6"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 409,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 406,
                                            "src": "1484:1:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 410,
                                            "name": "_managerCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 391,
                                            "src": "1488:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1484:17:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 430,
                                    "initializationExpression": {
                                        "assignments": [
                                            406
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 406,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 430,
                                                "src": "1469:9:6",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 405,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1469:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 408,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 407,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1481:1:6",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1469:13:6"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 413,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1503:3:6",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 412,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 406,
                                                "src": "1503:1:6",
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
                                        "id": 414,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1503:3:6"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1464:189:6"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 431,
                                        "name": "timestamps",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 398,
                                        "src": "1670:10:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 389,
                                    "id": 432,
                                    "nodeType": "Return",
                                    "src": "1663:17:6"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 434,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchMACOV2CrossoverTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 384,
                                    "name": "_managers",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 434,
                                    "src": "1105:43:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                        "typeString": "contract IMACOStrategyManagerV2[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 382,
                                            "name": "IMACOStrategyManagerV2",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 2616,
                                            "src": "1105:22:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                "typeString": "contract IMACOStrategyManagerV2"
                                            }
                                        },
                                        "id": 383,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1105:24:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_storage_ptr",
                                            "typeString": "contract IMACOStrategyManagerV2[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1095:59:6"
                        },
                        "returnParameters": {
                            "id": 389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 388,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 434,
                                    "src": "1202:16:6",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 386,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1202:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 387,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1202:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1201:18:6"
                        },
                        "scope": 488,
                        "src": "1052:635:6",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 486,
                            "nodeType": "Block",
                            "src": "1863:453:6",
                            "statements": [
                                {
                                    "assignments": [
                                        444
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 444,
                                            "name": "_managerCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 486,
                                            "src": "1929:21:6",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 443,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1929:7:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 447,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 445,
                                            "name": "_managers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 437,
                                            "src": "1953:9:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                                "typeString": "contract IAssetPairManager[] calldata"
                                            }
                                        },
                                        "id": 446,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1953:16:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1929:40:6"
                                },
                                {
                                    "assignments": [
                                        451
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 451,
                                            "name": "timestamps",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 486,
                                            "src": "2034:27:6",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 449,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2034:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 450,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2034:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 457,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 455,
                                                "name": "_managerCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 444,
                                                "src": "2078:13:6",
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
                                            "id": 454,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2064:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 452,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2068:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 453,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2068:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2064:28:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2034:58:6"
                                },
                                {
                                    "body": {
                                        "id": 482,
                                        "nodeType": "Block",
                                        "src": "2147:135:6",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    469
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 469,
                                                        "name": "manager",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 482,
                                                        "src": "2161:25:6",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                            "typeString": "contract IAssetPairManager"
                                                        },
                                                        "typeName": {
                                                            "contractScope": null,
                                                            "id": 468,
                                                            "name": "IAssetPairManager",
                                                            "nodeType": "UserDefinedTypeName",
                                                            "referencedDeclaration": 2597,
                                                            "src": "2161:17:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                                "typeString": "contract IAssetPairManager"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 473,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 470,
                                                        "name": "_managers",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 437,
                                                        "src": "2189:9:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                                            "typeString": "contract IAssetPairManager[] calldata"
                                                        }
                                                    },
                                                    "id": 472,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 471,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 459,
                                                        "src": "2199:1:6",
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
                                                    "src": "2189:12:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                        "typeString": "contract IAssetPairManager"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2161:40:6"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 480,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 474,
                                                            "name": "timestamps",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 451,
                                                            "src": "2216:10:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 476,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 475,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 459,
                                                            "src": "2227:1:6",
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
                                                        "src": "2216:13:6",
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
                                                                "id": 477,
                                                                "name": "manager",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 469,
                                                                "src": "2232:7:6",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                                    "typeString": "contract IAssetPairManager"
                                                                }
                                                            },
                                                            "id": 478,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "recentInitialProposeTimestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2596,
                                                            "src": "2232:37:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2232:39:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2216:55:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 481,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2216:55:6"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 462,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 459,
                                            "src": "2123:1:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 463,
                                            "name": "_managerCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 444,
                                            "src": "2127:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2123:17:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 483,
                                    "initializationExpression": {
                                        "assignments": [
                                            459
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 459,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 483,
                                                "src": "2108:9:6",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 458,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2108:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 461,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 460,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2120:1:6",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2108:13:6"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 466,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2142:3:6",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 465,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 459,
                                                "src": "2142:1:6",
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
                                        "id": 467,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2142:3:6"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2103:179:6"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 484,
                                        "name": "timestamps",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 451,
                                        "src": "2299:10:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 442,
                                    "id": 485,
                                    "nodeType": "Return",
                                    "src": "2292:17:6"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 487,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchAssetPairCrossoverTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 438,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 437,
                                    "name": "_managers",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 487,
                                    "src": "1749:38:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                        "typeString": "contract IAssetPairManager[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 435,
                                            "name": "IAssetPairManager",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 2597,
                                            "src": "1749:17:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                "typeString": "contract IAssetPairManager"
                                            }
                                        },
                                        "id": 436,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1749:19:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_storage_ptr",
                                            "typeString": "contract IAssetPairManager[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1739:54:6"
                        },
                        "returnParameters": {
                            "id": 442,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 441,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 487,
                                    "src": "1841:16:6",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 439,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1841:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 440,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1841:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1840:18:6"
                        },
                        "scope": 488,
                        "src": "1693:623:6",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 489,
                "src": "1022:1301:6"
            }
        ],
        "src": "597:1727:6"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ManagerViewer.sol",
        "exportedSymbols": {
            "ManagerViewer": [
                488
            ]
        },
        "id": 489,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 376,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:6"
            },
            {
                "id": 377,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:6"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
                "file": "set-protocol-strategies/contracts/managers/interfaces/IAssetPairManager.sol",
                "id": 379,
                "nodeType": "ImportDirective",
                "scope": 489,
                "sourceUnit": 2598,
                "src": "657:112:6",
                "symbolAliases": [
                    {
                        "foreign": 378,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
                "file": "set-protocol-strategies/contracts/managers/interfaces/IMACOStrategyManagerV2.sol",
                "id": 381,
                "nodeType": "ImportDirective",
                "scope": 489,
                "sourceUnit": 2617,
                "src": "770:122:6",
                "symbolAliases": [
                    {
                        "foreign": 380,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ManagerViewer\n@author Set Protocol\n * Interfaces for fetching multiple managers state in a single read",
                "fullyImplemented": true,
                "id": 488,
                "linearizedBaseContracts": [
                    488
                ],
                "name": "ManagerViewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 433,
                            "nodeType": "Block",
                            "src": "1224:463:6",
                            "statements": [
                                {
                                    "assignments": [
                                        391
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 391,
                                            "name": "_managerCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 433,
                                            "src": "1290:21:6",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 390,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1290:7:6",
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
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 392,
                                            "name": "_managers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 384,
                                            "src": "1314:9:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                                "typeString": "contract IMACOStrategyManagerV2[] calldata"
                                            }
                                        },
                                        "id": 393,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1314:16:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1290:40:6"
                                },
                                {
                                    "assignments": [
                                        398
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 398,
                                            "name": "timestamps",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 433,
                                            "src": "1395:27:6",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 396,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1395:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 397,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1395:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 404,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 402,
                                                "name": "_managerCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 391,
                                                "src": "1439:13:6",
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
                                            "id": 401,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1425:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 399,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1429:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 400,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1429:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 403,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1425:28:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1395:58:6"
                                },
                                {
                                    "body": {
                                        "id": 429,
                                        "nodeType": "Block",
                                        "src": "1508:145:6",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    416
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 416,
                                                        "name": "manager",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 429,
                                                        "src": "1522:30:6",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                            "typeString": "contract IMACOStrategyManagerV2"
                                                        },
                                                        "typeName": {
                                                            "contractScope": null,
                                                            "id": 415,
                                                            "name": "IMACOStrategyManagerV2",
                                                            "nodeType": "UserDefinedTypeName",
                                                            "referencedDeclaration": 2616,
                                                            "src": "1522:22:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                                "typeString": "contract IMACOStrategyManagerV2"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 420,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 417,
                                                        "name": "_managers",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 384,
                                                        "src": "1555:9:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                                            "typeString": "contract IMACOStrategyManagerV2[] calldata"
                                                        }
                                                    },
                                                    "id": 419,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 418,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 406,
                                                        "src": "1565:1:6",
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
                                                    "src": "1555:12:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                        "typeString": "contract IMACOStrategyManagerV2"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1522:45:6"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 427,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 421,
                                                            "name": "timestamps",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 398,
                                                            "src": "1582:10:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 423,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 422,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 406,
                                                            "src": "1593:1:6",
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
                                                        "src": "1582:13:6",
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
                                                                "id": 424,
                                                                "name": "manager",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 416,
                                                                "src": "1598:7:6",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                                    "typeString": "contract IMACOStrategyManagerV2"
                                                                }
                                                            },
                                                            "id": 425,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "lastCrossoverConfirmationTimestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2615,
                                                            "src": "1598:42:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 426,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1598:44:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1582:60:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 428,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1582:60:6"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 409,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 406,
                                            "src": "1484:1:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 410,
                                            "name": "_managerCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 391,
                                            "src": "1488:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1484:17:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 430,
                                    "initializationExpression": {
                                        "assignments": [
                                            406
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 406,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 430,
                                                "src": "1469:9:6",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 405,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1469:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 408,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 407,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1481:1:6",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1469:13:6"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 413,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1503:3:6",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 412,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 406,
                                                "src": "1503:1:6",
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
                                        "id": 414,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1503:3:6"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1464:189:6"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 431,
                                        "name": "timestamps",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 398,
                                        "src": "1670:10:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 389,
                                    "id": 432,
                                    "nodeType": "Return",
                                    "src": "1663:17:6"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 434,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchMACOV2CrossoverTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 384,
                                    "name": "_managers",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 434,
                                    "src": "1105:43:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_calldata_ptr",
                                        "typeString": "contract IMACOStrategyManagerV2[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 382,
                                            "name": "IMACOStrategyManagerV2",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 2616,
                                            "src": "1105:22:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IMACOStrategyManagerV2_$2616",
                                                "typeString": "contract IMACOStrategyManagerV2"
                                            }
                                        },
                                        "id": 383,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1105:24:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_contract$_IMACOStrategyManagerV2_$2616_$dyn_storage_ptr",
                                            "typeString": "contract IMACOStrategyManagerV2[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1095:59:6"
                        },
                        "returnParameters": {
                            "id": 389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 388,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 434,
                                    "src": "1202:16:6",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 386,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1202:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 387,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1202:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1201:18:6"
                        },
                        "scope": 488,
                        "src": "1052:635:6",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 486,
                            "nodeType": "Block",
                            "src": "1863:453:6",
                            "statements": [
                                {
                                    "assignments": [
                                        444
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 444,
                                            "name": "_managerCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 486,
                                            "src": "1929:21:6",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 443,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1929:7:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 447,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 445,
                                            "name": "_managers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 437,
                                            "src": "1953:9:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                                "typeString": "contract IAssetPairManager[] calldata"
                                            }
                                        },
                                        "id": 446,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1953:16:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1929:40:6"
                                },
                                {
                                    "assignments": [
                                        451
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 451,
                                            "name": "timestamps",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 486,
                                            "src": "2034:27:6",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 449,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2034:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 450,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2034:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 457,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 455,
                                                "name": "_managerCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 444,
                                                "src": "2078:13:6",
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
                                            "id": 454,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2064:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 452,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2068:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 453,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2068:9:6",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2064:28:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2034:58:6"
                                },
                                {
                                    "body": {
                                        "id": 482,
                                        "nodeType": "Block",
                                        "src": "2147:135:6",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    469
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 469,
                                                        "name": "manager",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 482,
                                                        "src": "2161:25:6",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                            "typeString": "contract IAssetPairManager"
                                                        },
                                                        "typeName": {
                                                            "contractScope": null,
                                                            "id": 468,
                                                            "name": "IAssetPairManager",
                                                            "nodeType": "UserDefinedTypeName",
                                                            "referencedDeclaration": 2597,
                                                            "src": "2161:17:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                                "typeString": "contract IAssetPairManager"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 473,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 470,
                                                        "name": "_managers",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 437,
                                                        "src": "2189:9:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                                            "typeString": "contract IAssetPairManager[] calldata"
                                                        }
                                                    },
                                                    "id": 472,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 471,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 459,
                                                        "src": "2199:1:6",
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
                                                    "src": "2189:12:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                        "typeString": "contract IAssetPairManager"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2161:40:6"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 480,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 474,
                                                            "name": "timestamps",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 451,
                                                            "src": "2216:10:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 476,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 475,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 459,
                                                            "src": "2227:1:6",
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
                                                        "src": "2216:13:6",
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
                                                                "id": 477,
                                                                "name": "manager",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 469,
                                                                "src": "2232:7:6",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                                    "typeString": "contract IAssetPairManager"
                                                                }
                                                            },
                                                            "id": 478,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "recentInitialProposeTimestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2596,
                                                            "src": "2232:37:6",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2232:39:6",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2216:55:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 481,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2216:55:6"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 462,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 459,
                                            "src": "2123:1:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 463,
                                            "name": "_managerCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 444,
                                            "src": "2127:13:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2123:17:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 483,
                                    "initializationExpression": {
                                        "assignments": [
                                            459
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 459,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 483,
                                                "src": "2108:9:6",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 458,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2108:7:6",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 461,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 460,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2120:1:6",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2108:13:6"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 466,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2142:3:6",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 465,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 459,
                                                "src": "2142:1:6",
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
                                        "id": 467,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2142:3:6"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2103:179:6"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 484,
                                        "name": "timestamps",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 451,
                                        "src": "2299:10:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 442,
                                    "id": 485,
                                    "nodeType": "Return",
                                    "src": "2292:17:6"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 487,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchAssetPairCrossoverTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 438,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 437,
                                    "name": "_managers",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 487,
                                    "src": "1749:38:6",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_calldata_ptr",
                                        "typeString": "contract IAssetPairManager[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "contractScope": null,
                                            "id": 435,
                                            "name": "IAssetPairManager",
                                            "nodeType": "UserDefinedTypeName",
                                            "referencedDeclaration": 2597,
                                            "src": "1749:17:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IAssetPairManager_$2597",
                                                "typeString": "contract IAssetPairManager"
                                            }
                                        },
                                        "id": 436,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1749:19:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_contract$_IAssetPairManager_$2597_$dyn_storage_ptr",
                                            "typeString": "contract IAssetPairManager[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1739:54:6"
                        },
                        "returnParameters": {
                            "id": 442,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 441,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 487,
                                    "src": "1841:16:6",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 439,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1841:7:6",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 440,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1841:9:6",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1840:18:6"
                        },
                        "scope": 488,
                        "src": "1693:623:6",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 489,
                "src": "1022:1301:6"
            }
        ],
        "src": "597:1727:6"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.682Z",
    "devdoc": {
        "author": "Set Protocol * Interfaces for fetching multiple managers state in a single read",
        "methods": {},
        "title": "ManagerViewer"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ManagerViewer.js.map