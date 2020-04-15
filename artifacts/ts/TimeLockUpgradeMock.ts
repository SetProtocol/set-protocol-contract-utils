export const TimeLockUpgradeMock = 
{
  "contractName": "TimeLockUpgradeMock",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_testUint\",\"type\":\"uint256\"}],\"name\":\"testTimeLockUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testUint\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}}},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeMock.sol\":\"TimeLockUpgradeMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeMock.sol\":{\"keccak256\":\"0x8d18909b242ca8d50b0a5e666785c9606547851d07b0ea7cd4555562cd37d389\",\"urls\":[\"bzzr://bd3724e2c5171f18bd60987b0de1eb6659ef07c621361f162c87d4e60d15e03f\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
  "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361065e806100576000396000f3fe608060405234801561001057600080fd5b50600436106100b0576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100835780638f32d59b146101055780639303b16f1461011a578063a6554e5d1461012d578063e3850c3d14610140578063f2fde38b14610148576100b0565b80631766486d146100b5578063715018a6146100de57806378446bc1146100e85780638da5cb5b146100f0575b600080fd5b6100c86100c336600461045d565b61015b565b6040516100d591906105dd565b60405180910390f35b6100e661016d565b005b6100c86101d5565b6100f86101db565b6040516100d59190610586565b61010d6101ea565b6040516100d59190610594565b6100e661012836600461045d565b6101fb565b6100e661013b36600461045d565b610255565b6100c8610362565b6100e6610156366004610437565b610368565b60026020526000908152604090205481565b6101756101ea565b61017e57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b6102036101ea565b61020c57600080fd5b6001548111610250576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610247906105cd565b60405180910390fd5b600155565b60015461026657600381905561035f565b6000803660405160200161027b929190610579565b60408051601f19818403018152918152815160209283012060008181526002909352912054909150806102fc5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374916102ed918591906105a2565b60405180910390a1505061035f565b60015461031090829063ffffffff61038216565b421015610349576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610247906105bd565b5060009081526002602052604081205560038190555b50565b60035481565b6103706101ea565b61037957600080fd5b61035f8161039d565b60008282018381101561039457600080fd5b90505b92915050565b600160a060020a0381166103b057600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600061042482356105f9565b9392505050565b60006104248235610609565b60006020828403121561044957600080fd5b60006104558484610418565b949350505050565b60006020828403121561046f57600080fd5b6000610455848461042b565b610484816105f9565b82525050565b61048481610604565b61048481610609565b60006104a883856105eb565b93506104b5838584610618565b50500190565b60006104c86034836105f0565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b60006105276039836105f0565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061045582848661049c565b60208101610397828461047b565b60208101610397828461048a565b604081016105b08285610493565b6104246020830184610493565b60208082528101610397816104bb565b602080825281016103978161051a565b602081016103978284610493565b919050565b90815260200190565b60006103978261060c565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a723058204517665049489914cf29934db9036c2d3830865c894aa4d903f714a5bed8e80a6c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b0576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100835780638f32d59b146101055780639303b16f1461011a578063a6554e5d1461012d578063e3850c3d14610140578063f2fde38b14610148576100b0565b80631766486d146100b5578063715018a6146100de57806378446bc1146100e85780638da5cb5b146100f0575b600080fd5b6100c86100c336600461045d565b61015b565b6040516100d591906105dd565b60405180910390f35b6100e661016d565b005b6100c86101d5565b6100f86101db565b6040516100d59190610586565b61010d6101ea565b6040516100d59190610594565b6100e661012836600461045d565b6101fb565b6100e661013b36600461045d565b610255565b6100c8610362565b6100e6610156366004610437565b610368565b60026020526000908152604090205481565b6101756101ea565b61017e57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b6102036101ea565b61020c57600080fd5b6001548111610250576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610247906105cd565b60405180910390fd5b600155565b60015461026657600381905561035f565b6000803660405160200161027b929190610579565b60408051601f19818403018152918152815160209283012060008181526002909352912054909150806102fc5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374916102ed918591906105a2565b60405180910390a1505061035f565b60015461031090829063ffffffff61038216565b421015610349576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610247906105bd565b5060009081526002602052604081205560038190555b50565b60035481565b6103706101ea565b61037957600080fd5b61035f8161039d565b60008282018381101561039457600080fd5b90505b92915050565b600160a060020a0381166103b057600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600061042482356105f9565b9392505050565b60006104248235610609565b60006020828403121561044957600080fd5b60006104558484610418565b949350505050565b60006020828403121561046f57600080fd5b6000610455848461042b565b610484816105f9565b82525050565b61048481610604565b61048481610609565b60006104a883856105eb565b93506104b5838584610618565b50500190565b60006104c86034836105f0565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b60006105276039836105f0565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061045582848661049c565b60208101610397828461047b565b60208101610397828461048a565b604081016105b08285610493565b6104246020830184610493565b60208082528101610397816104bb565b602080825281016103978161051a565b602081016103978284610493565b919050565b90815260200190565b60006103978261060c565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a723058204517665049489914cf29934db9036c2d3830865c894aa4d903f714a5bed8e80a6c6578706572696d656e74616cf50037",
  "sourceMap": "184:234:20:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;184:234:20;;;;;;",
  "deployedSourceMap": "184:234:20:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;184:234:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1423:137:24;;;:::i;:::-;;1110:29:11;;;:::i;659:77:24:-;;;:::i;:::-;;;;;;;;979:90;;;:::i;:::-;;;;;;;;2977:396:11;;;;;;;;;:::i;272:144:20:-;;;;;;;;;:::i;242:23::-;;;:::i;1731:107:24:-;;;;;;;;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;272:144:20:-;1646:14:11;;1642:72;;389:8:20;:20;;;1697:7:11;;1642:72;1891:19;1970:8;;1936:56;;;;;;;;;;;;;;-1:-1:-1;;26:21;;;22:32;6:49;;1936:56:11;;;1913:89;;49:4:-1;1913:89:11;;;;2013:24;2040:31;;;:18;:31;;;;;;1913:89;;-1:-1:-1;2168:21:11;2164:235;;2205:31;;;;:18;:31;;;;;;;2239:15;2205:49;;;;2274:93;;;;;;2224:11;;2239:15;2274:93;;;;;;;;;;2382:7;;;;2164:235;2470:14;;2449:36;;:16;;:36;:20;:36;:::i;:::-;2430:15;:55;;2409:154;;;;;;;;;;;;;;-1:-1:-1;2644:1:11;2610:31;;;:18;:31;;;;;:35;389:8:20;:20;;;272:144;;:::o;242:23::-;;;;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;-1:-1:-1;1439:145:23;;;;;:::o;1982:183:24:-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;57:66;-1:-1;;;57:66;130:118;;197:46;235:6;222:20;197:46;;380:241;;484:2;472:9;463:7;459:23;455:32;452:2;;;500:1;497;490:12;452:2;535:1;552:53;597:7;577:9;552:53;;;542:63;446:175;-1:-1;;;;446:175;628:241;;732:2;720:9;711:7;707:23;703:32;700:2;;;748:1;745;738:12;700:2;783:1;800:53;845:7;825:9;800:53;;1124:120;1207:31;1232:5;1207:31;;;1202:3;1195:44;1189:55;;;1251:111;1328:28;1350:5;1328:28;;1369:120;1452:31;1477:5;1452:31;;1517:300;;1648:88;1729:6;1724:3;1648:88;;;1641:95;;1741:43;1777:6;1772:3;1765:5;1741:43;;;-1:-1;;1796:16;;1635:182;1825:465;;1985:67;2049:2;2044:3;1985:67;;;2085:66;2065:87;;2186:66;2181:2;2172:12;;2165:88;2281:2;2272:12;;1971:319;-1:-1;;1971:319;2299:465;;2459:67;2523:2;2518:3;2459:67;;;2559:66;2539:87;;2660:66;2655:2;2646:12;;2639:88;2755:2;2746:12;;2445:319;-1:-1;;2445:319;2899:282;;3053:103;3152:3;3143:6;3135;3053:103;;3188:213;3306:2;3291:18;;3320:71;3295:9;3364:6;3320:71;;3408:201;3520:2;3505:18;;3534:65;3509:9;3572:6;3534:65;;3616:324;3762:2;3747:18;;3776:71;3751:9;3820:6;3776:71;;;3858:72;3926:2;3915:9;3911:18;3902:6;3858:72;;3947:407;4138:2;4152:47;;;4123:18;;4213:131;4123:18;4213:131;;4361:407;4552:2;4566:47;;;4537:18;;4627:131;4537:18;4627:131;;4775:213;4893:2;4878:18;;4907:71;4882:9;4951:6;4907:71;;4996:144;5131:3;5109:31;-1:-1;5109:31;5149:163;5252:19;;;5301:4;5292:14;;5245:67;5320:105;;5389:31;5414:5;5389:31;;5432:92;5505:13;5498:21;;5481:43;5531:79;5600:5;5583:27;5617:128;-1:-1;;;;;5686:54;;5669:76;6258:145;6339:6;6334:3;6329;6316:30;-1:-1;6395:1;6377:16;;6370:27;6309:94",
  "source": "pragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { TimeLockUpgrade } from \"../lib/TimeLockUpgrade.sol\";\n\n// Mock contract implementation of TimeLockUpgrade functions\ncontract TimeLockUpgradeMock is\n    TimeLockUpgrade\n{\n    uint256 public testUint;\n\n    function testTimeLockUpgrade(\n        uint256 _testUint\n    )\n        external\n        timeLockUpgrade\n    {\n        testUint = _testUint;\n    }\n}\n\n",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeMock.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeMock.sol",
    "exportedSymbols": {
      "TimeLockUpgradeMock": [
        2906
      ]
    },
    "id": 2907,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2886,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:20"
      },
      {
        "id": 2887,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "23:35:20"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "file": "../lib/TimeLockUpgrade.sol",
        "id": 2889,
        "nodeType": "ImportDirective",
        "scope": 2907,
        "sourceUnit": 2279,
        "src": "60:61:20",
        "symbolAliases": [
          {
            "foreign": 2888,
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
              "id": 2890,
              "name": "TimeLockUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2278,
              "src": "220:15:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                "typeString": "contract TimeLockUpgrade"
              }
            },
            "id": 2891,
            "nodeType": "InheritanceSpecifier",
            "src": "220:15:20"
          }
        ],
        "contractDependencies": [
          2278,
          3198
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2906,
        "linearizedBaseContracts": [
          2906,
          2278,
          3198
        ],
        "name": "TimeLockUpgradeMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2893,
            "name": "testUint",
            "nodeType": "VariableDeclaration",
            "scope": 2906,
            "src": "242:23:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2892,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "242:7:20",
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
              "id": 2904,
              "nodeType": "Block",
              "src": "379:37:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2900,
                      "name": "testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2893,
                      "src": "389:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2901,
                      "name": "_testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2895,
                      "src": "400:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "389:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2903,
                  "nodeType": "ExpressionStatement",
                  "src": "389:20:20"
                }
              ]
            },
            "documentation": null,
            "id": 2905,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2898,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2897,
                  "name": "timeLockUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
                  "src": "359:15:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "359:15:20"
              }
            ],
            "name": "testTimeLockUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2895,
                  "name": "_testUint",
                  "nodeType": "VariableDeclaration",
                  "scope": 2905,
                  "src": "310:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2894,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:33:20"
            },
            "returnParameters": {
              "id": 2899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "379:0:20"
            },
            "scope": 2906,
            "src": "272:144:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2907,
        "src": "184:234:20"
      }
    ],
    "src": "0:420:20"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/TimeLockUpgradeMock.sol",
    "exportedSymbols": {
      "TimeLockUpgradeMock": [
        2906
      ]
    },
    "id": 2907,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2886,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:20"
      },
      {
        "id": 2887,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "23:35:20"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
        "file": "../lib/TimeLockUpgrade.sol",
        "id": 2889,
        "nodeType": "ImportDirective",
        "scope": 2907,
        "sourceUnit": 2279,
        "src": "60:61:20",
        "symbolAliases": [
          {
            "foreign": 2888,
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
              "id": 2890,
              "name": "TimeLockUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2278,
              "src": "220:15:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                "typeString": "contract TimeLockUpgrade"
              }
            },
            "id": 2891,
            "nodeType": "InheritanceSpecifier",
            "src": "220:15:20"
          }
        ],
        "contractDependencies": [
          2278,
          3198
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2906,
        "linearizedBaseContracts": [
          2906,
          2278,
          3198
        ],
        "name": "TimeLockUpgradeMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2893,
            "name": "testUint",
            "nodeType": "VariableDeclaration",
            "scope": 2906,
            "src": "242:23:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2892,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "242:7:20",
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
              "id": 2904,
              "nodeType": "Block",
              "src": "379:37:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2900,
                      "name": "testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2893,
                      "src": "389:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2901,
                      "name": "_testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2895,
                      "src": "400:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "389:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2903,
                  "nodeType": "ExpressionStatement",
                  "src": "389:20:20"
                }
              ]
            },
            "documentation": null,
            "id": 2905,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2898,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2897,
                  "name": "timeLockUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
                  "src": "359:15:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "359:15:20"
              }
            ],
            "name": "testTimeLockUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2895,
                  "name": "_testUint",
                  "nodeType": "VariableDeclaration",
                  "scope": 2905,
                  "src": "310:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2894,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:33:20"
            },
            "returnParameters": {
              "id": 2899,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "379:0:20"
            },
            "scope": 2906,
            "src": "272:144:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2907,
        "src": "184:234:20"
      }
    ],
    "src": "0:420:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.936Z",
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
}