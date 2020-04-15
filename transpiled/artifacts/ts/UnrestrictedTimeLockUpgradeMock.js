"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrestrictedTimeLockUpgradeMock = {
    "contractName": "UnrestrictedTimeLockUpgradeMock",
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
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_testUint\",\"type\":\"uint256\"}],\"name\":\"testTimeLockUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"removeRegisteredUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testUint\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}}},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/UnrestrictedTimeLockUpgradeMock.sol\":\"UnrestrictedTimeLockUpgradeMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol\":{\"keccak256\":\"0xdd668144ac30026f5c93e51c1c4d496edbe5497d5cbf969e72ef86cc4666960b\",\"urls\":[\"bzzr://72ff5586aea6e8de13ab4aaf72cbc03e6aaed86599c2500f73d7416b0b8d9517\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/UnrestrictedTimeLockUpgradeMock.sol\":{\"keccak256\":\"0x8cc51bbab2f143e9061b89388c293dd4b2d11126d54399965c9f0444e2d70081\",\"urls\":[\"bzzr://0a49e2a8c9d99e6ef06debddfa464a0c3ca6f28cbe27c13ec25c0fe923afa22e\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36107ab806100576000396000f3fe608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480639303b16f116100835780639303b16f14610125578063a6554e5d14610138578063cc75c9b01461014b578063e3850c3d1461015e578063f2fde38b14610166576100bb565b80631766486d146100c0578063715018a6146100e957806378446bc1146100f35780638da5cb5b146100fb5780638f32d59b14610110575b600080fd5b6100d36100ce366004610515565b610179565b6040516100e0919061072a565b60405180910390f35b6100f161018b565b005b6100d36101f3565b6101036101f9565b6040516100e091906106c3565b610118610208565b6040516100e091906106d1565b6100f1610133366004610515565b610219565b6100f1610146366004610515565b610273565b6100f1610159366004610515565b610380565b6100d361039a565b6100f16101743660046104ef565b6103a0565b60026020526000908152604090205481565b610193610208565b61019c57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b610221610208565b61022a57600080fd5b600154811161026e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102659061071a565b60405180910390fd5b600155565b60015461028457600381905561037d565b600080366040516020016102999291906106b6565b60408051601f198184030181529181528151602092830120600081815260029093529120549091508061031a5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d3749161030b918591906106df565b60405180910390a1505061037d565b60015461032e90829063ffffffff6103ba16565b421015610367576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102659061070a565b5060009081526002602052604081205560038190555b50565b610388610208565b61039157600080fd5b61037d816103d5565b60035481565b6103a8610208565b6103b157600080fd5b61037d81610455565b6000828201838110156103cc57600080fd5b90505b92915050565b60008181526002602052604090205461041a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610265906106fa565b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b600160a060020a03811661046857600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60006104dc8235610746565b9392505050565b60006104dc8235610756565b60006020828403121561050157600080fd5b600061050d84846104d0565b949350505050565b60006020828403121561052757600080fd5b600061050d84846104e3565b61053c81610746565b82525050565b61053c81610751565b61053c81610756565b60006105608385610738565b935061056d838584610765565b50500190565b6000610580604a8361073d565b7f54696d654c6f636b5570677261646556322e72656d6f7665526567697374657281527f6564557067726164653a20557067726164652068617368206d7573742062652060208201527f7265676973746572656400000000000000000000000000000000000000000000604082015260600192915050565b600061060560348361073d565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b600061066460398361073d565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061050d828486610554565b602081016103cf8284610533565b602081016103cf8284610542565b604081016106ed828561054b565b6104dc602083018461054b565b602080825281016103cf81610573565b602080825281016103cf816105f8565b602080825281016103cf81610657565b602081016103cf828461054b565b919050565b90815260200190565b60006103cf82610759565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a72305820ae8290dd328e2fa3e98c1a14e880e14e3efbcb3ed021ac95284878e2314aa9e96c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480639303b16f116100835780639303b16f14610125578063a6554e5d14610138578063cc75c9b01461014b578063e3850c3d1461015e578063f2fde38b14610166576100bb565b80631766486d146100c0578063715018a6146100e957806378446bc1146100f35780638da5cb5b146100fb5780638f32d59b14610110575b600080fd5b6100d36100ce366004610515565b610179565b6040516100e0919061072a565b60405180910390f35b6100f161018b565b005b6100d36101f3565b6101036101f9565b6040516100e091906106c3565b610118610208565b6040516100e091906106d1565b6100f1610133366004610515565b610219565b6100f1610146366004610515565b610273565b6100f1610159366004610515565b610380565b6100d361039a565b6100f16101743660046104ef565b6103a0565b60026020526000908152604090205481565b610193610208565b61019c57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b610221610208565b61022a57600080fd5b600154811161026e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102659061071a565b60405180910390fd5b600155565b60015461028457600381905561037d565b600080366040516020016102999291906106b6565b60408051601f198184030181529181528151602092830120600081815260029093529120549091508061031a5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d3749161030b918591906106df565b60405180910390a1505061037d565b60015461032e90829063ffffffff6103ba16565b421015610367576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102659061070a565b5060009081526002602052604081205560038190555b50565b610388610208565b61039157600080fd5b61037d816103d5565b60035481565b6103a8610208565b6103b157600080fd5b61037d81610455565b6000828201838110156103cc57600080fd5b90505b92915050565b60008181526002602052604090205461041a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610265906106fa565b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b600160a060020a03811661046857600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60006104dc8235610746565b9392505050565b60006104dc8235610756565b60006020828403121561050157600080fd5b600061050d84846104d0565b949350505050565b60006020828403121561052757600080fd5b600061050d84846104e3565b61053c81610746565b82525050565b61053c81610751565b61053c81610756565b60006105608385610738565b935061056d838584610765565b50500190565b6000610580604a8361073d565b7f54696d654c6f636b5570677261646556322e72656d6f7665526567697374657281527f6564557067726164653a20557067726164652068617368206d7573742062652060208201527f7265676973746572656400000000000000000000000000000000000000000000604082015260600192915050565b600061060560348361073d565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b600061066460398361073d565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061050d828486610554565b602081016103cf8284610533565b602081016103cf8284610542565b604081016106ed828561054b565b6104dc602083018461054b565b602080825281016103cf81610573565b602080825281016103cf816105f8565b602080825281016103cf81610657565b602081016103cf828461054b565b919050565b90815260200190565b60006103cf82610759565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a72305820ae8290dd328e2fa3e98c1a14e880e14e3efbcb3ed021ac95284878e2314aa9e96c6578706572696d656e74616cf50037",
    "sourceMap": "220:434:22:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;220:434:22;;;;;;",
    "deployedSourceMap": "220:434:22:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;220:434:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1110:29:11;;;:::i;659:77:24:-;;;:::i;:::-;;;;;;;;979:90;;;:::i;:::-;;;;;;;;2977:396:11;;;;;;;;;:::i;332:144:22:-;;;;;;;;;:::i;482:170::-;;;;;;;;;:::i;302:23::-;;;:::i;1731:107:24:-;;;;;;;;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;332:144:22:-;1646:14:11;;1642:72;;449:8:22;:20;;;1697:7:11;;1642:72;1891:19;1970:8;;1936:56;;;;;;;;;;;;;;-1:-1:-1;;26:21;;;22:32;6:49;;1936:56:11;;;1913:89;;49:4:-1;1913:89:11;;;;2013:24;2040:31;;;:18;:31;;;;;;1913:89;;-1:-1:-1;2168:21:11;2164:235;;2205:31;;;;:18;:31;;;;;;;2239:15;2205:49;;;;2274:93;;;;;;2224:11;;2239:15;2274:93;;;;;;;;;;2382:7;;;;2164:235;2470:14;;2449:36;;:16;;:36;:20;:36;:::i;:::-;2430:15;:55;;2409:154;;;;;;;;;;;;;;-1:-1:-1;2644:1:11;2610:31;;;:18;:31;;;;;:35;449:8:22;:20;;;332:144;;:::o;482:170::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;600:45:22;632:12;600:31;:45::i;302:23::-;;;;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;-1:-1:-1;1439:145:23;;;;;:::o;1581:431:13:-;1710:32;;;;:18;:32;;;;;;1689:158;;;;;;;;;;;;;;1929:1;1894:32;;;:18;:32;;;;;;:36;;;1946:59;1913:12;;1946:59;;;1581:431;:::o;1982:183:24:-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;57:66;-1:-1;;;57:66;130:118;;197:46;235:6;222:20;197:46;;380:241;;484:2;472:9;463:7;459:23;455:32;452:2;;;500:1;497;490:12;452:2;535:1;552:53;597:7;577:9;552:53;;;542:63;446:175;-1:-1;;;;446:175;628:241;;732:2;720:9;711:7;707:23;703:32;700:2;;;748:1;745;738:12;700:2;783:1;800:53;845:7;825:9;800:53;;1124:120;1207:31;1232:5;1207:31;;;1202:3;1195:44;1189:55;;;1251:111;1328:28;1350:5;1328:28;;1369:120;1452:31;1477:5;1452:31;;1517:300;;1648:88;1729:6;1724:3;1648:88;;;1641:95;;1741:43;1777:6;1772:3;1765:5;1741:43;;;-1:-1;;1796:16;;1635:182;1825:566;;1985:67;2049:2;2044:3;1985:67;;;2085:66;2065:87;;2186:66;2181:2;2172:12;;2165:88;2287:66;2282:2;2273:12;;2266:88;2382:2;2373:12;;1971:420;-1:-1;;1971:420;2400:465;;2560:67;2624:2;2619:3;2560:67;;;2660:66;2640:87;;2761:66;2756:2;2747:12;;2740:88;2856:2;2847:12;;2546:319;-1:-1;;2546:319;2874:465;;3034:67;3098:2;3093:3;3034:67;;;3134:66;3114:87;;3235:66;3230:2;3221:12;;3214:88;3330:2;3321:12;;3020:319;-1:-1;;3020:319;3474:282;;3628:103;3727:3;3718:6;3710;3628:103;;3763:213;3881:2;3866:18;;3895:71;3870:9;3939:6;3895:71;;3983:201;4095:2;4080:18;;4109:65;4084:9;4147:6;4109:65;;4191:324;4337:2;4322:18;;4351:71;4326:9;4395:6;4351:71;;;4433:72;4501:2;4490:9;4486:18;4477:6;4433:72;;4522:407;4713:2;4727:47;;;4698:18;;4788:131;4698:18;4788:131;;4936:407;5127:2;5141:47;;;5112:18;;5202:131;5112:18;5202:131;;5350:407;5541:2;5555:47;;;5526:18;;5616:131;5526:18;5616:131;;5764:213;5882:2;5867:18;;5896:71;5871:9;5940:6;5896:71;;5985:144;6120:3;6098:31;-1:-1;6098:31;6138:163;6241:19;;;6290:4;6281:14;;6234:67;6309:105;;6378:31;6403:5;6378:31;;6421:92;6494:13;6487:21;;6470:43;6520:79;6589:5;6572:27;6606:128;-1:-1;;;;;6675:54;;6658:76;7247:145;7328:6;7323:3;7318;7305:30;-1:-1;7384:1;7366:16;;7359:27;7298:94",
    "source": "pragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { UnrestrictedTimeLockUpgrade } from \"../lib/UnrestrictedTimeLockUpgrade.sol\";\n\n// Mock contract implementation of UnrestrictedTimeLockUpgrade functions\ncontract UnrestrictedTimeLockUpgradeMock is\n    UnrestrictedTimeLockUpgrade\n{\n    uint256 public testUint;\n\n    function testTimeLockUpgrade(\n        uint256 _testUint\n    )\n        external\n        timeLockUpgrade\n    {\n        testUint = _testUint;\n    }\n\n    function removeRegisteredUpgrade(\n        bytes32 _upgradeHash\n    )\n        external\n        onlyOwner\n    {\n        removeRegisteredUpgradeInternal(_upgradeHash);\n    }\n}\n\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/UnrestrictedTimeLockUpgradeMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/UnrestrictedTimeLockUpgradeMock.sol",
        "exportedSymbols": {
            "UnrestrictedTimeLockUpgradeMock": [
                2961
            ]
        },
        "id": 2962,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2929,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:22"
            },
            {
                "id": 2930,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:22"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
                "file": "../lib/UnrestrictedTimeLockUpgrade.sol",
                "id": 2932,
                "nodeType": "ImportDirective",
                "scope": 2962,
                "sourceUnit": 2462,
                "src": "60:85:22",
                "symbolAliases": [
                    {
                        "foreign": 2931,
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
                            "id": 2933,
                            "name": "UnrestrictedTimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2461,
                            "src": "268:27:22",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_UnrestrictedTimeLockUpgrade_$2461",
                                "typeString": "contract UnrestrictedTimeLockUpgrade"
                            }
                        },
                        "id": 2934,
                        "nodeType": "InheritanceSpecifier",
                        "src": "268:27:22"
                    }
                ],
                "contractDependencies": [
                    2278,
                    2461,
                    3198
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2961,
                "linearizedBaseContracts": [
                    2961,
                    2461,
                    2278,
                    3198
                ],
                "name": "UnrestrictedTimeLockUpgradeMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 2936,
                        "name": "testUint",
                        "nodeType": "VariableDeclaration",
                        "scope": 2961,
                        "src": "302:23:22",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2935,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "302:7:22",
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
                            "id": 2947,
                            "nodeType": "Block",
                            "src": "439:37:22",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2945,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2943,
                                            "name": "testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2936,
                                            "src": "449:8:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2944,
                                            "name": "_testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2938,
                                            "src": "460:9:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "449:20:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2946,
                                    "nodeType": "ExpressionStatement",
                                    "src": "449:20:22"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2948,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2941,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2940,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "419:15:22",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "419:15:22"
                            }
                        ],
                        "name": "testTimeLockUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2938,
                                    "name": "_testUint",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2948,
                                    "src": "370:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2937,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "370:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "360:33:22"
                        },
                        "returnParameters": {
                            "id": 2942,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "439:0:22"
                        },
                        "scope": 2961,
                        "src": "332:144:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2959,
                            "nodeType": "Block",
                            "src": "590:62:22",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2956,
                                                "name": "_upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2950,
                                                "src": "632:12:22",
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
                                            "id": 2955,
                                            "name": "removeRegisteredUpgradeInternal",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2460,
                                            "src": "600:31:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32)"
                                            }
                                        },
                                        "id": 2957,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "600:45:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2958,
                                    "nodeType": "ExpressionStatement",
                                    "src": "600:45:22"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2960,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2953,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2952,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "576:9:22",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "576:9:22"
                            }
                        ],
                        "name": "removeRegisteredUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2951,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2950,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2960,
                                    "src": "524:20:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2949,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "524:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "514:36:22"
                        },
                        "returnParameters": {
                            "id": 2954,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "590:0:22"
                        },
                        "scope": 2961,
                        "src": "482:170:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2962,
                "src": "220:434:22"
            }
        ],
        "src": "0:656:22"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/UnrestrictedTimeLockUpgradeMock.sol",
        "exportedSymbols": {
            "UnrestrictedTimeLockUpgradeMock": [
                2961
            ]
        },
        "id": 2962,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2929,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:22"
            },
            {
                "id": 2930,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:22"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol",
                "file": "../lib/UnrestrictedTimeLockUpgrade.sol",
                "id": 2932,
                "nodeType": "ImportDirective",
                "scope": 2962,
                "sourceUnit": 2462,
                "src": "60:85:22",
                "symbolAliases": [
                    {
                        "foreign": 2931,
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
                            "id": 2933,
                            "name": "UnrestrictedTimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2461,
                            "src": "268:27:22",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_UnrestrictedTimeLockUpgrade_$2461",
                                "typeString": "contract UnrestrictedTimeLockUpgrade"
                            }
                        },
                        "id": 2934,
                        "nodeType": "InheritanceSpecifier",
                        "src": "268:27:22"
                    }
                ],
                "contractDependencies": [
                    2278,
                    2461,
                    3198
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2961,
                "linearizedBaseContracts": [
                    2961,
                    2461,
                    2278,
                    3198
                ],
                "name": "UnrestrictedTimeLockUpgradeMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 2936,
                        "name": "testUint",
                        "nodeType": "VariableDeclaration",
                        "scope": 2961,
                        "src": "302:23:22",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 2935,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "302:7:22",
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
                            "id": 2947,
                            "nodeType": "Block",
                            "src": "439:37:22",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2945,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2943,
                                            "name": "testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2936,
                                            "src": "449:8:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2944,
                                            "name": "_testUint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2938,
                                            "src": "460:9:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "449:20:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2946,
                                    "nodeType": "ExpressionStatement",
                                    "src": "449:20:22"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2948,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2941,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2940,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "419:15:22",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "419:15:22"
                            }
                        ],
                        "name": "testTimeLockUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2938,
                                    "name": "_testUint",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2948,
                                    "src": "370:17:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2937,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "370:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "360:33:22"
                        },
                        "returnParameters": {
                            "id": 2942,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "439:0:22"
                        },
                        "scope": 2961,
                        "src": "332:144:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2959,
                            "nodeType": "Block",
                            "src": "590:62:22",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2956,
                                                "name": "_upgradeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2950,
                                                "src": "632:12:22",
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
                                            "id": 2955,
                                            "name": "removeRegisteredUpgradeInternal",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2460,
                                            "src": "600:31:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32)"
                                            }
                                        },
                                        "id": 2957,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "600:45:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2958,
                                    "nodeType": "ExpressionStatement",
                                    "src": "600:45:22"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2960,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2953,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2952,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "576:9:22",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "576:9:22"
                            }
                        ],
                        "name": "removeRegisteredUpgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2951,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2950,
                                    "name": "_upgradeHash",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2960,
                                    "src": "524:20:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2949,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "524:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "514:36:22"
                        },
                        "returnParameters": {
                            "id": 2954,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "590:0:22"
                        },
                        "scope": 2961,
                        "src": "482:170:22",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2962,
                "src": "220:434:22"
            }
        ],
        "src": "0:656:22"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.940Z",
    "devdoc": {
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
        }
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
//# sourceMappingURL=UnrestrictedTimeLockUpgradeMock.js.map