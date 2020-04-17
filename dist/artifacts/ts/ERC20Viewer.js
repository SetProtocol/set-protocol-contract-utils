"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Viewer = {
    "contractName": "ERC20Viewer",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddresses",
                    "type": "address[]"
                },
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "batchFetchBalancesOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddresses",
                    "type": "address[]"
                },
                {
                    "name": "_tokenOwners",
                    "type": "address[]"
                }
            ],
            "name": "batchFetchUsersBalances",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddresses",
                    "type": "address[]"
                }
            ],
            "name": "batchFetchSupplies",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddresses\",\"type\":\"address[]\"},{\"name\":\"_tokenOwners\",\"type\":\"address[]\"}],\"name\":\"batchFetchUsersBalances\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddresses\",\"type\":\"address[]\"}],\"name\":\"batchFetchSupplies\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddresses\",\"type\":\"address[]\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"batchFetchBalancesOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interfaces for fetching multiple ERC20 state in a single read\",\"methods\":{},\"title\":\"ERC20Viewer\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ERC20Viewer.sol\":\"ERC20Viewer\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ERC20Viewer.sol\":{\"keccak256\":\"0xa65ac93c8a0687c0b3c6e6c48eef946710172f572f84d92386ad1e20508d47a0\",\"urls\":[\"bzzr://ab523b77035b10dba3099591ddc79b52e996828cf8192a5c0dff0e745b166072\"]},\"set-protocol-contracts/contracts/lib/IERC20.sol\":{\"keccak256\":\"0xe4f71b1797f6421de91c6ce3b55199c5845693a58eddfd417a60b81d0198a9dd\",\"urls\":[\"bzzr://a6a4cebcffaff1db8ef9b78ea58d2d7391cc2b1ed533a1e1309286989f6d4ea0\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5061058b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100445760e060020a60003504633c4ed6fd8114610049578063ea03ff691461015b578063f49a8970146101cb575b600080fd5b61010b6004803603604081101561005f57600080fd5b81019060208101813564010000000081111561007a57600080fd5b82018360208201111561008c57600080fd5b803590602001918460208302840111640100000000831117156100ae57600080fd5b9193909290916020810190356401000000008111156100cc57600080fd5b8201836020820111156100de57600080fd5b8035906020019184602083028401116401000000008311171561010057600080fd5b509092509050610244565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014757818101518382015260200161012f565b505050509050019250505060405180910390f35b61010b6004803603602081101561017157600080fd5b81019060208101813564010000000081111561018c57600080fd5b82018360208201111561019e57600080fd5b803590602001918460208302840111640100000000831117156101c057600080fd5b509092509050610369565b61010b600480360360408110156101e157600080fd5b8101906020810181356401000000008111156101fc57600080fd5b82018360208201111561020e57600080fd5b8035906020019184602083028401116401000000008311171561023057600080fd5b919350915035600160a060020a0316610456565b60408051848152602080860282010190915260609084908290828015610274578160200160208202803883390190505b50905060005b8281101561035e5787878281811061028e57fe5b90506020020135600160a060020a0316600160a060020a03166370a082318787848181106102b857fe5b90506020020135600160a060020a03166040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a0316815260200191505060206040518083038186803b15801561031157600080fd5b505afa158015610325573d6000803e3d6000fd5b505050506040513d602081101561033b57600080fd5b5051825183908390811061034b57fe5b602090810291909101015260010161027a565b509695505050505050565b60408051828152602080840282010190915260609082908290828015610399578160200160208202803883390190505b50905060005b8281101561044d578585828181106103b357fe5b90506020020135600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561040057600080fd5b505af1158015610414573d6000803e3d6000fd5b505050506040513d602081101561042a57600080fd5b5051825183908390811061043a57fe5b602090810291909101015260010161039f565b50949350505050565b60408051838152602080850282010190915260609083908290828015610486578160200160208202803883390190505b50905060005b82811015610555578686828181106104a057fe5b90506020020135600160a060020a0316600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a0316815260200191505060206040518083038186803b15801561050857600080fd5b505afa15801561051c573d6000803e3d6000fd5b505050506040513d602081101561053257600080fd5b5051825183908390811061054257fe5b602090810291909101015260010161048c565b509594505050505056fea165627a7a72305820c093016d856c6a155383714a4ba5a6cb3c59460afeefab1b9375c49a55ef03100029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100445760e060020a60003504633c4ed6fd8114610049578063ea03ff691461015b578063f49a8970146101cb575b600080fd5b61010b6004803603604081101561005f57600080fd5b81019060208101813564010000000081111561007a57600080fd5b82018360208201111561008c57600080fd5b803590602001918460208302840111640100000000831117156100ae57600080fd5b9193909290916020810190356401000000008111156100cc57600080fd5b8201836020820111156100de57600080fd5b8035906020019184602083028401116401000000008311171561010057600080fd5b509092509050610244565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014757818101518382015260200161012f565b505050509050019250505060405180910390f35b61010b6004803603602081101561017157600080fd5b81019060208101813564010000000081111561018c57600080fd5b82018360208201111561019e57600080fd5b803590602001918460208302840111640100000000831117156101c057600080fd5b509092509050610369565b61010b600480360360408110156101e157600080fd5b8101906020810181356401000000008111156101fc57600080fd5b82018360208201111561020e57600080fd5b8035906020019184602083028401116401000000008311171561023057600080fd5b919350915035600160a060020a0316610456565b60408051848152602080860282010190915260609084908290828015610274578160200160208202803883390190505b50905060005b8281101561035e5787878281811061028e57fe5b90506020020135600160a060020a0316600160a060020a03166370a082318787848181106102b857fe5b90506020020135600160a060020a03166040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a0316815260200191505060206040518083038186803b15801561031157600080fd5b505afa158015610325573d6000803e3d6000fd5b505050506040513d602081101561033b57600080fd5b5051825183908390811061034b57fe5b602090810291909101015260010161027a565b509695505050505050565b60408051828152602080840282010190915260609082908290828015610399578160200160208202803883390190505b50905060005b8281101561044d578585828181106103b357fe5b90506020020135600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561040057600080fd5b505af1158015610414573d6000803e3d6000fd5b505050506040513d602081101561042a57600080fd5b5051825183908390811061043a57fe5b602090810291909101015260010161039f565b50949350505050565b60408051838152602080850282010190915260609083908290828015610486578160200160208202803883390190505b50905060005b82811015610555578686828181106104a057fe5b90506020020135600160a060020a0316600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a0316815260200191505060206040518083038186803b15801561050857600080fd5b505afa15801561051c573d6000803e3d6000fd5b505050506040513d602081101561053257600080fd5b5051825183908390811061054257fe5b602090810291909101015260010161048c565b509594505050505056fea165627a7a72305820c093016d856c6a155383714a4ba5a6cb3c59460afeefab1b9375c49a55ef03100029",
    "sourceMap": "820:3035:5:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;820:3035:5;;;;;;;",
    "deployedSourceMap": "820:3035:5:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;820:3035:5;;;;;;-1:-1:-1;;;820:3035:5;;;;;;;;;;;;;;;;;;;;;;2253:698;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2253:698:5;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;2253:698:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2253:698:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;2253:698:5;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;2253:698:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2253:698:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;2253:698:5;;-1:-1:-1;2253:698:5;-1:-1:-1;2253:698:5;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2253:698:5;;;;;;;;;;;;;;;;;3229:624;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3229:624:5;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;3229:624:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;3229:624:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;3229:624:5;;-1:-1:-1;3229:624:5;-1:-1:-1;3229:624:5;:::i;1216:669::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1216:669:5;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;1216:669:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1216:669:5;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1216:669:5;;-1:-1:-1;1216:669:5;-1:-1:-1;1216:669:5;-1:-1:-1;;;;;1216:669:5;;:::i;2253:698::-;2643:30;;;;;;;;;;;;;;;;2411:16;;2528:15;;2411:16;;2528:15;2643:30;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;2643:30:5;-1:-1:-1;2615:58:5;-1:-1:-1;2786:9:5;2781:138;2805:15;2801:1;:19;2781:138;;;2862:15;;2878:1;2862:18;;;;;;;;;;;;;-1:-1:-1;;;;;2862:18:5;-1:-1:-1;;;;;2855:36:5;;2892:12;;2905:1;2892:15;;;;;;;;;;;;;-1:-1:-1;;;;;2892:15:5;2855:53;;;;;-1:-1:-1;;;2855:53:5;;;;;;;-1:-1:-1;;;;;2855:53:5;-1:-1:-1;;;;;2855:53:5;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2855:53:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2855:53:5;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2855:53:5;2841:11;;:8;;2850:1;;2841:11;;;;;;;;;;;;;;;:67;2822:3;;2781:138;;;-1:-1:-1;2936:8:5;2253:698;-1:-1:-1;;;;;;2253:698:5:o;3229:624::-;3573:30;;;;;;;;;;;;;;;;3341:16;;3458:15;;3341:16;;3458:15;3573:30;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;3573:30:5;-1:-1:-1;3545:58:5;-1:-1:-1;3701:9:5;3696:125;3720:15;3716:1;:19;3696:125;;;3777:15;;3793:1;3777:18;;;;;;;;;;;;;-1:-1:-1;;;;;3777:18:5;-1:-1:-1;;;;;3770:38:5;;:40;;;;;-1:-1:-1;;;3770:40:5;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3770:40:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3770:40:5;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3770:40:5;3756:11;;:8;;3765:1;;3756:11;;;;;;;;;;;;;;;:54;3737:3;;3696:125;;;-1:-1:-1;3838:8:5;3229:624;-1:-1:-1;;;;3229:624:5:o;1216:669::-;1586:30;;;;;;;;;;;;;;;;1354:16;;1471:15;;1354:16;;1471:15;1586:30;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;1586:30:5;-1:-1:-1;1558:58:5;-1:-1:-1;1729:9:5;1724:129;1748:15;1744:1;:19;1724:129;;;1805:15;;1821:1;1805:18;;;;;;;;;;;;;-1:-1:-1;;;;;1805:18:5;-1:-1:-1;;;;;1798:36:5;;1835:6;1798:44;;;;;-1:-1:-1;;;1798:44:5;;;;;;;-1:-1:-1;;;;;1798:44:5;-1:-1:-1;;;;;1798:44:5;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1798:44:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1798:44:5;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1798:44:5;1784:11;;:8;;1793:1;;1784:11;;;;;;;;;;;;;;;:58;1765:3;;1724:129;;;-1:-1:-1;1870:8:5;1216:669;-1:-1:-1;;;;;1216:669:5:o",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\nimport { IERC20 } from \"set-protocol-contracts/contracts/lib/IERC20.sol\";\n\n\n/**\n * @title ERC20Viewer\n * @author Set Protocol\n *\n * Interfaces for fetching multiple ERC20 state in a single read\n */\ncontract ERC20Viewer {\n\n    /*\n     * Fetches multiple balances for passed in array of ERC20 contract addresses for an owner\n     *\n     * @param  _tokenAddresses    Addresses of ERC20 contracts to check balance for\n     * @param  _owner             Address to check balance of _tokenAddresses for\n     * @return  uint256[]         Array of balances for each ERC20 contract passed in\n     */\n    function batchFetchBalancesOf(\n        address[] calldata _tokenAddresses,\n        address _owner\n    )\n        external\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch balances for\n        uint256 _addressesCount = _tokenAddresses.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory balances = new uint256[](_addressesCount);\n\n        // Cycle through contract addresses array and fetching the balance of each for the owner\n        for (uint256 i = 0; i < _addressesCount; i++) {\n            balances[i] = IERC20(_tokenAddresses[i]).balanceOf(_owner);\n        }\n\n        return balances;\n    }\n\n    /*\n     * Fetches token balances for each tokenAddress, tokenOwner pair\n     *\n     * @param  _tokenAddresses    Addresses of ERC20 contracts to check balance for\n     * @param  _tokenOwners       Addresses of users sequential to tokenAddress to fetch balance for\n     * @return  uint256[]         Array of balances for each ERC20 contract passed in\n     */\n    function batchFetchUsersBalances(\n        address[] calldata _tokenAddresses,\n        address[] calldata _tokenOwners\n    )\n        external\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch balances for\n        uint256 _addressesCount = _tokenAddresses.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory balances = new uint256[](_addressesCount);\n\n        // Cycle through contract addresses array and fetching the balance of each for the owner\n        for (uint256 i = 0; i < _addressesCount; i++) {\n            balances[i] = IERC20(_tokenAddresses[i]).balanceOf(_tokenOwners[i]);\n        }\n\n        return balances;\n    }\n\n    /*\n     * Fetches multiple supplies for passed in array of ERC20 contract addresses\n     *\n     * @param  _tokenAddresses    Addresses of ERC20 contracts to check supply for\n     * @return  uint256[]         Array of supplies for each ERC20 contract passed in\n     */\n    function batchFetchSupplies(\n        address[] calldata _tokenAddresses\n    )\n        external\n        returns (uint256[] memory)\n    {\n        // Cache length of addresses to fetch supplies for\n        uint256 _addressesCount = _tokenAddresses.length;\n        \n        // Instantiate output array in memory\n        uint256[] memory supplies = new uint256[](_addressesCount);\n\n        // Cycle through contract addresses array and fetching the supply of each\n        for (uint256 i = 0; i < _addressesCount; i++) {\n            supplies[i] = IERC20(_tokenAddresses[i]).totalSupply();\n        }\n\n        return supplies;\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ERC20Viewer.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ERC20Viewer.sol",
        "exportedSymbols": {
            "ERC20Viewer": [
                374
            ]
        },
        "id": 375,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 209,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:5"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/lib/IERC20.sol",
                "file": "set-protocol-contracts/contracts/lib/IERC20.sol",
                "id": 211,
                "nodeType": "ImportDirective",
                "scope": 375,
                "sourceUnit": 2559,
                "src": "622:73:5",
                "symbolAliases": [
                    {
                        "foreign": 210,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ERC20Viewer\n@author Set Protocol\n * Interfaces for fetching multiple ERC20 state in a single read",
                "fullyImplemented": true,
                "id": 374,
                "linearizedBaseContracts": [
                    374
                ],
                "name": "ERC20Viewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 264,
                            "nodeType": "Block",
                            "src": "1376:509:5",
                            "statements": [
                                {
                                    "assignments": [
                                        223
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 223,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 264,
                                            "src": "1445:23:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 222,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1445:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 226,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 224,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 214,
                                            "src": "1471:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 225,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1471:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1445:48:5"
                                },
                                {
                                    "assignments": [
                                        230
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 230,
                                            "name": "balances",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 264,
                                            "src": "1558:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 228,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1558:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 229,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1558:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 236,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 234,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 223,
                                                "src": "1600:15:5",
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
                                            "id": 233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1586:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 231,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1590:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 232,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1590:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1586:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1558:58:5"
                                },
                                {
                                    "body": {
                                        "id": 260,
                                        "nodeType": "Block",
                                        "src": "1770:83:5",
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
                                                            "id": 247,
                                                            "name": "balances",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 230,
                                                            "src": "1784:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 249,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 248,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 238,
                                                            "src": "1793:1:5",
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
                                                        "src": "1784:11:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 256,
                                                                "name": "_owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 216,
                                                                "src": "1835:6:5",
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
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 251,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 214,
                                                                            "src": "1805:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 253,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 252,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 238,
                                                                            "src": "1821:1:5",
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
                                                                        "src": "1805:18:5",
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
                                                                    "id": 250,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "1798:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 254,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1798:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 255,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2518,
                                                            "src": "1798:36:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 257,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1798:44:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1784:58:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 259,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1784:58:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 243,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 241,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 238,
                                            "src": "1744:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 242,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 223,
                                            "src": "1748:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1744:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 261,
                                    "initializationExpression": {
                                        "assignments": [
                                            238
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 238,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 261,
                                                "src": "1729:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 237,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1729:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 240,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 239,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1741:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1729:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 245,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1765:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 244,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 238,
                                                "src": "1765:1:5",
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
                                        "id": 246,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1765:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1724:129:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 262,
                                        "name": "balances",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 230,
                                        "src": "1870:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 221,
                                    "id": 263,
                                    "nodeType": "Return",
                                    "src": "1863:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 265,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchBalancesOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 217,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 214,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1255:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 212,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1255:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 213,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1255:9:5",
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
                                    "id": 216,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1299:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 215,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1299:7:5",
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
                            "src": "1245:74:5"
                        },
                        "returnParameters": {
                            "id": 221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 220,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1354:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 218,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1354:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 219,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1354:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1353:18:5"
                        },
                        "scope": 374,
                        "src": "1216:669:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 321,
                            "nodeType": "Block",
                            "src": "2433:518:5",
                            "statements": [
                                {
                                    "assignments": [
                                        278
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 278,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 321,
                                            "src": "2502:23:5",
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
                                                "src": "2502:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 281,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 279,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 268,
                                            "src": "2528:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2528:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2502:48:5"
                                },
                                {
                                    "assignments": [
                                        285
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 285,
                                            "name": "balances",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 321,
                                            "src": "2615:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 283,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2615:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 284,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2615:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 291,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 289,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 278,
                                                "src": "2657:15:5",
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
                                            "id": 288,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2643:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 286,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2647:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 287,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2647:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 290,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2643:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2615:58:5"
                                },
                                {
                                    "body": {
                                        "id": 317,
                                        "nodeType": "Block",
                                        "src": "2827:92:5",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 315,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 302,
                                                            "name": "balances",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 285,
                                                            "src": "2841:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 304,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 303,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 293,
                                                            "src": "2850:1:5",
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
                                                        "src": "2841:11:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 311,
                                                                    "name": "_tokenOwners",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 271,
                                                                    "src": "2892:12:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                        "typeString": "address[] calldata"
                                                                    }
                                                                },
                                                                "id": 313,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 312,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 293,
                                                                    "src": "2905:1:5",
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
                                                                "src": "2892:15:5",
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
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 306,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 268,
                                                                            "src": "2862:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 308,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 307,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 293,
                                                                            "src": "2878:1:5",
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
                                                                        "src": "2862:18:5",
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
                                                                    "id": 305,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "2855:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 309,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2855:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 310,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2518,
                                                            "src": "2855:36:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 314,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2855:53:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2841:67:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 316,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2841:67:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 296,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 293,
                                            "src": "2801:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 297,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 278,
                                            "src": "2805:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2801:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 318,
                                    "initializationExpression": {
                                        "assignments": [
                                            293
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 293,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 318,
                                                "src": "2786:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 292,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2786:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 295,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 294,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2798:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2786:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 300,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2822:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 299,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 293,
                                                "src": "2822:1:5",
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
                                        "id": 301,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2822:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2781:138:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 319,
                                        "name": "balances",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 285,
                                        "src": "2936:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 276,
                                    "id": 320,
                                    "nodeType": "Return",
                                    "src": "2929:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 322,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchUsersBalances",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 272,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 268,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2295:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 266,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2295:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 267,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2295:9:5",
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
                                    "id": 271,
                                    "name": "_tokenOwners",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2339:31:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 269,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2339:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 270,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2339:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2285:91:5"
                        },
                        "returnParameters": {
                            "id": 276,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 275,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2411:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 273,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2411:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 274,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2411:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2410:18:5"
                        },
                        "scope": 374,
                        "src": "2253:698:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 372,
                            "nodeType": "Block",
                            "src": "3363:490:5",
                            "statements": [
                                {
                                    "assignments": [
                                        332
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 332,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 372,
                                            "src": "3432:23:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 331,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3432:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 335,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 333,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 325,
                                            "src": "3458:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 334,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3458:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3432:48:5"
                                },
                                {
                                    "assignments": [
                                        339
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 339,
                                            "name": "supplies",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 372,
                                            "src": "3545:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 337,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3545:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 338,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "3545:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 345,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 343,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 332,
                                                "src": "3587:15:5",
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
                                            "id": 342,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "3573:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 340,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3577:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 341,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "3577:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 344,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3573:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3545:58:5"
                                },
                                {
                                    "body": {
                                        "id": 368,
                                        "nodeType": "Block",
                                        "src": "3742:79:5",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 366,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 356,
                                                            "name": "supplies",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 339,
                                                            "src": "3756:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 358,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 357,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 347,
                                                            "src": "3765:1:5",
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
                                                        "src": "3756:11:5",
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
                                                                            "id": 360,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 325,
                                                                            "src": "3777:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 362,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 361,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 347,
                                                                            "src": "3793:1:5",
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
                                                                        "src": "3777:18:5",
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
                                                                    "id": 359,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "3770:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 363,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3770:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 364,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "totalSupply",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2557,
                                                            "src": "3770:38:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_uint256_$",
                                                                "typeString": "function () external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 365,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3770:40:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3756:54:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 367,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3756:54:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 352,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 350,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 347,
                                            "src": "3716:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 351,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 332,
                                            "src": "3720:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3716:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 369,
                                    "initializationExpression": {
                                        "assignments": [
                                            347
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 347,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 369,
                                                "src": "3701:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 346,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3701:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 349,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 348,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3713:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3701:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 354,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "3737:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 353,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 347,
                                                "src": "3737:1:5",
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
                                        "id": 355,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3737:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3696:125:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 370,
                                        "name": "supplies",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 339,
                                        "src": "3838:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 330,
                                    "id": 371,
                                    "nodeType": "Return",
                                    "src": "3831:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 373,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchSupplies",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 326,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 325,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 373,
                                    "src": "3266:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 323,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3266:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 324,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3266:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3256:50:5"
                        },
                        "returnParameters": {
                            "id": 330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 329,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 373,
                                    "src": "3341:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 327,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3341:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 328,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3341:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3340:18:5"
                        },
                        "scope": 374,
                        "src": "3229:624:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 375,
                "src": "820:3035:5"
            }
        ],
        "src": "597:3259:5"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/viewer/lib/ERC20Viewer.sol",
        "exportedSymbols": {
            "ERC20Viewer": [
                374
            ]
        },
        "id": 375,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 209,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:5"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/lib/IERC20.sol",
                "file": "set-protocol-contracts/contracts/lib/IERC20.sol",
                "id": 211,
                "nodeType": "ImportDirective",
                "scope": 375,
                "sourceUnit": 2559,
                "src": "622:73:5",
                "symbolAliases": [
                    {
                        "foreign": 210,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title ERC20Viewer\n@author Set Protocol\n * Interfaces for fetching multiple ERC20 state in a single read",
                "fullyImplemented": true,
                "id": 374,
                "linearizedBaseContracts": [
                    374
                ],
                "name": "ERC20Viewer",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 264,
                            "nodeType": "Block",
                            "src": "1376:509:5",
                            "statements": [
                                {
                                    "assignments": [
                                        223
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 223,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 264,
                                            "src": "1445:23:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 222,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1445:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 226,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 224,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 214,
                                            "src": "1471:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 225,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1471:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1445:48:5"
                                },
                                {
                                    "assignments": [
                                        230
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 230,
                                            "name": "balances",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 264,
                                            "src": "1558:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 228,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1558:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 229,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1558:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 236,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 234,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 223,
                                                "src": "1600:15:5",
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
                                            "id": 233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "1586:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 231,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1590:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 232,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "1590:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1586:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1558:58:5"
                                },
                                {
                                    "body": {
                                        "id": 260,
                                        "nodeType": "Block",
                                        "src": "1770:83:5",
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
                                                            "id": 247,
                                                            "name": "balances",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 230,
                                                            "src": "1784:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 249,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 248,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 238,
                                                            "src": "1793:1:5",
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
                                                        "src": "1784:11:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 256,
                                                                "name": "_owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 216,
                                                                "src": "1835:6:5",
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
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 251,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 214,
                                                                            "src": "1805:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 253,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 252,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 238,
                                                                            "src": "1821:1:5",
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
                                                                        "src": "1805:18:5",
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
                                                                    "id": 250,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "1798:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 254,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1798:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 255,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2518,
                                                            "src": "1798:36:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 257,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1798:44:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1784:58:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 259,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1784:58:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 243,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 241,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 238,
                                            "src": "1744:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 242,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 223,
                                            "src": "1748:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1744:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 261,
                                    "initializationExpression": {
                                        "assignments": [
                                            238
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 238,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 261,
                                                "src": "1729:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 237,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1729:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 240,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 239,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1741:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1729:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 245,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1765:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 244,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 238,
                                                "src": "1765:1:5",
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
                                        "id": 246,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1765:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1724:129:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 262,
                                        "name": "balances",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 230,
                                        "src": "1870:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 221,
                                    "id": 263,
                                    "nodeType": "Return",
                                    "src": "1863:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 265,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchBalancesOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 217,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 214,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1255:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 212,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1255:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 213,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1255:9:5",
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
                                    "id": 216,
                                    "name": "_owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1299:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 215,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1299:7:5",
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
                            "src": "1245:74:5"
                        },
                        "returnParameters": {
                            "id": 221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 220,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 265,
                                    "src": "1354:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 218,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1354:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 219,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1354:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1353:18:5"
                        },
                        "scope": 374,
                        "src": "1216:669:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 321,
                            "nodeType": "Block",
                            "src": "2433:518:5",
                            "statements": [
                                {
                                    "assignments": [
                                        278
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 278,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 321,
                                            "src": "2502:23:5",
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
                                                "src": "2502:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 281,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 279,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 268,
                                            "src": "2528:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "2528:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2502:48:5"
                                },
                                {
                                    "assignments": [
                                        285
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 285,
                                            "name": "balances",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 321,
                                            "src": "2615:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 283,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2615:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 284,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2615:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 291,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 289,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 278,
                                                "src": "2657:15:5",
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
                                            "id": 288,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2643:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 286,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2647:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 287,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "2647:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 290,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2643:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2615:58:5"
                                },
                                {
                                    "body": {
                                        "id": 317,
                                        "nodeType": "Block",
                                        "src": "2827:92:5",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 315,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 302,
                                                            "name": "balances",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 285,
                                                            "src": "2841:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 304,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 303,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 293,
                                                            "src": "2850:1:5",
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
                                                        "src": "2841:11:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 311,
                                                                    "name": "_tokenOwners",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 271,
                                                                    "src": "2892:12:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                        "typeString": "address[] calldata"
                                                                    }
                                                                },
                                                                "id": 313,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 312,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 293,
                                                                    "src": "2905:1:5",
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
                                                                "src": "2892:15:5",
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
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "baseExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 306,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 268,
                                                                            "src": "2862:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 308,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 307,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 293,
                                                                            "src": "2878:1:5",
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
                                                                        "src": "2862:18:5",
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
                                                                    "id": 305,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "2855:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 309,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2855:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 310,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2518,
                                                            "src": "2855:36:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 314,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2855:53:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2841:67:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 316,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2841:67:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 296,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 293,
                                            "src": "2801:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 297,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 278,
                                            "src": "2805:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2801:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 318,
                                    "initializationExpression": {
                                        "assignments": [
                                            293
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 293,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 318,
                                                "src": "2786:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 292,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2786:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 295,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 294,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2798:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2786:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 300,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2822:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 299,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 293,
                                                "src": "2822:1:5",
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
                                        "id": 301,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2822:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2781:138:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 319,
                                        "name": "balances",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 285,
                                        "src": "2936:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 276,
                                    "id": 320,
                                    "nodeType": "Return",
                                    "src": "2929:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 322,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchUsersBalances",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 272,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 268,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2295:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 266,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2295:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 267,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2295:9:5",
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
                                    "id": 271,
                                    "name": "_tokenOwners",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2339:31:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 269,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2339:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 270,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2339:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2285:91:5"
                        },
                        "returnParameters": {
                            "id": 276,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 275,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 322,
                                    "src": "2411:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 273,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2411:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 274,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2411:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2410:18:5"
                        },
                        "scope": 374,
                        "src": "2253:698:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 372,
                            "nodeType": "Block",
                            "src": "3363:490:5",
                            "statements": [
                                {
                                    "assignments": [
                                        332
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 332,
                                            "name": "_addressesCount",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 372,
                                            "src": "3432:23:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 331,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3432:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 335,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 333,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 325,
                                            "src": "3458:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 334,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "3458:22:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3432:48:5"
                                },
                                {
                                    "assignments": [
                                        339
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 339,
                                            "name": "supplies",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 372,
                                            "src": "3545:25:5",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 337,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3545:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 338,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "3545:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 345,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 343,
                                                "name": "_addressesCount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 332,
                                                "src": "3587:15:5",
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
                                            "id": 342,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "3573:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (uint256[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 340,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3577:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 341,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "3577:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                    "typeString": "uint256[]"
                                                }
                                            }
                                        },
                                        "id": 344,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3573:30:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3545:58:5"
                                },
                                {
                                    "body": {
                                        "id": 368,
                                        "nodeType": "Block",
                                        "src": "3742:79:5",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 366,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 356,
                                                            "name": "supplies",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 339,
                                                            "src": "3756:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 358,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 357,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 347,
                                                            "src": "3765:1:5",
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
                                                        "src": "3756:11:5",
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
                                                                            "id": 360,
                                                                            "name": "_tokenAddresses",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 325,
                                                                            "src": "3777:15:5",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                                "typeString": "address[] calldata"
                                                                            }
                                                                        },
                                                                        "id": 362,
                                                                        "indexExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 361,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 347,
                                                                            "src": "3793:1:5",
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
                                                                        "src": "3777:18:5",
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
                                                                    "id": 359,
                                                                    "name": "IERC20",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2558,
                                                                    "src": "3770:6:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$2558_$",
                                                                        "typeString": "type(contract IERC20)"
                                                                    }
                                                                },
                                                                "id": 363,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3770:26:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$2558",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 364,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "totalSupply",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 2557,
                                                            "src": "3770:38:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_uint256_$",
                                                                "typeString": "function () external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 365,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3770:40:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3756:54:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 367,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3756:54:5"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 352,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 350,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 347,
                                            "src": "3716:1:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 351,
                                            "name": "_addressesCount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 332,
                                            "src": "3720:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3716:19:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 369,
                                    "initializationExpression": {
                                        "assignments": [
                                            347
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 347,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 369,
                                                "src": "3701:9:5",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 346,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3701:7:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 349,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 348,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3713:1:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3701:13:5"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 354,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "3737:3:5",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 353,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 347,
                                                "src": "3737:1:5",
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
                                        "id": 355,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3737:3:5"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3696:125:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 370,
                                        "name": "supplies",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 339,
                                        "src": "3838:8:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 330,
                                    "id": 371,
                                    "nodeType": "Return",
                                    "src": "3831:15:5"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 373,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "batchFetchSupplies",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 326,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 325,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 373,
                                    "src": "3266:34:5",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 323,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3266:7:5",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 324,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3266:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3256:50:5"
                        },
                        "returnParameters": {
                            "id": 330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 329,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 373,
                                    "src": "3341:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 327,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3341:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 328,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3341:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3340:18:5"
                        },
                        "scope": 374,
                        "src": "3229:624:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 375,
                "src": "820:3035:5"
            }
        ],
        "src": "597:3259:5"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.680Z",
    "devdoc": {
        "author": "Set Protocol * Interfaces for fetching multiple ERC20 state in a single read",
        "methods": {},
        "title": "ERC20Viewer"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=ERC20Viewer.js.map