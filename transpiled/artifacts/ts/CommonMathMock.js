"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMathMock = {
    "contractName": "CommonMathMock",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "testMaxUInt256",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "pow",
                    "type": "uint256"
                }
            ],
            "name": "testSafePower",
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "testScaleFactor",
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                }
            ],
            "name": "testScale",
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                }
            ],
            "name": "testDeScale",
            "outputs": [
                {
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "testDivCeil",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_principal",
                    "type": "uint256"
                },
                {
                    "name": "_numerator",
                    "type": "uint256"
                },
                {
                    "name": "_denominator",
                    "type": "uint256"
                }
            ],
            "name": "testGetPartialAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "testCeilLog10",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"testCeilLog10\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"b\",\"type\":\"uint256\"}],\"name\":\"testDivCeil\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"}],\"name\":\"testDeScale\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"},{\"name\":\"pow\",\"type\":\"uint256\"}],\"name\":\"testSafePower\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testMaxUInt256\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testScaleFactor\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"a\",\"type\":\"uint256\"}],\"name\":\"testScale\",\"outputs\":[{\"name\":\"result\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_principal\",\"type\":\"uint256\"},{\"name\":\"_numerator\",\"type\":\"uint256\"},{\"name\":\"_denominator\",\"type\":\"uint256\"}],\"name\":\"testGetPartialAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonMathMock.sol\":\"CommonMathMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol\":{\"keccak256\":\"0x3d1d08c6efc2a973fe2c02ddcb02fd99a8c8eb75f74dcbd93e8e15864eee2b6b\",\"urls\":[\"bzzr://580815dd1cf648a4521d923e59087de21143d9c48115ab71579a1f5a8f3d36af\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonMathMock.sol\":{\"keccak256\":\"0x43e4f5c66fb933a7668add9ad523b9b59b79d73a494a643718d003f9c5529b79\",\"urls\":[\"bzzr://fcb25746b2c2620fb6691fc6235e1b50091960a16be944a7914f7a5bded283e2\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610701806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480635c39ea86116100785780635c39ea861461010c5780639a3de88f14610114578063ad1c3d731461011c578063bd78a1811461012f576100a5565b8063087f074d146100aa5780632d6c1f5e146100d35780632fb68699146100e657806338bc0a5e146100f9575b600080fd5b6100bd6100b8366004610513565b610142565b6040516100ca91906106ad565b60405180910390f35b6100bd6100e1366004610539565b610155565b6100bd6100f4366004610513565b61016a565b6100bd610107366004610539565b610175565b6100bd610181565b6100bd610190565b6100bd61012a366004610513565b61019a565b6100bd61013d366004610573565b6101a5565b600061014d826101bc565b90505b919050565b600061016183836102fc565b90505b92915050565b600061014d8261034a565b60006101618383610364565b600061018b6103a3565b905090565b600061018b6103a9565b600061014d826103b5565b60006101b28484846103cf565b90505b9392505050565b6000808211610200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f79061069d565b60405180910390fd5b816001141561021157506000610150565b600019820160007a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000821061025e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000820491506040015b6d04ee2d6d415b85acef8100000000821061028a576d04ee2d6d415b85acef8100000000820491506020015b662386f26fc1000082106102a857662386f26fc10000820491506010015b6305f5e10082106102c0576305f5e100820491506008015b61271082106102d457612710820491506004015b606482106102e6576064820491506002015b600a82106102f2576001015b6001019392505050565b60008061030f848463ffffffff61048f16565b1161032957610324838363ffffffff6104ac16565b610161565b610161600161033e858563ffffffff6104ac16565b9063ffffffff6104ce16565b600061014d82670de0b6b3a764000063ffffffff6104ac16565b600080831161037257600080fd5b600160005b8381101561039b5781610390818763ffffffff6104e016565b925050600101610377565b509392505050565b60001990565b670de0b6b3a764000090565b600061014d82670de0b6b3a764000063ffffffff6104e016565b60008082806103da57fe5b84860990508061040c57610404836103f8878763ffffffff6104e016565b9063ffffffff6104ac16565b9150506101b5565b6000610434610421868863ffffffff6104e016565b6103f884620f424063ffffffff6104e016565b90506103e88110610471576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f79061068d565b610485846103f8888863ffffffff6104e016565b9695505050505050565b60008161049b57600080fd5b8183816104a457fe5b069392505050565b60008082116104ba57600080fd5b60008284816104c557fe5b04949350505050565b60008282018381101561016157600080fd5b6000826104ef57506000610164565b828202828482816104fc57fe5b041461016157600080fd5b600061016182356106c4565b60006020828403121561052557600080fd5b60006105318484610507565b949350505050565b6000806040838503121561054c57600080fd5b60006105588585610507565b925050602061056985828601610507565b9150509250929050565b60008060006060848603121561058857600080fd5b60006105948686610507565b93505060206105a586828701610507565b92505060406105b686828701610507565b9150509250925092565b60006105cd603a836106bb565b7f436f6d6d6f6e4d6174682e6765745061727469616c416d6f756e743a20526f7581527f6e64696e67206572726f72206578636565647320626f756e6473000000000000602082015260400192915050565b600061062c6036836106bb565b7f436f6d6d6f6e4d6174682e6365696c4c6f6731303a2056616c7565206d75737481527f2062652067726561746572207468616e207a65726f2e00000000000000000000602082015260400192915050565b610687816106c4565b82525050565b6020808252810161014d816105c0565b6020808252810161014d8161061f565b60208101610164828461067e565b90815260200190565b9056fea265627a7a723058201796f40f3a90450168eeeb125bca73eb90b216caf287033259b6f0f58bc7cc6c6c6578706572696d656e74616cf50037",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a5576000357c0100000000000000000000000000000000000000000000000000000000900480635c39ea86116100785780635c39ea861461010c5780639a3de88f14610114578063ad1c3d731461011c578063bd78a1811461012f576100a5565b8063087f074d146100aa5780632d6c1f5e146100d35780632fb68699146100e657806338bc0a5e146100f9575b600080fd5b6100bd6100b8366004610513565b610142565b6040516100ca91906106ad565b60405180910390f35b6100bd6100e1366004610539565b610155565b6100bd6100f4366004610513565b61016a565b6100bd610107366004610539565b610175565b6100bd610181565b6100bd610190565b6100bd61012a366004610513565b61019a565b6100bd61013d366004610573565b6101a5565b600061014d826101bc565b90505b919050565b600061016183836102fc565b90505b92915050565b600061014d8261034a565b60006101618383610364565b600061018b6103a3565b905090565b600061018b6103a9565b600061014d826103b5565b60006101b28484846103cf565b90505b9392505050565b6000808211610200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f79061069d565b60405180910390fd5b816001141561021157506000610150565b600019820160007a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000821061025e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000820491506040015b6d04ee2d6d415b85acef8100000000821061028a576d04ee2d6d415b85acef8100000000820491506020015b662386f26fc1000082106102a857662386f26fc10000820491506010015b6305f5e10082106102c0576305f5e100820491506008015b61271082106102d457612710820491506004015b606482106102e6576064820491506002015b600a82106102f2576001015b6001019392505050565b60008061030f848463ffffffff61048f16565b1161032957610324838363ffffffff6104ac16565b610161565b610161600161033e858563ffffffff6104ac16565b9063ffffffff6104ce16565b600061014d82670de0b6b3a764000063ffffffff6104ac16565b600080831161037257600080fd5b600160005b8381101561039b5781610390818763ffffffff6104e016565b925050600101610377565b509392505050565b60001990565b670de0b6b3a764000090565b600061014d82670de0b6b3a764000063ffffffff6104e016565b60008082806103da57fe5b84860990508061040c57610404836103f8878763ffffffff6104e016565b9063ffffffff6104ac16565b9150506101b5565b6000610434610421868863ffffffff6104e016565b6103f884620f424063ffffffff6104e016565b90506103e88110610471576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f79061068d565b610485846103f8888863ffffffff6104e016565b9695505050505050565b60008161049b57600080fd5b8183816104a457fe5b069392505050565b60008082116104ba57600080fd5b60008284816104c557fe5b04949350505050565b60008282018381101561016157600080fd5b6000826104ef57506000610164565b828202828482816104fc57fe5b041461016157600080fd5b600061016182356106c4565b60006020828403121561052557600080fd5b60006105318484610507565b949350505050565b6000806040838503121561054c57600080fd5b60006105588585610507565b925050602061056985828601610507565b9150509250929050565b60008060006060848603121561058857600080fd5b60006105948686610507565b93505060206105a586828701610507565b92505060406105b686828701610507565b9150509250925092565b60006105cd603a836106bb565b7f436f6d6d6f6e4d6174682e6765745061727469616c416d6f756e743a20526f7581527f6e64696e67206572726f72206578636565647320626f756e6473000000000000602082015260400192915050565b600061062c6036836106bb565b7f436f6d6d6f6e4d6174682e6365696c4c6f6731303a2056616c7565206d75737481527f2062652067726561746572207468616e207a65726f2e00000000000000000000602082015260400192915050565b610687816106c4565b82525050565b6020808252810161014d816105c0565b6020808252810161014d8161061f565b60208101610164828461067e565b90815260200190565b9056fea265627a7a723058201796f40f3a90450168eeeb125bca73eb90b216caf287033259b6f0f58bc7cc6c6c6578706572696d656e74616cf50037",
    "sourceMap": "173:1462:16:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;173:1462:16;;;;;;;",
    "deployedSourceMap": "173:1462:16:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;173:1462:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1483:150;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1008:172;;;;;;;;;:::i;844:158::-;;;;;;;;;:::i;342:188::-;;;;;;;;;:::i;203:133::-;;;:::i;536:142::-;;;:::i;684:154::-;;;;;;;;;:::i;1187:290::-;;;;;;;;;:::i;1483:150::-;1568:7;1598:28;1619:6;1598:20;:28::i;:::-;1591:35;;1483:150;;;;:::o;1008:172::-;1119:7;1149:24;1168:1;1171;1149:18;:24::i;:::-;1142:31;;1008:172;;;;;:::o;844:158::-;937:14;974:21;993:1;974:18;:21::i;342:188::-;458:14;495:28;516:1;519:3;495:20;:28::i;203:133::-;276:7;306:23;:21;:23::i;:::-;299:30;;203:133;:::o;536:142::-;610:14;647:24;:22;:24::i;684:154::-;775:14;812:19;829:1;812:16;:19::i;1187:290::-;1356:7;1383:87;1418:10;1436;1454:12;1383:27;:87::i;:::-;1376:94;;1187:290;;;;;;:::o;4128:1100:5:-;4225:7;4331:1;4322:6;:10;4300:112;;;;;;;;;;;;;;;;;;;;;;4481:6;4491:1;4481:11;4477:25;;;-1:-1:-1;4501:1:5;4494:8;;4477:25;-1:-1:-1;;4560:10:5;;4548:9;4619:8;4614:13;;4610:83;;4648:8;4643:13;;;-1:-1:-1;4680:2:5;4670:12;4610:83;4711:8;4706:1;:13;4702:83;;4740:8;4735:13;;;-1:-1:-1;4772:2:5;4762:12;4702:83;4803:8;4798:1;:13;4794:83;;4832:8;4827:13;;;-1:-1:-1;4864:2:5;4854:12;4794:83;4895:7;4890:1;:12;4886:80;;4923:7;4918:12;;;-1:-1:-1;4954:1:5;4944:11;4886:80;4984:7;4979:1;:12;4975:80;;5012:7;5007:12;;;-1:-1:-1;5043:1:5;5033:11;4975:80;5073:3;5068:1;:8;5064:72;;5097:3;5092:8;;;-1:-1:-1;5124:1:5;5114:11;5064:72;5154:2;5149:1;:7;5145:49;;5182:1;5172:11;5145:49;5220:1;5211:10;;4128:1100;-1:-1:-1;;;4128:1100:5:o;2513:163::-;2598:7;;2628:8;:1;2634;2628:8;:5;:8;:::i;:::-;:12;:41;;2661:8;:1;2667;2661:8;:5;:8;:::i;:::-;2628:41;;;2643:15;2656:1;2643:8;:1;2649;2643:8;:5;:8;:::i;:::-;:12;:15;:12;:15;:::i;1756:145::-;1845:7;1875:19;:1;798:8;1875:19;:5;:19;:::i;1995:416::-;2107:7;2142:1;2138;:5;2130:14;;;;;;2172:1;2155:14;2183:198;2207:3;2203:1;:7;2183:198;;;2255:6;2349:21;2255:6;2368:1;2349:21;:18;:21;:::i;:::-;2340:30;-1:-1:-1;;2212:3:5;;2183:198;;;-1:-1:-1;2398:6:5;1995:416;-1:-1:-1;;;1995:416:5:o;1220:118::-;-1:-1:-1;;1220:118:5;:::o;964:119::-;798:8;964:119;:::o;1477:143::-;1564:7;1594:19;:1;798:8;1594:19;:5;:19;:::i;3058:882::-;3223:7;3317:17;3368:12;3337:44;;;;;3356:10;3344;3337:44;3317:64;-1:-1:-1;3438:14:5;3434:96;;3475:44;3506:12;3475:26;:10;3490;3475:26;:14;:26;:::i;:::-;:30;:44;:30;:44;:::i;:::-;3468:51;;;;;3434:96;3578:33;3614:54;3641:26;:10;3656;3641:26;:14;:26;:::i;:::-;3614:22;:9;3628:7;3614:22;:13;:22;:::i;:54::-;3578:90;;3783:4;3755:25;:32;3734:137;;;;;;;;;;;;;;3889:44;3920:12;3889:26;:10;3904;3889:26;:14;:26;:::i;:44::-;3882:51;3058:882;-1:-1:-1;;;;;;3058:882:5:o;1739:121:23:-;1797:7;1824:6;1816:15;;;;;;1852:1;1848;:5;;;;;;;1739:121;-1:-1:-1;;;1739:121:23:o;782:296::-;840:7;937:1;933;:5;925:14;;;;;;949:9;965:1;961;:5;;;;;;;782:296;-1:-1:-1;;;;782:296:23:o;1439:145::-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;231:421;289:7;529:6;525:45;;-1:-1:-1;558:1:23;551:8;;525:45;592:5;;;596:1;592;:5;:1;615:5;;;;;:10;607:19;;;;;5:118:-1;;72:46;110:6;97:20;72:46;;130:241;;234:2;222:9;213:7;209:23;205:32;202:2;;;250:1;247;240:12;202:2;285:1;302:53;347:7;327:9;302:53;;;292:63;196:175;-1:-1;;;;196:175;378:366;;;499:2;487:9;478:7;474:23;470:32;467:2;;;515:1;512;505:12;467:2;550:1;567:53;612:7;592:9;567:53;;;557:63;;529:97;657:2;675:53;720:7;711:6;700:9;696:22;675:53;;;665:63;;636:98;461:283;;;;;;751:491;;;;889:2;877:9;868:7;864:23;860:32;857:2;;;905:1;902;895:12;857:2;940:1;957:53;1002:7;982:9;957:53;;;947:63;;919:97;1047:2;1065:53;1110:7;1101:6;1090:9;1086:22;1065:53;;;1055:63;;1026:98;1155:2;1173:53;1218:7;1209:6;1198:9;1194:22;1173:53;;;1163:63;;1134:98;851:391;;;;;;1250:465;;1410:67;1474:2;1469:3;1410:67;;;1510:66;1490:87;;1611:66;1606:2;1597:12;;1590:88;1706:2;1697:12;;1396:319;-1:-1;;1396:319;1724:465;;1884:67;1948:2;1943:3;1884:67;;;1984:66;1964:87;;2085:66;2080:2;2071:12;;2064:88;2180:2;2171:12;;1870:319;-1:-1;;1870:319;2197:120;2280:31;2305:5;2280:31;;;2275:3;2268:44;2262:55;;;2324:407;2515:2;2529:47;;;2500:18;;2590:131;2500:18;2590:131;;2738:407;2929:2;2943:47;;;2914:18;;3004:131;2914:18;3004:131;;3152:213;3270:2;3255:18;;3284:71;3259:9;3328:6;3284:71;;3373:163;3476:19;;;3525:4;3516:14;;3469:67;3544:79;3613:5;3596:27",
    "source": "pragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { CommonMath } from \"../lib/CommonMath.sol\";\n\n// Mock contract implementation of CommonMathMock functions\ncontract CommonMathMock {\n    function testMaxUInt256()\n        external\n        pure\n        returns (uint256)\n    {\n        return CommonMath.maxUInt256();\n    }\n\n    function testSafePower(\n        uint256 a,\n        uint256 pow\n    )\n        external\n        pure\n        returns (uint256 result)\n    {\n        return CommonMath.safePower(a, pow);\n    }\n\n    function testScaleFactor()\n        external\n        pure\n        returns (uint256 result)\n    {\n        return CommonMath.scaleFactor();\n    }\n\n    function testScale(\n        uint256 a\n    )\n        external\n        pure\n        returns (uint256 result)\n    {\n        return CommonMath.scale(a);\n    }\n\n    function testDeScale(\n        uint256 a\n    )\n        external\n        pure\n        returns (uint256 result)\n    {\n        return CommonMath.deScale(a);\n    }\n\n    function testDivCeil(\n        uint256 a,\n        uint256 b\n    )\n        external\n        pure\n        returns(uint256)\n    {\n        return CommonMath.divCeil(a, b);\n    }\n\n     function testGetPartialAmount(\n        uint256 _principal,\n        uint256 _numerator,\n        uint256 _denominator\n    )\n        external\n        pure\n        returns (uint256)\n    {\n    \treturn CommonMath.getPartialAmount(\n    \t\t_principal,\n    \t\t_numerator,\n    \t\t_denominator\n\t\t);\n    }\n\n    function testCeilLog10(uint256 _value)\n        external\n        pure\n        returns(uint256)\n    {\n        return CommonMath.ceilLog10(_value);\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonMathMock.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonMathMock.sol",
        "exportedSymbols": {
            "CommonMathMock": [
                2787
            ]
        },
        "id": 2788,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2673,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:16"
            },
            {
                "id": 2674,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:16"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol",
                "file": "../lib/CommonMath.sol",
                "id": 2676,
                "nodeType": "ImportDirective",
                "scope": 2788,
                "sourceUnit": 1626,
                "src": "60:51:16",
                "symbolAliases": [
                    {
                        "foreign": 2675,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2787,
                "linearizedBaseContracts": [
                    2787
                ],
                "name": "CommonMathMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2685,
                            "nodeType": "Block",
                            "src": "289:47:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2681,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "306:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2682,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "maxUInt256",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1321,
                                            "src": "306:21:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                                "typeString": "function () pure returns (uint256)"
                                            }
                                        },
                                        "id": 2683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "306:23:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2680,
                                    "id": 2684,
                                    "nodeType": "Return",
                                    "src": "299:30:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2686,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testMaxUInt256",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2677,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "226:2:16"
                        },
                        "returnParameters": {
                            "id": 2680,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2679,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2686,
                                    "src": "276:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2678,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "276:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "275:9:16"
                        },
                        "scope": 2787,
                        "src": "203:133:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2701,
                            "nodeType": "Block",
                            "src": "478:52:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2697,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2688,
                                                "src": "516:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2698,
                                                "name": "pow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2690,
                                                "src": "519:3:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2695,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "495:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2696,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safePower",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1392,
                                            "src": "495:20:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2699,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "495:28:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2694,
                                    "id": 2700,
                                    "nodeType": "Return",
                                    "src": "488:35:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2702,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testSafePower",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2691,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2688,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "374:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2687,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "374:7:16",
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
                                    "id": 2690,
                                    "name": "pow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "393:11:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2689,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "393:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "364:46:16"
                        },
                        "returnParameters": {
                            "id": 2694,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2693,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "458:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2692,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "457:16:16"
                        },
                        "scope": 2787,
                        "src": "342:188:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2711,
                            "nodeType": "Block",
                            "src": "630:48:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2707,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "647:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2708,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "scaleFactor",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1313,
                                            "src": "647:22:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                                "typeString": "function () pure returns (uint256)"
                                            }
                                        },
                                        "id": 2709,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "647:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2706,
                                    "id": 2710,
                                    "nodeType": "Return",
                                    "src": "640:31:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2712,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testScaleFactor",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2703,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "560:2:16"
                        },
                        "returnParameters": {
                            "id": 2706,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2705,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2712,
                                    "src": "610:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2704,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "610:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "609:16:16"
                        },
                        "scope": 2787,
                        "src": "536:142:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2724,
                            "nodeType": "Block",
                            "src": "795:43:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2721,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2714,
                                                "src": "829:1:16",
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
                                                "id": 2719,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "812:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2720,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "scale",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1334,
                                            "src": "812:16:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "812:19:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2718,
                                    "id": 2723,
                                    "nodeType": "Return",
                                    "src": "805:26:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2725,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testScale",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2715,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2714,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2725,
                                    "src": "712:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2713,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "712:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "702:25:16"
                        },
                        "returnParameters": {
                            "id": 2718,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2717,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2725,
                                    "src": "775:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2716,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "775:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "774:16:16"
                        },
                        "scope": 2787,
                        "src": "684:154:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2737,
                            "nodeType": "Block",
                            "src": "957:45:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2734,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2727,
                                                "src": "993:1:16",
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
                                                "id": 2732,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "974:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2733,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "deScale",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1347,
                                            "src": "974:18:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2735,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "974:21:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2731,
                                    "id": 2736,
                                    "nodeType": "Return",
                                    "src": "967:28:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2738,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testDeScale",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2727,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2738,
                                    "src": "874:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2726,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "874:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "864:25:16"
                        },
                        "returnParameters": {
                            "id": 2731,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2730,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2738,
                                    "src": "937:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2729,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:16:16"
                        },
                        "scope": 2787,
                        "src": "844:158:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2753,
                            "nodeType": "Block",
                            "src": "1132:48:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2749,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2740,
                                                "src": "1168:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2750,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2742,
                                                "src": "1171:1:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2747,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1149:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2748,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "divCeil",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1421,
                                            "src": "1149:18:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2751,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1149:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2746,
                                    "id": 2752,
                                    "nodeType": "Return",
                                    "src": "1142:31:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2754,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testDivCeil",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2743,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2740,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1038:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1038:7:16",
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
                                    "id": 2742,
                                    "name": "b",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1057:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2741,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1057:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1028:44:16"
                        },
                        "returnParameters": {
                            "id": 2746,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2745,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1119:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2744,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1119:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1118:9:16"
                        },
                        "scope": 2787,
                        "src": "1008:172:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2772,
                            "nodeType": "Block",
                            "src": "1369:108:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2767,
                                                "name": "_principal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2756,
                                                "src": "1418:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2768,
                                                "name": "_numerator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2758,
                                                "src": "1436:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2769,
                                                "name": "_denominator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2760,
                                                "src": "1454:12:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2765,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1383:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2766,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getPartialAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1482,
                                            "src": "1383:27:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1383:87:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2764,
                                    "id": 2771,
                                    "nodeType": "Return",
                                    "src": "1376:94:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2773,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testGetPartialAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2756,
                                    "name": "_principal",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1226:18:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2755,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:16",
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
                                    "id": 2758,
                                    "name": "_numerator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1254:18:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2757,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1254:7:16",
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
                                    "id": 2760,
                                    "name": "_denominator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1282:20:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1282:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1216:92:16"
                        },
                        "returnParameters": {
                            "id": 2764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2763,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1356:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2762,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1356:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1355:9:16"
                        },
                        "scope": 2787,
                        "src": "1187:290:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2785,
                            "nodeType": "Block",
                            "src": "1581:52:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2782,
                                                "name": "_value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2775,
                                                "src": "1619:6:16",
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
                                                "id": 2780,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1598:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2781,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "ceilLog10",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1624,
                                            "src": "1598:20:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2783,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1598:28:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2779,
                                    "id": 2784,
                                    "nodeType": "Return",
                                    "src": "1591:35:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2786,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testCeilLog10",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2776,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2775,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2786,
                                    "src": "1506:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2774,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1506:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1505:16:16"
                        },
                        "returnParameters": {
                            "id": 2779,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2778,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2786,
                                    "src": "1568:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2777,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1568:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1567:9:16"
                        },
                        "scope": 2787,
                        "src": "1483:150:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2788,
                "src": "173:1462:16"
            }
        ],
        "src": "0:1636:16"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/CommonMathMock.sol",
        "exportedSymbols": {
            "CommonMathMock": [
                2787
            ]
        },
        "id": 2788,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2673,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:22:16"
            },
            {
                "id": 2674,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "23:35:16"
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/CommonMath.sol",
                "file": "../lib/CommonMath.sol",
                "id": 2676,
                "nodeType": "ImportDirective",
                "scope": 2788,
                "sourceUnit": 1626,
                "src": "60:51:16",
                "symbolAliases": [
                    {
                        "foreign": 2675,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 2787,
                "linearizedBaseContracts": [
                    2787
                ],
                "name": "CommonMathMock",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 2685,
                            "nodeType": "Block",
                            "src": "289:47:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2681,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "306:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2682,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "maxUInt256",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1321,
                                            "src": "306:21:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                                "typeString": "function () pure returns (uint256)"
                                            }
                                        },
                                        "id": 2683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "306:23:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2680,
                                    "id": 2684,
                                    "nodeType": "Return",
                                    "src": "299:30:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2686,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testMaxUInt256",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2677,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "226:2:16"
                        },
                        "returnParameters": {
                            "id": 2680,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2679,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2686,
                                    "src": "276:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2678,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "276:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "275:9:16"
                        },
                        "scope": 2787,
                        "src": "203:133:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2701,
                            "nodeType": "Block",
                            "src": "478:52:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2697,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2688,
                                                "src": "516:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2698,
                                                "name": "pow",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2690,
                                                "src": "519:3:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2695,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "495:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2696,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safePower",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1392,
                                            "src": "495:20:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2699,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "495:28:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2694,
                                    "id": 2700,
                                    "nodeType": "Return",
                                    "src": "488:35:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2702,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testSafePower",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2691,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2688,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "374:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2687,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "374:7:16",
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
                                    "id": 2690,
                                    "name": "pow",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "393:11:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2689,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "393:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "364:46:16"
                        },
                        "returnParameters": {
                            "id": 2694,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2693,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2702,
                                    "src": "458:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2692,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "457:16:16"
                        },
                        "scope": 2787,
                        "src": "342:188:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2711,
                            "nodeType": "Block",
                            "src": "630:48:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2707,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "647:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2708,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "scaleFactor",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1313,
                                            "src": "647:22:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                                "typeString": "function () pure returns (uint256)"
                                            }
                                        },
                                        "id": 2709,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "647:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2706,
                                    "id": 2710,
                                    "nodeType": "Return",
                                    "src": "640:31:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2712,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testScaleFactor",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2703,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "560:2:16"
                        },
                        "returnParameters": {
                            "id": 2706,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2705,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2712,
                                    "src": "610:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2704,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "610:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "609:16:16"
                        },
                        "scope": 2787,
                        "src": "536:142:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2724,
                            "nodeType": "Block",
                            "src": "795:43:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2721,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2714,
                                                "src": "829:1:16",
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
                                                "id": 2719,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "812:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2720,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "scale",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1334,
                                            "src": "812:16:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "812:19:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2718,
                                    "id": 2723,
                                    "nodeType": "Return",
                                    "src": "805:26:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2725,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testScale",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2715,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2714,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2725,
                                    "src": "712:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2713,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "712:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "702:25:16"
                        },
                        "returnParameters": {
                            "id": 2718,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2717,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2725,
                                    "src": "775:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2716,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "775:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "774:16:16"
                        },
                        "scope": 2787,
                        "src": "684:154:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2737,
                            "nodeType": "Block",
                            "src": "957:45:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2734,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2727,
                                                "src": "993:1:16",
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
                                                "id": 2732,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "974:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2733,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "deScale",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1347,
                                            "src": "974:18:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2735,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "974:21:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2731,
                                    "id": 2736,
                                    "nodeType": "Return",
                                    "src": "967:28:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2738,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testDeScale",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2728,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2727,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2738,
                                    "src": "874:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2726,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "874:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "864:25:16"
                        },
                        "returnParameters": {
                            "id": 2731,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2730,
                                    "name": "result",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2738,
                                    "src": "937:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2729,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:16:16"
                        },
                        "scope": 2787,
                        "src": "844:158:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2753,
                            "nodeType": "Block",
                            "src": "1132:48:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2749,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2740,
                                                "src": "1168:1:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2750,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2742,
                                                "src": "1171:1:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2747,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1149:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2748,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "divCeil",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1421,
                                            "src": "1149:18:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2751,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1149:24:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2746,
                                    "id": 2752,
                                    "nodeType": "Return",
                                    "src": "1142:31:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2754,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testDivCeil",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2743,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2740,
                                    "name": "a",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1038:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1038:7:16",
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
                                    "id": 2742,
                                    "name": "b",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1057:9:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2741,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1057:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1028:44:16"
                        },
                        "returnParameters": {
                            "id": 2746,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2745,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2754,
                                    "src": "1119:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2744,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1119:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1118:9:16"
                        },
                        "scope": 2787,
                        "src": "1008:172:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2772,
                            "nodeType": "Block",
                            "src": "1369:108:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2767,
                                                "name": "_principal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2756,
                                                "src": "1418:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2768,
                                                "name": "_numerator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2758,
                                                "src": "1436:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2769,
                                                "name": "_denominator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2760,
                                                "src": "1454:12:16",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2765,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1383:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2766,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getPartialAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1482,
                                            "src": "1383:27:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1383:87:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2764,
                                    "id": 2771,
                                    "nodeType": "Return",
                                    "src": "1376:94:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2773,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testGetPartialAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2756,
                                    "name": "_principal",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1226:18:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2755,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1226:7:16",
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
                                    "id": 2758,
                                    "name": "_numerator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1254:18:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2757,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1254:7:16",
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
                                    "id": 2760,
                                    "name": "_denominator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1282:20:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1282:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1216:92:16"
                        },
                        "returnParameters": {
                            "id": 2764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2763,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2773,
                                    "src": "1356:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2762,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1356:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1355:9:16"
                        },
                        "scope": 2787,
                        "src": "1187:290:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2785,
                            "nodeType": "Block",
                            "src": "1581:52:16",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2782,
                                                "name": "_value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2775,
                                                "src": "1619:6:16",
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
                                                "id": 2780,
                                                "name": "CommonMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1625,
                                                "src": "1598:10:16",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$1625_$",
                                                    "typeString": "type(library CommonMath)"
                                                }
                                            },
                                            "id": 2781,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "ceilLog10",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 1624,
                                            "src": "1598:20:16",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 2783,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1598:28:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 2779,
                                    "id": 2784,
                                    "nodeType": "Return",
                                    "src": "1591:35:16"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 2786,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "testCeilLog10",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2776,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2775,
                                    "name": "_value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2786,
                                    "src": "1506:14:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2774,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1506:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1505:16:16"
                        },
                        "returnParameters": {
                            "id": 2779,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2778,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2786,
                                    "src": "1568:7:16",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2777,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1568:7:16",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1567:9:16"
                        },
                        "scope": 2787,
                        "src": "1483:150:16",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2788,
                "src": "173:1462:16"
            }
        ],
        "src": "0:1636:16"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.922Z",
    "devdoc": {
        "methods": {}
    },
    "userdoc": {
        "methods": {}
    }
};
//# sourceMappingURL=CommonMathMock.js.map