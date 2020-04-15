export const LimitOneUpgradeMock = 
{
  "contractName": "LimitOneUpgradeMock",
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
          "name": "_upgradeAddress",
          "type": "address"
        },
        {
          "name": "_testUint",
          "type": "uint256"
        }
      ],
      "name": "testLimitOneUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_upgradeAddress",
          "type": "address"
        },
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
  "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeAddress\",\"type\":\"address\"},{\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"removeRegisteredUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeAddress\",\"type\":\"address\"},{\"name\":\"_testUint\",\"type\":\"uint256\"}],\"name\":\"testLimitOneUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"upgradeIdentifier\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"testUint\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}}},\"userdoc\":{\"methods\":{\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/LimitOneUpgradeMock.sol\":\"LimitOneUpgradeMock\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol\":{\"keccak256\":\"0x3b25e17f398568b3304e2fdc22a07b0a586ecc7614d9eca07436dd5dbc40bba7\",\"urls\":[\"bzzr://f25341b47c17c7bed51ad4ce4193c1a0dfb6291b94eef8d9ae69ec722545a635\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/UnrestrictedTimeLockUpgrade.sol\":{\"keccak256\":\"0xdd668144ac30026f5c93e51c1c4d496edbe5497d5cbf969e72ef86cc4666960b\",\"urls\":[\"bzzr://72ff5586aea6e8de13ab4aaf72cbc03e6aaed86599c2500f73d7416b0b8d9517\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/LimitOneUpgradeMock.sol\":{\"keccak256\":\"0xd7d17467da36a2ebb055ac73a64424bde1f160bf86b3f741292405f5eca6af08\",\"urls\":[\"bzzr://595c90fb82fdbcadf7e9e97abaf429bdcf3caa1ae8631816b893121057cbf5c3\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
  "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36109c3806100576000396000f3fe608060405234801561001057600080fd5b50600436106100c6576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161008e5780638da5cb5b1461012c5780638f32d59b146101415780639303b16f14610156578063d7c1b02a14610169578063e3850c3d1461017c578063f2fde38b14610184576100c6565b80631766486d146100cb5780635904dec2146100f4578063715018a6146101095780637252d1481461011157806378446bc114610124575b600080fd5b6100de6100d936600461064f565b610197565b6040516100eb91906108d7565b60405180910390f35b610107610102366004610615565b6101a9565b005b6101076101b7565b61010761011f366004610615565b61021f565b6100de6103de565b6101346103e4565b6040516100eb91906108bb565b6101496103f3565b6040516100eb91906108c9565b61010761016436600461064f565b610404565b6100de6101773660046105ef565b61043e565b6100de610450565b6101076101923660046105ef565b610456565b60026020526000908152604090205481565b6101b38282610473565b5050565b6101bf6103f3565b6101c857600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6001548290156102e6576000803660405161023b9291906108ae565b6040805191829003909120600160a060020a038416600090815260036020529190912054909150156102c857600160a060020a03821660009081526003602052604090205481146102aa5760405160e560020a62461bcd0281526004016102a190610900565b60405180910390fd5b600160a060020a0382166000908152600360205260408120556102e4565b600160a060020a03821660009081526003602052604090208190555b505b6001546102f75760048290556103d9565b6000803660405160200161030c9291906108ae565b60408051601f198184030181529181528151602092830120600081815260029093529120549091508061038d5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d3749161037e918591906108e5565b60405180910390a150506103d9565b6001546103a190829063ffffffff6104d116565b4210156103c35760405160e560020a62461bcd0281526004016102a190610930565b5060009081526002602052604081205560048290555b505050565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61040c6103f3565b61041557600080fd5b60015481116104395760405160e560020a62461bcd0281526004016102a190610940565b600155565b60036020526000908152604090205481565b60045481565b61045e6103f3565b61046757600080fd5b610470816104ec565b50565b600160a060020a03821660009081526003602052604090205481146104ad5760405160e560020a62461bcd0281526004016102a190610920565b6104b681610567565b50600160a060020a0316600090815260036020526040812055565b6000828201838110156104e357600080fd5b90505b92915050565b600160a060020a0381166104ff57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000818152600260205260409020546105955760405160e560020a62461bcd0281526004016102a190610910565b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60006105dc823561095e565b9392505050565b60006105dc823561096e565b60006020828403121561060157600080fd5b600061060d84846105d0565b949350505050565b6000806040838503121561062857600080fd5b600061063485856105d0565b9250506020610645858286016105e3565b9150509250929050565b60006020828403121561066157600080fd5b600061060d84846105e3565b6106768161095e565b82525050565b61067681610969565b6106768161096e565b600061069a8385610950565b93506106a783858461097d565b50500190565b60006106ba602383610955565b7f416e6f746865722075706461746520616c726561647920696e2070726f67726581527f73732e0000000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000610719604a83610955565b7f54696d654c6f636b5570677261646556322e72656d6f7665526567697374657281527f6564557067726164653a20557067726164652068617368206d7573742062652060208201527f7265676973746572656400000000000000000000000000000000000000000000604082015260600192915050565b600061079e603383610955565b7f5061737365642075706772616465206861736820646f6573206e6f74206d617481527f6368207570677261646520616464726573732e00000000000000000000000000602082015260400192915050565b60006107fd603483610955565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b600061085c603983610955565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061060d82848661068e565b602081016104e6828461066d565b602081016104e6828461067c565b602081016104e68284610685565b604081016108f38285610685565b6105dc6020830184610685565b602080825281016104e6816106ad565b602080825281016104e68161070c565b602080825281016104e681610791565b602080825281016104e6816107f0565b602080825281016104e68161084f565b919050565b90815260200190565b60006104e682610971565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a723058208e26fbf6230f1a0964c15fb1a1ee1814901ea1d96c7288408b884c129d3e48b16c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100c6576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161008e5780638da5cb5b1461012c5780638f32d59b146101415780639303b16f14610156578063d7c1b02a14610169578063e3850c3d1461017c578063f2fde38b14610184576100c6565b80631766486d146100cb5780635904dec2146100f4578063715018a6146101095780637252d1481461011157806378446bc114610124575b600080fd5b6100de6100d936600461064f565b610197565b6040516100eb91906108d7565b60405180910390f35b610107610102366004610615565b6101a9565b005b6101076101b7565b61010761011f366004610615565b61021f565b6100de6103de565b6101346103e4565b6040516100eb91906108bb565b6101496103f3565b6040516100eb91906108c9565b61010761016436600461064f565b610404565b6100de6101773660046105ef565b61043e565b6100de610450565b6101076101923660046105ef565b610456565b60026020526000908152604090205481565b6101b38282610473565b5050565b6101bf6103f3565b6101c857600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6001548290156102e6576000803660405161023b9291906108ae565b6040805191829003909120600160a060020a038416600090815260036020529190912054909150156102c857600160a060020a03821660009081526003602052604090205481146102aa5760405160e560020a62461bcd0281526004016102a190610900565b60405180910390fd5b600160a060020a0382166000908152600360205260408120556102e4565b600160a060020a03821660009081526003602052604090208190555b505b6001546102f75760048290556103d9565b6000803660405160200161030c9291906108ae565b60408051601f198184030181529181528151602092830120600081815260029093529120549091508061038d5760008281526002602052604090819020429081905590517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d3749161037e918591906108e5565b60405180910390a150506103d9565b6001546103a190829063ffffffff6104d116565b4210156103c35760405160e560020a62461bcd0281526004016102a190610930565b5060009081526002602052604081205560048290555b505050565b60015481565b600054600160a060020a031690565b600054600160a060020a0316331490565b61040c6103f3565b61041557600080fd5b60015481116104395760405160e560020a62461bcd0281526004016102a190610940565b600155565b60036020526000908152604090205481565b60045481565b61045e6103f3565b61046757600080fd5b610470816104ec565b50565b600160a060020a03821660009081526003602052604090205481146104ad5760405160e560020a62461bcd0281526004016102a190610920565b6104b681610567565b50600160a060020a0316600090815260036020526040812055565b6000828201838110156104e357600080fd5b90505b92915050565b600160a060020a0381166104ff57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000818152600260205260409020546105955760405160e560020a62461bcd0281526004016102a190610910565b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60006105dc823561095e565b9392505050565b60006105dc823561096e565b60006020828403121561060157600080fd5b600061060d84846105d0565b949350505050565b6000806040838503121561062857600080fd5b600061063485856105d0565b9250506020610645858286016105e3565b9150509250929050565b60006020828403121561066157600080fd5b600061060d84846105e3565b6106768161095e565b82525050565b61067681610969565b6106768161096e565b600061069a8385610950565b93506106a783858461097d565b50500190565b60006106ba602383610955565b7f416e6f746865722075706461746520616c726561647920696e2070726f67726581527f73732e0000000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000610719604a83610955565b7f54696d654c6f636b5570677261646556322e72656d6f7665526567697374657281527f6564557067726164653a20557067726164652068617368206d7573742062652060208201527f7265676973746572656400000000000000000000000000000000000000000000604082015260600192915050565b600061079e603383610955565b7f5061737365642075706772616465206861736820646f6573206e6f74206d617481527f6368207570677261646520616464726573732e00000000000000000000000000602082015260400192915050565b60006107fd603483610955565b7f54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f81527f64206d757374206861766520656c61707365642e000000000000000000000000602082015260400192915050565b600061085c603983610955565b7f54696d654c6f636b557067726164653a204e657720706572696f64206d75737481527f2062652067726561746572207468616e206578697374696e6700000000000000602082015260400192915050565b600061060d82848661068e565b602081016104e6828461066d565b602081016104e6828461067c565b602081016104e68284610685565b604081016108f38285610685565b6105dc6020830184610685565b602080825281016104e6816106ad565b602080825281016104e68161070c565b602080825281016104e681610791565b602080825281016104e6816107f0565b602080825281016104e68161084f565b919050565b90815260200190565b60006104e682610971565b151590565b90565b600160a060020a031690565b8281833750600091015256fea265627a7a723058208e26fbf6230f1a0964c15fb1a1ee1814901ea1d96c7288408b884c129d3e48b16c6578706572696d656e74616cf50037",
  "sourceMap": "184:516:19:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;184:516:19;;;;;;",
  "deployedSourceMap": "184:516:19:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;184:516:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;496:202:19;;;;;;;;;:::i;:::-;;1423:137:24;;;:::i;272:218:19:-;;;;;;;;;:::i;1110:29:11:-;;;:::i;659:77:24:-;;;:::i;:::-;;;;;;;;979:90;;;:::i;:::-;;;;;;;;2977:396:11;;;;;;;;;:::i;1058:52:8:-;;;;;;;;;:::i;242:23:19:-;;;:::i;1731:107:24:-;;;;;;;;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;496:202:19:-;629:62;661:15;678:12;629:31;:62::i;:::-;496:202;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;272:218:19:-;1423:14:8;;408:15:19;;1423:18:8;1419:615;;1488:19;1520:8;;1510:19;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1560:34:8;;;;;;:17;:34;;;;;;;1510:19;;-1:-1:-1;1560:39:8;1556:468;;-1:-1:-1;;;;;1738:34:8;;;;;;:17;:34;;;;;;:49;;1709:155;;;;-1:-1:-1;;;;;1709:155:8;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1883:34:8;;1920:1;1883:34;;;:17;:34;;;;;:38;1556:468;;;-1:-1:-1;;;;;1961:34:8;;;;;;:17;:34;;;;;:48;;;1556:468;1419:615;;1646:14:11;;1642:72;;463:8:19;:20;;;1697:7:11;;1642:72;1891:19;1970:8;;1936:56;;;;;;;;;;;;;;-1:-1:-1;;26:21;;;22:32;6:49;;1936:56:11;;;1913:89;;49:4:-1;1913:89:11;;;;2013:24;2040:31;;;:18;:31;;;;;;1913:89;;-1:-1:-1;2168:21:11;2164:235;;2205:31;;;;:18;:31;;;;;;;2239:15;2205:49;;;;2274:93;;;;;;2224:11;;2239:15;2274:93;;;;;;;;;;2382:7;;;;2164:235;2470:14;;2449:36;;:16;;:36;:20;:36;:::i;:::-;2430:15;:55;;2409:154;;;;-1:-1:-1;;;;;2409:154:11;;;;;;;;;-1:-1:-1;2644:1:11;2610:31;;;:18;:31;;;;;:35;463:8:19;:20;;;2043:1:8;272:218:19;;;:::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;-1:-1:-1;;;;;3187:136:11;;;;;;;;;3334:14;:32;2977:396::o;1058:52:8:-;;;;;;;;;;;;;:::o;242:23:19:-;;;;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;2470:429:8:-;-1:-1:-1;;;;;2632:34:8;;;;;;:17;:34;;;;;;:50;;2611:148;;;;-1:-1:-1;;;;;2611:148:8;;;;;;;;;2770:73;2830:12;2770:59;:73::i;:::-;-1:-1:-1;;;;;;2854:34:8;2891:1;2854:34;;;:17;:34;;;;;:38;2470:429::o;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;-1:-1:-1;1439:145:23;;;;;:::o;1982:183:24:-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;1581:431:13:-;1710:32;;;;:18;:32;;;;;;1689:158;;;;-1:-1:-1;;;;;1689:158:13;;;;;;;;;1929:1;1894:32;;;:18;:32;;;;;;:36;;;1946:59;1913:12;;1946:59;;;1581:431;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;57:66;-1:-1;;;57:66;130:118;;197:46;235:6;222:20;197:46;;380:241;;484:2;472:9;463:7;459:23;455:32;452:2;;;500:1;497;490:12;452:2;535:1;552:53;597:7;577:9;552:53;;;542:63;446:175;-1:-1;;;;446:175;628:366;;;749:2;737:9;728:7;724:23;720:32;717:2;;;765:1;762;755:12;717:2;800:1;817:53;862:7;842:9;817:53;;;807:63;;779:97;907:2;925:53;970:7;961:6;950:9;946:22;925:53;;;915:63;;886:98;711:283;;;;;;1374:241;;1478:2;1466:9;1457:7;1453:23;1449:32;1446:2;;;1494:1;1491;1484:12;1446:2;1529:1;1546:53;1591:7;1571:9;1546:53;;1870:120;1953:31;1978:5;1953:31;;;1948:3;1941:44;1935:55;;;1997:111;2074:28;2096:5;2074:28;;2115:120;2198:31;2223:5;2198:31;;2263:300;;2394:88;2475:6;2470:3;2394:88;;;2387:95;;2487:43;2523:6;2518:3;2511:5;2487:43;;;-1:-1;;2542:16;;2381:182;2571:465;;2731:67;2795:2;2790:3;2731:67;;;2831:66;2811:87;;2932:66;2927:2;2918:12;;2911:88;3027:2;3018:12;;2717:319;-1:-1;;2717:319;3045:566;;3205:67;3269:2;3264:3;3205:67;;;3305:66;3285:87;;3406:66;3401:2;3392:12;;3385:88;3507:66;3502:2;3493:12;;3486:88;3602:2;3593:12;;3191:420;-1:-1;;3191:420;3620:465;;3780:67;3844:2;3839:3;3780:67;;;3880:66;3860:87;;3981:66;3976:2;3967:12;;3960:88;4076:2;4067:12;;3766:319;-1:-1;;3766:319;4094:465;;4254:67;4318:2;4313:3;4254:67;;;4354:66;4334:87;;4455:66;4450:2;4441:12;;4434:88;4550:2;4541:12;;4240:319;-1:-1;;4240:319;4568:465;;4728:67;4792:2;4787:3;4728:67;;;4828:66;4808:87;;4929:66;4924:2;4915:12;;4908:88;5024:2;5015:12;;4714:319;-1:-1;;4714:319;5168:282;;5322:103;5421:3;5412:6;5404;5322:103;;5457:213;5575:2;5560:18;;5589:71;5564:9;5633:6;5589:71;;5677:201;5789:2;5774:18;;5803:65;5778:9;5841:6;5803:65;;5885:213;6003:2;5988:18;;6017:71;5992:9;6061:6;6017:71;;6105:324;6251:2;6236:18;;6265:71;6240:9;6309:6;6265:71;;;6347:72;6415:2;6404:9;6400:18;6391:6;6347:72;;6436:407;6627:2;6641:47;;;6612:18;;6702:131;6612:18;6702:131;;6850:407;7041:2;7055:47;;;7026:18;;7116:131;7026:18;7116:131;;7264:407;7455:2;7469:47;;;7440:18;;7530:131;7440:18;7530:131;;7678:407;7869:2;7883:47;;;7854:18;;7944:131;7854:18;7944:131;;8092:407;8283:2;8297:47;;;8268:18;;8358:131;8268:18;8358:131;;8727:144;8862:3;8840:31;-1:-1;8840:31;8880:163;8983:19;;;9032:4;9023:14;;8976:67;9051:105;;9120:31;9145:5;9120:31;;9163:92;9236:13;9229:21;;9212:43;9262:79;9331:5;9314:27;9348:128;-1:-1;;;;;9417:54;;9400:76;9989:145;10070:6;10065:3;10060;10047:30;-1:-1;10126:1;10108:16;;10101:27;10040:94",
  "source": "pragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { LimitOneUpgrade } from \"../lib/LimitOneUpgrade.sol\";\n\n// Mock contract implementation of LimitOneUpgrade functions\ncontract LimitOneUpgradeMock is\n    LimitOneUpgrade\n{\n    uint256 public testUint;\n\n    function testLimitOneUpgrade(\n        address _upgradeAddress,\n        uint256 _testUint\n    )\n        external\n        limitOneUpgrade(_upgradeAddress)\n        timeLockUpgrade\n    {\n        testUint = _testUint;\n    }\n\n    function removeRegisteredUpgrade(\n        address _upgradeAddress,\n        bytes32 _upgradeHash\n    )\n        external\n    {\n        removeRegisteredUpgradeInternal(_upgradeAddress, _upgradeHash);\n    }\n}",
  "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/LimitOneUpgradeMock.sol",
  "ast": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/LimitOneUpgradeMock.sol",
    "exportedSymbols": {
      "LimitOneUpgradeMock": [
        2884
      ]
    },
    "id": 2885,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2846,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:19"
      },
      {
        "id": 2847,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "23:35:19"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol",
        "file": "../lib/LimitOneUpgrade.sol",
        "id": 2849,
        "nodeType": "ImportDirective",
        "scope": 2885,
        "sourceUnit": 1789,
        "src": "60:61:19",
        "symbolAliases": [
          {
            "foreign": 2848,
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
              "id": 2850,
              "name": "LimitOneUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1788,
              "src": "220:15:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LimitOneUpgrade_$1788",
                "typeString": "contract LimitOneUpgrade"
              }
            },
            "id": 2851,
            "nodeType": "InheritanceSpecifier",
            "src": "220:15:19"
          }
        ],
        "contractDependencies": [
          1788,
          2278,
          2461,
          3198
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2884,
        "linearizedBaseContracts": [
          2884,
          1788,
          2461,
          2278,
          3198
        ],
        "name": "LimitOneUpgradeMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2853,
            "name": "testUint",
            "nodeType": "VariableDeclaration",
            "scope": 2884,
            "src": "242:23:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2852,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "242:7:19",
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
              "id": 2869,
              "nodeType": "Block",
              "src": "453:37:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2865,
                      "name": "testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2853,
                      "src": "463:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2866,
                      "name": "_testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2857,
                      "src": "474:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "463:20:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2868,
                  "nodeType": "ExpressionStatement",
                  "src": "463:20:19"
                }
              ]
            },
            "documentation": null,
            "id": 2870,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2860,
                    "name": "_upgradeAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2855,
                    "src": "408:15:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2861,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2859,
                  "name": "limitOneUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1758,
                  "src": "392:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "392:32:19"
              },
              {
                "arguments": null,
                "id": 2863,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2862,
                  "name": "timeLockUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
                  "src": "433:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "433:15:19"
              }
            ],
            "name": "testLimitOneUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2855,
                  "name": "_upgradeAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2870,
                  "src": "310:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:19",
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
                  "id": 2857,
                  "name": "_testUint",
                  "nodeType": "VariableDeclaration",
                  "scope": 2870,
                  "src": "343:17:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:66:19"
            },
            "returnParameters": {
              "id": 2864,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:19"
            },
            "scope": 2884,
            "src": "272:218:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2882,
              "nodeType": "Block",
              "src": "619:79:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2878,
                        "name": "_upgradeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2872,
                        "src": "661:15:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2879,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2874,
                        "src": "678:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 2877,
                      "name": "removeRegisteredUpgradeInternal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1787,
                        2460
                      ],
                      "referencedDeclaration": 1787,
                      "src": "629:31:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,bytes32)"
                      }
                    },
                    "id": 2880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:62:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2881,
                  "nodeType": "ExpressionStatement",
                  "src": "629:62:19"
                }
              ]
            },
            "documentation": null,
            "id": 2883,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeRegisteredUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2872,
                  "name": "_upgradeAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2883,
                  "src": "538:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2871,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:7:19",
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
                  "id": 2874,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2883,
                  "src": "571:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2873,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:69:19"
            },
            "returnParameters": {
              "id": 2876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "619:0:19"
            },
            "scope": 2884,
            "src": "496:202:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2885,
        "src": "184:516:19"
      }
    ],
    "src": "0:700:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/mocks/LimitOneUpgradeMock.sol",
    "exportedSymbols": {
      "LimitOneUpgradeMock": [
        2884
      ]
    },
    "id": 2885,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2846,
        "literals": [
          "solidity",
          "0.5",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:19"
      },
      {
        "id": 2847,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "23:35:19"
      },
      {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/LimitOneUpgrade.sol",
        "file": "../lib/LimitOneUpgrade.sol",
        "id": 2849,
        "nodeType": "ImportDirective",
        "scope": 2885,
        "sourceUnit": 1789,
        "src": "60:61:19",
        "symbolAliases": [
          {
            "foreign": 2848,
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
              "id": 2850,
              "name": "LimitOneUpgrade",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1788,
              "src": "220:15:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LimitOneUpgrade_$1788",
                "typeString": "contract LimitOneUpgrade"
              }
            },
            "id": 2851,
            "nodeType": "InheritanceSpecifier",
            "src": "220:15:19"
          }
        ],
        "contractDependencies": [
          1788,
          2278,
          2461,
          3198
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2884,
        "linearizedBaseContracts": [
          2884,
          1788,
          2461,
          2278,
          3198
        ],
        "name": "LimitOneUpgradeMock",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2853,
            "name": "testUint",
            "nodeType": "VariableDeclaration",
            "scope": 2884,
            "src": "242:23:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2852,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "242:7:19",
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
              "id": 2869,
              "nodeType": "Block",
              "src": "453:37:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2865,
                      "name": "testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2853,
                      "src": "463:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2866,
                      "name": "_testUint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2857,
                      "src": "474:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "463:20:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2868,
                  "nodeType": "ExpressionStatement",
                  "src": "463:20:19"
                }
              ]
            },
            "documentation": null,
            "id": 2870,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2860,
                    "name": "_upgradeAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2855,
                    "src": "408:15:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2861,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2859,
                  "name": "limitOneUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1758,
                  "src": "392:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "392:32:19"
              },
              {
                "arguments": null,
                "id": 2863,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2862,
                  "name": "timeLockUpgrade",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
                  "src": "433:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "433:15:19"
              }
            ],
            "name": "testLimitOneUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2855,
                  "name": "_upgradeAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2870,
                  "src": "310:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:19",
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
                  "id": 2857,
                  "name": "_testUint",
                  "nodeType": "VariableDeclaration",
                  "scope": 2870,
                  "src": "343:17:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:66:19"
            },
            "returnParameters": {
              "id": 2864,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:19"
            },
            "scope": 2884,
            "src": "272:218:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2882,
              "nodeType": "Block",
              "src": "619:79:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2878,
                        "name": "_upgradeAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2872,
                        "src": "661:15:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2879,
                        "name": "_upgradeHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2874,
                        "src": "678:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
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
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 2877,
                      "name": "removeRegisteredUpgradeInternal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1787,
                        2460
                      ],
                      "referencedDeclaration": 1787,
                      "src": "629:31:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                        "typeString": "function (address,bytes32)"
                      }
                    },
                    "id": 2880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:62:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2881,
                  "nodeType": "ExpressionStatement",
                  "src": "629:62:19"
                }
              ]
            },
            "documentation": null,
            "id": 2883,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeRegisteredUpgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2872,
                  "name": "_upgradeAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2883,
                  "src": "538:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2871,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:7:19",
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
                  "id": 2874,
                  "name": "_upgradeHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 2883,
                  "src": "571:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2873,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:69:19"
            },
            "returnParameters": {
              "id": 2876,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "619:0:19"
            },
            "scope": 2884,
            "src": "496:202:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2885,
        "src": "184:516:19"
      }
    ],
    "src": "0:700:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.7+commit.6da8b019.Linux.g++"
  },
  "networks": {},
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-15T22:23:26.933Z",
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