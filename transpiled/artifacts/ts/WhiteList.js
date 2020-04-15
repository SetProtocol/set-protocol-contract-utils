"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteList = {
    "contractName": "WhiteList",
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
                    "type": "address"
                }
            ],
            "name": "whiteList",
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
                    "type": "uint256"
                }
            ],
            "name": "addresses",
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
            "inputs": [
                {
                    "name": "_initialAddresses",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "AddressAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "AddressRemoved",
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
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "addAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "removeAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "validAddresses",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
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
                    "name": "_addresses",
                    "type": "address[]"
                }
            ],
            "name": "areValidAddresses",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_addresses\",\"type\":\"address[]\"}],\"name\":\"areValidAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"whiteList\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"removeAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"validAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"addresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_initialAddresses\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"AddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"AddressRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * Generic whitelist for addresses\",\"methods\":{\"addAddress(address)\":{\"params\":{\"_address\":\"Address to add to the whitelist\"}},\"areValidAddresses(address[])\":{\"params\":{\"_addresses\":\"Array of addresses to verify\"},\"return\":\"bool          Whether all addresses in the list are whitelsited\"},\"constructor\":{\"params\":{\"_initialAddresses\":\"Starting set of addresses to whitelist\"}},\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"removeAddress(address)\":{\"params\":{\"_address\":\"Address to remove from the whitelist\"}},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}},\"validAddresses()\":{\"return\":\"address[]      Array of addresses\"}},\"title\":\"Whitelist\"},\"userdoc\":{\"methods\":{\"addAddress(address)\":{\"notice\":\"Add an address to the whitelist\"},\"areValidAddresses(address[])\":{\"notice\":\"Verifies an array of addresses against the whitelist\"},\"constructor\":\"Constructor function for Whitelist     * Allow initial addresses to be passed in so a separate transaction is not required for each\",\"removeAddress(address)\":{\"notice\":\"Remove an address from the whitelist\"},\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"},\"validAddresses()\":{\"notice\":\"Return array of all whitelisted addresses\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/WhiteList.sol\":\"WhiteList\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol\":{\"keccak256\":\"0xb716eab4e8c5a336a2f19078928530829af097912bd1b925644f914b63601f08\",\"urls\":[\"bzzr://d8a21d39779beb316adb5180d08dcba1941eeccd9412ff08feb21a631c18c269\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol\":{\"keccak256\":\"0xacc9cfd889c4056038d06abdb20857c25566fa94f3a054566f913920d58b0415\",\"urls\":[\"bzzr://03e9ad33eb09761e21dc4a1340e177a9e930d35a2dc608102a86671536fdfb4a\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/WhiteList.sol\":{\"keccak256\":\"0x55c697df3dbc084e8f7588c2954366574e9962c6ad0ea0e06eb6051c631d6587\",\"urls\":[\"bzzr://96779a2e8b966cc8a7e9a4fab5b22de75ccac98a09118011e421e5f76f3777bf\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051610ed5380380610ed58339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8201602081018481111561005e57600080fd5b815185602082028301116401000000008211171561007b57600080fd5b505060008054600160a060020a0319163317808255604051929550600160a060020a0316935091507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360005b815181101561015b5760008282815181106100e257fe5b6020908102919091018101516003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018054600160a060020a031916600160a060020a0390931692831790556000918252600490925260409020805460ff1916821790559190910190506100cb565b5050610d698061016c6000396000f3fe608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806378446bc1116100a95780639303b16f116100835780639303b16f14610254578063e7d22fdb14610271578063edf26d9b146102c9578063f2fde38b146102e6576100ec565b806378446bc1146102205780638da5cb5b146102285780638f32d59b1461024c576100ec565b80631766486d146100f157806332ed010e14610120578063372c12b1146101a457806338eada1c146101ca5780634ba79dfe146101f2578063715018a614610218575b600080fd5b61010e6004803603602081101561010757600080fd5b503561030c565b60408051918252519081900360200190f35b6101906004803603602081101561013657600080fd5b81019060208101813564010000000081111561015157600080fd5b82018360208201111561016357600080fd5b8035906020019184602083028401116401000000008311171561018557600080fd5b50909250905061031e565b604080519115158252519081900360200190f35b610190600480360360208110156101ba57600080fd5b5035600160a060020a0316610382565b6101f0600480360360208110156101e057600080fd5b5035600160a060020a0316610397565b005b6101f06004803603602081101561020857600080fd5b5035600160a060020a03166106bf565b6101f0610804565b61010e61086c565b610230610872565b60408051600160a060020a039092168252519081900360200190f35b610190610882565b6101f06004803603602081101561026a57600080fd5b5035610893565b6102796108ec565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102b557818101518382015260200161029d565b505050509050019250505060405180910390f35b610230600480360360208110156102df57600080fd5b503561094e565b6101f0600480360360208110156102fc57600080fd5b5035600160a060020a0316610975565b60026020526000908152604090205481565b6000805b82811015610376576004600085858481811061033a57fe5b60209081029290920135600160a060020a03168352508101919091526040016000205460ff1661036e57600091505061037c565b600101610322565b50600190505b92915050565b60046020526000908152604090205460ff1681565b61039f610882565b6103a857600080fd5b6001546104b557600160a060020a03811660009081526004602052604090205460ff161561040a5760405160e560020a62461bcd02815260040180806020018281038252603b815260200180610d03603b913960400191505060405180910390fd5b6003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038416908117909155600081815260046020908152604091829020805460ff19169094179093558051918252517fa226db3f664042183ee0281230bba26cbf7b5057e50aee7f25a175ff45ce4d7f929181900390910190a16106bc565b60008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061055457600082815260026020908152604091829020429081905582518581529182015281517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374929181900390910190a150506106bc565b60015461056890829063ffffffff61098f16565b4210156105a95760405160e560020a62461bcd028152600401808060200182810382526034815260200180610c966034913960400191505060405180910390fd5b6000828152600260209081526040808320839055600160a060020a0386168352600490915290205460ff16156106135760405160e560020a62461bcd02815260040180806020018281038252603b815260200180610d03603b913960400191505060405180910390fd5b6003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038616908117909155600081815260046020908152604091829020805460ff19169094179093558051918252517fa226db3f664042183ee0281230bba26cbf7b5057e50aee7f25a175ff45ce4d7f929181900390910190a150505b50565b6106c7610882565b6106d057600080fd5b600160a060020a03811660009081526004602052604090205460ff1661072a5760405160e560020a62461bcd02815260040180806020018281038252603c815260200180610c5a603c913960400191505060405180910390fd5b61079781600380548060200260200160405190810160405280929190818152602001828054801561078457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610766575b50505050506109a890919063ffffffff16565b80516107ab91600391602090910190610bb6565b50600160a060020a038116600081815260046020908152604091829020805460ff19169055815192835290517f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb9281900390910190a150565b61080c610882565b61081557600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b61089b610882565b6108a457600080fd5b60015481116108e75760405160e560020a62461bcd028152600401808060200182810382526039815260200180610cca6039913960400191505060405180910390fd5b600155565b6060600380548060200260200160405190810160405280929190818152602001828054801561094457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610926575b5050505050905090565b6003818154811061095b57fe5b600091825260209091200154600160a060020a0316905081565b61097d610882565b61098657600080fd5b6106bc816109dd565b6000828201838110156109a157600080fd5b9392505050565b60606000806109b78585610a58565b91509150806109c557600080fd5b60606109d18684610abc565b50935061037c92505050565b600160a060020a0381166109f057600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b81811015610aab5784600160a060020a0316868281518110610a7f57fe5b6020026020010151600160a060020a03161415610aa357925060019150610ab59050565b600101610a61565b5060009250829150505b9250929050565b606060008084519050606060018203604051908082528060200260200182016040528015610af4578160200160208202803883390190505b50905060005b85811015610b4257868181518110610b0e57fe5b6020026020010151828281518110610b2257fe5b600160a060020a0390921660209283029190910190910152600101610afa565b50600185015b82811015610b9357868181518110610b5c57fe5b6020026020010151826001830381518110610b7357fe5b600160a060020a0390921660209283029190910190910152600101610b48565b5080868681518110610ba157fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215610c18579160200282015b82811115610c18578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610bd6565b50610c24929150610c28565b5090565b61087f91905b80821115610c2457805473ffffffffffffffffffffffffffffffffffffffff19168155600101610c2e56fe57686974654c6973742e72656d6f7665416464726573733a2041646472657373206973206e6f742063757272656e742077686974656c69737465642e54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6757686974654c6973742e616464416464726573733a20416464726573732068617320616c7265616479206265656e2077686974656c69737465642ea165627a7a723058200326a48767600d5e132646a14181f9fabf45098fa71c4bdf168d0ffc112240a90029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806378446bc1116100a95780639303b16f116100835780639303b16f14610254578063e7d22fdb14610271578063edf26d9b146102c9578063f2fde38b146102e6576100ec565b806378446bc1146102205780638da5cb5b146102285780638f32d59b1461024c576100ec565b80631766486d146100f157806332ed010e14610120578063372c12b1146101a457806338eada1c146101ca5780634ba79dfe146101f2578063715018a614610218575b600080fd5b61010e6004803603602081101561010757600080fd5b503561030c565b60408051918252519081900360200190f35b6101906004803603602081101561013657600080fd5b81019060208101813564010000000081111561015157600080fd5b82018360208201111561016357600080fd5b8035906020019184602083028401116401000000008311171561018557600080fd5b50909250905061031e565b604080519115158252519081900360200190f35b610190600480360360208110156101ba57600080fd5b5035600160a060020a0316610382565b6101f0600480360360208110156101e057600080fd5b5035600160a060020a0316610397565b005b6101f06004803603602081101561020857600080fd5b5035600160a060020a03166106bf565b6101f0610804565b61010e61086c565b610230610872565b60408051600160a060020a039092168252519081900360200190f35b610190610882565b6101f06004803603602081101561026a57600080fd5b5035610893565b6102796108ec565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102b557818101518382015260200161029d565b505050509050019250505060405180910390f35b610230600480360360208110156102df57600080fd5b503561094e565b6101f0600480360360208110156102fc57600080fd5b5035600160a060020a0316610975565b60026020526000908152604090205481565b6000805b82811015610376576004600085858481811061033a57fe5b60209081029290920135600160a060020a03168352508101919091526040016000205460ff1661036e57600091505061037c565b600101610322565b50600190505b92915050565b60046020526000908152604090205460ff1681565b61039f610882565b6103a857600080fd5b6001546104b557600160a060020a03811660009081526004602052604090205460ff161561040a5760405160e560020a62461bcd02815260040180806020018281038252603b815260200180610d03603b913960400191505060405180910390fd5b6003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038416908117909155600081815260046020908152604091829020805460ff19169094179093558051918252517fa226db3f664042183ee0281230bba26cbf7b5057e50aee7f25a175ff45ce4d7f929181900390910190a16106bc565b60008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061055457600082815260026020908152604091829020429081905582518581529182015281517f0e0905d1a972d476e353bdcc3e06b19a71709054c8ba01eccb7e0691eca6d374929181900390910190a150506106bc565b60015461056890829063ffffffff61098f16565b4210156105a95760405160e560020a62461bcd028152600401808060200182810382526034815260200180610c966034913960400191505060405180910390fd5b6000828152600260209081526040808320839055600160a060020a0386168352600490915290205460ff16156106135760405160e560020a62461bcd02815260040180806020018281038252603b815260200180610d03603b913960400191505060405180910390fd5b6003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038616908117909155600081815260046020908152604091829020805460ff19169094179093558051918252517fa226db3f664042183ee0281230bba26cbf7b5057e50aee7f25a175ff45ce4d7f929181900390910190a150505b50565b6106c7610882565b6106d057600080fd5b600160a060020a03811660009081526004602052604090205460ff1661072a5760405160e560020a62461bcd02815260040180806020018281038252603c815260200180610c5a603c913960400191505060405180910390fd5b61079781600380548060200260200160405190810160405280929190818152602001828054801561078457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610766575b50505050506109a890919063ffffffff16565b80516107ab91600391602090910190610bb6565b50600160a060020a038116600081815260046020908152604091829020805460ff19169055815192835290517f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb9281900390910190a150565b61080c610882565b61081557600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60015481565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b61089b610882565b6108a457600080fd5b60015481116108e75760405160e560020a62461bcd028152600401808060200182810382526039815260200180610cca6039913960400191505060405180910390fd5b600155565b6060600380548060200260200160405190810160405280929190818152602001828054801561094457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610926575b5050505050905090565b6003818154811061095b57fe5b600091825260209091200154600160a060020a0316905081565b61097d610882565b61098657600080fd5b6106bc816109dd565b6000828201838110156109a157600080fd5b9392505050565b60606000806109b78585610a58565b91509150806109c557600080fd5b60606109d18684610abc565b50935061037c92505050565b600160a060020a0381166109f057600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b81811015610aab5784600160a060020a0316868281518110610a7f57fe5b6020026020010151600160a060020a03161415610aa357925060019150610ab59050565b600101610a61565b5060009250829150505b9250929050565b606060008084519050606060018203604051908082528060200260200182016040528015610af4578160200160208202803883390190505b50905060005b85811015610b4257868181518110610b0e57fe5b6020026020010151828281518110610b2257fe5b600160a060020a0390921660209283029190910190910152600101610afa565b50600185015b82811015610b9357868181518110610b5c57fe5b6020026020010151826001830381518110610b7357fe5b600160a060020a0390921660209283029190910190910152600101610b48565b5080868681518110610ba157fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215610c18579160200282015b82811115610c18578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610bd6565b50610c24929150610c28565b5090565b61087f91905b80821115610c2457805473ffffffffffffffffffffffffffffffffffffffff19168155600101610c2e56fe57686974654c6973742e72656d6f7665416464726573733a2041646472657373206973206e6f742063757272656e742077686974656c69737465642e54696d654c6f636b557067726164653a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e54696d654c6f636b557067726164653a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6757686974654c6973742e616464416464726573733a20416464726573732068617320616c7265616479206265656e2077686974656c69737465642ea165627a7a723058200326a48767600d5e132646a14181f9fabf45098fa71c4bdf168d0ffc112240a90029",
    "sourceMap": "914:2940:14:-;;;1605:357;8:9:-1;5:2;;;30:1;27;20:12;5:2;1605:357:14;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1605:357:14;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;62:21;;123:4;114:14;;138:31;;;135:2;;;182:1;179;172:12;135:2;219:3;213:10;331:9;325:2;311:12;307:21;289:16;285:44;282:59;261:11;247:12;244:29;233:116;230:2;;;362:1;359;352:12;230:2;-1:-1;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;549:40;;1605:357:14;;-1:-1:-1;;;;;;582:6:24;;-1:-1:-1;515:6:24;-1:-1:-1;549:40:24;;515:6;;549:40;1751:9:14;1746:210;1770:17;:24;1766:1;:28;1746:210;;;1815:20;1838:17;1856:1;1838:20;;;;;;;;;;;;;;;;;;;1873:9;27:10:-1;;39:1;23:18;;;45:23;;;1873:28:14;;;;-1:-1:-1;;;;;;1873:28:14;-1:-1:-1;;;;;1873:28:14;;;;;;;;-1:-1:-1;1915:23:14;;;:9;:23;;;;;;:30;;-1:-1:-1;;1915:30:14;;;;;1796:3;;;;;-1:-1:-1;1746:210:14;;;;1605:357;914:2940;;;;;;",
    "deployedSourceMap": "914:2940:14:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;914:2940:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1206:53:11;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1206:53:11;;:::i;:::-;;;;;;;;;;;;;;;;3537:315:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3537:315:14;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;3537:315:14;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;3537:315:14;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;3537:315:14;;-1:-1:-1;3537:315:14;-1:-1:-1;3537:315:14;:::i;:::-;;;;;;;;;;;;;;;;;;1104:41;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1104:41:14;-1:-1:-1;;;;;1104:41:14;;:::i;2144:390::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2144:390:14;-1:-1:-1;;;;;2144:390:14;;:::i;:::-;;2670:386;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2670:386:14;-1:-1:-1;;;;;2670:386:14;;:::i;1423:137:24:-;;;:::i;1110:29:11:-;;;:::i;659:77:24:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:24;;;;;;;;;;;;;;979:90;;;:::i;2977:396:11:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2977:396:11;;:::i;3183:128:14:-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3183:128:14;;;;;;;;;;;;;;;;;1072:26;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1072:26:14;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;1206:53:11:-;;;;;;;;;;;;;:::o;3537:315:14:-;3656:4;;3676:148;3696:21;;;3676:148;;;3743:9;:24;3753:10;;3764:1;3753:13;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3753:13:14;3743:24;;-1:-1:-1;3743:24:14;;;;;;;;-1:-1:-1;3743:24:14;;;;3738:76;;3794:5;3787:12;;;;;3738:76;3719:3;;3676:148;;;;3841:4;3834:11;;3537:315;;;;;:::o;1104:41::-;;;;;;;;;;;;;;;:::o;2144:390::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;1646:14:11;;1642:72;;-1:-1:-1;;;;;2291:19:14;;;;;;:9;:19;;;;;;;;2290:20;2269:126;;;;-1:-1:-1;;;;;2269:126:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2406:9;27:10:-1;;39:1;23:18;;;45:23;;;2406:24:14;;;;-1:-1:-1;;2406:24:14;-1:-1:-1;;;;;2406:24:14;;;;;;;;-1:-1:-1;2441:19:14;;;:9;2406:24;2441:19;;;;;;;;:26;;-1:-1:-1;;2441:26:14;;;;;;;2483:44;;;;;;;;;;;;;;;;;1697:7:11;;1642:72;1891:19;1970:8;;1936:56;;;;;;;30:3:-1;22:6;14;1:33;1936:56:11;;;45:16:-1;;;;26:21;;;-1:-1;;22:32;6:49;;1936:56:11;;1913:89;;49:4:-1;1913:89:11;;;;2013:24;2040:31;;;:18;:31;;;;;;;1913:89;;-1:-1:-1;2040:31:11;;-1:-1:-1;;;2168:21:11;;2164:235;;-1:-1:-1;2164:235:11;;2205:31;;;;:18;:31;;;;;;;;;2239:15;2205:49;;;;2274:93;;;;;;;;;;;;;;;;;;;;;;2382:7;;;;2164:235;2470:14;;2449:36;;:16;;:36;:20;:36;:::i;:::-;2430:15;:55;;2409:154;;;;-1:-1:-1;;;;;2409:154:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2644:1;2610:31;;;:18;:31;;;;;;;;:35;;;-1:-1:-1;;;;;2291:19:14;;;;:9;:19;;;;;;;;2290:20;2269:126;;;;-1:-1:-1;;;;;2269:126:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2406:9;27:10:-1;;39:1;23:18;;;45:23;;;2406:24:14;;;;-1:-1:-1;;2406:24:14;-1:-1:-1;;;;;2406:24:14;;;;;;;;-1:-1:-1;2441:19:14;;;:9;2406:24;2441:19;;;;;;;;:26;;-1:-1:-1;;2441:26:14;;;;;;;2483:44;;;;;;;;;;;;;;;;;883:1:24;;;2144:390:14;:::o;2670:386::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;-1:-1:-1;;;;;2795:19:14;;;;;;:9;:19;;;;;;;;2774:126;;;;-1:-1:-1;;;;;2774:126:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2923:26;2940:8;2923:9;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2923:16:14;;;;;;;;;;;;;;;;;;;;;;;:26;;;;:::i;:::-;2911:38;;;;:9;;:38;;;;;;:::i;:::-;-1:-1:-1;;;;;;2960:19:14;;2982:5;2960:19;;;:9;:19;;;;;;;;;:27;;-1:-1:-1;;2960:27:14;;;3003:46;;;;;;;;;;;;;;;;;2670:386;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;1534:19:24;;;1423:137::o;1110:29:11:-;;;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;2977:396:11:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3226:14:11;;3208:15;:32;3187:136;;;;-1:-1:-1;;;;;3187:136:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3334:14;:32;2977:396::o;3183:128:14:-;3256:16;3295:9;3288:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3288:16:14;;;;;;;;;;;;;;;;;;;;;;;3183:128;:::o;1072:26::-;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1072:26:14;;-1:-1:-1;1072:26:14;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;1439:145;-1:-1:-1;;;1439:145:23:o;5536:320:1:-;5630:16;5663:13;5678:9;5691:13;5699:1;5702;5691:7;:13::i;:::-;5662:42;;;;5719:4;5714:136;;5739:8;;;5714:136;5779:19;5803:13;5807:1;5810:5;5803:3;:13::i;:::-;-1:-1:-1;5778:38:1;-1:-1:-1;5830:9:1;;-1:-1:-1;;;5830:9:1;1982:183:24;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;509:289:1:-;622:8;;580:7;;;;;640:125;664:6;660:1;:10;640:125;;;703:1;-1:-1:-1;;;;;695:9:1;:1;697;695:4;;;;;;;;;;;;;;-1:-1:-1;;;;;695:9:1;;691:64;;;732:1;-1:-1:-1;735:4:1;;-1:-1:-1;724:16:1;;-1:-1:-1;724:16:1;691:64;672:3;;640:125;;;-1:-1:-1;782:1:1;;-1:-1:-1;782:1:1;;-1:-1:-1;;509:289:1;;;;;;:::o;5004:473::-;5099:16;5117:7;5140:14;5157:1;:8;5140:25;;5175:29;5230:1;5221:6;:10;5207:25;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;5207:25:1;-1:-1:-1;5175:57:1;-1:-1:-1;5247:9:1;5242:83;5266:5;5262:1;:9;5242:83;;;5310:1;5312;5310:4;;;;;;;;;;;;;;5292:12;5305:1;5292:15;;;;;;;;-1:-1:-1;;;;;5292:22:1;;;:15;;;;;;;;;;;:22;5273:3;;5242:83;;;-1:-1:-1;5359:1:1;5351:9;;5334:96;5366:6;5362:1;:10;5334:96;;;5415:1;5417;5415:4;;;;;;;;;;;;;;5393:12;5410:1;5406;:5;5393:19;;;;;;;;-1:-1:-1;;;;;5393:26:1;;;:19;;;;;;;;;;;:26;5374:3;;5334:96;;;;5447:12;5461:1;5463:5;5461:8;;;;;;;;;;;;;;5439:31;;;;;;5004:473;;;;;:::o;914:2940:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;914:2940:14;-1:-1:-1;;;;;914:2940:14;;;;;;;;;;;-1:-1:-1;914:2940:14;;;;;;;-1:-1:-1;914:2940:14;;;-1:-1:-1;914:2940:14;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;914:2940:14;;;;;;",
    "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\nimport { Ownable } from \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport { TimeLockUpgrade } from \"./TimeLockUpgrade.sol\";\nimport { AddressArrayUtils } from \"./AddressArrayUtils.sol\";\n\n\n/**\n * @title Whitelist\n * @author Set Protocol\n *\n * Generic whitelist for addresses\n */\ncontract WhiteList is\n    Ownable,\n    TimeLockUpgrade\n{\n    using AddressArrayUtils for address[];\n\n    /* ============ State Variables ============ */\n\n    address[] public addresses;\n    mapping(address => bool) public whiteList;\n\n    /* ============ Events ============ */\n\n    event AddressAdded(\n        address _address\n    );\n\n    event AddressRemoved(\n        address _address\n    );\n\n    /* ============ Constructor ============ */\n\n    /**\n     * Constructor function for Whitelist\n     *\n     * Allow initial addresses to be passed in so a separate transaction is not required for each\n     *\n     * @param _initialAddresses    Starting set of addresses to whitelist\n     */\n    constructor(\n        address[] memory _initialAddresses\n    )\n        public\n    {\n        // Add each of initial addresses to state\n        for (uint256 i = 0; i < _initialAddresses.length; i++) {\n            address addressToAdd = _initialAddresses[i];\n\n            addresses.push(addressToAdd);\n            whiteList[addressToAdd] = true;\n        }\n    }\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Add an address to the whitelist\n     *\n     * @param _address    Address to add to the whitelist\n     */\n    function addAddress(\n        address _address\n    )\n        external\n        onlyOwner\n        timeLockUpgrade\n    {\n        require(\n            !whiteList[_address],\n            \"WhiteList.addAddress: Address has already been whitelisted.\"\n        );\n\n        addresses.push(_address);\n\n        whiteList[_address] = true;\n\n        emit AddressAdded(\n            _address\n        );\n    }\n\n    /**\n     * Remove an address from the whitelist\n     *\n     * @param _address    Address to remove from the whitelist\n     */\n    function removeAddress(\n        address _address\n    )\n        external\n        onlyOwner\n    {\n        require(\n            whiteList[_address],\n            \"WhiteList.removeAddress: Address is not current whitelisted.\"\n        );\n\n        addresses = addresses.remove(_address);\n\n        whiteList[_address] = false;\n\n        emit AddressRemoved(\n            _address\n        );\n    }\n\n    /**\n     * Return array of all whitelisted addresses\n     *\n     * @return address[]      Array of addresses\n     */\n    function validAddresses()\n        external\n        view\n        returns (address[] memory)\n    {\n        return addresses;\n    }\n\n    /**\n     * Verifies an array of addresses against the whitelist\n     *\n     * @param  _addresses    Array of addresses to verify\n     * @return bool          Whether all addresses in the list are whitelsited\n     */\n    function areValidAddresses(\n        address[] calldata _addresses\n    )\n        external\n        view\n        returns (bool)\n    {\n        for (uint256 i = 0; i < _addresses.length; i++) {\n            if (!whiteList[_addresses[i]]) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/WhiteList.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/WhiteList.sol",
        "exportedSymbols": {
            "WhiteList": [
                2640
            ]
        },
        "id": 2641,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2463,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:14"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 2465,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 3199,
                "src": "622:80:14",
                "symbolAliases": [
                    {
                        "foreign": 2464,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
                "file": "./TimeLockUpgrade.sol",
                "id": 2467,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 2279,
                "src": "704:56:14",
                "symbolAliases": [
                    {
                        "foreign": 2466,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 2469,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 700,
                "src": "761:60:14",
                "symbolAliases": [
                    {
                        "foreign": 2468,
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
                            "id": 2470,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "940:7:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 2471,
                        "nodeType": "InheritanceSpecifier",
                        "src": "940:7:14"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 2472,
                            "name": "TimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2278,
                            "src": "953:15:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                                "typeString": "contract TimeLockUpgrade"
                            }
                        },
                        "id": 2473,
                        "nodeType": "InheritanceSpecifier",
                        "src": "953:15:14"
                    }
                ],
                "contractDependencies": [
                    2278,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title Whitelist\n@author Set Protocol\n * Generic whitelist for addresses",
                "fullyImplemented": true,
                "id": 2640,
                "linearizedBaseContracts": [
                    2640,
                    2278,
                    3198
                ],
                "name": "WhiteList",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2477,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2474,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "981:17:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "975:38:14",
                        "typeName": {
                            "baseType": {
                                "id": 2475,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1003:7:14",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 2476,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1003:9:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 2480,
                        "name": "addresses",
                        "nodeType": "VariableDeclaration",
                        "scope": 2640,
                        "src": "1072:26:14",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 2478,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1072:7:14",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 2479,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1072:9:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2484,
                        "name": "whiteList",
                        "nodeType": "VariableDeclaration",
                        "scope": 2640,
                        "src": "1104:41:14",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 2483,
                            "keyType": {
                                "id": 2481,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1112:7:14",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1104:24:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                                "id": 2482,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1123:4:14",
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
                        "anonymous": false,
                        "documentation": null,
                        "id": 2488,
                        "name": "AddressAdded",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2487,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2486,
                                    "indexed": false,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2488,
                                    "src": "1224:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2485,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1224:7:14",
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
                            "src": "1214:32:14"
                        },
                        "src": "1196:51:14"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 2492,
                        "name": "AddressRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2491,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2490,
                                    "indexed": false,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2492,
                                    "src": "1283:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2489,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1283:7:14",
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
                            "src": "1273:32:14"
                        },
                        "src": "1253:53:14"
                    },
                    {
                        "body": {
                            "id": 2529,
                            "nodeType": "Block",
                            "src": "1686:276:14",
                            "statements": [
                                {
                                    "body": {
                                        "id": 2527,
                                        "nodeType": "Block",
                                        "src": "1801:155:14",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    2510
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 2510,
                                                        "name": "addressToAdd",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 2527,
                                                        "src": "1815:20:14",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "typeName": {
                                                            "id": 2509,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1815:7:14",
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
                                                "id": 2514,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2511,
                                                        "name": "_initialAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2495,
                                                        "src": "1838:17:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 2513,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2512,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2499,
                                                        "src": "1856:1:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1838:20:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1815:43:14"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2518,
                                                            "name": "addressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2510,
                                                            "src": "1888:12:14",
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
                                                            "id": 2515,
                                                            "name": "addresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2480,
                                                            "src": "1873:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                "typeString": "address[] storage ref"
                                                            }
                                                        },
                                                        "id": 2517,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "push",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1873:14:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2519,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1873:28:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2520,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1873:28:14"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2525,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2521,
                                                            "name": "whiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2484,
                                                            "src": "1915:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 2523,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2522,
                                                            "name": "addressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2510,
                                                            "src": "1925:12:14",
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
                                                        "src": "1915:23:14",
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
                                                        "id": 2524,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1941:4:14",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "src": "1915:30:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 2526,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1915:30:14"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2502,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2499,
                                            "src": "1766:1:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2503,
                                                "name": "_initialAddresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2495,
                                                "src": "1770:17:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            "id": 2504,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1770:24:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1766:28:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2528,
                                    "initializationExpression": {
                                        "assignments": [
                                            2499
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2499,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2528,
                                                "src": "1751:9:14",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2498,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1751:7:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2501,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2500,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1763:1:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1751:13:14"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2507,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1796:3:14",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2506,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2499,
                                                "src": "1796:1:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2508,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1796:3:14"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1746:210:14"
                                }
                            ]
                        },
                        "documentation": "Constructor function for Whitelist\n     * Allow initial addresses to be passed in so a separate transaction is not required for each\n     * @param _initialAddresses    Starting set of addresses to whitelist",
                        "id": 2530,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2496,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2495,
                                    "name": "_initialAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2530,
                                    "src": "1626:34:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2493,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1626:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2494,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1626:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1616:50:14"
                        },
                        "returnParameters": {
                            "id": 2497,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1686:0:14"
                        },
                        "scope": 2640,
                        "src": "1605:357:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2563,
                            "nodeType": "Block",
                            "src": "2259:275:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2543,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "2290:20:14",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2540,
                                                        "name": "whiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2484,
                                                        "src": "2291:9:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 2542,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2541,
                                                        "name": "_address",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2532,
                                                        "src": "2301:8:14",
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
                                                    "src": "2291:19:14",
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
                                                "hexValue": "57686974654c6973742e616464416464726573733a20416464726573732068617320616c7265616479206265656e2077686974656c69737465642e",
                                                "id": 2544,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2324:61:14",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e19cbdf2d09ed18e5ab87f2ff79cece62cf8f7dd1880a1aa70d83af80632af44",
                                                    "typeString": "literal_string \"WhiteList.addAddress: Address has already been whitelisted.\""
                                                },
                                                "value": "WhiteList.addAddress: Address has already been whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_e19cbdf2d09ed18e5ab87f2ff79cece62cf8f7dd1880a1aa70d83af80632af44",
                                                    "typeString": "literal_string \"WhiteList.addAddress: Address has already been whitelisted.\""
                                                }
                                            ],
                                            "id": 2539,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2269:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2545,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2269:126:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2546,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2269:126:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2550,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2421:8:14",
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
                                                "id": 2547,
                                                "name": "addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2480,
                                                "src": "2406:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 2549,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2406:14:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 2551,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2406:24:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2552,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2406:24:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2557,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2553,
                                                "name": "whiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2484,
                                                "src": "2441:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 2555,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2554,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2451:8:14",
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
                                            "src": "2441:19:14",
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
                                            "id": 2556,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2463:4:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2441:26:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2558,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2441:26:14"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2560,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2509:8:14",
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
                                            "id": 2559,
                                            "name": "AddressAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2488,
                                            "src": "2483:12:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 2561,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2483:44:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2562,
                                    "nodeType": "EmitStatement",
                                    "src": "2478:49:14"
                                }
                            ]
                        },
                        "documentation": "Add an address to the whitelist\n     * @param _address    Address to add to the whitelist",
                        "id": 2564,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2535,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2534,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2221:9:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2221:9:14"
                            },
                            {
                                "arguments": null,
                                "id": 2537,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2536,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "2239:15:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2239:15:14"
                            }
                        ],
                        "name": "addAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2532,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2564,
                                    "src": "2173:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2531,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2173:7:14",
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
                            "src": "2163:32:14"
                        },
                        "returnParameters": {
                            "id": 2538,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2259:0:14"
                        },
                        "scope": 2640,
                        "src": "2144:390:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2595,
                            "nodeType": "Block",
                            "src": "2764:292:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2572,
                                                    "name": "whiteList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2484,
                                                    "src": "2795:9:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 2574,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2573,
                                                    "name": "_address",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2566,
                                                    "src": "2805:8:14",
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
                                                "src": "2795:19:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "57686974654c6973742e72656d6f7665416464726573733a2041646472657373206973206e6f742063757272656e742077686974656c69737465642e",
                                                "id": 2575,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2828:62:14",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_0c48231a9662c157c7e8cfd4f761a9a4f162cc5afc4a67c6d82dac63ac5a5fcc",
                                                    "typeString": "literal_string \"WhiteList.removeAddress: Address is not current whitelisted.\""
                                                },
                                                "value": "WhiteList.removeAddress: Address is not current whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_0c48231a9662c157c7e8cfd4f761a9a4f162cc5afc4a67c6d82dac63ac5a5fcc",
                                                    "typeString": "literal_string \"WhiteList.removeAddress: Address is not current whitelisted.\""
                                                }
                                            ],
                                            "id": 2571,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2774:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2576,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2774:126:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2577,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2774:126:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2583,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2578,
                                            "name": "addresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2480,
                                            "src": "2911:9:14",
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
                                                    "id": 2581,
                                                    "name": "_address",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2566,
                                                    "src": "2940:8:14",
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
                                                    "id": 2579,
                                                    "name": "addresses",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2480,
                                                    "src": "2923:9:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 2580,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "2923:16:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 2582,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2923:26:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "2911:38:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 2584,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2911:38:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2589,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2585,
                                                "name": "whiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2484,
                                                "src": "2960:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 2587,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2586,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2566,
                                                "src": "2970:8:14",
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
                                            "src": "2960:19:14",
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
                                            "id": 2588,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2982:5:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "2960:27:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2590,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2960:27:14"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2592,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2566,
                                                "src": "3031:8:14",
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
                                            "id": 2591,
                                            "name": "AddressRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2492,
                                            "src": "3003:14:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 2593,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3003:46:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2594,
                                    "nodeType": "EmitStatement",
                                    "src": "2998:51:14"
                                }
                            ]
                        },
                        "documentation": "Remove an address from the whitelist\n     * @param _address    Address to remove from the whitelist",
                        "id": 2596,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2569,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2568,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2750:9:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2750:9:14"
                            }
                        ],
                        "name": "removeAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2566,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2596,
                                    "src": "2702:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2565,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2702:7:14",
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
                            "src": "2692:32:14"
                        },
                        "returnParameters": {
                            "id": 2570,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2764:0:14"
                        },
                        "scope": 2640,
                        "src": "2670:386:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2604,
                            "nodeType": "Block",
                            "src": "3278:33:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2602,
                                        "name": "addresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2480,
                                        "src": "3295:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 2601,
                                    "id": 2603,
                                    "nodeType": "Return",
                                    "src": "3288:16:14"
                                }
                            ]
                        },
                        "documentation": "Return array of all whitelisted addresses\n     * @return address[]      Array of addresses",
                        "id": 2605,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2597,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3206:2:14"
                        },
                        "returnParameters": {
                            "id": 2601,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2600,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2605,
                                    "src": "3256:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2598,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3256:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2599,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3256:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3255:18:14"
                        },
                        "scope": 2640,
                        "src": "3183:128:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2638,
                            "nodeType": "Block",
                            "src": "3666:186:14",
                            "statements": [
                                {
                                    "body": {
                                        "id": 2634,
                                        "nodeType": "Block",
                                        "src": "3724:100:14",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "id": 2629,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "3742:25:14",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2624,
                                                            "name": "whiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2484,
                                                            "src": "3743:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 2628,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2625,
                                                                "name": "_addresses",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2608,
                                                                "src": "3753:10:14",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                    "typeString": "address[] calldata"
                                                                }
                                                            },
                                                            "id": 2627,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2626,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2614,
                                                                "src": "3764:1:14",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3753:13:14",
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
                                                        "src": "3743:24:14",
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
                                                "falseBody": null,
                                                "id": 2633,
                                                "nodeType": "IfStatement",
                                                "src": "3738:76:14",
                                                "trueBody": {
                                                    "id": 2632,
                                                    "nodeType": "Block",
                                                    "src": "3769:45:14",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "hexValue": "66616c7365",
                                                                "id": 2630,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "bool",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3794:5:14",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                "value": "false"
                                                            },
                                                            "functionReturnParameters": 2612,
                                                            "id": 2631,
                                                            "nodeType": "Return",
                                                            "src": "3787:12:14"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2620,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2617,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2614,
                                            "src": "3696:1:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2618,
                                                "name": "_addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2608,
                                                "src": "3700:10:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            },
                                            "id": 2619,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3700:17:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3696:21:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2635,
                                    "initializationExpression": {
                                        "assignments": [
                                            2614
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2614,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2635,
                                                "src": "3681:9:14",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2613,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3681:7:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2616,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2615,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3693:1:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3681:13:14"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2622,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "3719:3:14",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2621,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2614,
                                                "src": "3719:1:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2623,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3719:3:14"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3676:148:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 2636,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3841:4:14",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 2612,
                                    "id": 2637,
                                    "nodeType": "Return",
                                    "src": "3834:11:14"
                                }
                            ]
                        },
                        "documentation": "Verifies an array of addresses against the whitelist\n     * @param  _addresses    Array of addresses to verify\n@return bool          Whether all addresses in the list are whitelsited",
                        "id": 2639,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "areValidAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2609,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2608,
                                    "name": "_addresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2639,
                                    "src": "3573:29:14",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2606,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3573:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2607,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3573:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3563:45:14"
                        },
                        "returnParameters": {
                            "id": 2612,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2611,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2639,
                                    "src": "3656:4:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2610,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3656:4:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3655:6:14"
                        },
                        "scope": 2640,
                        "src": "3537:315:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2641,
                "src": "914:2940:14"
            }
        ],
        "src": "597:3258:14"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/WhiteList.sol",
        "exportedSymbols": {
            "WhiteList": [
                2640
            ]
        },
        "id": 2641,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2463,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:14"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 2465,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 3199,
                "src": "622:80:14",
                "symbolAliases": [
                    {
                        "foreign": 2464,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgrade.sol",
                "file": "./TimeLockUpgrade.sol",
                "id": 2467,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 2279,
                "src": "704:56:14",
                "symbolAliases": [
                    {
                        "foreign": 2466,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 2469,
                "nodeType": "ImportDirective",
                "scope": 2641,
                "sourceUnit": 700,
                "src": "761:60:14",
                "symbolAliases": [
                    {
                        "foreign": 2468,
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
                            "id": 2470,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "940:7:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 2471,
                        "nodeType": "InheritanceSpecifier",
                        "src": "940:7:14"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 2472,
                            "name": "TimeLockUpgrade",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2278,
                            "src": "953:15:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgrade_$2278",
                                "typeString": "contract TimeLockUpgrade"
                            }
                        },
                        "id": 2473,
                        "nodeType": "InheritanceSpecifier",
                        "src": "953:15:14"
                    }
                ],
                "contractDependencies": [
                    2278,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title Whitelist\n@author Set Protocol\n * Generic whitelist for addresses",
                "fullyImplemented": true,
                "id": 2640,
                "linearizedBaseContracts": [
                    2640,
                    2278,
                    3198
                ],
                "name": "WhiteList",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2477,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2474,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "981:17:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "975:38:14",
                        "typeName": {
                            "baseType": {
                                "id": 2475,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1003:7:14",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 2476,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1003:9:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 2480,
                        "name": "addresses",
                        "nodeType": "VariableDeclaration",
                        "scope": 2640,
                        "src": "1072:26:14",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 2478,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1072:7:14",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 2479,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1072:9:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2484,
                        "name": "whiteList",
                        "nodeType": "VariableDeclaration",
                        "scope": 2640,
                        "src": "1104:41:14",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 2483,
                            "keyType": {
                                "id": 2481,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1112:7:14",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1104:24:14",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                                "id": 2482,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1123:4:14",
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
                        "anonymous": false,
                        "documentation": null,
                        "id": 2488,
                        "name": "AddressAdded",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2487,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2486,
                                    "indexed": false,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2488,
                                    "src": "1224:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2485,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1224:7:14",
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
                            "src": "1214:32:14"
                        },
                        "src": "1196:51:14"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 2492,
                        "name": "AddressRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2491,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2490,
                                    "indexed": false,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2492,
                                    "src": "1283:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2489,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1283:7:14",
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
                            "src": "1273:32:14"
                        },
                        "src": "1253:53:14"
                    },
                    {
                        "body": {
                            "id": 2529,
                            "nodeType": "Block",
                            "src": "1686:276:14",
                            "statements": [
                                {
                                    "body": {
                                        "id": 2527,
                                        "nodeType": "Block",
                                        "src": "1801:155:14",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    2510
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 2510,
                                                        "name": "addressToAdd",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 2527,
                                                        "src": "1815:20:14",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "typeName": {
                                                            "id": 2509,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1815:7:14",
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
                                                "id": 2514,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2511,
                                                        "name": "_initialAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2495,
                                                        "src": "1838:17:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 2513,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2512,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2499,
                                                        "src": "1856:1:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1838:20:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "1815:43:14"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 2518,
                                                            "name": "addressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2510,
                                                            "src": "1888:12:14",
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
                                                            "id": 2515,
                                                            "name": "addresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2480,
                                                            "src": "1873:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                "typeString": "address[] storage ref"
                                                            }
                                                        },
                                                        "id": 2517,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "push",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "1873:14:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 2519,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1873:28:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 2520,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1873:28:14"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2525,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2521,
                                                            "name": "whiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2484,
                                                            "src": "1915:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 2523,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2522,
                                                            "name": "addressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2510,
                                                            "src": "1925:12:14",
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
                                                        "src": "1915:23:14",
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
                                                        "id": 2524,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1941:4:14",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "src": "1915:30:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 2526,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1915:30:14"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2502,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2499,
                                            "src": "1766:1:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2503,
                                                "name": "_initialAddresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2495,
                                                "src": "1770:17:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            "id": 2504,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "1770:24:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1766:28:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2528,
                                    "initializationExpression": {
                                        "assignments": [
                                            2499
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2499,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2528,
                                                "src": "1751:9:14",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2498,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1751:7:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2501,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2500,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1763:1:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "1751:13:14"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2507,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "1796:3:14",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2506,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2499,
                                                "src": "1796:1:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2508,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1796:3:14"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "1746:210:14"
                                }
                            ]
                        },
                        "documentation": "Constructor function for Whitelist\n     * Allow initial addresses to be passed in so a separate transaction is not required for each\n     * @param _initialAddresses    Starting set of addresses to whitelist",
                        "id": 2530,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2496,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2495,
                                    "name": "_initialAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2530,
                                    "src": "1626:34:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2493,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1626:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2494,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1626:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1616:50:14"
                        },
                        "returnParameters": {
                            "id": 2497,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1686:0:14"
                        },
                        "scope": 2640,
                        "src": "1605:357:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2563,
                            "nodeType": "Block",
                            "src": "2259:275:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2543,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "2290:20:14",
                                                "subExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2540,
                                                        "name": "whiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2484,
                                                        "src": "2291:9:14",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 2542,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2541,
                                                        "name": "_address",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2532,
                                                        "src": "2301:8:14",
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
                                                    "src": "2291:19:14",
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
                                                "hexValue": "57686974654c6973742e616464416464726573733a20416464726573732068617320616c7265616479206265656e2077686974656c69737465642e",
                                                "id": 2544,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2324:61:14",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e19cbdf2d09ed18e5ab87f2ff79cece62cf8f7dd1880a1aa70d83af80632af44",
                                                    "typeString": "literal_string \"WhiteList.addAddress: Address has already been whitelisted.\""
                                                },
                                                "value": "WhiteList.addAddress: Address has already been whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_e19cbdf2d09ed18e5ab87f2ff79cece62cf8f7dd1880a1aa70d83af80632af44",
                                                    "typeString": "literal_string \"WhiteList.addAddress: Address has already been whitelisted.\""
                                                }
                                            ],
                                            "id": 2539,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2269:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2545,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2269:126:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2546,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2269:126:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2550,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2421:8:14",
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
                                                "id": 2547,
                                                "name": "addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2480,
                                                "src": "2406:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 2549,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2406:14:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 2551,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2406:24:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2552,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2406:24:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2557,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2553,
                                                "name": "whiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2484,
                                                "src": "2441:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 2555,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2554,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2451:8:14",
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
                                            "src": "2441:19:14",
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
                                            "id": 2556,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2463:4:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "2441:26:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2558,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2441:26:14"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2560,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2532,
                                                "src": "2509:8:14",
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
                                            "id": 2559,
                                            "name": "AddressAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2488,
                                            "src": "2483:12:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 2561,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2483:44:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2562,
                                    "nodeType": "EmitStatement",
                                    "src": "2478:49:14"
                                }
                            ]
                        },
                        "documentation": "Add an address to the whitelist\n     * @param _address    Address to add to the whitelist",
                        "id": 2564,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2535,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2534,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2221:9:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2221:9:14"
                            },
                            {
                                "arguments": null,
                                "id": 2537,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2536,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2258,
                                    "src": "2239:15:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2239:15:14"
                            }
                        ],
                        "name": "addAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2532,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2564,
                                    "src": "2173:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2531,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2173:7:14",
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
                            "src": "2163:32:14"
                        },
                        "returnParameters": {
                            "id": 2538,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2259:0:14"
                        },
                        "scope": 2640,
                        "src": "2144:390:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2595,
                            "nodeType": "Block",
                            "src": "2764:292:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2572,
                                                    "name": "whiteList",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2484,
                                                    "src": "2795:9:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                        "typeString": "mapping(address => bool)"
                                                    }
                                                },
                                                "id": 2574,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2573,
                                                    "name": "_address",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2566,
                                                    "src": "2805:8:14",
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
                                                "src": "2795:19:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "57686974654c6973742e72656d6f7665416464726573733a2041646472657373206973206e6f742063757272656e742077686974656c69737465642e",
                                                "id": 2575,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2828:62:14",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_0c48231a9662c157c7e8cfd4f761a9a4f162cc5afc4a67c6d82dac63ac5a5fcc",
                                                    "typeString": "literal_string \"WhiteList.removeAddress: Address is not current whitelisted.\""
                                                },
                                                "value": "WhiteList.removeAddress: Address is not current whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_0c48231a9662c157c7e8cfd4f761a9a4f162cc5afc4a67c6d82dac63ac5a5fcc",
                                                    "typeString": "literal_string \"WhiteList.removeAddress: Address is not current whitelisted.\""
                                                }
                                            ],
                                            "id": 2571,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2774:7:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2576,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2774:126:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2577,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2774:126:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2583,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 2578,
                                            "name": "addresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2480,
                                            "src": "2911:9:14",
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
                                                    "id": 2581,
                                                    "name": "_address",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2566,
                                                    "src": "2940:8:14",
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
                                                    "id": 2579,
                                                    "name": "addresses",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2480,
                                                    "src": "2923:9:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 2580,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "2923:16:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 2582,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2923:26:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "2911:38:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 2584,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2911:38:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2589,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2585,
                                                "name": "whiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2484,
                                                "src": "2960:9:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 2587,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2586,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2566,
                                                "src": "2970:8:14",
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
                                            "src": "2960:19:14",
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
                                            "id": 2588,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2982:5:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "2960:27:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2590,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2960:27:14"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2592,
                                                "name": "_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2566,
                                                "src": "3031:8:14",
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
                                            "id": 2591,
                                            "name": "AddressRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2492,
                                            "src": "3003:14:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 2593,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3003:46:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2594,
                                    "nodeType": "EmitStatement",
                                    "src": "2998:51:14"
                                }
                            ]
                        },
                        "documentation": "Remove an address from the whitelist\n     * @param _address    Address to remove from the whitelist",
                        "id": 2596,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 2569,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2568,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "2750:9:14",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2750:9:14"
                            }
                        ],
                        "name": "removeAddress",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2566,
                                    "name": "_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2596,
                                    "src": "2702:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2565,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2702:7:14",
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
                            "src": "2692:32:14"
                        },
                        "returnParameters": {
                            "id": 2570,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2764:0:14"
                        },
                        "scope": 2640,
                        "src": "2670:386:14",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2604,
                            "nodeType": "Block",
                            "src": "3278:33:14",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2602,
                                        "name": "addresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2480,
                                        "src": "3295:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 2601,
                                    "id": 2603,
                                    "nodeType": "Return",
                                    "src": "3288:16:14"
                                }
                            ]
                        },
                        "documentation": "Return array of all whitelisted addresses\n     * @return address[]      Array of addresses",
                        "id": 2605,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2597,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3206:2:14"
                        },
                        "returnParameters": {
                            "id": 2601,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2600,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2605,
                                    "src": "3256:16:14",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2598,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3256:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2599,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3256:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3255:18:14"
                        },
                        "scope": 2640,
                        "src": "3183:128:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2638,
                            "nodeType": "Block",
                            "src": "3666:186:14",
                            "statements": [
                                {
                                    "body": {
                                        "id": 2634,
                                        "nodeType": "Block",
                                        "src": "3724:100:14",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "id": 2629,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "3742:25:14",
                                                    "subExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2624,
                                                            "name": "whiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2484,
                                                            "src": "3743:9:14",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                "typeString": "mapping(address => bool)"
                                                            }
                                                        },
                                                        "id": 2628,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2625,
                                                                "name": "_addresses",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2608,
                                                                "src": "3753:10:14",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                    "typeString": "address[] calldata"
                                                                }
                                                            },
                                                            "id": 2627,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2626,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2614,
                                                                "src": "3764:1:14",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3753:13:14",
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
                                                        "src": "3743:24:14",
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
                                                "falseBody": null,
                                                "id": 2633,
                                                "nodeType": "IfStatement",
                                                "src": "3738:76:14",
                                                "trueBody": {
                                                    "id": 2632,
                                                    "nodeType": "Block",
                                                    "src": "3769:45:14",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "hexValue": "66616c7365",
                                                                "id": 2630,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "bool",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3794:5:14",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                "value": "false"
                                                            },
                                                            "functionReturnParameters": 2612,
                                                            "id": 2631,
                                                            "nodeType": "Return",
                                                            "src": "3787:12:14"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2620,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2617,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2614,
                                            "src": "3696:1:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2618,
                                                "name": "_addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2608,
                                                "src": "3700:10:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                    "typeString": "address[] calldata"
                                                }
                                            },
                                            "id": 2619,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3700:17:14",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3696:21:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2635,
                                    "initializationExpression": {
                                        "assignments": [
                                            2614
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2614,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2635,
                                                "src": "3681:9:14",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2613,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3681:7:14",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2616,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2615,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3693:1:14",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3681:13:14"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2622,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "3719:3:14",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2621,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2614,
                                                "src": "3719:1:14",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2623,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3719:3:14"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3676:148:14"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 2636,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3841:4:14",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 2612,
                                    "id": 2637,
                                    "nodeType": "Return",
                                    "src": "3834:11:14"
                                }
                            ]
                        },
                        "documentation": "Verifies an array of addresses against the whitelist\n     * @param  _addresses    Array of addresses to verify\n@return bool          Whether all addresses in the list are whitelsited",
                        "id": 2639,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "areValidAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2609,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2608,
                                    "name": "_addresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2639,
                                    "src": "3573:29:14",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2606,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3573:7:14",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2607,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3573:9:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3563:45:14"
                        },
                        "returnParameters": {
                            "id": 2612,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2611,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2639,
                                    "src": "3656:4:14",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2610,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3656:4:14",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3655:6:14"
                        },
                        "scope": 2640,
                        "src": "3537:315:14",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2641,
                "src": "914:2940:14"
            }
        ],
        "src": "597:3258:14"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.918Z",
    "devdoc": {
        "author": "Set Protocol * Generic whitelist for addresses",
        "methods": {
            "addAddress(address)": {
                "params": {
                    "_address": "Address to add to the whitelist"
                }
            },
            "areValidAddresses(address[])": {
                "params": {
                    "_addresses": "Array of addresses to verify"
                },
                "return": "bool          Whether all addresses in the list are whitelsited"
            },
            "constructor": {
                "params": {
                    "_initialAddresses": "Starting set of addresses to whitelist"
                }
            },
            "isOwner()": {
                "return": "true if `msg.sender` is the owner of the contract."
            },
            "owner()": {
                "return": "the address of the owner."
            },
            "removeAddress(address)": {
                "params": {
                    "_address": "Address to remove from the whitelist"
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
            },
            "validAddresses()": {
                "return": "address[]      Array of addresses"
            }
        },
        "title": "Whitelist"
    },
    "userdoc": {
        "methods": {
            "addAddress(address)": {
                "notice": "Add an address to the whitelist"
            },
            "areValidAddresses(address[])": {
                "notice": "Verifies an array of addresses against the whitelist"
            },
            "constructor": "Constructor function for Whitelist     * Allow initial addresses to be passed in so a separate transaction is not required for each",
            "removeAddress(address)": {
                "notice": "Remove an address from the whitelist"
            },
            "renounceOwnership()": {
                "notice": "Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
            },
            "setTimeLockPeriod(uint256)": {
                "notice": "Change timeLockPeriod period. Generally called after initially settings have been set up."
            },
            "validAddresses()": {
                "notice": "Return array of all whitelisted addresses"
            }
        }
    }
};
//# sourceMappingURL=WhiteList.js.map