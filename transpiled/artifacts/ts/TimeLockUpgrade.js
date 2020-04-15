"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLockUpgrade = {
    "contractName": "TimeLockUpgrade",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "timeLockedUpgrades",
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
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "timeLockPeriod",
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
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_upgradeHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "UpgradeRegistered",
            "type": "event"
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
            "constant": false,
            "inputs": [
                {
                    "name": "_timeLockPeriod",
                    "type": "uint256"
                }
            ],
            "name": "setTimeLockPeriod",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * The TimeLockUpgrade contract contains a modifier for handling minimum time period updates\",\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"TimeLockUpgrade\"},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":\"TimeLockUpgrade\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610370806100576000396000f3fe608060405234801561001057600080fd5b506004361061009a576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100785780638da5cb5b146100e05780638f32d59b146101045780639303b16f14610120578063f2fde38b1461013d5761009a565b80631766486d1461009f578063715018a6146100ce57806378446bc1146100d8575b600080fd5b6100bc600480360360208110156100b557600080fd5b5035610163565b60408051918252519081900360200190f35b6100d6610175565b005b6100bc6101dd565b6100e86101e3565b60408051600160a060020a039092168252519081900360200190f35b61010c6101f2565b604080519115158252519081900360200190f35b6100d66004803603602081101561013657600080fd5b5035610203565b6100d66004803603602081101561015357600080fd5b5035600160a060020a0316610273565b60026020526000908152604090205481565b61017d6101f2565b61018657600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61020b6101f2565b61021457600080fd5b600154811161026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061030c6039913960400191505060405180910390fd5b600155565b61027b6101f2565b61028457600080fd5b61028d81610290565b50565b600160a060020a0381166102a357600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a72305820a272d3028d6496c513986287e9b818d6835691b010872c857a1f0cdab46a2ae50029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061009a576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100785780638da5cb5b146100e05780638f32d59b146101045780639303b16f14610120578063f2fde38b1461013d5761009a565b80631766486d1461009f578063715018a6146100ce57806378446bc1146100d8575b600080fd5b6100bc600480360360208110156100b557600080fd5b5035610163565b60408051918252519081900360200190f35b6100d6610175565b005b6100bc6101dd565b6100e86101e3565b60408051600160a060020a039092168252519081900360200190f35b61010c6101f2565b604080519115158252519081900360200190f35b6100d66004803603602081101561013657600080fd5b5035610203565b6100d66004803603602081101561015357600080fd5b5035600160a060020a0316610273565b60026020526000908152604090205481565b61017d6101f2565b61018657600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61020b6101f2565b61021457600080fd5b600154811161026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061030c6039913960400191505060405180910390fd5b600155565b61027b6101f2565b61028457600080fd5b61028d81610290565b50565b600160a060020a0381166102a357600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a72305820a272d3028d6496c513986287e9b818d6835691b010872c857a1f0cdab46a2ae50029",
    "sourceMap": "936:2439:11:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;936:2439:11;;;;;;",
    "deployedSourceMap": "936:2439:11:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;936:2439:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1206:53:11;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1110:29:11;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;2977:396:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2977:396:11;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;1982:183::-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { Ownable } from \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * @title TimeLockUpgrade\n * @author Set Protocol\n *\n * The TimeLockUpgrade contract contains a modifier for handling minimum time period updates\n */\ncontract TimeLockUpgrade is\n    Ownable\n{\n    using SafeMath for uint256;\n\n    /* ============ State Variables ============ */\n\n    // Timelock Upgrade Period in seconds\n    uint256 public timeLockPeriod;\n\n    // Mapping of upgradable units and initialized timelock\n    mapping(bytes32 => uint256) public timeLockedUpgrades;\n\n    /* ============ Events ============ */\n\n    event UpgradeRegistered(\n        bytes32 _upgradeHash,\n        uint256 _timestamp\n    );\n\n    /* ============ Modifiers ============ */\n\n    modifier timeLockUpgrade() {\n        // If the time lock period is 0, then allow non-timebound upgrades.\n        // This is useful for initialization of the protocol and for testing.\n        if (timeLockPeriod == 0) {\n            _;\n\n            return;\n        }\n\n        // The upgrade hash is defined by the hash of the transaction call data,\n        // which uniquely identifies the function as well as the passed in arguments.\n        bytes32 upgradeHash = keccak256(\n            abi.encodePacked(\n                msg.data\n            )\n        );\n\n        uint256 registrationTime = timeLockedUpgrades[upgradeHash];\n\n        // If the upgrade hasn't been registered, register with the current time.\n        if (registrationTime == 0) {\n            timeLockedUpgrades[upgradeHash] = block.timestamp;\n\n            emit UpgradeRegistered(\n                upgradeHash,\n                block.timestamp\n            );\n\n            return;\n        }\n\n        require(\n            block.timestamp >= registrationTime.add(timeLockPeriod),\n            \"TimeLockUpgrade: Time lock period must have elapsed.\"\n        );\n\n        // Reset the timestamp to 0\n        timeLockedUpgrades[upgradeHash] = 0;\n\n        // Run the rest of the upgrades\n        _;\n    }\n\n    /* ============ Function ============ */\n\n    /**\n     * Change timeLockPeriod period. Generally called after initially settings have been set up.\n     *\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution\n     */\n    function setTimeLockPeriod(\n        uint256 _timeLockPeriod\n    )\n        external\n        onlyOwner\n    {\n        // Only allow setting of the timeLockPeriod if the period is greater than the existing\n        require(\n            _timeLockPeriod > timeLockPeriod,\n            \"TimeLockUpgrade: New period must be greater than existing\"\n        );\n\n        timeLockPeriod = _timeLockPeriod;\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "exportedSymbols": {
            "TimeLockUpgrade": [
                2278
            ]
        },
        "id": 2279,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2174,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:11"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 2176,
                "nodeType": "ImportDirective",
                "scope": 2279,
                "sourceUnit": 3199,
                "src": "621:80:11",
                "symbolAliases": [
                    {
                        "foreign": 2175,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2178,
                "nodeType": "ImportDirective",
                "scope": 2279,
                "sourceUnit": 3090,
                "src": "702:77:11",
                "symbolAliases": [
                    {
                        "foreign": 2177,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 2179,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "968:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 2180,
                        "nodeType": "InheritanceSpecifier",
                        "src": "968:7:11"
                    }
                ],
                "contractDependencies": [
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title TimeLockUpgrade\n@author Set Protocol\n * The TimeLockUpgrade contract contains a modifier for handling minimum time period updates",
                "fullyImplemented": true,
                "id": 2278,
                "linearizedBaseContracts": [
                    2278,
                    3198
                ],
                "name": "TimeLockUpgrade",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2183,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2181,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "988:8:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "982:27:11",
                        "typeName": {
                            "id": 2182,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1001:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 2185,
                        "name": "timeLockPeriod",
                        "nodeType": "VariableDeclaration",
                        "scope": 2278,
                        "src": "1110:29:11",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2184,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1110:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2189,
                        "name": "timeLockedUpgrades",
                        "nodeType": "VariableDeclaration",
                        "scope": 2278,
                        "src": "1206:53:11",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                            "typeString": "mapping(bytes32 => uint256)"
                        },
                        "typeName": {
                            "id": 2188,
                            "keyType": {
                                "id": 2186,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1214:7:11",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1206:27:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                            },
                            "valueType": {
                                "id": 2187,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1225:7:11",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 2195,
                        "name": "UpgradeRegistered",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2194,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2191,
                                    "indexed": false,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2195,
                                    "src": "1343:20:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2190,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1343:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2193,
                                    "indexed": false,
                                    "name": "_timestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2195,
                                    "src": "1373:18:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2192,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1373:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1333:64:11"
                        },
                        "src": "1310:88:11"
                    },
                    {
                        "body": {
                            "id": 2257,
                            "nodeType": "Block",
                            "src": "1478:1226:11",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2199,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2197,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "1646:14:11",
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
                                            "id": 2198,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1664:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1646:19:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 2203,
                                    "nodeType": "IfStatement",
                                    "src": "1642:72:11",
                                    "trueBody": {
                                        "id": 2202,
                                        "nodeType": "Block",
                                        "src": "1667:47:11",
                                        "statements": [
                                            {
                                                "id": 2200,
                                                "nodeType": "PlaceholderStatement",
                                                "src": "1681:1:11"
                                            },
                                            {
                                                "expression": null,
                                                "functionReturnParameters": null,
                                                "id": 2201,
                                                "nodeType": "Return",
                                                "src": "1697:7:11"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        2205
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2205,
                                            "name": "upgradeHash",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2257,
                                            "src": "1891:19:11",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 2204,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1891:7:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2213,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2209,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3213,
                                                            "src": "1970:3:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2210,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "data",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1970:8:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                                            "typeString": "bytes calldata"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                                            "typeString": "bytes calldata"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 2207,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3200,
                                                        "src": "1936:3:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2208,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1936:16:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1936:56:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 2206,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3207,
                                            "src": "1913:9:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 2212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1913:89:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1891:111:11"
                                },
                                {
                                    "assignments": [
                                        2215
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2215,
                                            "name": "registrationTime",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2257,
                                            "src": "2013:24:11",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2214,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2013:7:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2219,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 2216,
                                            "name": "timeLockedUpgrades",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2189,
                                            "src": "2040:18:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                "typeString": "mapping(bytes32 => uint256)"
                                            }
                                        },
                                        "id": 2218,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 2217,
                                            "name": "upgradeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2205,
                                            "src": "2059:11:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2040:31:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2013:58:11"
                                },
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2220,
                                            "name": "registrationTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2215,
                                            "src": "2168:16:11",
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
                                            "id": 2221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2188:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2168:21:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 2238,
                                    "nodeType": "IfStatement",
                                    "src": "2164:235:11",
                                    "trueBody": {
                                        "id": 2237,
                                        "nodeType": "Block",
                                        "src": "2191:208:11",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2228,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2223,
                                                            "name": "timeLockedUpgrades",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2189,
                                                            "src": "2205:18:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                                "typeString": "mapping(bytes32 => uint256)"
                                                            }
                                                        },
                                                        "id": 2225,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2224,
                                                            "name": "upgradeHash",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2205,
                                                            "src": "2224:11:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2205:31:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2226,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3203,
                                                            "src": "2239:5:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 2227,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "timestamp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2239:15:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2205:49:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2229,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2205:49:11"
                                            },
                                            {
                                                "eventCall": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2231,
                                                            "name": "upgradeHash",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2205,
                                                            "src": "2309:11:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 2232,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3203,
                                                                "src": "2338:5:11",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 2233,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "2338:15:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 2230,
                                                        "name": "UpgradeRegistered",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2195,
                                                        "src": "2274:17:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                                                            "typeString": "function (bytes32,uint256)"
                                                        }
                                                    },
                                                    "id": 2234,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2274:93:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 2235,
                                                "nodeType": "EmitStatement",
                                                "src": "2269:98:11"
                                            },
                                            {
                                                "expression": null,
                                                "functionReturnParameters": null,
                                                "id": 2236,
                                                "nodeType": "Return",
                                                "src": "2382:7:11"
                                            }
                                        ]
                                    }
                                },
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
                                                "id": 2246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 2240,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3203,
                                                        "src": "2430:5:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 2241,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2430:15:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2244,
                                                            "name": "timeLockPeriod",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2185,
                                                            "src": "2470:14:11",
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
                                                            "id": 2242,
                                                            "name": "registrationTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2215,
                                                            "src": "2449:16:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 2243,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "add",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3068,
                                                        "src": "2449:20:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2245,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2449:36:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2430:55:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e",
                                                "id": 2247,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2499:54:11",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_dc641ea8e6496572b0b17b0af5d7346f816f41dcf17abffff9e2d4d889f64e92",
                                                    "typeString": "literal_string \"TimeLockUpgrade: Time lock period must have elapsed.\""
                                                },
                                                "value": "TimeLockUpgrade: Time lock period must have elapsed."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_dc641ea8e6496572b0b17b0af5d7346f816f41dcf17abffff9e2d4d889f64e92",
                                                    "typeString": "literal_string \"TimeLockUpgrade: Time lock period must have elapsed.\""
                                                }
                                            ],
                                            "id": 2239,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2409:7:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2409:154:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2249,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2409:154:11"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2254,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2250,
                                                "name": "timeLockedUpgrades",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2189,
                                                "src": "2610:18:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                    "typeString": "mapping(bytes32 => uint256)"
                                                }
                                            },
                                            "id": 2252,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2251,
                                                "name": "upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2205,
                                                "src": "2629:11:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2610:31:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2253,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2644:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2610:35:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2255,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2610:35:11"
                                },
                                {
                                    "id": 2256,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2696:1:11"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2258,
                        "name": "timeLockUpgrade",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2196,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1475:2:11"
                        },
                        "src": "1451:1253:11",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2276,
                            "nodeType": "Block",
                            "src": "3082:291:11",
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
                                                "id": 2268,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2266,
                                                    "name": "_timeLockPeriod",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2260,
                                                    "src": "3208:15:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2267,
                                                    "name": "timeLockPeriod",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2185,
                                                    "src": "3226:14:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3208:32:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67",
                                                "id": 2269,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3254:59:11",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e0fdc3906422c076986eef38c836dfb5044fad58473fa15af7e336603310b3f3",
                                                    "typeString": "literal_string \"TimeLockUpgrade: New period must be greater than existing\""
                                                },
                                                "value": "TimeLockUpgrade: New period must be greater than existing"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_e0fdc3906422c076986eef38c836dfb5044fad58473fa15af7e336603310b3f3",
                                                    "typeString": "literal_string \"TimeLockUpgrade: New period must be greater than existing\""
                                                }
                                            ],
                                            "id": 2265,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3187:7:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2270,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3187:136:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2271,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3187:136:11"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2274,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2272,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "3334:14:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2273,
                                            "name": "_timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2260,
                                            "src": "3351:15:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3334:32:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2275,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3334:32:11"
                                }
                            ]
                        },
                        "documentation": "Change timeLockPeriod period. Generally called after initially settings have been set up.\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution",
                        "id": 2277,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2263,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2262,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3068:9:11",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3068:9:11"
                            }
                        ],
                        "name": "setTimeLockPeriod",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2261,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2260,
                                    "name": "_timeLockPeriod",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2277,
                                    "src": "3013:23:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2259,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3013:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3003:39:11"
                        },
                        "returnParameters": {
                            "id": 2264,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3082:0:11"
                        },
                        "scope": 2278,
                        "src": "2977:396:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2279,
                "src": "936:2439:11"
            }
        ],
        "src": "597:2779:11"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "exportedSymbols": {
            "TimeLockUpgrade": [
                2278
            ]
        },
        "id": 2279,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2174,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:11"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 2176,
                "nodeType": "ImportDirective",
                "scope": 2279,
                "sourceUnit": 3199,
                "src": "621:80:11",
                "symbolAliases": [
                    {
                        "foreign": 2175,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2178,
                "nodeType": "ImportDirective",
                "scope": 2279,
                "sourceUnit": 3090,
                "src": "702:77:11",
                "symbolAliases": [
                    {
                        "foreign": 2177,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 2179,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "968:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 2180,
                        "nodeType": "InheritanceSpecifier",
                        "src": "968:7:11"
                    }
                ],
                "contractDependencies": [
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title TimeLockUpgrade\n@author Set Protocol\n * The TimeLockUpgrade contract contains a modifier for handling minimum time period updates",
                "fullyImplemented": true,
                "id": 2278,
                "linearizedBaseContracts": [
                    2278,
                    3198
                ],
                "name": "TimeLockUpgrade",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2183,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2181,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "988:8:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "982:27:11",
                        "typeName": {
                            "id": 2182,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1001:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 2185,
                        "name": "timeLockPeriod",
                        "nodeType": "VariableDeclaration",
                        "scope": 2278,
                        "src": "1110:29:11",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2184,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1110:7:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2189,
                        "name": "timeLockedUpgrades",
                        "nodeType": "VariableDeclaration",
                        "scope": 2278,
                        "src": "1206:53:11",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                            "typeString": "mapping(bytes32 => uint256)"
                        },
                        "typeName": {
                            "id": 2188,
                            "keyType": {
                                "id": 2186,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1214:7:11",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1206:27:11",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                            },
                            "valueType": {
                                "id": 2187,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1225:7:11",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 2195,
                        "name": "UpgradeRegistered",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2194,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2191,
                                    "indexed": false,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2195,
                                    "src": "1343:20:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2190,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1343:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2193,
                                    "indexed": false,
                                    "name": "_timestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2195,
                                    "src": "1373:18:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2192,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1373:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1333:64:11"
                        },
                        "src": "1310:88:11"
                    },
                    {
                        "body": {
                            "id": 2257,
                            "nodeType": "Block",
                            "src": "1478:1226:11",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2199,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2197,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "1646:14:11",
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
                                            "id": 2198,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1664:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1646:19:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 2203,
                                    "nodeType": "IfStatement",
                                    "src": "1642:72:11",
                                    "trueBody": {
                                        "id": 2202,
                                        "nodeType": "Block",
                                        "src": "1667:47:11",
                                        "statements": [
                                            {
                                                "id": 2200,
                                                "nodeType": "PlaceholderStatement",
                                                "src": "1681:1:11"
                                            },
                                            {
                                                "expression": null,
                                                "functionReturnParameters": null,
                                                "id": 2201,
                                                "nodeType": "Return",
                                                "src": "1697:7:11"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        2205
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2205,
                                            "name": "upgradeHash",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2257,
                                            "src": "1891:19:11",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 2204,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1891:7:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2213,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2209,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3213,
                                                            "src": "1970:3:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2210,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "data",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1970:8:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                                            "typeString": "bytes calldata"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                                            "typeString": "bytes calldata"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 2207,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3200,
                                                        "src": "1936:3:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 2208,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1936:16:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 2211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1936:56:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 2206,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3207,
                                            "src": "1913:9:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 2212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1913:89:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1891:111:11"
                                },
                                {
                                    "assignments": [
                                        2215
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2215,
                                            "name": "registrationTime",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2257,
                                            "src": "2013:24:11",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2214,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2013:7:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2219,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 2216,
                                            "name": "timeLockedUpgrades",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2189,
                                            "src": "2040:18:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                "typeString": "mapping(bytes32 => uint256)"
                                            }
                                        },
                                        "id": 2218,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 2217,
                                            "name": "upgradeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2205,
                                            "src": "2059:11:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2040:31:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2013:58:11"
                                },
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2222,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2220,
                                            "name": "registrationTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2215,
                                            "src": "2168:16:11",
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
                                            "id": 2221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2188:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2168:21:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 2238,
                                    "nodeType": "IfStatement",
                                    "src": "2164:235:11",
                                    "trueBody": {
                                        "id": 2237,
                                        "nodeType": "Block",
                                        "src": "2191:208:11",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2228,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2223,
                                                            "name": "timeLockedUpgrades",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2189,
                                                            "src": "2205:18:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                                "typeString": "mapping(bytes32 => uint256)"
                                                            }
                                                        },
                                                        "id": 2225,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2224,
                                                            "name": "upgradeHash",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2205,
                                                            "src": "2224:11:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2205:31:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2226,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3203,
                                                            "src": "2239:5:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 2227,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "timestamp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2239:15:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2205:49:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2229,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2205:49:11"
                                            },
                                            {
                                                "eventCall": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2231,
                                                            "name": "upgradeHash",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2205,
                                                            "src": "2309:11:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 2232,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3203,
                                                                "src": "2338:5:11",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 2233,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "2338:15:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 2230,
                                                        "name": "UpgradeRegistered",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2195,
                                                        "src": "2274:17:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                                                            "typeString": "function (bytes32,uint256)"
                                                        }
                                                    },
                                                    "id": 2234,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2274:93:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 2235,
                                                "nodeType": "EmitStatement",
                                                "src": "2269:98:11"
                                            },
                                            {
                                                "expression": null,
                                                "functionReturnParameters": null,
                                                "id": 2236,
                                                "nodeType": "Return",
                                                "src": "2382:7:11"
                                            }
                                        ]
                                    }
                                },
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
                                                "id": 2246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 2240,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3203,
                                                        "src": "2430:5:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 2241,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2430:15:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2244,
                                                            "name": "timeLockPeriod",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2185,
                                                            "src": "2470:14:11",
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
                                                            "id": 2242,
                                                            "name": "registrationTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2215,
                                                            "src": "2449:16:11",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 2243,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "add",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 3068,
                                                        "src": "2449:20:11",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2245,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2449:36:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2430:55:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e",
                                                "id": 2247,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2499:54:11",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_dc641ea8e6496572b0b17b0af5d7346f816f41dcf17abffff9e2d4d889f64e92",
                                                    "typeString": "literal_string \"TimeLockUpgrade: Time lock period must have elapsed.\""
                                                },
                                                "value": "TimeLockUpgrade: Time lock period must have elapsed."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_dc641ea8e6496572b0b17b0af5d7346f816f41dcf17abffff9e2d4d889f64e92",
                                                    "typeString": "literal_string \"TimeLockUpgrade: Time lock period must have elapsed.\""
                                                }
                                            ],
                                            "id": 2239,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2409:7:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2409:154:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2249,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2409:154:11"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2254,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2250,
                                                "name": "timeLockedUpgrades",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2189,
                                                "src": "2610:18:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                                    "typeString": "mapping(bytes32 => uint256)"
                                                }
                                            },
                                            "id": 2252,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2251,
                                                "name": "upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2205,
                                                "src": "2629:11:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2610:31:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2253,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2644:1:11",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2610:35:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2255,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2610:35:11"
                                },
                                {
                                    "id": 2256,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2696:1:11"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2258,
                        "name": "timeLockUpgrade",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2196,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1475:2:11"
                        },
                        "src": "1451:1253:11",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2276,
                            "nodeType": "Block",
                            "src": "3082:291:11",
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
                                                "id": 2268,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2266,
                                                    "name": "_timeLockPeriod",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2260,
                                                    "src": "3208:15:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2267,
                                                    "name": "timeLockPeriod",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2185,
                                                    "src": "3226:14:11",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3208:32:11",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67",
                                                "id": 2269,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3254:59:11",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e0fdc3906422c076986eef38c836dfb5044fad58473fa15af7e336603310b3f3",
                                                    "typeString": "literal_string \"TimeLockUpgrade: New period must be greater than existing\""
                                                },
                                                "value": "TimeLockUpgrade: New period must be greater than existing"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_e0fdc3906422c076986eef38c836dfb5044fad58473fa15af7e336603310b3f3",
                                                    "typeString": "literal_string \"TimeLockUpgrade: New period must be greater than existing\""
                                                }
                                            ],
                                            "id": 2265,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3187:7:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2270,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3187:136:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2271,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3187:136:11"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2274,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2272,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "3334:14:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2273,
                                            "name": "_timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2260,
                                            "src": "3351:15:11",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3334:32:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2275,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3334:32:11"
                                }
                            ]
                        },
                        "documentation": "Change timeLockPeriod period. Generally called after initially settings have been set up.\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution",
                        "id": 2277,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2263,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2262,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3068:9:11",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3068:9:11"
                            }
                        ],
                        "name": "setTimeLockPeriod",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2261,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2260,
                                    "name": "_timeLockPeriod",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2277,
                                    "src": "3013:23:11",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2259,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3013:7:11",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3003:39:11"
                        },
                        "returnParameters": {
                            "id": 2264,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3082:0:11"
                        },
                        "scope": 2278,
                        "src": "2977:396:11",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2279,
                "src": "936:2439:11"
            }
        ],
        "src": "597:2779:11"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.913Z",
    "devdoc": {
        "author": "Set Protocol * The TimeLockUpgrade contract contains a modifier for handling minimum time period updates",
        "methods": {
            "isOwner()": {
                "return": "true if `msg.sender` is the owner of the contract."
            },
            "owner()": {
                "return": "the address of the owner."
            },
            "renounceOwnership()": {
                "details": "Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore."
            },
            "setTimeLockPeriod(uint256)": {
                "params": {
                    "_timeLockPeriod": "Time in seconds that upgrades need to be evaluated before execution"
                }
            },
            "transferOwnership(address)": {
                "details": "Allows the current owner to transfer control of the contract to a newOwner.",
                "params": {
                    "newOwner": "The address to transfer ownership to."
                }
            }
        },
        "title": "TimeLockUpgrade"
    },
    "userdoc": {
        "methods": {
            "renounceOwnership()": {
                "notice": "Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
            },
            "setTimeLockPeriod(uint256)": {
                "notice": "Change timeLockPeriod period. Generally called after initially settings have been set up."
            }
        }
    }
};
//# sourceMappingURL=TimeLockUpgrade.js.map