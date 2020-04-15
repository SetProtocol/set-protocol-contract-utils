"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorizable = {
    "contractName": "Authorizable",
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
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "authorities",
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
            "name": "authorized",
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
                    "name": "authAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "authorizedBy",
                    "type": "address"
                }
            ],
            "name": "AddressAuthorized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addressRemoved",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "authorizedBy",
                    "type": "address"
                }
            ],
            "name": "AuthorizedAddressRemoved",
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
                    "name": "_authTarget",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_authTarget",
                    "type": "address"
                }
            ],
            "name": "removeAuthorizedAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedAddresses",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_authTarget\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"authorities\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_authTarget\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"authAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"authorizedBy\",\"type\":\"address\"}],\"name\":\"AddressAuthorized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"addressRemoved\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"authorizedBy\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * The Authorizable contract is an inherited contract that sets permissions on certain function calls through the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.\",\"methods\":{\"addAuthorizedAddress(address)\":{\"params\":{\"_authTarget\":\"The address of the new authorized contract\"}},\"getAuthorizedAddresses()\":{\"return\":\"address[]   Array of authorized addresses\"},\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"removeAuthorizedAddress(address)\":{\"params\":{\"_authTarget\":\"The address to be de-permissioned\"}},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}}},\"title\":\"Authorizable\"},\"userdoc\":{\"methods\":{\"addAuthorizedAddress(address)\":{\"notice\":\"Add authorized address to contract. Can only be set by owner.\"},\"getAuthorizedAddresses()\":{\"notice\":\"Get array of authorized addresses.\"},\"removeAuthorizedAddress(address)\":{\"notice\":\"Remove authorized address from contract. Can only be set by owner.\"},\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Authorizable.sol\":\"Authorizable\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol\":{\"keccak256\":\"0xb716eab4e8c5a336a2f19078928530829af097912bd1b925644f914b63601f08\",\"urls\":[\"bzzr://d8a21d39779beb316adb5180d08dcba1941eeccd9412ff08feb21a631c18c269\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Authorizable.sol\":{\"keccak256\":\"0x5d6a7e009ab4ca7cea2a66c43ac0fa35d19596b42374a53a683825d9520d3399\",\"urls\":[\"bzzr://88c61e8526c9573ae661bf742dc7cdae93d1dec378ab11c192765ce0948a2349\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610c8a806100576000396000f3fe608060405234801561001057600080fd5b50600436106100d1576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161008e5780638da5cb5b1461019c5780638f32d59b146101a45780639303b16f146101c0578063b9181611146101dd578063d39de6e914610203578063f2fde38b1461025b576100d1565b80631766486d146100d657806342f1181e14610105578063494503d41461012d5780637071293914610166578063715018a61461018c57806378446bc114610194575b600080fd5b6100f3600480360360208110156100ec57600080fd5b5035610281565b60408051918252519081900360200190f35b61012b6004803603602081101561011b57600080fd5b5035600160a060020a0316610293565b005b61014a6004803603602081101561014357600080fd5b50356105bd565b60408051600160a060020a039092168252519081900360200190f35b61012b6004803603602081101561017c57600080fd5b5035600160a060020a03166105e4565b61012b610733565b6100f361079b565b61014a6107a1565b6101ac6107b1565b604080519115158252519081900360200190f35b61012b600480360360208110156101d657600080fd5b50356107c2565b6101ac600480360360208110156101f357600080fd5b5035600160a060020a031661081b565b61020b610830565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561024757818101518382015260200161022f565b505050509050019250505060405180910390f35b61012b6004803603602081101561027157600080fd5b5035600160a060020a0316610892565b60026020526000908152604090205481565b61029b6107b1565b6102a457600080fd5b6001546103b257600160a060020a03811660009081526003602052604090205460ff16156103065760405160e560020a62461bcd02815260040180806020018281038252603d815260200180610b79603d913960400191505060405180910390fd5b600160a060020a0381166000818152600360209081526040808320805460ff191660019081179091556004805491820181559093527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a26105ba565b60008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061045157600082815260026020908152604091829020429081905582518581529182015281517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374929181900390910190a150506105ba565b60015461046590829063ffffffff6108ac16565b4210156104a65760405160e560020a62461bcd028152600401808060200182810382526034815260200180610bf26034913960400191505060405180910390fd5b6000828152600260209081526040808320839055600160a060020a0386168352600390915290205460ff16156105105760405160e560020a62461bcd02815260040180806020018281038252603d815260200180610b79603d913960400191505060405180910390fd5b600160a060020a0383166000818152600360209081526040808320805460ff191660019081179091556004805491820181559093527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a250505b50565b600481815481106105ca57fe5b600091825260209091200154600160a060020a0316905081565b6105ec6107b1565b6105f557600080fd5b600160a060020a03811660009081526003602052604090205460ff1661064f5760405160e560020a62461bcd02815260040180806020018281038252603c815260200180610bb6603c913960400191505060405180910390fd5b600160a060020a038116600090815260036020908152604091829020805460ff19169055600480548351818402810184019094528084526106dc938593909291908301828280156106c957602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116106ab575b50505050506108c790919063ffffffff16565b80516106f091600491602090910190610ad5565b50604080513381529051600160a060020a038316917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a250565b61073b6107b1565b61074457600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b6107ca6107b1565b6107d357600080fd5b60015481116108165760405160e560020a62461bcd028152600401808060200182810382526039815260200180610c266039913960400191505060405180910390fd5b600155565b60036020526000908152604090205460ff1681565b6060600480548060200260200160405190810160405280929190818152602001828054801561088857602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161086a575b5050505050905090565b61089a6107b1565b6108a357600080fd5b6105ba816108fc565b6000828201838110156108be57600080fd5b90505b92915050565b60606000806108d68585610977565b91509150806108e457600080fd5b60606108f086846109db565b5093506108c192505050565b600160a060020a03811661090f57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b818110156109ca5784600160a060020a031686828151811061099e57fe5b6020026020010151600160a060020a031614156109c2579250600191506109d49050565b600101610980565b5060009250829150505b9250929050565b606060008084519050606060018203604051908082528060200260200182016040528015610a13578160200160208202803883390190505b50905060005b85811015610a6157868181518110610a2d57fe5b6020026020010151828281518110610a4157fe5b600160a060020a0390921660209283029190910190910152600101610a19565b50600185015b82811015610ab257868181518110610a7b57fe5b6020026020010151826001830381518110610a9257fe5b600160a060020a0390921660209283029190910190910152600101610a67565b5080868681518110610ac057fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215610b37579160200282015b82811115610b37578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610af5565b50610b43929150610b47565b5090565b6107ae91905b80821115610b4357805473ffffffffffffffffffffffffffffffffffffffff19168155600101610b4d56fe417574686f72697a61626c652e616464417574686f72697a6564416464726573733a204164647265737320616c72656164792072656769737465726564417574686f72697a61626c652e72656d6f7665417574686f72697a6564416464726573733a2041646472657373206e6f7420617574686f72697a656454696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a7230582001d4fcf092e253af82c6ba508476962051436472fded7e8f209d715960e309260029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100d1576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b1161008e5780638da5cb5b1461019c5780638f32d59b146101a45780639303b16f146101c0578063b9181611146101dd578063d39de6e914610203578063f2fde38b1461025b576100d1565b80631766486d146100d657806342f1181e14610105578063494503d41461012d5780637071293914610166578063715018a61461018c57806378446bc114610194575b600080fd5b6100f3600480360360208110156100ec57600080fd5b5035610281565b60408051918252519081900360200190f35b61012b6004803603602081101561011b57600080fd5b5035600160a060020a0316610293565b005b61014a6004803603602081101561014357600080fd5b50356105bd565b60408051600160a060020a039092168252519081900360200190f35b61012b6004803603602081101561017c57600080fd5b5035600160a060020a03166105e4565b61012b610733565b6100f361079b565b61014a6107a1565b6101ac6107b1565b604080519115158252519081900360200190f35b61012b600480360360208110156101d657600080fd5b50356107c2565b6101ac600480360360208110156101f357600080fd5b5035600160a060020a031661081b565b61020b610830565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561024757818101518382015260200161022f565b505050509050019250505060405180910390f35b61012b6004803603602081101561027157600080fd5b5035600160a060020a0316610892565b60026020526000908152604090205481565b61029b6107b1565b6102a457600080fd5b6001546103b257600160a060020a03811660009081526003602052604090205460ff16156103065760405160e560020a62461bcd02815260040180806020018281038252603d815260200180610b79603d913960400191505060405180910390fd5b600160a060020a0381166000818152600360209081526040808320805460ff191660019081179091556004805491820181559093527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a26105ba565b60008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061045157600082815260026020908152604091829020429081905582518581529182015281517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374929181900390910190a150506105ba565b60015461046590829063ffffffff6108ac16565b4210156104a65760405160e560020a62461bcd028152600401808060200182810382526034815260200180610bf26034913960400191505060405180910390fd5b6000828152600260209081526040808320839055600160a060020a0386168352600390915290205460ff16156105105760405160e560020a62461bcd02815260040180806020018281038252603d815260200180610b79603d913960400191505060405180910390fd5b600160a060020a0383166000818152600360209081526040808320805460ff191660019081179091556004805491820181559093527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a250505b50565b600481815481106105ca57fe5b600091825260209091200154600160a060020a0316905081565b6105ec6107b1565b6105f557600080fd5b600160a060020a03811660009081526003602052604090205460ff1661064f5760405160e560020a62461bcd02815260040180806020018281038252603c815260200180610bb6603c913960400191505060405180910390fd5b600160a060020a038116600090815260036020908152604091829020805460ff19169055600480548351818402810184019094528084526106dc938593909291908301828280156106c957602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116106ab575b50505050506108c790919063ffffffff16565b80516106f091600491602090910190610ad5565b50604080513381529051600160a060020a038316917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a250565b61073b6107b1565b61074457600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b6107ca6107b1565b6107d357600080fd5b60015481116108165760405160e560020a62461bcd028152600401808060200182810382526039815260200180610c266039913960400191505060405180910390fd5b600155565b60036020526000908152604090205460ff1681565b6060600480548060200260200160405190810160405280929190818152602001828054801561088857602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161086a575b5050505050905090565b61089a6107b1565b6108a357600080fd5b6105ba816108fc565b6000828201838110156108be57600080fd5b90505b92915050565b60606000806108d68585610977565b91509150806108e457600080fd5b60606108f086846109db565b5093506108c192505050565b600160a060020a03811661090f57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b818110156109ca5784600160a060020a031686828151811061099e57fe5b6020026020010151600160a060020a031614156109c2579250600191506109d49050565b600101610980565b5060009250829150505b9250929050565b606060008084519050606060018203604051908082528060200260200182016040528015610a13578160200160208202803883390190505b50905060005b85811015610a6157868181518110610a2d57fe5b6020026020010151828281518110610a4157fe5b600160a060020a0390921660209283029190910190910152600101610a19565b50600185015b82811015610ab257868181518110610a7b57fe5b6020026020010151826001830381518110610a9257fe5b600160a060020a0390921660209283029190910190910152600101610a67565b5080868681518110610ac057fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215610b37579160200282015b82811115610b37578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610af5565b50610b43929150610b47565b5090565b6107ae91905b80821115610b4357805473ffffffffffffffffffffffffffffffffffffffff19168155600101610b4d56fe417574686f72697a61626c652e616464417574686f72697a6564416464726573733a204164647265737320616c72656164792072656769737465726564417574686f72697a61626c652e72656d6f7665417574686f72697a6564416464726573733a2041646472657373206e6f7420617574686f72697a656454696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e67a165627a7a7230582001d4fcf092e253af82c6ba508476962051436472fded7e8f209d715960e309260029",
    "sourceMap": "1163:2989:3:-;;;;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;-1:-1:-1;;;;;582:6:24;;549:40;;515:6;;549:40;1163:2989:3;;;;;;",
    "deployedSourceMap": "1163:2989:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1163:2989:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1206:53:11;;:::i;:::-;;;;;;;;;;;;;;;;2428:620:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2428:620:3;-1:-1:-1;;;;;2428:620:3;;:::i;:::-;;1506:28;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1506:28:3;;:::i;:::-;;;;-1:-1:-1;;;;;1506:28:3;;;;;;;;;;;;;;3215:576;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3215:576:3;-1:-1:-1;;;;;3215:576:3;;:::i;1423:137:24:-;;;:::i;1110:29:11:-;;;:::i;659:77:24:-;;;:::i;979:90::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;2977:396:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2977:396:11;;:::i;1419:43:3:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1419:43:3;-1:-1:-1;;;;;1419:43:3;;:::i;3964:186::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3964:186:3;;;;;;;;;;;;;;;;;1731:107:24;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;2428:620:3:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;1646:14:11;;1642:72;;-1:-1:-1;;;;;2632:23:3;;;;;;:10;:23;;;;;;;;2631:24;2610:132;;;;-1:-1:-1;;;;;2610:132:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2794:23:3;;;;;;:10;:23;;;;;;;;:30;;-1:-1:-1;;2794:30:3;2820:4;2794:30;;;;;;2879:11;27:10:-1;;23:18;;;45:23;;2879:29:3;;;;;;;;;-1:-1:-1;;2879:29:3;;;;;2965:76;;3021:10;2965:76;;;;;;;;;;;;;;1697:7:11;;1642:72;1891:19;1970:8;;1936:56;;;;;;;30:3:-1;22:6;14;1:33;1936:56:11;;;45:16:-1;;;;26:21;;;-1:-1;;22:32;6:49;;1936:56:11;;1913:89;;49:4:-1;1913:89:11;;;;2013:24;2040:31;;;:18;:31;;;;;;;1913:89;;-1:-1:-1;2040:31:11;;-1:-1:-1;;;2168:21:11;;2164:235;;-1:-1:-1;2164:235:11;;2205:31;;;;:18;:31;;;;;;;;;2239:15;2205:49;;;;2274:93;;;;;;;;;;;;;;;;;;;;;;2382:7;;;;2164:235;2470:14;;2449:36;;:16;;:36;:20;:36;:::i;:::-;2430:15;:55;;2409:154;;;;-1:-1:-1;;;;;2409:154:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2644:1;2610:31;;;:18;:31;;;;;;;;:35;;;-1:-1:-1;;;;;2632:23:3;;;;:10;:23;;;;;;;;2631:24;2610:132;;;;-1:-1:-1;;;;;2610:132:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2794:23:3;;;;;;:10;:23;;;;;;;;:30;;-1:-1:-1;;2794:30:3;2820:4;2794:30;;;;;;2879:11;27:10:-1;;23:18;;;45:23;;2879:29:3;;;;;;;;;-1:-1:-1;;2879:29:3;;;;;2965:76;;3021:10;2965:76;;;;;;;;;;;;;;883:1:24;;;2428:620:3;:::o;1506:28::-;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1506:28:3;;-1:-1:-1;1506:28:3;:::o;3215:576::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;-1:-1:-1;;;;;3380:23:3;;;;;;:10;:23;;;;;;;;3359:130;;;;-1:-1:-1;;;;;3359:130:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3550:23:3;;3576:5;3550:23;;;:10;:23;;;;;;;;;:31;;-1:-1:-1;;3550:31:3;;;3606:11;:18;;;;;;;;;;;;;;;;;:31;;3561:11;;3606:18;;:11;:18;;;:11;:18;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3606:18:3;;;;;;;;;;;;;;;;;;;;;;;:31;;;;:::i;:::-;3592:45;;;;:11;;:45;;;;;;:::i;:::-;-1:-1:-1;3701:83:3;;;3764:10;3701:83;;;;-1:-1:-1;;;;;3701:83:3;;;;;;;;;;;;;3215:576;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;-1:-1:-1;;;;;3187:136:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;1419:43:3:-;;;;;;;;;;;;;;;:::o;3964:186::-;4045:16;4132:11;4125:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4125:18:3;;;;;;;;;;;;;;;;;;;;;;;3964:186;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;-1:-1:-1;1439:145:23;;;;;:::o;5536:320:1:-;5630:16;5663:13;5678:9;5691:13;5699:1;5702;5691:7;:13::i;:::-;5662:42;;;;5719:4;5714:136;;5739:8;;;5714:136;5779:19;5803:13;5807:1;5810:5;5803:3;:13::i;:::-;-1:-1:-1;5778:38:1;-1:-1:-1;5830:9:1;;-1:-1:-1;;;5830:9:1;1982:183:24;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;509:289:1:-;622:8;;580:7;;;;;640:125;664:6;660:1;:10;640:125;;;703:1;-1:-1:-1;;;;;695:9:1;:1;697;695:4;;;;;;;;;;;;;;-1:-1:-1;;;;;695:9:1;;691:64;;;732:1;-1:-1:-1;735:4:1;;-1:-1:-1;724:16:1;;-1:-1:-1;724:16:1;691:64;672:3;;640:125;;;-1:-1:-1;782:1:1;;-1:-1:-1;782:1:1;;-1:-1:-1;;509:289:1;;;;;;:::o;5004:473::-;5099:16;5117:7;5140:14;5157:1;:8;5140:25;;5175:29;5230:1;5221:6;:10;5207:25;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;5207:25:1;-1:-1:-1;5175:57:1;-1:-1:-1;5247:9:1;5242:83;5266:5;5262:1;:9;5242:83;;;5310:1;5312;5310:4;;;;;;;;;;;;;;5292:12;5305:1;5292:15;;;;;;;;-1:-1:-1;;;;;5292:22:1;;;:15;;;;;;;;;;;:22;5273:3;;5242:83;;;-1:-1:-1;5359:1:1;5351:9;;5334:96;5366:6;5362:1;:10;5334:96;;;5415:1;5417;5415:4;;;;;;;;;;;;;;5393:12;5410:1;5406;:5;5393:19;;;;;;;;-1:-1:-1;;;;;5393:26:1;;;:19;;;;;;;;;;;:26;5374:3;;5334:96;;;;5447:12;5461:1;5463:5;5461:8;;;;;;;;;;;;;;5439:31;;;;;;5004:473;;;;;:::o;1163:2989:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1163:2989:3;-1:-1:-1;;;;;1163:2989:3;;;;;;;;;;;-1:-1:-1;1163:2989:3;;;;;;;-1:-1:-1;1163:2989:3;;;-1:-1:-1;1163:2989:3;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;1163:2989:3;;;;;;",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\nimport { Ownable } from \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport { SafeMath } from \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\nimport { AddressArrayUtils } from \"./AddressArrayUtils.sol\";\nimport { TimeLockUpgrade } from \"./TimeLockUpgrade.sol\";\n\n\n/**\n * @title Authorizable\n * @author Set Protocol\n *\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\n * through the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.\n */\ncontract Authorizable is\n    Ownable,\n    TimeLockUpgrade\n{\n    using SafeMath for uint256;\n    using AddressArrayUtils for address[];\n\n    /* ============ State Variables ============ */\n\n    // Mapping of addresses to bool indicator of authorization\n    mapping (address => bool) public authorized;\n\n    // Array of authorized addresses\n    address[] public authorities;\n\n    /* ============ Modifiers ============ */\n\n    // Only authorized addresses can invoke functions with this modifier.\n    modifier onlyAuthorized {\n        require(\n            authorized[msg.sender],\n            \"Authorizable.onlyAuthorized: Sender not included in authorities\"\n        );\n        _;\n    }\n\n    /* ============ Events ============ */\n\n    // Event emitted when new address is authorized.\n    event AddressAuthorized (\n        address indexed authAddress,\n        address authorizedBy\n    );\n\n    // Event emitted when address is deauthorized.\n    event AuthorizedAddressRemoved (\n        address indexed addressRemoved,\n        address authorizedBy\n    );\n\n    /* ============ Setters ============ */\n\n    /**\n     * Add authorized address to contract. Can only be set by owner.\n     *\n     * @param  _authTarget   The address of the new authorized contract\n     */\n\n    function addAuthorizedAddress(address _authTarget)\n        external\n        onlyOwner\n        timeLockUpgrade\n    {\n        // Require that address is not already authorized\n        require(\n            !authorized[_authTarget],\n            \"Authorizable.addAuthorizedAddress: Address already registered\"\n        );\n\n        // Set address authority to true\n        authorized[_authTarget] = true;\n\n        // Add address to authorities array\n        authorities.push(_authTarget);\n\n        // Emit authorized address event\n        emit AddressAuthorized(\n            _authTarget,\n            msg.sender\n        );\n    }\n\n    /**\n     * Remove authorized address from contract. Can only be set by owner.\n     *\n     * @param  _authTarget   The address to be de-permissioned\n     */\n\n    function removeAuthorizedAddress(address _authTarget)\n        external\n        onlyOwner\n    {\n        // Require address is authorized\n        require(\n            authorized[_authTarget],\n            \"Authorizable.removeAuthorizedAddress: Address not authorized\"\n        );\n\n        // Delete address from authorized mapping\n        authorized[_authTarget] = false;\n\n        authorities = authorities.remove(_authTarget);\n\n        // Emit AuthorizedAddressRemoved event.\n        emit AuthorizedAddressRemoved(\n            _authTarget,\n            msg.sender\n        );\n    }\n\n    /* ============ Getters ============ */\n\n    /**\n     * Get array of authorized addresses.\n     *\n     * @return address[]   Array of authorized addresses\n     */\n    function getAuthorizedAddresses()\n        external\n        view\n        returns (address[] memory)\n    {\n        // Return array of authorized addresses\n        return authorities;\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Authorizable.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Authorizable.sol",
        "exportedSymbols": {
            "Authorizable": [
                1197
            ]
        },
        "id": 1198,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1067,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:3"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 1069,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 3199,
                "src": "621:80:3",
                "symbolAliases": [
                    {
                        "foreign": 1068,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 1071,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 3090,
                "src": "702:77:3",
                "symbolAliases": [
                    {
                        "foreign": 1070,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 1073,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 700,
                "src": "781:60:3",
                "symbolAliases": [
                    {
                        "foreign": 1072,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
                "file": "./TimeLockUpgrade.sol",
                "id": 1075,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 2279,
                "src": "842:56:3",
                "symbolAliases": [
                    {
                        "foreign": 1074,
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
                            "id": 1076,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "1192:7:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 1077,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1192:7:3"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1078,
                            "name": "TimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2278,
                            "src": "1205:15:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                                "typeString": "contract TimeLockUpgrade"
                            }
                        },
                        "id": 1079,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1205:15:3"
                    }
                ],
                "contractDependencies": [
                    2278,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title Authorizable\n@author Set Protocol\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\nthrough the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.",
                "fullyImplemented": true,
                "id": 1197,
                "linearizedBaseContracts": [
                    1197,
                    2278,
                    3198
                ],
                "name": "Authorizable",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 1082,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1080,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "1233:8:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1227:27:3",
                        "typeName": {
                            "id": 1081,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1246:7:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 1086,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1083,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "1265:17:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1259:38:3",
                        "typeName": {
                            "baseType": {
                                "id": 1084,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1287:7:3",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1085,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1287:9:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 1090,
                        "name": "authorized",
                        "nodeType": "VariableDeclaration",
                        "scope": 1197,
                        "src": "1419:43:3",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 1089,
                            "keyType": {
                                "id": 1087,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1428:7:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1419:25:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                                "id": 1088,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1439:4:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 1093,
                        "name": "authorities",
                        "nodeType": "VariableDeclaration",
                        "scope": 1197,
                        "src": "1506:28:3",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 1091,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1506:7:3",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1092,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1506:9:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1104,
                            "nodeType": "Block",
                            "src": "1686:160:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1096,
                                                    "name": "authorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1090,
                                                    "src": "1717:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 1099,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1097,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3213,
                                                        "src": "1728:3:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 1098,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1728:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1717:22:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e6f6e6c79417574686f72697a65643a2053656e646572206e6f7420696e636c7564656420696e20617574686f726974696573",
                                                "id": 1100,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1753:65:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9f8cc2ba6933321fdf1b651ec7468b8c83f32b32bac2c1fe3fd0ada3547a042a",
                                                    "typeString": "literal_string \"Authorizable.onlyAuthorized: Sender not included in authorities\""
                                                },
                                                "value": "Authorizable.onlyAuthorized: Sender not included in authorities"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9f8cc2ba6933321fdf1b651ec7468b8c83f32b32bac2c1fe3fd0ada3547a042a",
                                                    "typeString": "literal_string \"Authorizable.onlyAuthorized: Sender not included in authorities\""
                                                }
                                            ],
                                            "id": 1095,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1696:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1101,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1696:132:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1102,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1696:132:3"
                                },
                                {
                                    "id": 1103,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1838:1:3"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 1105,
                        "name": "onlyAuthorized",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 1094,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1686:0:3"
                        },
                        "src": "1662:184:3",
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1111,
                        "name": "AddressAuthorized",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1110,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1107,
                                    "indexed": true,
                                    "name": "authAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1111,
                                    "src": "1983:27:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1106,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1983:7:3",
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
                                    "id": 1109,
                                    "indexed": false,
                                    "name": "authorizedBy",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1111,
                                    "src": "2020:20:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1108,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:7:3",
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
                            "src": "1973:73:3"
                        },
                        "src": "1949:98:3"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1117,
                        "name": "AuthorizedAddressRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1116,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1113,
                                    "indexed": true,
                                    "name": "addressRemoved",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1117,
                                    "src": "2145:30:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1112,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2145:7:3",
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
                                    "id": 1115,
                                    "indexed": false,
                                    "name": "authorizedBy",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1117,
                                    "src": "2185:20:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1114,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2185:7:3",
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
                            "src": "2135:76:3"
                        },
                        "src": "2104:108:3"
                    },
                    {
                        "body": {
                            "id": 1152,
                            "nodeType": "Block",
                            "src": "2542:506:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1130,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "2631:24:3",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1127,
                                                        "name": "authorized",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1090,
                                                        "src": "2632:10:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 1129,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1128,
                                                        "name": "_authTarget",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1119,
                                                        "src": "2643:11:3",
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
                                                    "src": "2632:23:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e616464417574686f72697a6564416464726573733a204164647265737320616c72656164792072656769737465726564",
                                                "id": 1131,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2669:63:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_82e05beae0e880829d0e401f7e9e1fa7e86c8d3b5e900f878a6bbb519e198c40",
                                                    "typeString": "literal_string \"Authorizable.addAuthorizedAddress: Address already registered\""
                                                },
                                                "value": "Authorizable.addAuthorizedAddress: Address already registered"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_82e05beae0e880829d0e401f7e9e1fa7e86c8d3b5e900f878a6bbb519e198c40",
                                                    "typeString": "literal_string \"Authorizable.addAuthorizedAddress: Address already registered\""
                                                }
                                            ],
                                            "id": 1126,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2610:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2610:132:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2610:132:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1134,
                                                "name": "authorized",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1090,
                                                "src": "2794:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 1136,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1135,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2805:11:3",
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
                                            "src": "2794:23:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 1137,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2820:4:3",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2794:30:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1139,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2794:30:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1143,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2896:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 1140,
                                                "name": "authorities",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1093,
                                                "src": "2879:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 1142,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2879:16:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 1144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2879:29:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1145,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2879:29:3"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1147,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2996:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1148,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3213,
                                                    "src": "3021:3:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 1149,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3021:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
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
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 1146,
                                            "name": "AddressAuthorized",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1111,
                                            "src": "2965:17:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1150,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2965:76:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1151,
                                    "nodeType": "EmitStatement",
                                    "src": "2960:81:3"
                                }
                            ]
                        },
                        "documentation": "Add authorized address to contract. Can only be set by owner.\n     * @param  _authTarget   The address of the new authorized contract",
                        "id": 1153,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1122,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1121,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2504:9:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2504:9:3"
                            },
                            {
                                "arguments": null,
                                "id": 1124,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1123,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "2522:15:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2522:15:3"
                            }
                        ],
                        "name": "addAuthorizedAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1119,
                                    "name": "_authTarget",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1153,
                                    "src": "2458:19:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1118,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2458:7:3",
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
                            "src": "2457:21:3"
                        },
                        "returnParameters": {
                            "id": 1125,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2542:0:3"
                        },
                        "scope": 1197,
                        "src": "2428:620:3",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1186,
                            "nodeType": "Block",
                            "src": "3308:483:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1161,
                                                    "name": "authorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1090,
                                                    "src": "3380:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 1163,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1162,
                                                    "name": "_authTarget",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1155,
                                                    "src": "3391:11:3",
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
                                                "src": "3380:23:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e72656d6f7665417574686f72697a6564416464726573733a2041646472657373206e6f7420617574686f72697a6564",
                                                "id": 1164,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3417:62:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5c0ad415bfe4592fe2a108c854ea297f89ca670f329d446ac5713037d0900cd",
                                                    "typeString": "literal_string \"Authorizable.removeAuthorizedAddress: Address not authorized\""
                                                },
                                                "value": "Authorizable.removeAuthorizedAddress: Address not authorized"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5c0ad415bfe4592fe2a108c854ea297f89ca670f329d446ac5713037d0900cd",
                                                    "typeString": "literal_string \"Authorizable.removeAuthorizedAddress: Address not authorized\""
                                                }
                                            ],
                                            "id": 1160,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3359:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1165,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3359:130:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1166,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3359:130:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1171,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1167,
                                                "name": "authorized",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1090,
                                                "src": "3550:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 1169,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1168,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1155,
                                                "src": "3561:11:3",
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
                                            "src": "3550:23:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 1170,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3576:5:3",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "3550:31:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1172,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3550:31:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1178,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1173,
                                            "name": "authorities",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1093,
                                            "src": "3592:11:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 1176,
                                                    "name": "_authTarget",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1155,
                                                    "src": "3625:11:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1174,
                                                    "name": "authorities",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1093,
                                                    "src": "3606:11:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 1175,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "3606:18:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 1177,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3606:31:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "3592:45:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 1179,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3592:45:3"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1181,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1155,
                                                "src": "3739:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1182,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3213,
                                                    "src": "3764:3:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 1183,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3764:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
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
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 1180,
                                            "name": "AuthorizedAddressRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1117,
                                            "src": "3701:24:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3701:83:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1185,
                                    "nodeType": "EmitStatement",
                                    "src": "3696:88:3"
                                }
                            ]
                        },
                        "documentation": "Remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned",
                        "id": 1187,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1158,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1157,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3294:9:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3294:9:3"
                            }
                        ],
                        "name": "removeAuthorizedAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1156,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1155,
                                    "name": "_authTarget",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1187,
                                    "src": "3248:19:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1154,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3248:7:3",
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
                            "src": "3247:21:3"
                        },
                        "returnParameters": {
                            "id": 1159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3308:0:3"
                        },
                        "scope": 1197,
                        "src": "3215:576:3",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1195,
                            "nodeType": "Block",
                            "src": "4067:83:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1193,
                                        "name": "authorities",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1093,
                                        "src": "4132:11:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1192,
                                    "id": 1194,
                                    "nodeType": "Return",
                                    "src": "4125:18:3"
                                }
                            ]
                        },
                        "documentation": "Get array of authorized addresses.\n     * @return address[]   Array of authorized addresses",
                        "id": 1196,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuthorizedAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1188,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3995:2:3"
                        },
                        "returnParameters": {
                            "id": 1192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1191,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1196,
                                    "src": "4045:16:3",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1189,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4045:7:3",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1190,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4045:9:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4044:18:3"
                        },
                        "scope": 1197,
                        "src": "3964:186:3",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1198,
                "src": "1163:2989:3"
            }
        ],
        "src": "597:3556:3"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/Authorizable.sol",
        "exportedSymbols": {
            "Authorizable": [
                1197
            ]
        },
        "id": 1198,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1067,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:3"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 1069,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 3199,
                "src": "621:80:3",
                "symbolAliases": [
                    {
                        "foreign": 1068,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 1071,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 3090,
                "src": "702:77:3",
                "symbolAliases": [
                    {
                        "foreign": 1070,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 1073,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 700,
                "src": "781:60:3",
                "symbolAliases": [
                    {
                        "foreign": 1072,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
                "file": "./TimeLockUpgrade.sol",
                "id": 1075,
                "nodeType": "ImportDirective",
                "scope": 1198,
                "sourceUnit": 2279,
                "src": "842:56:3",
                "symbolAliases": [
                    {
                        "foreign": 1074,
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
                            "id": 1076,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "1192:7:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 1077,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1192:7:3"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1078,
                            "name": "TimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2278,
                            "src": "1205:15:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                                "typeString": "contract TimeLockUpgrade"
                            }
                        },
                        "id": 1079,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1205:15:3"
                    }
                ],
                "contractDependencies": [
                    2278,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title Authorizable\n@author Set Protocol\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\nthrough the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.",
                "fullyImplemented": true,
                "id": 1197,
                "linearizedBaseContracts": [
                    1197,
                    2278,
                    3198
                ],
                "name": "Authorizable",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 1082,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1080,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3089,
                            "src": "1233:8:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$3089",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1227:27:3",
                        "typeName": {
                            "id": 1081,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1246:7:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 1086,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1083,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "1265:17:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1259:38:3",
                        "typeName": {
                            "baseType": {
                                "id": 1084,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1287:7:3",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1085,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1287:9:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 1090,
                        "name": "authorized",
                        "nodeType": "VariableDeclaration",
                        "scope": 1197,
                        "src": "1419:43:3",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 1089,
                            "keyType": {
                                "id": 1087,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1428:7:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1419:25:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                                "id": 1088,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1439:4:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 1093,
                        "name": "authorities",
                        "nodeType": "VariableDeclaration",
                        "scope": 1197,
                        "src": "1506:28:3",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 1091,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1506:7:3",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1092,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1506:9:3",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1104,
                            "nodeType": "Block",
                            "src": "1686:160:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1096,
                                                    "name": "authorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1090,
                                                    "src": "1717:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 1099,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1097,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3213,
                                                        "src": "1728:3:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 1098,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "1728:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1717:22:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e6f6e6c79417574686f72697a65643a2053656e646572206e6f7420696e636c7564656420696e20617574686f726974696573",
                                                "id": 1100,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1753:65:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9f8cc2ba6933321fdf1b651ec7468b8c83f32b32bac2c1fe3fd0ada3547a042a",
                                                    "typeString": "literal_string \"Authorizable.onlyAuthorized: Sender not included in authorities\""
                                                },
                                                "value": "Authorizable.onlyAuthorized: Sender not included in authorities"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9f8cc2ba6933321fdf1b651ec7468b8c83f32b32bac2c1fe3fd0ada3547a042a",
                                                    "typeString": "literal_string \"Authorizable.onlyAuthorized: Sender not included in authorities\""
                                                }
                                            ],
                                            "id": 1095,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "1696:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1101,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1696:132:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1102,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1696:132:3"
                                },
                                {
                                    "id": 1103,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1838:1:3"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 1105,
                        "name": "onlyAuthorized",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 1094,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1686:0:3"
                        },
                        "src": "1662:184:3",
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1111,
                        "name": "AddressAuthorized",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1110,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1107,
                                    "indexed": true,
                                    "name": "authAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1111,
                                    "src": "1983:27:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1106,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1983:7:3",
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
                                    "id": 1109,
                                    "indexed": false,
                                    "name": "authorizedBy",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1111,
                                    "src": "2020:20:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1108,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2020:7:3",
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
                            "src": "1973:73:3"
                        },
                        "src": "1949:98:3"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1117,
                        "name": "AuthorizedAddressRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1116,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1113,
                                    "indexed": true,
                                    "name": "addressRemoved",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1117,
                                    "src": "2145:30:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1112,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2145:7:3",
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
                                    "id": 1115,
                                    "indexed": false,
                                    "name": "authorizedBy",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1117,
                                    "src": "2185:20:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1114,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2185:7:3",
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
                            "src": "2135:76:3"
                        },
                        "src": "2104:108:3"
                    },
                    {
                        "body": {
                            "id": 1152,
                            "nodeType": "Block",
                            "src": "2542:506:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1130,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "2631:24:3",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1127,
                                                        "name": "authorized",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1090,
                                                        "src": "2632:10:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 1129,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1128,
                                                        "name": "_authTarget",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1119,
                                                        "src": "2643:11:3",
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
                                                    "src": "2632:23:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e616464417574686f72697a6564416464726573733a204164647265737320616c72656164792072656769737465726564",
                                                "id": 1131,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2669:63:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_82e05beae0e880829d0e401f7e9e1fa7e86c8d3b5e900f878a6bbb519e198c40",
                                                    "typeString": "literal_string \"Authorizable.addAuthorizedAddress: Address already registered\""
                                                },
                                                "value": "Authorizable.addAuthorizedAddress: Address already registered"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_82e05beae0e880829d0e401f7e9e1fa7e86c8d3b5e900f878a6bbb519e198c40",
                                                    "typeString": "literal_string \"Authorizable.addAuthorizedAddress: Address already registered\""
                                                }
                                            ],
                                            "id": 1126,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2610:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2610:132:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1133,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2610:132:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1134,
                                                "name": "authorized",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1090,
                                                "src": "2794:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 1136,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1135,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2805:11:3",
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
                                            "src": "2794:23:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 1137,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2820:4:3",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2794:30:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1139,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2794:30:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1143,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2896:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 1140,
                                                "name": "authorities",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1093,
                                                "src": "2879:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 1142,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2879:16:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 1144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2879:29:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1145,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2879:29:3"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1147,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1119,
                                                "src": "2996:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1148,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3213,
                                                    "src": "3021:3:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 1149,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3021:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
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
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 1146,
                                            "name": "AddressAuthorized",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1111,
                                            "src": "2965:17:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1150,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2965:76:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1151,
                                    "nodeType": "EmitStatement",
                                    "src": "2960:81:3"
                                }
                            ]
                        },
                        "documentation": "Add authorized address to contract. Can only be set by owner.\n     * @param  _authTarget   The address of the new authorized contract",
                        "id": 1153,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1122,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1121,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2504:9:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2504:9:3"
                            },
                            {
                                "arguments": null,
                                "id": 1124,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1123,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "2522:15:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2522:15:3"
                            }
                        ],
                        "name": "addAuthorizedAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1119,
                                    "name": "_authTarget",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1153,
                                    "src": "2458:19:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1118,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2458:7:3",
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
                            "src": "2457:21:3"
                        },
                        "returnParameters": {
                            "id": 1125,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2542:0:3"
                        },
                        "scope": 1197,
                        "src": "2428:620:3",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1186,
                            "nodeType": "Block",
                            "src": "3308:483:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1161,
                                                    "name": "authorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1090,
                                                    "src": "3380:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 1163,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1162,
                                                    "name": "_authTarget",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1155,
                                                    "src": "3391:11:3",
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
                                                "src": "3380:23:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "417574686f72697a61626c652e72656d6f7665417574686f72697a6564416464726573733a2041646472657373206e6f7420617574686f72697a6564",
                                                "id": 1164,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3417:62:3",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5c0ad415bfe4592fe2a108c854ea297f89ca670f329d446ac5713037d0900cd",
                                                    "typeString": "literal_string \"Authorizable.removeAuthorizedAddress: Address not authorized\""
                                                },
                                                "value": "Authorizable.removeAuthorizedAddress: Address not authorized"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5c0ad415bfe4592fe2a108c854ea297f89ca670f329d446ac5713037d0900cd",
                                                    "typeString": "literal_string \"Authorizable.removeAuthorizedAddress: Address not authorized\""
                                                }
                                            ],
                                            "id": 1160,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3359:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1165,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3359:130:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1166,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3359:130:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1171,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1167,
                                                "name": "authorized",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1090,
                                                "src": "3550:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 1169,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1168,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1155,
                                                "src": "3561:11:3",
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
                                            "src": "3550:23:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 1170,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3576:5:3",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "3550:31:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1172,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3550:31:3"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1178,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1173,
                                            "name": "authorities",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1093,
                                            "src": "3592:11:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 1176,
                                                    "name": "_authTarget",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1155,
                                                    "src": "3625:11:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1174,
                                                    "name": "authorities",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1093,
                                                    "src": "3606:11:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 1175,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "3606:18:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 1177,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3606:31:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "3592:45:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 1179,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3592:45:3"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1181,
                                                "name": "_authTarget",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1155,
                                                "src": "3739:11:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1182,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3213,
                                                    "src": "3764:3:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 1183,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "3764:10:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
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
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 1180,
                                            "name": "AuthorizedAddressRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1117,
                                            "src": "3701:24:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3701:83:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1185,
                                    "nodeType": "EmitStatement",
                                    "src": "3696:88:3"
                                }
                            ]
                        },
                        "documentation": "Remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned",
                        "id": 1187,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1158,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1157,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3294:9:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3294:9:3"
                            }
                        ],
                        "name": "removeAuthorizedAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1156,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1155,
                                    "name": "_authTarget",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1187,
                                    "src": "3248:19:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1154,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3248:7:3",
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
                            "src": "3247:21:3"
                        },
                        "returnParameters": {
                            "id": 1159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3308:0:3"
                        },
                        "scope": 1197,
                        "src": "3215:576:3",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1195,
                            "nodeType": "Block",
                            "src": "4067:83:3",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1193,
                                        "name": "authorities",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1093,
                                        "src": "4132:11:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1192,
                                    "id": 1194,
                                    "nodeType": "Return",
                                    "src": "4125:18:3"
                                }
                            ]
                        },
                        "documentation": "Get array of authorized addresses.\n     * @return address[]   Array of authorized addresses",
                        "id": 1196,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuthorizedAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1188,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3995:2:3"
                        },
                        "returnParameters": {
                            "id": 1192,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1191,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1196,
                                    "src": "4045:16:3",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1189,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4045:7:3",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1190,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4045:9:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4044:18:3"
                        },
                        "scope": 1197,
                        "src": "3964:186:3",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1198,
                "src": "1163:2989:3"
            }
        ],
        "src": "597:3556:3"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.864Z",
    "devdoc": {
        "author": "Set Protocol * The Authorizable contract is an inherited contract that sets permissions on certain function calls through the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.",
        "methods": {
            "addAuthorizedAddress(address)": {
                "params": {
                    "_authTarget": "The address of the new authorized contract"
                }
            },
            "getAuthorizedAddresses()": {
                "return": "address[]   Array of authorized addresses"
            },
            "isOwner()": {
                "return": "true if `msg.sender` is the owner of the contract."
            },
            "owner()": {
                "return": "the address of the owner."
            },
            "removeAuthorizedAddress(address)": {
                "params": {
                    "_authTarget": "The address to be de-permissioned"
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
        "title": "Authorizable"
    },
    "userdoc": {
        "methods": {
            "addAuthorizedAddress(address)": {
                "notice": "Add authorized address to contract. Can only be set by owner."
            },
            "getAuthorizedAddresses()": {
                "notice": "Get array of authorized addresses."
            },
            "removeAuthorizedAddress(address)": {
                "notice": "Remove authorized address from contract. Can only be set by owner."
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
//# sourceMappingURL=Authorizable.js.map