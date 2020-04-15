"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOneUpgrade = {
    "contractName": "LimitOneUpgrade",
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
                    "name": "_timeLockPeriod",
                    "type": "uint256"
                }
            ],
            "name": "setTimeLockPeriod",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "upgradeIdentifier",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
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
                    "indexed": true,
                    "name": "_upgradeHash",
                    "type": "bytes32"
                }
            ],
            "name": "RemoveRegisteredUpgrade",
            "type": "event"
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
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"upgradeIdentifier\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * For function that must be timelocked but could potentially have more than one upgrade at a time this contract allows one to limit the amount of simultaneous upgrades.\",\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"LimitOneUpgrade\"},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol\":\"LimitOneUpgrade\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol\":{\"keccak256\":\"0x3b25e17f398568b3304e2fdc22a07b0a586ecc7614d9eca07436dd5dbc40bba7\",\"urls\":[\"bzzr://f25341b47c17c7bed51ad4ce4193c1a0dfb6291b94eef8d9ae69ec722545a635\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol\":{\"keccak256\":\"0xdd668144ac30026f5c93e51c1c4d496edbe5497d5cbf969e72ef86cc4666960b\",\"urls\":[\"bzzr://72ff5586aea6e8de13ab4aaf72cbc03e6aaed86599c2500f73d7416b0b8d9517\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36103b3806100576000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100785780638f32d59b1461010f5780639303b16f1461012b578063d7c1b02a14610148578063f2fde38b1461016e576100a5565b80631766486d146100aa578063715018a6146100d957806378446bc1146100e35780638da5cb5b146100eb575b600080fd5b6100c7600480360360208110156100c057600080fd5b5035610194565b60408051918252519081900360200190f35b6100e16101a6565b005b6100c761020e565b6100f3610214565b60408051600160a060020a039092168252519081900360200190f35b610117610223565b604080519115158252519081900360200190f35b6100e16004803603602081101561014157600080fd5b5035610234565b6100c76004803603602081101561015e57600080fd5b5035600160a060020a03166102a4565b6100e16004803603602081101561018457600080fd5b5035600160a060020a03166102b6565b60026020526000908152604090205481565b6101ae610223565b6101b757600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61023c610223565b61024557600080fd5b600154811161029f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061034f6039913960400191505060405180910390fd5b600155565b60036020526000908152604090205481565b6102be610223565b6102c757600080fd5b6102d0816102d3565b50565b600160a060020a0381166102e657600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a723058200d4d0bceba5dd54cb54e366e34e0dcc9d7d62987c35e65db02cbdc0059f0e7510029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100785780638f32d59b1461010f5780639303b16f1461012b578063d7c1b02a14610148578063f2fde38b1461016e576100a5565b80631766486d146100aa578063715018a6146100d957806378446bc1146100e35780638da5cb5b146100eb575b600080fd5b6100c7600480360360208110156100c057600080fd5b5035610194565b60408051918252519081900360200190f35b6100e16101a6565b005b6100c761020e565b6100f3610214565b60408051600160a060020a039092168252519081900360200190f35b610117610223565b604080519115158252519081900360200190f35b6100e16004803603602081101561014157600080fd5b5035610234565b6100c76004803603602081101561015e57600080fd5b5035600160a060020a03166102a4565b6100e16004803603602081101561018457600080fd5b5035600160a060020a03166102b6565b60026020526000908152604090205481565b6101ae610223565b6101b757600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61023c610223565b61024557600080fd5b600154811161029f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061034f6039913960400191505060405180910390fd5b600155565b60036020526000908152604090205481565b6102be610223565b6102c757600080fd5b6102d0816102d3565b50565b600160a060020a0381166102e657600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a723058200d4d0bceba5dd54cb54e366e34e0dcc9d7d62987c35e65db02cbdc0059f0e7510029",
    "sourceMap": "939:1962:8:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;939:1962:8;;;;;;",
    "deployedSourceMap": "939:1962:8:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;939:1962:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1206:53:11;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1110:29:11;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;2977:396:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2977:396:11;;:::i;1058:52:8:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1058:52:8;-1:-1:-1;;;;;1058:52:8;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;1058:52:8:-;;;;;;;;;;;;;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;1982:183::-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { UnrestrictedTimeLockUpgrade } from \"./UnrestrictedTimeLockUpgrade.sol\";\n\n\n/**\n * @title LimitOneUpgrade\n * @author Set Protocol\n *\n * For function that must be timelocked but could potentially have more than one upgrade at a time\n * this contract allows one to limit the amount of simultaneous upgrades.\n */\n\ncontract LimitOneUpgrade is\n    UnrestrictedTimeLockUpgrade\n{\n    /* ============ State Variables ============ */\n\n    mapping(address => bytes32) public upgradeIdentifier;\n\n    /* ============ Modifier ============ */\n\n    /**\n     * This modifier must be used in conjunction with timeLockUpgrade AND must be called before\n     * timeLockUpgrade is called. UpgradeAddress must also be part of the msg.data.\n     */\n    modifier limitOneUpgrade(address _upgradeAddress) {\n        if (timeLockPeriod > 0) {\n            // Get upgradeHash\n            bytes32 upgradeHash = keccak256(msg.data);\n            \n            if (upgradeIdentifier[_upgradeAddress] != 0) {\n                // If upgrade hash has no record then revert since must be second upgrade\n                require(\n                    upgradeIdentifier[_upgradeAddress] == upgradeHash,\n                    \"Another update already in progress.\"\n                );\n\n                upgradeIdentifier[_upgradeAddress] = 0;\n\n            } else {\n                upgradeIdentifier[_upgradeAddress] = upgradeHash;\n            }\n        }\n        _;\n    }\n\n    /**\n     * Verifies that upgrade address matches with hash of upgrade. Removes upgrade from timelockUpgrades\n     * and sets upgradeIdentifier to 0 for passed upgradeAddress, allowing for another upgrade.\n     *\n     * @param _upgradeAddress       The address of the trading pool being updated\n     * @param _upgradeHash          Keccack256 hash that uniquely identifies function called and arguments\n     */\n    function removeRegisteredUpgradeInternal(\n        address _upgradeAddress,\n        bytes32 _upgradeHash\n    )\n        internal\n    {\n        require(\n            upgradeIdentifier[_upgradeAddress] == _upgradeHash,\n            \"Passed upgrade hash does not match upgrade address.\"\n        );\n\n        UnrestrictedTimeLockUpgrade.removeRegisteredUpgradeInternal(_upgradeHash);\n\n        upgradeIdentifier[_upgradeAddress] = 0;\n    }\n}",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol",
        "exportedSymbols": {
            "LimitOneUpgrade": [
                1788
            ]
        },
        "id": 1789,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1703,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:8"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
                "file": "./UnrestrictedTimeLockUpgrade.sol",
                "id": 1705,
                "nodeType": "ImportDirective",
                "scope": 1789,
                "sourceUnit": 2462,
                "src": "621:80:8",
                "symbolAliases": [
                    {
                        "foreign": 1704,
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
                            "id": 1706,
                            "name": "UnrestrictedTimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2461,
                            "src": "971:27:8",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_UnrestrictedTimeLockUpgrade_$2461",
                                "typeString": "contract UnrestrictedTimeLockUpgrade"
                            }
                        },
                        "id": 1707,
                        "nodeType": "InheritanceSpecifier",
                        "src": "971:27:8"
                    }
                ],
                "contractDependencies": [
                    2278,
                    2461,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title LimitOneUpgrade\n@author Set Protocol\n * For function that must be timelocked but could potentially have more than one upgrade at a time\nthis contract allows one to limit the amount of simultaneous upgrades.",
                "fullyImplemented": true,
                "id": 1788,
                "linearizedBaseContracts": [
                    1788,
                    2461,
                    2278,
                    3198
                ],
                "name": "LimitOneUpgrade",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 1711,
                        "name": "upgradeIdentifier",
                        "nodeType": "VariableDeclaration",
                        "scope": 1788,
                        "src": "1058:52:8",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                            "typeString": "mapping(address => bytes32)"
                        },
                        "typeName": {
                            "id": 1710,
                            "keyType": {
                                "id": 1708,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1066:7:8",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1058:27:8",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                            },
                            "valueType": {
                                "id": 1709,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1077:7:8",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1757,
                            "nodeType": "Block",
                            "src": "1409:642:8",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 1717,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 1715,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "1423:14:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1716,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1440:1:8",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1423:18:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 1755,
                                    "nodeType": "IfStatement",
                                    "src": "1419:615:8",
                                    "trueBody": {
                                        "id": 1754,
                                        "nodeType": "Block",
                                        "src": "1443:591:8",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    1719
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 1719,
                                                        "name": "upgradeHash",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 1754,
                                                        "src": "1488:19:8",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 1718,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1488:7:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 1724,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1721,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3213,
                                                                "src": "1520:3:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 1722,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "data",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1520:8:8",
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
                                                        "id": 1720,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3207,
                                                        "src": "1510:9:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 1723,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1510:19:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1488:41:8"
                                            },
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 1729,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1725,
                                                            "name": "upgradeIdentifier",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1711,
                                                            "src": "1560:17:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                "typeString": "mapping(address => bytes32)"
                                                            }
                                                        },
                                                        "id": 1727,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1726,
                                                            "name": "_upgradeAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1713,
                                                            "src": "1578:15:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1560:34:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "!=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 1728,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1598:1:8",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "1560:39:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 1752,
                                                    "nodeType": "Block",
                                                    "src": "1943:81:8",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1750,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "baseExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1746,
                                                                        "name": "upgradeIdentifier",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1711,
                                                                        "src": "1961:17:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                            "typeString": "mapping(address => bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 1748,
                                                                    "indexExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1747,
                                                                        "name": "_upgradeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1713,
                                                                        "src": "1979:15:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1961:34:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "id": 1749,
                                                                    "name": "upgradeHash",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1719,
                                                                    "src": "1998:11:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "src": "1961:48:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            "id": 1751,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1961:48:8"
                                                        }
                                                    ]
                                                },
                                                "id": 1753,
                                                "nodeType": "IfStatement",
                                                "src": "1556:468:8",
                                                "trueBody": {
                                                    "id": 1745,
                                                    "nodeType": "Block",
                                                    "src": "1601:336:8",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        },
                                                                        "id": 1735,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 1731,
                                                                                "name": "upgradeIdentifier",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 1711,
                                                                                "src": "1738:17:8",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                                    "typeString": "mapping(address => bytes32)"
                                                                                }
                                                                            },
                                                                            "id": 1733,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 1732,
                                                                                "name": "_upgradeAddress",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 1713,
                                                                                "src": "1756:15:8",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "1738:34:8",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "==",
                                                                        "rightExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 1734,
                                                                            "name": "upgradeHash",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 1719,
                                                                            "src": "1776:11:8",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        },
                                                                        "src": "1738:49:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "hexValue": "416e6f746865722075706461746520616c726561647920696e2070726f67726573732e",
                                                                        "id": 1736,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "1809:37:8",
                                                                        "subdenomination": null,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_22850ad33348163e58361580c2acf6a589b3bbe24eeebc7800c6b3d6eb8213ac",
                                                                            "typeString": "literal_string \"Another update already in progress.\""
                                                                        },
                                                                        "value": "Another update already in progress."
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_22850ad33348163e58361580c2acf6a589b3bbe24eeebc7800c6b3d6eb8213ac",
                                                                            "typeString": "literal_string \"Another update already in progress.\""
                                                                        }
                                                                    ],
                                                                    "id": 1730,
                                                                    "name": "require",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [
                                                                        3216,
                                                                        3217
                                                                    ],
                                                                    "referencedDeclaration": 3217,
                                                                    "src": "1709:7:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (bool,string memory) pure"
                                                                    }
                                                                },
                                                                "id": 1737,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1709:155:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 1738,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1709:155:8"
                                                        },
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1743,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "baseExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1739,
                                                                        "name": "upgradeIdentifier",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1711,
                                                                        "src": "1883:17:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                            "typeString": "mapping(address => bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 1741,
                                                                    "indexExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1740,
                                                                        "name": "_upgradeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1713,
                                                                        "src": "1901:15:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1883:34:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "30",
                                                                    "id": 1742,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1920:1:8",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                        "typeString": "int_const 0"
                                                                    },
                                                                    "value": "0"
                                                                },
                                                                "src": "1883:38:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            "id": 1744,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1883:38:8"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 1756,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2043:1:8"
                                }
                            ]
                        },
                        "documentation": "This modifier must be used in conjunction with timeLockUpgrade AND must be called before\ntimeLockUpgrade is called. UpgradeAddress must also be part of the msg.data.",
                        "id": 1758,
                        "name": "limitOneUpgrade",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 1714,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1713,
                                    "name": "_upgradeAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1758,
                                    "src": "1384:23:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1712,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1384:7:8",
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
                            "src": "1383:25:8"
                        },
                        "src": "1359:692:8",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 1786,
                            "nodeType": "Block",
                            "src": "2601:298:8",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                "id": 1770,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1766,
                                                        "name": "upgradeIdentifier",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1711,
                                                        "src": "2632:17:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                            "typeString": "mapping(address => bytes32)"
                                                        }
                                                    },
                                                    "id": 1768,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1767,
                                                        "name": "_upgradeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1760,
                                                        "src": "2650:15:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2632:34:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1769,
                                                    "name": "_upgradeHash",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1762,
                                                    "src": "2670:12:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "src": "2632:50:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "5061737365642075706772616465206861736820646f6573206e6f74206d61746368207570677261646520616464726573732e",
                                                "id": 1771,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2696:53:8",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8fa5325628e91f4dbcbacdd79cc6bf88c0dee24951e1122cd7279af0e48e664e",
                                                    "typeString": "literal_string \"Passed upgrade hash does not match upgrade address.\""
                                                },
                                                "value": "Passed upgrade hash does not match upgrade address."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8fa5325628e91f4dbcbacdd79cc6bf88c0dee24951e1122cd7279af0e48e664e",
                                                    "typeString": "literal_string \"Passed upgrade hash does not match upgrade address.\""
                                                }
                                            ],
                                            "id": 1765,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2611:7:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1772,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2611:148:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1773,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2611:148:8"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1777,
                                                "name": "_upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1762,
                                                "src": "2830:12:8",
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
                                                "id": 1774,
                                                "name": "UnrestrictedTimeLockUpgrade",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2461,
                                                "src": "2770:27:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_UnrestrictedTimeLockUpgrade_$2461_$",
                                                    "typeString": "type(contract UnrestrictedTimeLockUpgrade)"
                                                }
                                            },
                                            "id": 1776,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "removeRegisteredUpgradeInternal",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2460,
                                            "src": "2770:59:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32)"
                                            }
                                        },
                                        "id": 1778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2770:73:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1779,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2770:73:8"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1784,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1780,
                                                "name": "upgradeIdentifier",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1711,
                                                "src": "2854:17:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                    "typeString": "mapping(address => bytes32)"
                                                }
                                            },
                                            "id": 1782,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1781,
                                                "name": "_upgradeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1760,
                                                "src": "2872:15:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2854:34:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1783,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2891:1:8",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2854:38:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 1785,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2854:38:8"
                                }
                            ]
                        },
                        "documentation": "Verifies that upgrade address matches with hash of upgrade. Removes upgrade from timelockUpgrades\nand sets upgradeIdentifier to 0 for passed upgradeAddress, allowing for another upgrade.\n     * @param _upgradeAddress       The address of the trading pool being updated\n@param _upgradeHash          Keccack256 hash that uniquely identifies function called and arguments",
                        "id": 1787,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "removeRegisteredUpgradeInternal",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1763,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "_upgradeAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1787,
                                    "src": "2520:23:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:7:8",
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
                                    "id": 1762,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1787,
                                    "src": "2553:20:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1761,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2553:7:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2510:69:8"
                        },
                        "returnParameters": {
                            "id": 1764,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2601:0:8"
                        },
                        "scope": 1788,
                        "src": "2470:429:8",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 1789,
                "src": "939:1962:8"
            }
        ],
        "src": "597:2304:8"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol",
        "exportedSymbols": {
            "LimitOneUpgrade": [
                1788
            ]
        },
        "id": 1789,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1703,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:8"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
                "file": "./UnrestrictedTimeLockUpgrade.sol",
                "id": 1705,
                "nodeType": "ImportDirective",
                "scope": 1789,
                "sourceUnit": 2462,
                "src": "621:80:8",
                "symbolAliases": [
                    {
                        "foreign": 1704,
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
                            "id": 1706,
                            "name": "UnrestrictedTimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2461,
                            "src": "971:27:8",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_UnrestrictedTimeLockUpgrade_$2461",
                                "typeString": "contract UnrestrictedTimeLockUpgrade"
                            }
                        },
                        "id": 1707,
                        "nodeType": "InheritanceSpecifier",
                        "src": "971:27:8"
                    }
                ],
                "contractDependencies": [
                    2278,
                    2461,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title LimitOneUpgrade\n@author Set Protocol\n * For function that must be timelocked but could potentially have more than one upgrade at a time\nthis contract allows one to limit the amount of simultaneous upgrades.",
                "fullyImplemented": true,
                "id": 1788,
                "linearizedBaseContracts": [
                    1788,
                    2461,
                    2278,
                    3198
                ],
                "name": "LimitOneUpgrade",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 1711,
                        "name": "upgradeIdentifier",
                        "nodeType": "VariableDeclaration",
                        "scope": 1788,
                        "src": "1058:52:8",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                            "typeString": "mapping(address => bytes32)"
                        },
                        "typeName": {
                            "id": 1710,
                            "keyType": {
                                "id": 1708,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1066:7:8",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1058:27:8",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                "typeString": "mapping(address => bytes32)"
                            },
                            "valueType": {
                                "id": 1709,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1077:7:8",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1757,
                            "nodeType": "Block",
                            "src": "1409:642:8",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 1717,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 1715,
                                            "name": "timeLockPeriod",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2185,
                                            "src": "1423:14:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1716,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1440:1:8",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1423:18:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 1755,
                                    "nodeType": "IfStatement",
                                    "src": "1419:615:8",
                                    "trueBody": {
                                        "id": 1754,
                                        "nodeType": "Block",
                                        "src": "1443:591:8",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    1719
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 1719,
                                                        "name": "upgradeHash",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 1754,
                                                        "src": "1488:19:8",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        "typeName": {
                                                            "id": 1718,
                                                            "name": "bytes32",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1488:7:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        "value": null,
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 1724,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1721,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 3213,
                                                                "src": "1520:3:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 1722,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "data",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "1520:8:8",
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
                                                        "id": 1720,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3207,
                                                        "src": "1510:9:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 1723,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1510:19:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1488:41:8"
                                            },
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 1729,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1725,
                                                            "name": "upgradeIdentifier",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1711,
                                                            "src": "1560:17:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                "typeString": "mapping(address => bytes32)"
                                                            }
                                                        },
                                                        "id": 1727,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1726,
                                                            "name": "_upgradeAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1713,
                                                            "src": "1578:15:8",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1560:34:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "!=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 1728,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1598:1:8",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "1560:39:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 1752,
                                                    "nodeType": "Block",
                                                    "src": "1943:81:8",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1750,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "baseExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1746,
                                                                        "name": "upgradeIdentifier",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1711,
                                                                        "src": "1961:17:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                            "typeString": "mapping(address => bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 1748,
                                                                    "indexExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1747,
                                                                        "name": "_upgradeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1713,
                                                                        "src": "1979:15:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1961:34:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "id": 1749,
                                                                    "name": "upgradeHash",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1719,
                                                                    "src": "1998:11:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "src": "1961:48:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            "id": 1751,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1961:48:8"
                                                        }
                                                    ]
                                                },
                                                "id": 1753,
                                                "nodeType": "IfStatement",
                                                "src": "1556:468:8",
                                                "trueBody": {
                                                    "id": 1745,
                                                    "nodeType": "Block",
                                                    "src": "1601:336:8",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        },
                                                                        "id": 1735,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "argumentTypes": null,
                                                                            "baseExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 1731,
                                                                                "name": "upgradeIdentifier",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 1711,
                                                                                "src": "1738:17:8",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                                    "typeString": "mapping(address => bytes32)"
                                                                                }
                                                                            },
                                                                            "id": 1733,
                                                                            "indexExpression": {
                                                                                "argumentTypes": null,
                                                                                "id": 1732,
                                                                                "name": "_upgradeAddress",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 1713,
                                                                                "src": "1756:15:8",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "IndexAccess",
                                                                            "src": "1738:34:8",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "==",
                                                                        "rightExpression": {
                                                                            "argumentTypes": null,
                                                                            "id": 1734,
                                                                            "name": "upgradeHash",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 1719,
                                                                            "src": "1776:11:8",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            }
                                                                        },
                                                                        "src": "1738:49:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "hexValue": "416e6f746865722075706461746520616c726561647920696e2070726f67726573732e",
                                                                        "id": 1736,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "1809:37:8",
                                                                        "subdenomination": null,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_22850ad33348163e58361580c2acf6a589b3bbe24eeebc7800c6b3d6eb8213ac",
                                                                            "typeString": "literal_string \"Another update already in progress.\""
                                                                        },
                                                                        "value": "Another update already in progress."
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_22850ad33348163e58361580c2acf6a589b3bbe24eeebc7800c6b3d6eb8213ac",
                                                                            "typeString": "literal_string \"Another update already in progress.\""
                                                                        }
                                                                    ],
                                                                    "id": 1730,
                                                                    "name": "require",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [
                                                                        3216,
                                                                        3217
                                                                    ],
                                                                    "referencedDeclaration": 3217,
                                                                    "src": "1709:7:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (bool,string memory) pure"
                                                                    }
                                                                },
                                                                "id": 1737,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1709:155:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 1738,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1709:155:8"
                                                        },
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 1743,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "argumentTypes": null,
                                                                    "baseExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1739,
                                                                        "name": "upgradeIdentifier",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1711,
                                                                        "src": "1883:17:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                                            "typeString": "mapping(address => bytes32)"
                                                                        }
                                                                    },
                                                                    "id": 1741,
                                                                    "indexExpression": {
                                                                        "argumentTypes": null,
                                                                        "id": 1740,
                                                                        "name": "_upgradeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 1713,
                                                                        "src": "1901:15:8",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1883:34:8",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes32",
                                                                        "typeString": "bytes32"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "argumentTypes": null,
                                                                    "hexValue": "30",
                                                                    "id": 1742,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1920:1:8",
                                                                    "subdenomination": null,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                        "typeString": "int_const 0"
                                                                    },
                                                                    "value": "0"
                                                                },
                                                                "src": "1883:38:8",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            "id": 1744,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1883:38:8"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 1756,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2043:1:8"
                                }
                            ]
                        },
                        "documentation": "This modifier must be used in conjunction with timeLockUpgrade AND must be called before\ntimeLockUpgrade is called. UpgradeAddress must also be part of the msg.data.",
                        "id": 1758,
                        "name": "limitOneUpgrade",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 1714,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1713,
                                    "name": "_upgradeAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1758,
                                    "src": "1384:23:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1712,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1384:7:8",
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
                            "src": "1383:25:8"
                        },
                        "src": "1359:692:8",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 1786,
                            "nodeType": "Block",
                            "src": "2601:298:8",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                "id": 1770,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1766,
                                                        "name": "upgradeIdentifier",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1711,
                                                        "src": "2632:17:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                            "typeString": "mapping(address => bytes32)"
                                                        }
                                                    },
                                                    "id": 1768,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1767,
                                                        "name": "_upgradeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1760,
                                                        "src": "2650:15:8",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2632:34:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1769,
                                                    "name": "_upgradeHash",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1762,
                                                    "src": "2670:12:8",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "src": "2632:50:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "5061737365642075706772616465206861736820646f6573206e6f74206d61746368207570677261646520616464726573732e",
                                                "id": 1771,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2696:53:8",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8fa5325628e91f4dbcbacdd79cc6bf88c0dee24951e1122cd7279af0e48e664e",
                                                    "typeString": "literal_string \"Passed upgrade hash does not match upgrade address.\""
                                                },
                                                "value": "Passed upgrade hash does not match upgrade address."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8fa5325628e91f4dbcbacdd79cc6bf88c0dee24951e1122cd7279af0e48e664e",
                                                    "typeString": "literal_string \"Passed upgrade hash does not match upgrade address.\""
                                                }
                                            ],
                                            "id": 1765,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2611:7:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1772,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2611:148:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1773,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2611:148:8"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1777,
                                                "name": "_upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1762,
                                                "src": "2830:12:8",
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
                                                "id": 1774,
                                                "name": "UnrestrictedTimeLockUpgrade",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2461,
                                                "src": "2770:27:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_UnrestrictedTimeLockUpgrade_$2461_$",
                                                    "typeString": "type(contract UnrestrictedTimeLockUpgrade)"
                                                }
                                            },
                                            "id": 1776,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "removeRegisteredUpgradeInternal",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2460,
                                            "src": "2770:59:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32)"
                                            }
                                        },
                                        "id": 1778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2770:73:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1779,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2770:73:8"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1784,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1780,
                                                "name": "upgradeIdentifier",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1711,
                                                "src": "2854:17:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bytes32_$",
                                                    "typeString": "mapping(address => bytes32)"
                                                }
                                            },
                                            "id": 1782,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1781,
                                                "name": "_upgradeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1760,
                                                "src": "2872:15:8",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2854:34:8",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1783,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2891:1:8",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2854:38:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 1785,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2854:38:8"
                                }
                            ]
                        },
                        "documentation": "Verifies that upgrade address matches with hash of upgrade. Removes upgrade from timelockUpgrades\nand sets upgradeIdentifier to 0 for passed upgradeAddress, allowing for another upgrade.\n     * @param _upgradeAddress       The address of the trading pool being updated\n@param _upgradeHash          Keccack256 hash that uniquely identifies function called and arguments",
                        "id": 1787,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "removeRegisteredUpgradeInternal",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1763,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1760,
                                    "name": "_upgradeAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1787,
                                    "src": "2520:23:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1759,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:7:8",
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
                                    "id": 1762,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1787,
                                    "src": "2553:20:8",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 1761,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2553:7:8",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2510:69:8"
                        },
                        "returnParameters": {
                            "id": 1764,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2601:0:8"
                        },
                        "scope": 1788,
                        "src": "2470:429:8",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 1789,
                "src": "939:1962:8"
            }
        ],
        "src": "597:2304:8"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.874Z",
    "devdoc": {
        "author": "Set Protocol * For function that must be timelocked but could potentially have more than one upgrade at a time this contract allows one to limit the amount of simultaneous upgrades.",
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
        "title": "LimitOneUpgrade"
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
//# sourceMappingURL=LimitOneUpgrade.js.map