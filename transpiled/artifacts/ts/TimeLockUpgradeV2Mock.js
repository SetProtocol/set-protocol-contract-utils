"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLockUpgradeV2Mock = {
    "contractName": "TimeLockUpgradeV2Mock",
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
            "constant": true,
            "inputs": [],
            "name": "testUint",
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
                    "name": "_testUint",
                    "type": "uint256"
                }
            ],
            "name": "testTimeLockUpgrade",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_testUint\",\"type\":\"uint256\"}],\"name\":\"testTimeLockUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"removeRegisteredUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testUint\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_upgradeData\",\"type\":\"bytes\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"removeRegisteredUpgrade(bytes32)\":{\"params\":{\"_upgradeHash\":\"Keccack256 hash that uniquely identifies function called and arguments \"}},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}}},\"userdoc\":{\"methods\":{\"removeRegisteredUpgrade(bytes32)\":{\"notice\":\"Removes an existing upgrade.\"},\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeV2Mock.sol\":\"TimeLockUpgradeV2Mock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol\":{\"keccak256\":\"0x7c8188e262d4db7d352130c56c0eab85a6f9f89afb5fe08efe49084557e3e600\",\"urls\":[\"bzzr://5b0a3762af16f66a60bdb9cc1bcb14a7066bd3c54dd80c6333a9f07118800340\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeV2Mock.sol\":{\"keccak256\":\"0x1179f2b8b870245c19d6c3fd65ab6b8cd3ad6107e2dac135dbe3e9444c32ae9a\",\"urls\":[\"bzzr://d2ef1dcb73dc923982a9dd67d4825ce3a3b1cdb2c6c89c56e4287c89536dc9d5\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36106b3806100576000396000f3fe608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480639303b16f116100835780639303b16f14610141578063a6554e5d1461015e578063cc75c9b01461017b578063e3850c3d14610198578063f2fde38b146101a0576100bb565b80631766486d146100c0578063715018a6146100ef57806378446bc1146100f95780638da5cb5b146101015780638f32d59b14610125575b600080fd5b6100dd600480360360208110156100d657600080fd5b50356101c6565b60408051918252519081900360200190f35b6100f76101d8565b005b6100dd610240565b610109610246565b60408051600160a060020a039092168252519081900360200190f35b61012d610255565b604080519115158252519081900360200190f35b6100f76004803603602081101561015757600080fd5b5035610266565b6100f76004803603602081101561017457600080fd5b50356102bf565b6100f76004803603602081101561019157600080fd5b5035610450565b6100dd6104e9565b6100f7600480360360208110156101b657600080fd5b5035600160a060020a03166104ef565b60026020526000908152604090205481565b6101e0610255565b6101e957600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61026e610255565b61027757600080fd5b60015481116102ba5760405160e560020a62461bcd02815260040180806020018281038252603b81526020018061059e603b913960400191505060405180910390fd5b600155565b6102c7610255565b6103055760405160e560020a62461bcd02815260040180806020018281038252602f815260200180610659602f913960400191505060405180910390fd5b600154156104475760008036604051602001808383808284376040805191909301818103601f19018252835280516020918201206000818152600290925292902054919550909350505081151590506103e157426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061044d565b6001546103f590829063ffffffff61050916565b4210156104365760405160e560020a62461bcd0281526004018080602001828103825260368152602001806106236036913960400191505060405180910390fd5b506000908152600260205260408120555b60038190555b50565b610458610255565b61046157600080fd5b6000818152600260205260409020546104ae5760405160e560020a62461bcd02815260040180806020018281038252604a8152602001806105d9604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60035481565b6104f7610255565b61050057600080fd5b61044d81610522565b60008282018381101561051b57600080fd5b9392505050565b600160a060020a03811661053557600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d757374206265207265676973746572656454696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e6572a165627a7a72305820ca1e9c61c3beb5852bdbdf9593373179a91578838308dcf6229adbc39b3ed8e00029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480639303b16f116100835780639303b16f14610141578063a6554e5d1461015e578063cc75c9b01461017b578063e3850c3d14610198578063f2fde38b146101a0576100bb565b80631766486d146100c0578063715018a6146100ef57806378446bc1146100f95780638da5cb5b146101015780638f32d59b14610125575b600080fd5b6100dd600480360360208110156100d657600080fd5b50356101c6565b60408051918252519081900360200190f35b6100f76101d8565b005b6100dd610240565b610109610246565b60408051600160a060020a039092168252519081900360200190f35b61012d610255565b604080519115158252519081900360200190f35b6100f76004803603602081101561015757600080fd5b5035610266565b6100f76004803603602081101561017457600080fd5b50356102bf565b6100f76004803603602081101561019157600080fd5b5035610450565b6100dd6104e9565b6100f7600480360360208110156101b657600080fd5b5035600160a060020a03166104ef565b60026020526000908152604090205481565b6101e0610255565b6101e957600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61026e610255565b61027757600080fd5b60015481116102ba5760405160e560020a62461bcd02815260040180806020018281038252603b81526020018061059e603b913960400191505060405180910390fd5b600155565b6102c7610255565b6103055760405160e560020a62461bcd02815260040180806020018281038252602f815260200180610659602f913960400191505060405180910390fd5b600154156104475760008036604051602001808383808284376040805191909301818103601f19018252835280516020918201206000818152600290925292902054919550909350505081151590506103e157426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061044d565b6001546103f590829063ffffffff61050916565b4210156104365760405160e560020a62461bcd0281526004018080602001828103825260368152602001806106236036913960400191505060405180910390fd5b506000908152600260205260408120555b60038190555b50565b610458610255565b61046157600080fd5b6000818152600260205260409020546104ae5760405160e560020a62461bcd02815260040180806020018281038252604a8152602001806105d9604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60035481565b6104f7610255565b61050057600080fd5b61044d81610522565b60008282018381101561051b57600080fd5b9392505050565b600160a060020a03811661053557600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905556fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d757374206265207265676973746572656454696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e6572a165627a7a72305820ca1e9c61c3beb5852bdbdf9593373179a91578838308dcf6229adbc39b3ed8e00029",
    "sourceMap": "154:238:21:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;154:238:21;;;;;;",
    "deployedSourceMap": "154:238:21:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;154:238:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1399:53:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1399:53:12;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1284:29:12;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;4099:398:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4099:398:12;;:::i;246:144:21:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;246:144:21;;:::i;3428:444:12:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3428:444:12;;:::i;216:23:21:-;;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1399:53:12:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1284:29:12:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;4099:398:12:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;4348:14:12;;4330:15;:32;4309:138;;;;-1:-1:-1;;;;;4309:138:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4458:14;:32;4099:398::o;246:144:21:-;1818:9:12;:7;:9::i;:::-;1797:103;;;;-1:-1:-1;;;;;1797:103:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2069:14;;:18;2065:1091;;2278:19;2365:8;;2327:64;;;;;;;30:3:-1;22:6;14;1:33;2327:64:12;;;45:16:-1;;;;26:21;;;-1:-1;;22:32;6:49;;2327:64:12;;2300:105;;49:4:-1;2300:105:12;;;;2420:24;2447:31;;;:18;:31;;;;;;;2300:105;;-1:-1:-1;2447:31:12;;-1:-1:-1;;;2583:21:12;;2579:293;;-1:-1:-1;2579:293:12;;2658:15;2624:18;:31;2643:11;2624:31;;;;;;;;;;;:49;;;;2736:11;2697:135;2769:15;2806:8;;2697:135;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;;74:27;2697:135:12;;137:4:-1;117:14;;;-1:-1;;113:30;157:16;;;2697:135:12;;;;-1:-1:-1;2697:135:12;;-1:-1:-1;;;;;2697:135:12;2851:7;;;;2579:293;2951:14;;2930:36;;:16;;:36;:20;:36;:::i;:::-;2911:15;:55;;2886:168;;;;-1:-1:-1;;;;;2886:168:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3143:1:12;3109:31;;;:18;:31;;;;;:35;2065:1091;363:8:21;:20;;;246:144;;:::o;3428:444:12:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3568:32:12;;;;:18;:32;;;;;;3547:158;;;;-1:-1:-1;;;;;3547:158:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3787:1;3752:32;;;:18;:32;;;;;;:36;;;3804:59;3771:12;;3804:59;;;3428:444;:::o;216:23:21:-;;;;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;1439:145;-1:-1:-1;;;1439:145:23:o;1982:183:24:-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o",
    "source": "pragma solidity 0.5.7;\n\nimport { TimeLockUpgradeV2 } from \"../lib/TimeLockUpgradeV2.sol\";\n\n// Mock contract implementation of TimeLockUpgradeV2 functions\ncontract TimeLockUpgradeV2Mock is\n    TimeLockUpgradeV2\n{\n    uint256 public testUint;\n\n    function testTimeLockUpgrade(\n        uint256 _testUint\n    )\n        external\n        timeLockUpgrade\n    {\n        testUint = _testUint;\n    }\n}\n\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeV2Mock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeV2Mock.sol",
        "exportedSymbols": {
            "TimeLockUpgradeV2Mock": [
                2927
            ]
        },
        "id": 2928,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2908,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:21"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
                "file": "../lib/TimeLockUpgradeV2.sol",
                "id": 2910,
                "nodeType": "ImportDirective",
                "scope": 2928,
                "sourceUnit": 2424,
                "src": "24:65:21",
                "symbolAliases": [
                    {
                        "foreign": 2909,
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
                            "id": 2911,
                            "name": "TimeLockUpgradeV2",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2423,
                            "src": "192:17:21",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgradeV2_$2423",
                                "typeString": "contract TimeLockUpgradeV2"
                            }
                        },
                        "id": 2912,
                        "nodeType": "InheritanceSpecifier",
                        "src": "192:17:21"
                    }
                ],
                "contractDependencies": [
                    2423,
                    3198
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2927,
                "linearizedBaseContracts": [
                    2927,
                    2423,
                    3198
                ],
                "name": "TimeLockUpgradeV2Mock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 2914,
                        "name": "testUint",
                        "nodeType": "VariableDeclaration",
                        "scope": 2927,
                        "src": "216:23:21",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2913,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "216:7:21",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2925,
                            "nodeType": "Block",
                            "src": "353:37:21",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2923,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2921,
                                            "name": "testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2914,
                                            "src": "363:8:21",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2922,
                                            "name": "_testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2916,
                                            "src": "374:9:21",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "363:20:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2924,
                                    "nodeType": "ExpressionStatement",
                                    "src": "363:20:21"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2926,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2919,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2918,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "333:15:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "333:15:21"
                            }
                        ],
                        "name": "testTimeLockUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2916,
                                    "name": "_testUint",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2926,
                                    "src": "284:17:21",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2915,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "284:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "274:33:21"
                        },
                        "returnParameters": {
                            "id": 2920,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "353:0:21"
                        },
                        "scope": 2927,
                        "src": "246:144:21",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2928,
                "src": "154:238:21"
            }
        ],
        "src": "0:394:21"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeV2Mock.sol",
        "exportedSymbols": {
            "TimeLockUpgradeV2Mock": [
                2927
            ]
        },
        "id": 2928,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2908,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:21"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
                "file": "../lib/TimeLockUpgradeV2.sol",
                "id": 2910,
                "nodeType": "ImportDirective",
                "scope": 2928,
                "sourceUnit": 2424,
                "src": "24:65:21",
                "symbolAliases": [
                    {
                        "foreign": 2909,
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
                            "id": 2911,
                            "name": "TimeLockUpgradeV2",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2423,
                            "src": "192:17:21",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgradeV2_$2423",
                                "typeString": "contract TimeLockUpgradeV2"
                            }
                        },
                        "id": 2912,
                        "nodeType": "InheritanceSpecifier",
                        "src": "192:17:21"
                    }
                ],
                "contractDependencies": [
                    2423,
                    3198
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2927,
                "linearizedBaseContracts": [
                    2927,
                    2423,
                    3198
                ],
                "name": "TimeLockUpgradeV2Mock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 2914,
                        "name": "testUint",
                        "nodeType": "VariableDeclaration",
                        "scope": 2927,
                        "src": "216:23:21",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2913,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "216:7:21",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2925,
                            "nodeType": "Block",
                            "src": "353:37:21",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2923,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2921,
                                            "name": "testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2914,
                                            "src": "363:8:21",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2922,
                                            "name": "_testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2916,
                                            "src": "374:9:21",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "363:20:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2924,
                                    "nodeType": "ExpressionStatement",
                                    "src": "363:20:21"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2926,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2919,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2918,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "333:15:21",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "333:15:21"
                            }
                        ],
                        "name": "testTimeLockUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2916,
                                    "name": "_testUint",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2926,
                                    "src": "284:17:21",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2915,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "284:7:21",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "274:33:21"
                        },
                        "returnParameters": {
                            "id": 2920,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "353:0:21"
                        },
                        "scope": 2927,
                        "src": "246:144:21",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2928,
                "src": "154:238:21"
            }
        ],
        "src": "0:394:21"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.938Z",
    "devdoc": {
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
        }
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
};
//# sourceMappingURL=TimeLockUpgradeV2Mock.js.map