export const TimeLockUpgradeV2 = 
{
  "contractName": "TimeLockUpgradeV2",
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
          "indexed": true,
          "name": "_upgradeHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_upgradeData",
          "type": "bytes"
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
          "name": "_upgradeHash",
          "type": "bytes32"
        }
      ],
      "name": "removeRegisteredUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"removeRegisteredUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_upgradeData\",\"type\":\"bytes\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * The TimeLockUpgradeV2 contract contains a modifier for handling minimum time period updates * CHANGELOG: - Requires that the caller is the owner - New function to allow deletion of existing timelocks - Added upgradeData to UpgradeRegistered event\",\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"removeRegisteredUpgrade(bytes32)\":{\"params\":{\"_upgradeHash\":\"Keccack256 hash that uniquely identifies function called and arguments \"}},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"TimeLockUpgradeV2\"},\"userdoc\":{\"methods\":{\"removeRegisteredUpgrade(bytes32)\":{\"notice\":\"Removes an existing upgrade.\"},\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol\":\"TimeLockUpgradeV2\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol\":{\"keccak256\":\"0x7c8188e262d4db7d352130c56c0eab85a6f9f89afb5fe08efe49084557e3e600\",\"urls\":[\"bzzr://5b0a3762af16f66a60bdb9cc1bcb14a7066bd3c54dd80c6333a9f07118800340\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
  "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610494806100576000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100785780638f32d59b1461010f5780639303b16f1461012b578063cc75c9b014610148578063f2fde38b14610165576100a5565b80631766486d146100aa578063715018a6146100d957806378446bc1146100e35780638da5cb5b146100eb575b600080fd5b6100c7600480360360208110156100c057600080fd5b503561018b565b60408051918252519081900360200190f35b6100e161019d565b005b6100c7610205565b6100f361020b565b60408051600160a060020a039092168252519081900360200190f35b61011761021a565b604080519115158252519081900360200190f35b6100e16004803603602081101561014157600080fd5b503561022b565b6100e16004803603602081101561015e57600080fd5b503561029b565b6100e16004803603602081101561017b57600080fd5b5035600160a060020a031661034b565b60026020526000908152604090205481565b6101a561021a565b6101ae57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61023361021a565b61023c57600080fd5b6001548111610296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b8152602001806103e4603b913960400191505060405180910390fd5b600155565b6102a361021a565b6102ac57600080fd5b600081815260026020526040902054610310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604a81526020018061041f604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b61035361021a565b61035c57600080fd5b61036581610368565b50565b600160a060020a03811661037b57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564a165627a7a7230582075900df882de97d2b28625ff9452f3d812b56f2a0ef6db57486c7937873d36720029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100785780638f32d59b1461010f5780639303b16f1461012b578063cc75c9b014610148578063f2fde38b14610165576100a5565b80631766486d146100aa578063715018a6146100d957806378446bc1146100e35780638da5cb5b146100eb575b600080fd5b6100c7600480360360208110156100c057600080fd5b503561018b565b60408051918252519081900360200190f35b6100e161019d565b005b6100c7610205565b6100f361020b565b60408051600160a060020a039092168252519081900360200190f35b61011761021a565b604080519115158252519081900360200190f35b6100e16004803603602081101561014157600080fd5b503561022b565b6100e16004803603602081101561015e57600080fd5b503561029b565b6100e16004803603602081101561017b57600080fd5b5035600160a060020a031661034b565b60026020526000908152604090205481565b6101a561021a565b6101ae57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61023361021a565b61023c57600080fd5b6001548111610296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b8152602001806103e4603b913960400191505060405180910390fd5b600155565b6102a361021a565b6102ac57600080fd5b600081815260026020526040902054610310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604a81526020018061041f604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b61035361021a565b61035c57600080fd5b61036581610368565b50565b600160a060020a03811661037b57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564a165627a7a7230582075900df882de97d2b28625ff9452f3d812b56f2a0ef6db57486c7937873d36720029",
  "sourceMap": "1108:3391:12:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;1108:3391:12;;;;;;",
  "deployedSourceMap": "1108:3391:12:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1108:3391:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1399:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1399:53:12;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1284:29:12;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;4099:398:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4099:398:12;;:::i;3428:444::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3428:444:12;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1399:53:12:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1284:29:12:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;4099:398:12:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;4348:14:12;;4330:15;:32;4309:138;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4458:14;:32;4099:398::o;3428:444::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3568:32:12;;;;:18;:32;;;;;;3547:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3787:1;3752:32;;;:18;:32;;;;;;:36;;;3804:59;3771:12;;3804:59;;;3428:444;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;1982:183::-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { Ownable } from \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * @title TimeLockUpgradeV2\n * @author Set Protocol\n *\n * The TimeLockUpgradeV2 contract contains a modifier for handling minimum time period updates\n *\n * CHANGELOG:\n * - Requires that the caller is the owner\n * - New function to allow deletion of existing timelocks\n * - Added upgradeData to UpgradeRegistered event\n */\ncontract TimeLockUpgradeV2 is\n    Ownable\n{\n    using SafeMath for uint256;\n\n    /* ============ State Variables ============ */\n\n    // Timelock Upgrade Period in seconds\n    uint256 public timeLockPeriod;\n\n    // Mapping of maps hash of registered upgrade to its registration timestam\n    mapping(bytes32 => uint256) public timeLockedUpgrades;\n\n    /* ============ Events ============ */\n\n    event UpgradeRegistered(\n        bytes32 indexed _upgradeHash,\n        uint256 _timestamp,\n        bytes _upgradeData\n    );\n\n    event RemoveRegisteredUpgrade(\n        bytes32 indexed _upgradeHash\n    );\n\n    /* ============ Modifiers ============ */\n\n    modifier timeLockUpgrade() {\n        require(\n            isOwner(),\n            \"TimeLockUpgradeV2: The caller must be the owner\"\n        );\n\n        // If the time lock period is 0, then allow non-timebound upgrades.\n        // This is useful for initialization of the protocol and for testing.\n        if (timeLockPeriod > 0) {\n            // The upgrade hash is defined by the hash of the transaction call data,\n            // which uniquely identifies the function as well as the passed in arguments.\n            bytes32 upgradeHash = keccak256(\n                abi.encodePacked(\n                    msg.data\n                )\n            );\n\n            uint256 registrationTime = timeLockedUpgrades[upgradeHash];\n\n            // If the upgrade hasn't been registered, register with the current time.\n            if (registrationTime == 0) {\n                timeLockedUpgrades[upgradeHash] = block.timestamp;\n\n                emit UpgradeRegistered(\n                    upgradeHash,\n                    block.timestamp,\n                    msg.data\n                );\n\n                return;\n            }\n\n            require(\n                block.timestamp >= registrationTime.add(timeLockPeriod),\n                \"TimeLockUpgradeV2: Time lock period must have elapsed.\"\n            );\n\n            // Reset the timestamp to 0\n            timeLockedUpgrades[upgradeHash] = 0;\n\n        }\n\n        // Run the rest of the upgrades\n        _;\n    }\n\n    /* ============ Function ============ */\n\n    /**\n     * Removes an existing upgrade.\n     *\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments \n     */\n    function removeRegisteredUpgrade(\n        bytes32 _upgradeHash \n    )\n        external\n        onlyOwner\n    {\n        require(\n            timeLockedUpgrades[_upgradeHash] != 0,\n            \"TimeLockUpgradeV2.removeRegisteredUpgrade: Upgrade hash must be registered\"\n        );\n\n        // Reset the timestamp to 0\n        timeLockedUpgrades[_upgradeHash] = 0;\n\n        emit RemoveRegisteredUpgrade(\n            _upgradeHash\n        );  \n    }\n\n    /**\n     * Change timeLockPeriod period. Generally called after initially settings have been set up.\n     *\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution\n     */\n    function setTimeLockPeriod(\n        uint256 _timeLockPeriod\n    )\n        external\n        onlyOwner\n    {\n        // Only allow setting of the timeLockPeriod if the period is greater than the existing\n        require(\n            _timeLockPeriod > timeLockPeriod,\n            \"TimeLockUpgradeV2: New period must be greater than existing\"\n        );\n\n        timeLockPeriod = _timeLockPeriod;\n    }\n}\n",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
    "exportedSymbols": {
      "TimeLockUpgradeV2": [
        2423
      ]
    },
    "id": 2424,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2280,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:22:12"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2282,
        "nodeType": "ImportDirective",
        "scope": 2424,
        "sourceUnit": 3199,
        "src": "621:80:12",
        "symbolAliases": [
          {
            "foreign": 2281,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 2284,
        "nodeType": "ImportDirective",
        "scope": 2424,
        "sourceUnit": 3090,
        "src": "702:77:12",
        "symbolAliases": [
          {
            "foreign": 2283,
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
              "id": 2285,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3198,
              "src": "1142:7:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$3198",
                "typeString": "contract Ownable"
              }
            },
            "id": 2286,
            "nodeType": "InheritanceSpecifier",
            "src": "1142:7:12"
          }
        ],
        "contractDependencies": [
          3198
        ],
        "contractKind": "contract",
        "documentation": "@title TimeLockUpgradeV2\n@author Set Protocol\n * The TimeLockUpgradeV2 contract contains a modifier for handling minimum time period updates\n * CHANGELOG:\n- Requires that the caller is the owner\n- New function to allow deletion of existing timelocks\n- Added upgradeData to UpgradeRegistered event",
        "fullyImplemented": true,
        "id": 2423,
        "linearizedBaseContracts": [
          2423,
          3198
        ],
        "name": "TimeLockUpgradeV2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2289,
            "libraryName": {
              "contractScope": null,
              "id": 2287,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3089,
              "src": "1162:8:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$3089",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1156:27:12",
            "typeName": {
              "id": 2288,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1175:7:12",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 2291,
            "name": "timeLockPeriod",
            "nodeType": "VariableDeclaration",
            "scope": 2423,
            "src": "1284:29:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2290,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1284:7:12",
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
            "id": 2295,
            "name": "timeLockedUpgrades",
            "nodeType": "VariableDeclaration",
            "scope": 2423,
            "src": "1399:53:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 2294,
              "keyType": {
                "id": 2292,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1407:7:12",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1399:27:12",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 2293,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1418:7:12",
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
            "id": 2303,
            "name": "UpgradeRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2297,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1536:28:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2296,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:12",
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
                  "id": 2299,
                  "indexed": false,
                  "name": "_timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1574:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1574:7:12",
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
                  "id": 2301,
                  "indexed": false,
                  "name": "_upgradeData",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1602:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2300,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1602:5:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:100:12"
            },
            "src": "1503:124:12"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2307,
            "name": "RemoveRegisteredUpgrade",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2305,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "1672:28:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2304,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1672:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1662:44:12"
            },
            "src": "1633:74:12"
          },
          {
            "body": {
              "id": 2375,
              "nodeType": "Block",
              "src": "1787:1427:12",
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
                          "id": 2310,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3143,
                          "src": "1818:7:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1818:9:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e6572",
                        "id": 2312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1841:49:12",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a7cf1bfbe11f47641c2dac030f17e89d9f6664eaa73e9ae90b4aae5f46eaf1ae",
                          "typeString": "literal_string \"TimeLockUpgradeV2: The caller must be the owner\""
                        },
                        "value": "TimeLockUpgradeV2: The caller must be the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a7cf1bfbe11f47641c2dac030f17e89d9f6664eaa73e9ae90b4aae5f46eaf1ae",
                          "typeString": "literal_string \"TimeLockUpgradeV2: The caller must be the owner\""
                        }
                      ],
                      "id": 2309,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "1797:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1797:103:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2314,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:103:12"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2315,
                      "name": "timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2291,
                      "src": "2069:14:12",
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
                      "id": 2316,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2086:1:12",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2069:18:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 2373,
                  "nodeType": "IfStatement",
                  "src": "2065:1091:12",
                  "trueBody": {
                    "id": 2372,
                    "nodeType": "Block",
                    "src": "2089:1067:12",
                    "statements": [
                      {
                        "assignments": [
                          2319
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2319,
                            "name": "upgradeHash",
                            "nodeType": "VariableDeclaration",
                            "scope": 2372,
                            "src": "2278:19:12",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 2318,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2278:7:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 2327,
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
                                    "id": 2323,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3213,
                                    "src": "2365:3:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2324,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "data",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2365:8:12",
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
                                  "id": 2321,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3200,
                                  "src": "2327:3:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 2322,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2327:16:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 2325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2327:64:12",
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
                            "id": 2320,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3207,
                            "src": "2300:9:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 2326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2300:105:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2278:127:12"
                      },
                      {
                        "assignments": [
                          2329
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2329,
                            "name": "registrationTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 2372,
                            "src": "2420:24:12",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 2328,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2420:7:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 2333,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2330,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2295,
                            "src": "2447:18:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2332,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2331,
                            "name": "upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2319,
                            "src": "2466:11:12",
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
                          "src": "2447:31:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2420:58:12"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2334,
                            "name": "registrationTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2329,
                            "src": "2583:16:12",
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
                            "id": 2335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2603:1:12",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2583:21:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 2354,
                        "nodeType": "IfStatement",
                        "src": "2579:293:12",
                        "trueBody": {
                          "id": 2353,
                          "nodeType": "Block",
                          "src": "2606:266:12",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 2342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 2337,
                                    "name": "timeLockedUpgrades",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2295,
                                    "src": "2624:18:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 2339,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 2338,
                                    "name": "upgradeHash",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2319,
                                    "src": "2643:11:12",
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
                                  "src": "2624:31:12",
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
                                    "id": 2340,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3203,
                                    "src": "2658:5:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 2341,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2658:15:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2624:49:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 2343,
                              "nodeType": "ExpressionStatement",
                              "src": "2624:49:12"
                            },
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 2345,
                                    "name": "upgradeHash",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2319,
                                    "src": "2736:11:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2346,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3203,
                                      "src": "2769:5:12",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 2347,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "timestamp",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2769:15:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2348,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3213,
                                      "src": "2806:3:12",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 2349,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "data",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2806:8:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_calldata_ptr",
                                      "typeString": "bytes calldata"
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
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_calldata_ptr",
                                      "typeString": "bytes calldata"
                                    }
                                  ],
                                  "id": 2344,
                                  "name": "UpgradeRegistered",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2303,
                                  "src": "2697:17:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (bytes32,uint256,bytes memory)"
                                  }
                                },
                                "id": 2350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2697:135:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 2351,
                              "nodeType": "EmitStatement",
                              "src": "2692:140:12"
                            },
                            {
                              "expression": null,
                              "functionReturnParameters": null,
                              "id": 2352,
                              "nodeType": "Return",
                              "src": "2851:7:12"
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
                              "id": 2362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 2356,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3203,
                                  "src": "2911:5:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 2357,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "timestamp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2911:15:12",
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
                                    "id": 2360,
                                    "name": "timeLockPeriod",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2291,
                                    "src": "2951:14:12",
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
                                    "id": 2358,
                                    "name": "registrationTime",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2329,
                                    "src": "2930:16:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 2359,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "add",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3068,
                                  "src": "2930:20:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 2361,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2930:36:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2911:55:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "54696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e",
                              "id": 2363,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2984:56:12",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_65c573895bc46e6760b220807491f24700562ffc41b2a549f73a050caa5c3e1e",
                                "typeString": "literal_string \"TimeLockUpgradeV2: Time lock period must have elapsed.\""
                              },
                              "value": "TimeLockUpgradeV2: Time lock period must have elapsed."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_65c573895bc46e6760b220807491f24700562ffc41b2a549f73a050caa5c3e1e",
                                "typeString": "literal_string \"TimeLockUpgradeV2: Time lock period must have elapsed.\""
                              }
                            ],
                            "id": 2355,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3216,
                              3217
                            ],
                            "referencedDeclaration": 3217,
                            "src": "2886:7:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2886:168:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2365,
                        "nodeType": "ExpressionStatement",
                        "src": "2886:168:12"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 2370,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 2366,
                              "name": "timeLockedUpgrades",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2295,
                              "src": "3109:18:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 2368,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 2367,
                              "name": "upgradeHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2319,
                              "src": "3128:11:12",
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
                            "src": "3109:31:12",
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
                            "id": 2369,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3143:1:12",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3109:35:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2371,
                        "nodeType": "ExpressionStatement",
                        "src": "3109:35:12"
                      }
                    ]
                  }
                },
                {
                  "id": 2374,
                  "nodeType": "PlaceholderStatement",
                  "src": "3206:1:12"
                }
              ]
            },
            "documentation": null,
            "id": 2376,
            "name": "timeLockUpgrade",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1784:2:12"
            },
            "src": "1760:1454:12",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2402,
              "nodeType": "Block",
              "src": "3537:335:12",
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
                        "id": 2388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2384,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2295,
                            "src": "3568:18:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2386,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2385,
                            "name": "_upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2378,
                            "src": "3587:12:12",
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
                          "src": "3568:32:12",
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
                          "id": 2387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3604:1:12",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3568:37:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564",
                        "id": 2389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3619:76:12",
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
                      "id": 2383,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "3547:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3547:158:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2391,
                  "nodeType": "ExpressionStatement",
                  "src": "3547:158:12"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2392,
                        "name": "timeLockedUpgrades",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2295,
                        "src": "3752:18:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 2394,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2393,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2378,
                        "src": "3771:12:12",
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
                      "src": "3752:32:12",
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
                      "id": 2395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3787:1:12",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3752:36:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2397,
                  "nodeType": "ExpressionStatement",
                  "src": "3752:36:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2399,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2378,
                        "src": "3841:12:12",
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
                      "id": 2398,
                      "name": "RemoveRegisteredUpgrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2307,
                      "src": "3804:23:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 2400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3804:59:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2401,
                  "nodeType": "EmitStatement",
                  "src": "3799:64:12"
                }
              ]
            },
            "documentation": "Removes an existing upgrade.\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments ",
            "id": 2403,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2381,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2380,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3132,
                  "src": "3523:9:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3523:9:12"
              }
            ],
            "name": "removeRegisteredUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2378,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2403,
                  "src": "3470:20:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2377,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3470:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3460:37:12"
            },
            "returnParameters": {
              "id": 2382,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3537:0:12"
            },
            "scope": 2423,
            "src": "3428:444:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2421,
              "nodeType": "Block",
              "src": "4204:293:12",
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
                        "id": 2413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2411,
                          "name": "_timeLockPeriod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2405,
                          "src": "4330:15:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2412,
                          "name": "timeLockPeriod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2291,
                          "src": "4348:14:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4330:32:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67",
                        "id": 2414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4376:61:12",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_146f6048453e5f6d46d175a3e8bab41117c5c39393941cd20e31021214beda19",
                          "typeString": "literal_string \"TimeLockUpgradeV2: New period must be greater than existing\""
                        },
                        "value": "TimeLockUpgradeV2: New period must be greater than existing"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_146f6048453e5f6d46d175a3e8bab41117c5c39393941cd20e31021214beda19",
                          "typeString": "literal_string \"TimeLockUpgradeV2: New period must be greater than existing\""
                        }
                      ],
                      "id": 2410,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "4309:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4309:138:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2416,
                  "nodeType": "ExpressionStatement",
                  "src": "4309:138:12"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2417,
                      "name": "timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2291,
                      "src": "4458:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2418,
                      "name": "_timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2405,
                      "src": "4475:15:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4458:32:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2420,
                  "nodeType": "ExpressionStatement",
                  "src": "4458:32:12"
                }
              ]
            },
            "documentation": "Change timeLockPeriod period. Generally called after initially settings have been set up.\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution",
            "id": 2422,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2408,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2407,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3132,
                  "src": "4190:9:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4190:9:12"
              }
            ],
            "name": "setTimeLockPeriod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2405,
                  "name": "_timeLockPeriod",
                  "nodeType": "VariableDeclaration",
                  "scope": 2422,
                  "src": "4135:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2404,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4135:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4125:39:12"
            },
            "returnParameters": {
              "id": 2409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4204:0:12"
            },
            "scope": 2423,
            "src": "4099:398:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2424,
        "src": "1108:3391:12"
      }
    ],
    "src": "597:3903:12"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
    "exportedSymbols": {
      "TimeLockUpgradeV2": [
        2423
      ]
    },
    "id": 2424,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2280,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:22:12"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 2282,
        "nodeType": "ImportDirective",
        "scope": 2424,
        "sourceUnit": 3199,
        "src": "621:80:12",
        "symbolAliases": [
          {
            "foreign": 2281,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 2284,
        "nodeType": "ImportDirective",
        "scope": 2424,
        "sourceUnit": 3090,
        "src": "702:77:12",
        "symbolAliases": [
          {
            "foreign": 2283,
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
              "id": 2285,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3198,
              "src": "1142:7:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$3198",
                "typeString": "contract Ownable"
              }
            },
            "id": 2286,
            "nodeType": "InheritanceSpecifier",
            "src": "1142:7:12"
          }
        ],
        "contractDependencies": [
          3198
        ],
        "contractKind": "contract",
        "documentation": "@title TimeLockUpgradeV2\n@author Set Protocol\n * The TimeLockUpgradeV2 contract contains a modifier for handling minimum time period updates\n * CHANGELOG:\n- Requires that the caller is the owner\n- New function to allow deletion of existing timelocks\n- Added upgradeData to UpgradeRegistered event",
        "fullyImplemented": true,
        "id": 2423,
        "linearizedBaseContracts": [
          2423,
          3198
        ],
        "name": "TimeLockUpgradeV2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2289,
            "libraryName": {
              "contractScope": null,
              "id": 2287,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3089,
              "src": "1162:8:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$3089",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1156:27:12",
            "typeName": {
              "id": 2288,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1175:7:12",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 2291,
            "name": "timeLockPeriod",
            "nodeType": "VariableDeclaration",
            "scope": 2423,
            "src": "1284:29:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2290,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1284:7:12",
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
            "id": 2295,
            "name": "timeLockedUpgrades",
            "nodeType": "VariableDeclaration",
            "scope": 2423,
            "src": "1399:53:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 2294,
              "keyType": {
                "id": 2292,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1407:7:12",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1399:27:12",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 2293,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1418:7:12",
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
            "id": 2303,
            "name": "UpgradeRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2297,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1536:28:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2296,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:12",
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
                  "id": 2299,
                  "indexed": false,
                  "name": "_timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1574:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1574:7:12",
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
                  "id": 2301,
                  "indexed": false,
                  "name": "_upgradeData",
                  "nodeType": "VariableDeclaration",
                  "scope": 2303,
                  "src": "1602:18:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2300,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1602:5:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:100:12"
            },
            "src": "1503:124:12"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2307,
            "name": "RemoveRegisteredUpgrade",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2305,
                  "indexed": true,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2307,
                  "src": "1672:28:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2304,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1672:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1662:44:12"
            },
            "src": "1633:74:12"
          },
          {
            "body": {
              "id": 2375,
              "nodeType": "Block",
              "src": "1787:1427:12",
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
                          "id": 2310,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3143,
                          "src": "1818:7:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1818:9:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e6572",
                        "id": 2312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1841:49:12",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a7cf1bfbe11f47641c2dac030f17e89d9f6664eaa73e9ae90b4aae5f46eaf1ae",
                          "typeString": "literal_string \"TimeLockUpgradeV2: The caller must be the owner\""
                        },
                        "value": "TimeLockUpgradeV2: The caller must be the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a7cf1bfbe11f47641c2dac030f17e89d9f6664eaa73e9ae90b4aae5f46eaf1ae",
                          "typeString": "literal_string \"TimeLockUpgradeV2: The caller must be the owner\""
                        }
                      ],
                      "id": 2309,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "1797:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1797:103:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2314,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:103:12"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2315,
                      "name": "timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2291,
                      "src": "2069:14:12",
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
                      "id": 2316,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2086:1:12",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2069:18:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 2373,
                  "nodeType": "IfStatement",
                  "src": "2065:1091:12",
                  "trueBody": {
                    "id": 2372,
                    "nodeType": "Block",
                    "src": "2089:1067:12",
                    "statements": [
                      {
                        "assignments": [
                          2319
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2319,
                            "name": "upgradeHash",
                            "nodeType": "VariableDeclaration",
                            "scope": 2372,
                            "src": "2278:19:12",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 2318,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2278:7:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 2327,
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
                                    "id": 2323,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3213,
                                    "src": "2365:3:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2324,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "data",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2365:8:12",
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
                                  "id": 2321,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3200,
                                  "src": "2327:3:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 2322,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2327:16:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 2325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2327:64:12",
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
                            "id": 2320,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3207,
                            "src": "2300:9:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 2326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2300:105:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2278:127:12"
                      },
                      {
                        "assignments": [
                          2329
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2329,
                            "name": "registrationTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 2372,
                            "src": "2420:24:12",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 2328,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2420:7:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 2333,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2330,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2295,
                            "src": "2447:18:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2332,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2331,
                            "name": "upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2319,
                            "src": "2466:11:12",
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
                          "src": "2447:31:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2420:58:12"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2334,
                            "name": "registrationTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2329,
                            "src": "2583:16:12",
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
                            "id": 2335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2603:1:12",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2583:21:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 2354,
                        "nodeType": "IfStatement",
                        "src": "2579:293:12",
                        "trueBody": {
                          "id": 2353,
                          "nodeType": "Block",
                          "src": "2606:266:12",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 2342,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 2337,
                                    "name": "timeLockedUpgrades",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2295,
                                    "src": "2624:18:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                      "typeString": "mapping(bytes32 => uint256)"
                                    }
                                  },
                                  "id": 2339,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 2338,
                                    "name": "upgradeHash",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2319,
                                    "src": "2643:11:12",
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
                                  "src": "2624:31:12",
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
                                    "id": 2340,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3203,
                                    "src": "2658:5:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 2341,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2658:15:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2624:49:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 2343,
                              "nodeType": "ExpressionStatement",
                              "src": "2624:49:12"
                            },
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 2345,
                                    "name": "upgradeHash",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2319,
                                    "src": "2736:11:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2346,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3203,
                                      "src": "2769:5:12",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 2347,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "timestamp",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2769:15:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2348,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3213,
                                      "src": "2806:3:12",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 2349,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "data",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2806:8:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_calldata_ptr",
                                      "typeString": "bytes calldata"
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
                                    },
                                    {
                                      "typeIdentifier": "t_bytes_calldata_ptr",
                                      "typeString": "bytes calldata"
                                    }
                                  ],
                                  "id": 2344,
                                  "name": "UpgradeRegistered",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2303,
                                  "src": "2697:17:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                    "typeString": "function (bytes32,uint256,bytes memory)"
                                  }
                                },
                                "id": 2350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2697:135:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 2351,
                              "nodeType": "EmitStatement",
                              "src": "2692:140:12"
                            },
                            {
                              "expression": null,
                              "functionReturnParameters": null,
                              "id": 2352,
                              "nodeType": "Return",
                              "src": "2851:7:12"
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
                              "id": 2362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 2356,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3203,
                                  "src": "2911:5:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 2357,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "timestamp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2911:15:12",
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
                                    "id": 2360,
                                    "name": "timeLockPeriod",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2291,
                                    "src": "2951:14:12",
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
                                    "id": 2358,
                                    "name": "registrationTime",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2329,
                                    "src": "2930:16:12",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 2359,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "add",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3068,
                                  "src": "2930:20:12",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 2361,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2930:36:12",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2911:55:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "54696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e",
                              "id": 2363,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2984:56:12",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_65c573895bc46e6760b220807491f24700562ffc41b2a549f73a050caa5c3e1e",
                                "typeString": "literal_string \"TimeLockUpgradeV2: Time lock period must have elapsed.\""
                              },
                              "value": "TimeLockUpgradeV2: Time lock period must have elapsed."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_65c573895bc46e6760b220807491f24700562ffc41b2a549f73a050caa5c3e1e",
                                "typeString": "literal_string \"TimeLockUpgradeV2: Time lock period must have elapsed.\""
                              }
                            ],
                            "id": 2355,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3216,
                              3217
                            ],
                            "referencedDeclaration": 3217,
                            "src": "2886:7:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2886:168:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2365,
                        "nodeType": "ExpressionStatement",
                        "src": "2886:168:12"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 2370,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 2366,
                              "name": "timeLockedUpgrades",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2295,
                              "src": "3109:18:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                                "typeString": "mapping(bytes32 => uint256)"
                              }
                            },
                            "id": 2368,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 2367,
                              "name": "upgradeHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2319,
                              "src": "3128:11:12",
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
                            "src": "3109:31:12",
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
                            "id": 2369,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3143:1:12",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3109:35:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2371,
                        "nodeType": "ExpressionStatement",
                        "src": "3109:35:12"
                      }
                    ]
                  }
                },
                {
                  "id": 2374,
                  "nodeType": "PlaceholderStatement",
                  "src": "3206:1:12"
                }
              ]
            },
            "documentation": null,
            "id": 2376,
            "name": "timeLockUpgrade",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1784:2:12"
            },
            "src": "1760:1454:12",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2402,
              "nodeType": "Block",
              "src": "3537:335:12",
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
                        "id": 2388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 2384,
                            "name": "timeLockedUpgrades",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2295,
                            "src": "3568:18:12",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                              "typeString": "mapping(bytes32 => uint256)"
                            }
                          },
                          "id": 2386,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 2385,
                            "name": "_upgradeHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2378,
                            "src": "3587:12:12",
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
                          "src": "3568:32:12",
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
                          "id": 2387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3604:1:12",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3568:37:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d7573742062652072656769737465726564",
                        "id": 2389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3619:76:12",
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
                      "id": 2383,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "3547:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3547:158:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2391,
                  "nodeType": "ExpressionStatement",
                  "src": "3547:158:12"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2392,
                        "name": "timeLockedUpgrades",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2295,
                        "src": "3752:18:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                          "typeString": "mapping(bytes32 => uint256)"
                        }
                      },
                      "id": 2394,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2393,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2378,
                        "src": "3771:12:12",
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
                      "src": "3752:32:12",
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
                      "id": 2395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3787:1:12",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3752:36:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2397,
                  "nodeType": "ExpressionStatement",
                  "src": "3752:36:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2399,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2378,
                        "src": "3841:12:12",
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
                      "id": 2398,
                      "name": "RemoveRegisteredUpgrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2307,
                      "src": "3804:23:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 2400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3804:59:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2401,
                  "nodeType": "EmitStatement",
                  "src": "3799:64:12"
                }
              ]
            },
            "documentation": "Removes an existing upgrade.\n     * @param  _upgradeHash    Keccack256 hash that uniquely identifies function called and arguments ",
            "id": 2403,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2381,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2380,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3132,
                  "src": "3523:9:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3523:9:12"
              }
            ],
            "name": "removeRegisteredUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2378,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2403,
                  "src": "3470:20:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2377,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3470:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3460:37:12"
            },
            "returnParameters": {
              "id": 2382,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3537:0:12"
            },
            "scope": 2423,
            "src": "3428:444:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2421,
              "nodeType": "Block",
              "src": "4204:293:12",
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
                        "id": 2413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2411,
                          "name": "_timeLockPeriod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2405,
                          "src": "4330:15:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2412,
                          "name": "timeLockPeriod",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2291,
                          "src": "4348:14:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4330:32:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67",
                        "id": 2414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4376:61:12",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_146f6048453e5f6d46d175a3e8bab41117c5c39393941cd20e31021214beda19",
                          "typeString": "literal_string \"TimeLockUpgradeV2: New period must be greater than existing\""
                        },
                        "value": "TimeLockUpgradeV2: New period must be greater than existing"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_146f6048453e5f6d46d175a3e8bab41117c5c39393941cd20e31021214beda19",
                          "typeString": "literal_string \"TimeLockUpgradeV2: New period must be greater than existing\""
                        }
                      ],
                      "id": 2410,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3216,
                        3217
                      ],
                      "referencedDeclaration": 3217,
                      "src": "4309:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4309:138:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2416,
                  "nodeType": "ExpressionStatement",
                  "src": "4309:138:12"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2417,
                      "name": "timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2291,
                      "src": "4458:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2418,
                      "name": "_timeLockPeriod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2405,
                      "src": "4475:15:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4458:32:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2420,
                  "nodeType": "ExpressionStatement",
                  "src": "4458:32:12"
                }
              ]
            },
            "documentation": "Change timeLockPeriod period. Generally called after initially settings have been set up.\n     * @param  _timeLockPeriod   Time in seconds that upgrades need to be evaluated before execution",
            "id": 2422,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2408,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2407,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3132,
                  "src": "4190:9:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4190:9:12"
              }
            ],
            "name": "setTimeLockPeriod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2405,
                  "name": "_timeLockPeriod",
                  "nodeType": "VariableDeclaration",
                  "scope": 2422,
                  "src": "4135:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2404,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4135:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4125:39:12"
            },
            "returnParameters": {
              "id": 2409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4204:0:12"
            },
            "scope": 2423,
            "src": "4099:398:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2424,
        "src": "1108:3391:12"
      }
    ],
    "src": "597:3903:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.916Z",
  "devdoc": {
    "author": "Set Protocol * The TimeLockUpgradeV2 contract contains a modifier for handling minimum time period updates * CHANGELOG: - Requires that the caller is the owner - New function to allow deletion of existing timelocks - Added upgradeData to UpgradeRegistered event",
    "methods": {
      "isOwner()": {
        "return": "true if `msg.sender` is the owner of the contract."
      },
      "owner()": {
        "return": "the address of the owner."
      },
      "removeRegisteredUpgrade(bytes32)": {
        "params": {
          "_upgradeHash": "Keccack256 hash that uniquely identifies function called and arguments "
        }
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
    "title": "TimeLockUpgradeV2"
  },
  "userdoc": {
    "methods": {
      "removeRegisteredUpgrade(bytes32)": {
        "notice": "Removes an existing upgrade."
      },
      "renounceOwnership()": {
        "notice": "Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "setTimeLockPeriod(uint256)": {
        "notice": "Change timeLockPeriod period. Generally called after initially settings have been set up."
      }
    }
  }
}