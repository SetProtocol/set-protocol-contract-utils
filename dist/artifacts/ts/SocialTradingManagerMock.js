"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialTradingManagerMock = {
    "contractName": "SocialTradingManagerMock",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "pools",
            "outputs": [
                {
                    "name": "trader",
                    "type": "address"
                },
                {
                    "name": "allocator",
                    "type": "address"
                },
                {
                    "name": "currentAllocation",
                    "type": "uint256"
                },
                {
                    "name": "newEntryFee",
                    "type": "uint256"
                },
                {
                    "name": "feeUpdateTimestamp",
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
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_trader",
                    "type": "address"
                },
                {
                    "name": "_allocator",
                    "type": "address"
                },
                {
                    "name": "_currentAllocation",
                    "type": "uint256"
                }
            ],
            "name": "updateRecord",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_nextSet",
                    "type": "address"
                },
                {
                    "name": "_newAllocation",
                    "type": "uint256"
                },
                {
                    "name": "_liquidatorData",
                    "type": "bytes"
                }
            ],
            "name": "rebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tradingPool",
                    "type": "address"
                },
                {
                    "name": "_newFee",
                    "type": "uint256"
                }
            ],
            "name": "updateFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_nextSet\",\"type\":\"address\"},{\"name\":\"_newAllocation\",\"type\":\"uint256\"},{\"name\":\"_liquidatorData\",\"type\":\"bytes\"}],\"name\":\"rebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_newFee\",\"type\":\"uint256\"}],\"name\":\"updateFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"pools\",\"outputs\":[{\"name\":\"trader\",\"type\":\"address\"},{\"name\":\"allocator\",\"type\":\"address\"},{\"name\":\"currentAllocation\",\"type\":\"uint256\"},{\"name\":\"newEntryFee\",\"type\":\"uint256\"},{\"name\":\"feeUpdateTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tradingPool\",\"type\":\"address\"},{\"name\":\"_trader\",\"type\":\"address\"},{\"name\":\"_allocator\",\"type\":\"address\"},{\"name\":\"_currentAllocation\",\"type\":\"uint256\"}],\"name\":\"updateRecord\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Mock for SocialTradingManager to test viewer.\",\"methods\":{},\"title\":\"SocialTradingManagerMock\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/SocialTradingManagerMock.sol\":\"SocialTradingManagerMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/SocialTradingManagerMock.sol\":{\"keccak256\":\"0x4376406c79b740f372088ae1c26d039c8b67ccef0c4e3bb0b2eeb9d8fc9441d5\",\"urls\":[\"bzzr://58b266c7789e297b106abc1eda07a079a3a56af222e1663913019fdeede9fdc8\"]},\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":{\"keccak256\":\"0xfdce9b333367bfed8f379738b0eabfe4be0045db735e9f24493de09729593d4d\",\"urls\":[\"bzzr://d2fa7438b492f4f08009810e3e9a2e2c22a429c307562e3f5274d4bfe2d21734\"]},\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":{\"keccak256\":\"0x9d1e66d56cd51d14787cce5ff8fb378eb6a0bb704e7102d7c4eda5de7f585af3\",\"urls\":[\"bzzr://c44220025ac21fda1dda68e236572c5c4f82bf53ccf504a020487b8c746c7b26\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\":{\"keccak256\":\"0x46c9dc7c09957eaa4f896b33d8d25ff5268e710172330f033379eed62a052ace\",\"urls\":[\"bzzr://c5b5cdc4e58c0905a03ef70954ac23eefe4776c243049f37e7b93cd8277bb7cb\"]},\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]},\"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\":{\"keccak256\":\"0x814f90da260a6a7f2306339d0bd6ab282f4cc7f2b13c525537989ed2b4967cc8\",\"urls\":[\"bzzr://3d7ea70e8d36639cc1f37e05d3cbc9b5a5e6bc6918aa982cab29bf12e7351fc3\"]},\"set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol\":{\"keccak256\":\"0x842d0e504e7a219a3f2537f149f8535e3f6d0ad9c6a23c9f8367b02e1cca94da\",\"urls\":[\"bzzr://f096b40a2880280e370f465a7f348032a587aaf57b1120fd3c206565484b263f\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610577806100206000396000f3fe608060405234801561001057600080fd5b5060043610610068577c0100000000000000000000000000000000000000000000000000000000600035046307ab6578811461006d57806394be719714610082578063a4063dbc14610095578063be6a075c146100c2575b600080fd5b61008061007b3660046103a5565b6100d5565b005b61008061009036600461036b565b61018f565b6100a86100a33660046102e4565b6101c6565b6040516100b995949392919061049a565b60405180910390f35b6100806100d036600461030a565b61020e565b6040517f770d0c5d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169063770d0c5d9061012b90879086908690600401610470565b600060405180830381600087803b15801561014557600080fd5b505af1158015610159573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff90951660009081526020819052604090206002019290925550505050565b73ffffffffffffffffffffffffffffffffffffffff9091166000908152602081905260409020600381019190915542600490910155565b6000602081905290815260409020805460018201546002830154600384015460049094015473ffffffffffffffffffffffffffffffffffffffff938416949390921692909185565b73ffffffffffffffffffffffffffffffffffffffff9384166000908152602081905260409020805493851673ffffffffffffffffffffffffffffffffffffffff1994851617815560018101805493909516929093169190911790925560020155565b600061027c82356104ef565b9392505050565b60008083601f84011261029557600080fd5b50813567ffffffffffffffff8111156102ad57600080fd5b6020830191508360018202830111156102c557600080fd5b9250929050565b600061027c823561051c565b600061027c8235610519565b6000602082840312156102f657600080fd5b60006103028484610270565b949350505050565b6000806000806080858703121561032057600080fd5b600061032c8787610270565b945050602061033d87828801610270565b935050604061034e878288016102cc565b925050606061035f878288016102d8565b91505092959194509250565b6000806040838503121561037e57600080fd5b600061038a8585610270565b925050602061039b858286016102d8565b9150509250929050565b6000806000806000608086880312156103bd57600080fd5b60006103c988886102cc565b95505060206103da888289016102cc565b94505060406103eb888289016102d8565b935050606086013567ffffffffffffffff81111561040857600080fd5b61041488828901610283565b92509250509295509295909350565b61042c816104ef565b82525050565b600061043e83856104e6565b935061044b838584610527565b61045483610533565b9093019392505050565b61042c8161051c565b61042c81610519565b6040810161047e8286610423565b8181036020830152610491818486610432565b95945050505050565b60a081016104a88288610423565b6104b5602083018761045e565b6104c26040830186610467565b6104cf6060830185610467565b6104dc6080830184610467565b9695505050505050565b90815260200190565b60006104fa82610500565b92915050565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b60006104fa826104ef565b82818337506000910152565b601f01601f19169056fea265627a7a723058207cbf57e25890d239b53f91e1d8b93fdb0ff675799b88a9dc7ae035bd926ce6ee6c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610068577c0100000000000000000000000000000000000000000000000000000000600035046307ab6578811461006d57806394be719714610082578063a4063dbc14610095578063be6a075c146100c2575b600080fd5b61008061007b3660046103a5565b6100d5565b005b61008061009036600461036b565b61018f565b6100a86100a33660046102e4565b6101c6565b6040516100b995949392919061049a565b60405180910390f35b6100806100d036600461030a565b61020e565b6040517f770d0c5d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169063770d0c5d9061012b90879086908690600401610470565b600060405180830381600087803b15801561014557600080fd5b505af1158015610159573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff90951660009081526020819052604090206002019290925550505050565b73ffffffffffffffffffffffffffffffffffffffff9091166000908152602081905260409020600381019190915542600490910155565b6000602081905290815260409020805460018201546002830154600384015460049094015473ffffffffffffffffffffffffffffffffffffffff938416949390921692909185565b73ffffffffffffffffffffffffffffffffffffffff9384166000908152602081905260409020805493851673ffffffffffffffffffffffffffffffffffffffff1994851617815560018101805493909516929093169190911790925560020155565b600061027c82356104ef565b9392505050565b60008083601f84011261029557600080fd5b50813567ffffffffffffffff8111156102ad57600080fd5b6020830191508360018202830111156102c557600080fd5b9250929050565b600061027c823561051c565b600061027c8235610519565b6000602082840312156102f657600080fd5b60006103028484610270565b949350505050565b6000806000806080858703121561032057600080fd5b600061032c8787610270565b945050602061033d87828801610270565b935050604061034e878288016102cc565b925050606061035f878288016102d8565b91505092959194509250565b6000806040838503121561037e57600080fd5b600061038a8585610270565b925050602061039b858286016102d8565b9150509250929050565b6000806000806000608086880312156103bd57600080fd5b60006103c988886102cc565b95505060206103da888289016102cc565b94505060406103eb888289016102d8565b935050606086013567ffffffffffffffff81111561040857600080fd5b61041488828901610283565b92509250509295509295909350565b61042c816104ef565b82525050565b600061043e83856104e6565b935061044b838584610527565b61045483610533565b9093019392505050565b61042c8161051c565b61042c81610519565b6040810161047e8286610423565b8181036020830152610491818486610432565b95945050505050565b60a081016104a88288610423565b6104b5602083018761045e565b6104c26040830186610467565b6104cf6060830185610467565b6104dc6080830184610467565b9695505050505050565b90815260200190565b60006104fa82610500565b92915050565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b60006104fa826104ef565b82818337506000910152565b601f01601f19169056fea265627a7a723058207cbf57e25890d239b53f91e1d8b93fdb0ff675799b88a9dc7ae035bd926ce6ee6c6578706572696d656e74616cf50037",
    "sourceMap": "1212:1043:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1212:1043:1;;;;;;;",
    "deployedSourceMap": "1212:1043:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1212:1043:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1677:345;;;;;;;;;:::i;:::-;;2028:225;;;;;;;;;:::i;1252:62::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;1321:350;;;;;;;;;:::i;1677:345::-;1878:63;;;;;:27;;;;;;:63;;1914:8;;1925:15;;;;1878:63;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1878:63:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;;1952:28:1;;;;:5;:28;;;;;;;;;;:46;;:63;;;;-1:-1:-1;;;;1677:345:1:o;2028:225::-;2139:19;;;;:5;:19;;;;;;;;;;:31;;;:41;;;;2231:15;2190:38;;;;:56;2028:225::o;1252:62::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1321:350::-;1508:19;;;;:5;:19;;;;;;;;;;:36;;;;;-1:-1:-1;;1508:36:1;;;;;;;1554:29;;:42;;;;;;;;;;;;;;;;;1606:37;;:58;1321:350::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;57:66;-1:-1;;;57:66;144:335;;;258:3;251:4;243:6;239:17;235:27;225:2;;276:1;273;266:12;225:2;-1:-1;296:20;;336:18;325:30;;322:2;;;368:1;365;358:12;322:2;402:4;394:6;390:17;378:29;;452:3;445;437:6;433:16;423:8;419:31;416:40;413:2;;;469:1;466;459:12;413:2;218:261;;;;;;487:180;;585:77;654:6;641:20;585:77;;1010:118;;1077:46;1115:6;1102:20;1077:46;;1135:241;;1239:2;1227:9;1218:7;1214:23;1210:32;1207:2;;;1255:1;1252;1245:12;1207:2;1290:1;1307:53;1352:7;1332:9;1307:53;;;1297:63;1201:175;-1:-1;;;;1201:175;1383:667;;;;;1563:3;1551:9;1542:7;1538:23;1534:33;1531:2;;;1580:1;1577;1570:12;1531:2;1615:1;1632:53;1677:7;1657:9;1632:53;;;1622:63;;1594:97;1722:2;1740:53;1785:7;1776:6;1765:9;1761:22;1740:53;;;1730:63;;1701:98;1830:2;1848:78;1918:7;1909:6;1898:9;1894:22;1848:78;;;1838:88;;1809:123;1963:2;1981:53;2026:7;2017:6;2006:9;2002:22;1981:53;;;1971:63;;1942:98;1525:525;;;;;;;;2057:366;;;2178:2;2166:9;2157:7;2153:23;2149:32;2146:2;;;2194:1;2191;2184:12;2146:2;2229:1;2246:53;2291:7;2271:9;2246:53;;;2236:63;;2208:97;2336:2;2354:53;2399:7;2390:6;2379:9;2375:22;2354:53;;;2344:63;;2315:98;2140:283;;;;;;2430:839;;;;;;2653:3;2641:9;2632:7;2628:23;2624:33;2621:2;;;2670:1;2667;2660:12;2621:2;2705:1;2722:84;2798:7;2778:9;2722:84;;;2712:94;;2684:128;2843:2;2861:71;2924:7;2915:6;2904:9;2900:22;2861:71;;;2851:81;;2822:116;2969:2;2987:53;3032:7;3023:6;3012:9;3008:22;2987:53;;;2977:63;;2948:98;3105:2;3094:9;3090:18;3077:32;3129:18;3121:6;3118:30;3115:2;;;3161:1;3158;3151:12;3115:2;3189:64;3245:7;3236:6;3225:9;3221:22;3189:64;;;3179:74;;;;3056:203;2615:654;;;;;;;;;3276:120;3359:31;3384:5;3359:31;;;3354:3;3347:44;3341:55;;;3424:287;;3537:70;3600:6;3595:3;3537:70;;;3530:77;;3612:43;3648:6;3643:3;3636:5;3612:43;;;3676:29;3698:6;3676:29;;;3667:39;;;;3524:187;-1:-1;;;3524:187;3718:176;3826:62;3882:5;3826:62;;3901:120;3984:31;4009:5;3984:31;;4028:428;4202:2;4187:18;;4216:71;4191:9;4260:6;4216:71;;;4335:9;4329:4;4325:20;4320:2;4309:9;4305:18;4298:48;4360:86;4441:4;4432:6;4424;4360:86;;;4352:94;4173:283;-1:-1;;;;;4173:283;4463:709;4718:3;4703:19;;4733:71;4707:9;4777:6;4733:71;;;4815:97;4908:2;4897:9;4893:18;4884:6;4815:97;;;4923:72;4991:2;4980:9;4976:18;4967:6;4923:72;;;5006;5074:2;5063:9;5059:18;5050:6;5006:72;;;5089:73;5157:3;5146:9;5142:19;5133:6;5089:73;;;4689:483;;;;;;;;;5180:162;5282:19;;;5331:4;5322:14;;5275:67;5350:105;;5419:31;5444:5;5419:31;;;5408:42;5402:53;-1:-1;;5402:53;5462:128;5542:42;5531:54;;5514:76;5597:79;5666:5;5649:27;5795:136;;5895:31;5920:5;5895:31;;6752:145;6833:6;6828:3;6823;6810:30;-1:-1;6889:1;6871:16;;6864:27;6803:94;6905:97;6993:2;6973:14;-1:-1;;6969:28;;6953:49",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { SocialTradingLibrary } from \"set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol\";\nimport { ISocialAllocator } from \"set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol\";\n\nimport { IRebalancingSetTokenV2 } from \"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\";\nimport { ISetToken } from \"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\";\n\n\n/**\n * @title SocialTradingManagerMock\n * @author Set Protocol\n *\n * Mock for SocialTradingManager to test viewer.\n */\ncontract SocialTradingManagerMock {\n    mapping(address => SocialTradingLibrary.PoolInfo) public pools;\n\n    function updateRecord(\n        address _tradingPool,\n        address _trader,\n        ISocialAllocator _allocator,\n        uint256 _currentAllocation\n    )\n        external\n    {\n        pools[_tradingPool].trader = _trader;\n        pools[_tradingPool].allocator = _allocator;\n        pools[_tradingPool].currentAllocation = _currentAllocation;\n    }\n\n    function rebalance(\n        IRebalancingSetTokenV2 _tradingPool,\n        ISetToken _nextSet,\n        uint256 _newAllocation,\n        bytes calldata _liquidatorData\n    )\n        external\n    {\n        _tradingPool.startRebalance(address(_nextSet), _liquidatorData);\n\n        pools[address(_tradingPool)].currentAllocation = _newAllocation;\n    }\n\n    function updateFee(\n        address _tradingPool,\n        uint256 _newFee\n    )\n        external\n    {\n        pools[_tradingPool].newEntryFee = _newFee;\n        pools[_tradingPool].feeUpdateTimestamp = block.timestamp;\n    }\n}",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/SocialTradingManagerMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/SocialTradingManagerMock.sol",
        "exportedSymbols": {
            "SocialTradingManagerMock": [
                104
            ]
        },
        "id": 105,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 4,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:1"
            },
            {
                "id": 5,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:1"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "file": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "id": 7,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2698,
                "src": "657:111:1",
                "symbolAliases": [
                    {
                        "foreign": 6,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "id": 9,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2579,
                "src": "769:110:1",
                "symbolAliases": [
                    {
                        "foreign": 8,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "id": 11,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2128,
                "src": "881:117:1",
                "symbolAliases": [
                    {
                        "foreign": 10,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "id": 13,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2360,
                "src": "999:91:1",
                "symbolAliases": [
                    {
                        "foreign": 12,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title SocialTradingManagerMock\n@author Set Protocol\n * Mock for SocialTradingManager to test viewer.",
                "fullyImplemented": true,
                "id": 104,
                "linearizedBaseContracts": [
                    104
                ],
                "name": "SocialTradingManagerMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 17,
                        "name": "pools",
                        "nodeType": "VariableDeclaration",
                        "scope": 104,
                        "src": "1252:62:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                            "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo)"
                        },
                        "typeName": {
                            "id": 16,
                            "keyType": {
                                "id": 14,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1260:7:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1252:49:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 15,
                                "name": "SocialTradingLibrary.PoolInfo",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 2696,
                                "src": "1271:29:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage_ptr",
                                    "typeString": "struct SocialTradingLibrary.PoolInfo"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 49,
                            "nodeType": "Block",
                            "src": "1498:173:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 33,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 28,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1508:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 30,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 29,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1514:12:1",
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
                                                "src": "1508:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 31,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "trader",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2687,
                                            "src": "1508:26:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 32,
                                            "name": "_trader",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21,
                                            "src": "1537:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1508:36:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 34,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1508:36:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 40,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 35,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1554:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 37,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 36,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1560:12:1",
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
                                                "src": "1554:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 38,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "allocator",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2689,
                                            "src": "1554:29:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                                "typeString": "contract ISocialAllocator"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 39,
                                            "name": "_allocator",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23,
                                            "src": "1586:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                                "typeString": "contract ISocialAllocator"
                                            }
                                        },
                                        "src": "1554:42:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "id": 41,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1554:42:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 47,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 42,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1606:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 44,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 43,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1612:12:1",
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
                                                "src": "1606:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 45,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "currentAllocation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2691,
                                            "src": "1606:37:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 46,
                                            "name": "_currentAllocation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25,
                                            "src": "1646:18:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1606:58:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 48,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1606:58:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 50,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateRecord",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 26,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1352:20:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 18,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1352:7:1",
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
                                    "id": 21,
                                    "name": "_trader",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1382:15:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 20,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1382:7:1",
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
                                    "id": 23,
                                    "name": "_allocator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1407:27:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                        "typeString": "contract ISocialAllocator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 22,
                                        "name": "ISocialAllocator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2578,
                                        "src": "1407:16:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25,
                                    "name": "_currentAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1444:26:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1444:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1342:134:1"
                        },
                        "returnParameters": {
                            "id": 27,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1498:0:1"
                        },
                        "scope": 104,
                        "src": "1321:350:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 79,
                            "nodeType": "Block",
                            "src": "1868:154:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 65,
                                                        "name": "_nextSet",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54,
                                                        "src": "1914:8:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                                            "typeString": "contract ISetToken"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                                            "typeString": "contract ISetToken"
                                                        }
                                                    ],
                                                    "id": 64,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1906:7:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 66,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1906:17:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 67,
                                                "name": "_liquidatorData",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 58,
                                                "src": "1925:15:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 61,
                                                "name": "_tradingPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 52,
                                                "src": "1878:12:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                    "typeString": "contract IRebalancingSetTokenV2"
                                                }
                                            },
                                            "id": 63,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "startRebalance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2068,
                                            "src": "1878:27:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (address,bytes memory) external"
                                            }
                                        },
                                        "id": 68,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1878:63:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 69,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1878:63:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 77,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 70,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1952:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 74,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 72,
                                                            "name": "_tradingPool",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 52,
                                                            "src": "1966:12:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                                "typeString": "contract IRebalancingSetTokenV2"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                                "typeString": "contract IRebalancingSetTokenV2"
                                                            }
                                                        ],
                                                        "id": 71,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1958:7:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 73,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1958:21:1",
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
                                                "src": "1952:28:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 75,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "currentAllocation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2691,
                                            "src": "1952:46:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 76,
                                            "name": "_newAllocation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 56,
                                            "src": "2001:14:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1952:63:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 78,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1952:63:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 80,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 59,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1705:35:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 51,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "1705:22:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 54,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1750:18:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 53,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1750:9:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 56,
                                    "name": "_newAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1778:22:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1778:7:1",
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
                                    "id": 58,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1810:30:1",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 57,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1810:5:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1695:151:1"
                        },
                        "returnParameters": {
                            "id": 60,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1868:0:1"
                        },
                        "scope": 104,
                        "src": "1677:345:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 102,
                            "nodeType": "Block",
                            "src": "2129:124:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 92,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 87,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "2139:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 89,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 88,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 82,
                                                    "src": "2145:12:1",
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
                                                "src": "2139:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 90,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "newEntryFee",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2693,
                                            "src": "2139:31:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 91,
                                            "name": "_newFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 84,
                                            "src": "2173:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2139:41:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 93,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2139:41:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 94,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "2190:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 96,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 95,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 82,
                                                    "src": "2196:12:1",
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
                                                "src": "2190:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 97,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "feeUpdateTimestamp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2695,
                                            "src": "2190:38:1",
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
                                                "id": 98,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2702,
                                                "src": "2231:5:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 99,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2231:15:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2190:56:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 101,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2190:56:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 103,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 82,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 103,
                                    "src": "2056:20:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 81,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2056:7:1",
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
                                    "id": 84,
                                    "name": "_newFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 103,
                                    "src": "2086:15:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 83,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2086:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2046:61:1"
                        },
                        "returnParameters": {
                            "id": 86,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2129:0:1"
                        },
                        "scope": 104,
                        "src": "2028:225:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 105,
                "src": "1212:1043:1"
            }
        ],
        "src": "597:1658:1"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-viewers/contracts/mocks/SocialTradingManagerMock.sol",
        "exportedSymbols": {
            "SocialTradingManagerMock": [
                104
            ]
        },
        "id": 105,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 4,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:1"
            },
            {
                "id": 5,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:1"
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "file": "set-protocol-strategies/contracts/managers/lib/SocialTradingLibrary.sol",
                "id": 7,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2698,
                "src": "657:111:1",
                "symbolAliases": [
                    {
                        "foreign": 6,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "file": "set-protocol-strategies/contracts/managers/allocators/ISocialAllocator.sol",
                "id": 9,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2579,
                "src": "769:110:1",
                "symbolAliases": [
                    {
                        "foreign": 8,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
                "id": 11,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2128,
                "src": "881:117:1",
                "symbolAliases": [
                    {
                        "foreign": 10,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "id": 13,
                "nodeType": "ImportDirective",
                "scope": 105,
                "sourceUnit": 2360,
                "src": "999:91:1",
                "symbolAliases": [
                    {
                        "foreign": 12,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": "@title SocialTradingManagerMock\n@author Set Protocol\n * Mock for SocialTradingManager to test viewer.",
                "fullyImplemented": true,
                "id": 104,
                "linearizedBaseContracts": [
                    104
                ],
                "name": "SocialTradingManagerMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 17,
                        "name": "pools",
                        "nodeType": "VariableDeclaration",
                        "scope": 104,
                        "src": "1252:62:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                            "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo)"
                        },
                        "typeName": {
                            "id": 16,
                            "keyType": {
                                "id": 14,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1260:7:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1252:49:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 15,
                                "name": "SocialTradingLibrary.PoolInfo",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 2696,
                                "src": "1271:29:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage_ptr",
                                    "typeString": "struct SocialTradingLibrary.PoolInfo"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 49,
                            "nodeType": "Block",
                            "src": "1498:173:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 33,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 28,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1508:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 30,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 29,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1514:12:1",
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
                                                "src": "1508:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 31,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "trader",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2687,
                                            "src": "1508:26:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 32,
                                            "name": "_trader",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21,
                                            "src": "1537:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1508:36:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 34,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1508:36:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 40,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 35,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1554:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 37,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 36,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1560:12:1",
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
                                                "src": "1554:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 38,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "allocator",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2689,
                                            "src": "1554:29:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                                "typeString": "contract ISocialAllocator"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 39,
                                            "name": "_allocator",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23,
                                            "src": "1586:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                                "typeString": "contract ISocialAllocator"
                                            }
                                        },
                                        "src": "1554:42:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "id": 41,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1554:42:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 47,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 42,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1606:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 44,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 43,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19,
                                                    "src": "1612:12:1",
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
                                                "src": "1606:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 45,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "currentAllocation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2691,
                                            "src": "1606:37:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 46,
                                            "name": "_currentAllocation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25,
                                            "src": "1646:18:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1606:58:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 48,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1606:58:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 50,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateRecord",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 26,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1352:20:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 18,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1352:7:1",
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
                                    "id": 21,
                                    "name": "_trader",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1382:15:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 20,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1382:7:1",
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
                                    "id": 23,
                                    "name": "_allocator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1407:27:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                        "typeString": "contract ISocialAllocator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 22,
                                        "name": "ISocialAllocator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2578,
                                        "src": "1407:16:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISocialAllocator_$2578",
                                            "typeString": "contract ISocialAllocator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25,
                                    "name": "_currentAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50,
                                    "src": "1444:26:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1444:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1342:134:1"
                        },
                        "returnParameters": {
                            "id": 27,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1498:0:1"
                        },
                        "scope": 104,
                        "src": "1321:350:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 79,
                            "nodeType": "Block",
                            "src": "1868:154:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 65,
                                                        "name": "_nextSet",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54,
                                                        "src": "1914:8:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                                            "typeString": "contract ISetToken"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                                            "typeString": "contract ISetToken"
                                                        }
                                                    ],
                                                    "id": 64,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1906:7:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": "address"
                                                },
                                                "id": 66,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1906:17:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 67,
                                                "name": "_liquidatorData",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 58,
                                                "src": "1925:15:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_calldata_ptr",
                                                    "typeString": "bytes calldata"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 61,
                                                "name": "_tradingPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 52,
                                                "src": "1878:12:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                    "typeString": "contract IRebalancingSetTokenV2"
                                                }
                                            },
                                            "id": 63,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "startRebalance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2068,
                                            "src": "1878:27:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (address,bytes memory) external"
                                            }
                                        },
                                        "id": 68,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1878:63:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 69,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1878:63:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 77,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 70,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "1952:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 74,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 72,
                                                            "name": "_tradingPool",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 52,
                                                            "src": "1966:12:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                                "typeString": "contract IRebalancingSetTokenV2"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                                                "typeString": "contract IRebalancingSetTokenV2"
                                                            }
                                                        ],
                                                        "id": 71,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1958:7:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 73,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1958:21:1",
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
                                                "src": "1952:28:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 75,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "currentAllocation",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2691,
                                            "src": "1952:46:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 76,
                                            "name": "_newAllocation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 56,
                                            "src": "2001:14:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1952:63:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 78,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1952:63:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 80,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 59,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 52,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1705:35:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                        "typeString": "contract IRebalancingSetTokenV2"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 51,
                                        "name": "IRebalancingSetTokenV2",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2127,
                                        "src": "1705:22:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IRebalancingSetTokenV2_$2127",
                                            "typeString": "contract IRebalancingSetTokenV2"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 54,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1750:18:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 53,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "1750:9:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 56,
                                    "name": "_newAllocation",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1778:22:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1778:7:1",
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
                                    "id": 58,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 80,
                                    "src": "1810:30:1",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 57,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1810:5:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1695:151:1"
                        },
                        "returnParameters": {
                            "id": 60,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1868:0:1"
                        },
                        "scope": 104,
                        "src": "1677:345:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 102,
                            "nodeType": "Block",
                            "src": "2129:124:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 92,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 87,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "2139:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 89,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 88,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 82,
                                                    "src": "2145:12:1",
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
                                                "src": "2139:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 90,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "newEntryFee",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2693,
                                            "src": "2139:31:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 91,
                                            "name": "_newFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 84,
                                            "src": "2173:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2139:41:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 93,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2139:41:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 94,
                                                    "name": "pools",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17,
                                                    "src": "2190:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_PoolInfo_$2696_storage_$",
                                                        "typeString": "mapping(address => struct SocialTradingLibrary.PoolInfo storage ref)"
                                                    }
                                                },
                                                "id": 96,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 95,
                                                    "name": "_tradingPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 82,
                                                    "src": "2196:12:1",
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
                                                "src": "2190:19:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolInfo_$2696_storage",
                                                    "typeString": "struct SocialTradingLibrary.PoolInfo storage ref"
                                                }
                                            },
                                            "id": 97,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "feeUpdateTimestamp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2695,
                                            "src": "2190:38:1",
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
                                                "id": 98,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2702,
                                                "src": "2231:5:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 99,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2231:15:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2190:56:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 101,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2190:56:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 103,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 82,
                                    "name": "_tradingPool",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 103,
                                    "src": "2056:20:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 81,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2056:7:1",
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
                                    "id": 84,
                                    "name": "_newFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 103,
                                    "src": "2086:15:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 83,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2086:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2046:61:1"
                        },
                        "returnParameters": {
                            "id": 86,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2129:0:1"
                        },
                        "scope": 104,
                        "src": "2028:225:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 105,
                "src": "1212:1043:1"
            }
        ],
        "src": "597:1658:1"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.676Z",
    "devdoc": {
        "author": "Set Protocol * Mock for SocialTradingManager to test viewer.",
        "methods": {},
        "title": "SocialTradingManagerMock"
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=SocialTradingManagerMock.js.map