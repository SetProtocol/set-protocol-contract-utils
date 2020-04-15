export const UnrestrictedTimeLockUpgrade = 
{
  "contractName": "UnrestrictedTimeLockUpgrade",
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
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * The UnrestrictedTimeLockUpgrade contract inherits a modifier for handling minimum time period updates not limited to the owner of the contract. Also implements a removeTimeLockUpgrade internal function that can be exposed by writing an external version into the contract it used in with the required modifiers to restrict access.\",\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"UnrestrictedTimeLockUpgrade\"},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol\":\"UnrestrictedTimeLockUpgrade\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol\":{\"keccak256\":\"0xdd668144ac30026f5c93e51c1c4d496edbe5497d5cbf969e72ef86cc4666960b\",\"urls\":[\"bzzr://72ff5586aea6e8de13ab4aaf72cbc03e6aaed86599c2500f73d7416b0b8d9517\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
  "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610370806100576000396000f3fe608060405234801561001057600080fd5b506004361061009a576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100785780638da5cb5b146100e05780638f32d59b146101045780639303b16f14610120578063f2fde38b1461013d5761009a565b80631766486d1461009f578063715018a6146100ce57806378446bc1146100d8575b600080fd5b6100bc600480360360208110156100b557600080fd5b5035610163565b60408051918252519081900360200190f35b6100d6610175565b005b6100bc6101dd565b6100e86101e3565b60408051600160a060020a039092168252519081900360200190f35b61010c6101f2565b604080519115158252519081900360200190f35b6100d66004803603602081101561013657600080fd5b5035610203565b6100d66004803603602081101561015357600080fd5b5035600160a060020a0316610273565b60026020526000908152604090205481565b61017d6101f2565b61018657600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61020b6101f2565b61021457600080fd5b600154811161026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061030c6039913960400191505060405180910390fd5b600155565b61027b6101f2565b61028457600080fd5b61028d81610290565b50565b600160a060020a0381166102a357600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a72305820a00d4359abe9f09890ac5bc4bee6d2b68deaf69002b86b40ce4d11203bc16c190029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061009a576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100785780638da5cb5b146100e05780638f32d59b146101045780639303b16f14610120578063f2fde38b1461013d5761009a565b80631766486d1461009f578063715018a6146100ce57806378446bc1146100d8575b600080fd5b6100bc600480360360208110156100b557600080fd5b5035610163565b60408051918252519081900360200190f35b6100d6610175565b005b6100bc6101dd565b6100e86101e3565b60408051600160a060020a039092168252519081900360200190f35b61010c6101f2565b604080519115158252519081900360200190f35b6100d66004803603602081101561013657600080fd5b5035610203565b6100d66004803603602081101561015357600080fd5b5035600160a060020a0316610273565b60026020526000908152604090205481565b61017d6101f2565b61018657600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61020b6101f2565b61021457600080fd5b600154811161026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061030c6039913960400191505060405180910390fd5b600155565b61027b6101f2565b61028457600080fd5b61028d81610290565b50565b600160a060020a0381166102a357600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a72305820a00d4359abe9f09890ac5bc4bee6d2b68deaf69002b86b40ce4d11203bc16c190029",
  "sourceMap": "1175:839:13:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;1175:839:13;;;;;;",
  "deployedSourceMap": "1175:839:13:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1175:839:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1206:53:11;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1110:29:11;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;2977:396:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2977:396:11;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;1982:183::-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o",
  "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\nimport { TimeLockUpgrade } from \"./TimeLockUpgrade.sol\";\n\n\n/**\n * @title UnrestrictedTimeLockUpgrade\n * @author Set Protocol\n *\n * The UnrestrictedTimeLockUpgrade contract inherits a modifier for handling minimum time period updates not\n * limited to the owner of the contract. Also implements a removeTimeLockUpgrade internal function that can\n * be exposed by writing an external version into the contract it used in with the required modifiers to\n * restrict access.\n */\n\ncontract UnrestrictedTimeLockUpgrade is\n    TimeLockUpgrade\n{\n    /* ============ Events ============ */\n\n    event RemoveRegisteredUpgrade(\n        bytes32 indexed _upgradeHash\n    );\n\n    /* ============ Internal Function ============ */\n\n    /**\n     * Removes an existing upgrade.\n     *\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments\n     */\n    function removeRegisteredUpgradeInternal(\n        bytes32 _upgradeHash\n    )\n        internal\n    {\n        require(\n            timeLockedUpgrades[_upgradeHash] != 0,\n            \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\"\n        );\n\n        // Reset the timestamp to 0\n        timeLockedUpgrades[_upgradeHash] = 0;\n\n        emit RemoveRegisteredUpgrade(\n            _upgradeHash\n        );\n    }\n}",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
    "exportedSymbols": {
      "UnrestrictedTimeLockUpgrade": [
        2461
      ]
    },
    "id": 2462,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2425,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:22:13"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 2427,
        "nodeType": "ImportDirective",
        "scope": 2462,
        "sourceUnit": 3090,
        "src": "621:77:13",
        "symbolAliases": [
          {
            "foreign": 2426,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "file": "./TimeLockUpgrade.sol",
        "id": 2429,
        "nodeType": "ImportDirective",
        "scope": 2462,
        "sourceUnit": 2279,
        "src": "700:56:13",
        "symbolAliases": [
          {
            "foreign": 2428,
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
              "id": 2430,
              "name": "TimeLockUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2278,
              "src": "1219:15:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                "typeString": "contract TimeLockUpgrade"
              }
            },
            "id": 2431,
            "nodeType": "InheritanceSpecifier",
            "src": "1219:15:13"
          }
        ],
        "contractDependencies": [
          2278,
          3198
        ],
        "contractKind": "contract",
        "documentation": "@title UnrestrictedTimeLockUpgrade\n@author Set Protocol\n * The UnrestrictedTimeLockUpgrade contract inherits a modifier for handling minimum time period updates not\nlimited to the owner of the contract. Also implements a removeTimeLockUpgrade internal function that can\nbe exposed by writing an external version into the contract it used in with the required modifiers to\nrestrict access.",
        "fullyImplemented": true,
        "id": 2461,
        "linearizedBaseContracts": [
          2461,
          2278,
          3198
        ],
        "name": "UnrestrictedTimeLockUpgrade",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 2435,
            "name": "RemoveRegisteredUpgrade",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2433,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2435,
                  "src": "1324:28:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1314:44:13"
            },
            "src": "1285:74:13"
          },
          {
            "body": {
              "id": 2459,
              "nodeType": "Block",
              "src": "1679:333:13",
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
                        "id": 2445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2441,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2189,
                            "src": "1710:18:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2443,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2442,
                            "name": "_upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2437,
                            "src": "1729:12:13",
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
                          "src": "1710:32:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1746:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1710:37:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564",
                        "id": 2446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1761:76:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2bc75a00c5313f8e5686c8c1ed1213bc596e6197261ca680fdcfe96f41718d95",
                          "typeString": "literal_string \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\""
                        },
                        "value": "TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2bc75a00c5313f8e5686c8c1ed1213bc596e6197261ca680fdcfe96f41718d95",
                          "typeString": "literal_string \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\""
                        }
                      ],
                      "id": 2440,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "1689:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1689:158:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2448,
                  "nodeType": "ExpressionStatement",
                  "src": "1689:158:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2449,
                        "name": "timeLockedUpgrades",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2189,
                        "src": "1894:18:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 2451,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2450,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2437,
                        "src": "1913:12:13",
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
                      "src": "1894:32:13",
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
                      "id": 2452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1929:1:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1894:36:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2454,
                  "nodeType": "ExpressionStatement",
                  "src": "1894:36:13"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2456,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2437,
                        "src": "1983:12:13",
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
                      "id": 2455,
                      "name": "RemoveRegisteredUpgrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2435,
                      "src": "1946:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 2457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:59:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2458,
                  "nodeType": "EmitStatement",
                  "src": "1941:64:13"
                }
              ]
            },
            "documentation": "Removes an existing upgrade.\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments",
            "id": 2460,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeRegisteredUpgradeInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2437,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2460,
                  "src": "1631:20:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2436,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:36:13"
            },
            "returnParameters": {
              "id": 2439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1679:0:13"
            },
            "scope": 2461,
            "src": "1581:431:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2462,
        "src": "1175:839:13"
      }
    ],
    "src": "597:1417:13"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
    "exportedSymbols": {
      "UnrestrictedTimeLockUpgrade": [
        2461
      ]
    },
    "id": 2462,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2425,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:22:13"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 2427,
        "nodeType": "ImportDirective",
        "scope": 2462,
        "sourceUnit": 3090,
        "src": "621:77:13",
        "symbolAliases": [
          {
            "foreign": 2426,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "file": "./TimeLockUpgrade.sol",
        "id": 2429,
        "nodeType": "ImportDirective",
        "scope": 2462,
        "sourceUnit": 2279,
        "src": "700:56:13",
        "symbolAliases": [
          {
            "foreign": 2428,
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
              "id": 2430,
              "name": "TimeLockUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2278,
              "src": "1219:15:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                "typeString": "contract TimeLockUpgrade"
              }
            },
            "id": 2431,
            "nodeType": "InheritanceSpecifier",
            "src": "1219:15:13"
          }
        ],
        "contractDependencies": [
          2278,
          3198
        ],
        "contractKind": "contract",
        "documentation": "@title UnrestrictedTimeLockUpgrade\n@author Set Protocol\n * The UnrestrictedTimeLockUpgrade contract inherits a modifier for handling minimum time period updates not\nlimited to the owner of the contract. Also implements a removeTimeLockUpgrade internal function that can\nbe exposed by writing an external version into the contract it used in with the required modifiers to\nrestrict access.",
        "fullyImplemented": true,
        "id": 2461,
        "linearizedBaseContracts": [
          2461,
          2278,
          3198
        ],
        "name": "UnrestrictedTimeLockUpgrade",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 2435,
            "name": "RemoveRegisteredUpgrade",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2433,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2435,
                  "src": "1324:28:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1314:44:13"
            },
            "src": "1285:74:13"
          },
          {
            "body": {
              "id": 2459,
              "nodeType": "Block",
              "src": "1679:333:13",
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
                        "id": 2445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2441,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2189,
                            "src": "1710:18:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2443,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2442,
                            "name": "_upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2437,
                            "src": "1729:12:13",
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
                          "src": "1710:32:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1746:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1710:37:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564",
                        "id": 2446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1761:76:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2bc75a00c5313f8e5686c8c1ed1213bc596e6197261ca680fdcfe96f41718d95",
                          "typeString": "literal_string \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\""
                        },
                        "value": "TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2bc75a00c5313f8e5686c8c1ed1213bc596e6197261ca680fdcfe96f41718d95",
                          "typeString": "literal_string \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\""
                        }
                      ],
                      "id": 2440,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "1689:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1689:158:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2448,
                  "nodeType": "ExpressionStatement",
                  "src": "1689:158:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2449,
                        "name": "timeLockedUpgrades",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2189,
                        "src": "1894:18:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 2451,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2450,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2437,
                        "src": "1913:12:13",
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
                      "src": "1894:32:13",
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
                      "id": 2452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1929:1:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1894:36:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2454,
                  "nodeType": "ExpressionStatement",
                  "src": "1894:36:13"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2456,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2437,
                        "src": "1983:12:13",
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
                      "id": 2455,
                      "name": "RemoveRegisteredUpgrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2435,
                      "src": "1946:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 2457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:59:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2458,
                  "nodeType": "EmitStatement",
                  "src": "1941:64:13"
                }
              ]
            },
            "documentation": "Removes an existing upgrade.\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments",
            "id": 2460,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeRegisteredUpgradeInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2437,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2460,
                  "src": "1631:20:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2436,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1631:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:36:13"
            },
            "returnParameters": {
              "id": 2439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1679:0:13"
            },
            "scope": 2461,
            "src": "1581:431:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2462,
        "src": "1175:839:13"
      }
    ],
    "src": "597:1417:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.918Z",
  "devdoc": {
    "author": "Set Protocol * The UnrestrictedTimeLockUpgrade contract inherits a modifier for handling minimum time period updates not limited to the owner of the contract. Also implements a removeTimeLockUpgrade internal function that can be exposed by writing an external version into the contract it used in with the required modifiers to restrict access.",
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
    "title": "UnrestrictedTimeLockUpgrade"
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
}