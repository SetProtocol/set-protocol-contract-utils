"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleWhiteList = {
    "contractName": "OracleWhiteList",
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
            "name": "oracleWhiteList",
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
                    "name": "_initialTokenAddresses",
                    "type": "address[]"
                },
                {
                    "name": "_initialOracleAddresses",
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
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_oracleAddress",
                    "type": "address"
                }
            ],
            "name": "TokenOraclePairAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_oracleAddress",
                    "type": "address"
                }
            ],
            "name": "TokenOraclePairRemoved",
            "type": "event"
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
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "name": "_oracleAddress",
                    "type": "address"
                }
            ],
            "name": "addTokenOraclePair",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "name": "removeTokenOraclePair",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "name": "_oracleAddress",
                    "type": "address"
                }
            ],
            "name": "editTokenOraclePair",
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
                    "name": "_tokenAddresses",
                    "type": "address[]"
                }
            ],
            "name": "getOracleAddressesByToken",
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
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "name": "getOracleAddressByToken",
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
            "inputs": [
                {
                    "name": "_tokenAddresses",
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"timeLockedUpgrades\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_tokenAddresses\",\"type\":\"address[]\"}],\"name\":\"areValidAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"getOracleAddressByToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"oracleWhiteList\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"timeLockPeriod\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"name\":\"_oracleAddress\",\"type\":\"address\"}],\"name\":\"addTokenOraclePair\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_tokenAddresses\",\"type\":\"address[]\"}],\"name\":\"getOracleAddressesByToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"name\":\"_oracleAddress\",\"type\":\"address\"}],\"name\":\"editTokenOraclePair\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_timeLockPeriod\",\"type\":\"uint256\"}],\"name\":\"setTimeLockPeriod\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"removeRegisteredUpgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"validAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"addresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"removeTokenOraclePair\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_initialTokenAddresses\",\"type\":\"address[]\"},{\"name\":\"_initialOracleAddresses\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_oracleAddress\",\"type\":\"address\"}],\"name\":\"TokenOraclePairAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_oracleAddress\",\"type\":\"address\"}],\"name\":\"TokenOraclePairRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_upgradeData\",\"type\":\"bytes\"}],\"name\":\"UpgradeRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_upgradeHash\",\"type\":\"bytes32\"}],\"name\":\"RemoveRegisteredUpgrade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Set Protocol * WhiteList that matches whitelisted tokens to their on chain price oracle\",\"methods\":{\"addTokenOraclePair(address,address)\":{\"params\":{\"_oracleAddress\":\"Oracle address to add to the whitelist under _tokenAddress\",\"_tokenAddress\":\"Token address to add to the whitelist\"}},\"areValidAddresses(address[])\":{\"params\":{\"_tokenAddresses\":\"Array of token addresses to check if oracle exists\"},\"return\":\"bool               Whether all addresses in the list are whitelsited\"},\"constructor\":{\"params\":{\"_initialOracleAddresses\":\"Starting set of oracle addresses to whitelist\",\"_initialTokenAddresses\":\"Starting set of toke addresses to whitelist\"}},\"editTokenOraclePair(address,address)\":{\"params\":{\"_oracleAddress\":\"Oracle address to add to the whitelist under _tokenAddress\",\"_tokenAddress\":\"Token address to add to the whitelist\"}},\"getOracleAddressByToken(address)\":{\"params\":{\"_tokenAddress\":\"Address of token\"},\"return\":\"address          Address of oracle associated with token\"},\"getOracleAddressesByToken(address[])\":{\"params\":{\"_tokenAddresses\":\"Array of token addresses to get oracle addresses for\"},\"return\":\"address[]          Array of oracle addresses\"},\"isOwner()\":{\"return\":\"true if `msg.sender` is the owner of the contract.\"},\"owner()\":{\"return\":\"the address of the owner.\"},\"removeRegisteredUpgrade(bytes32)\":{\"params\":{\"_upgradeHash\":\"Keccack256 hash that uniquely identifies function called and arguments \"}},\"removeTokenOraclePair(address)\":{\"params\":{\"_tokenAddress\":\"Token address to remove to the whitelist\"}},\"renounceOwnership()\":{\"details\":\"Allows the current owner to relinquish control of the contract. It will not be possible to call the functions with the `onlyOwner` modifier anymore.\"},\"setTimeLockPeriod(uint256)\":{\"params\":{\"_timeLockPeriod\":\"Time in seconds that upgrades need to be evaluated before execution\"}},\"transferOwnership(address)\":{\"details\":\"Allows the current owner to transfer control of the contract to a newOwner.\",\"params\":{\"newOwner\":\"The address to transfer ownership to.\"}},\"validAddresses()\":{\"return\":\"address[]      Array of addresses\"}},\"title\":\"OracleWhiteList\"},\"userdoc\":{\"methods\":{\"addTokenOraclePair(address,address)\":{\"notice\":\"Add an address to the whitelist\"},\"areValidAddresses(address[])\":{\"notice\":\"Verifies an array of addresses against the whitelist\"},\"constructor\":\"Constructor function for OracleWhiteList     * Allow initial addresses to be passed in so a separate transaction is not required for each. Each token address passed is matched with a corresponding oracle address at the same index. The _initialTokenAddresses and _initialOracleAddresses arrays must be equal length.\",\"editTokenOraclePair(address,address)\":{\"notice\":\"Edit oracle address associated with a token address\"},\"getOracleAddressByToken(address)\":{\"notice\":\"Return oracle address associated with a passed token address \"},\"getOracleAddressesByToken(address[])\":{\"notice\":\"Return array of oracle addresses based on passed in token addresses \"},\"removeRegisteredUpgrade(bytes32)\":{\"notice\":\"Removes an existing upgrade.\"},\"removeTokenOraclePair(address)\":{\"notice\":\"Remove a token oracle pair from the whitelist\"},\"renounceOwnership()\":{\"notice\":\"Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"setTimeLockPeriod(uint256)\":{\"notice\":\"Change timeLockPeriod period. Generally called after initially settings have been set up.\"},\"validAddresses()\":{\"notice\":\"Return array of all whitelisted addresses\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/OracleWhiteList.sol\":\"OracleWhiteList\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol\":{\"keccak256\":\"0xb716eab4e8c5a336a2f19078928530829af097912bd1b925644f914b63601f08\",\"urls\":[\"bzzr://d8a21d39779beb316adb5180d08dcba1941eeccd9412ff08feb21a631c18c269\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/OracleWhiteList.sol\":{\"keccak256\":\"0xb462979e03ea753334900e5d493f5e6b863452fd7c3c15e46f84a6d3b080bb0b\",\"urls\":[\"bzzr://3be28bdf039fa95a3dfe9cd2ae0824a7cb662cc8f2c6d290d30d1b76d494bedf\"]},\"/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol\":{\"keccak256\":\"0x7c8188e262d4db7d352130c56c0eab85a6f9f89afb5fe08efe49084557e3e600\",\"urls\":[\"bzzr://5b0a3762af16f66a60bdb9cc1bcb14a7066bd3c54dd80c6333a9f07118800340\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\",\"urls\":[\"bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xcb16adc00dcf0d75e0bdf94379f4d5a6d74dca7c74e4183b94e15721159f8a30\",\"urls\":[\"bzzr://b81e03f7203cd628cfed19255911a04a05e8670d248afb48a7b067dd03b4ff55\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b50604051620016d6380380620016d6833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81518560208202830111640100000000821117156200008257600080fd5b505092919060200180516401000000008111156200009f57600080fd5b82016020810184811115620000b357600080fd5b8151856020820283011164010000000082111715620000d157600080fd5b505060008054600160a060020a0319163317808255604051929550600160a060020a0316935091507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a380518251146200017a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260478152602001806200168f6047913960600191505060405180910390fd5b60005b8251811015620002435760008382815181106200019657fe5b6020908102919091010151600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018054600160a060020a031916600160a060020a0383161790558351909150839083908110620001fe57fe5b602090810291909101810151600160a060020a039283166000908152600490925260409091208054600160a060020a031916929091169190911790556001016200017d565b50505061143980620002566000396000f3fe608060405234801561001057600080fd5b5060043610610128576000357c010000000000000000000000000000000000000000000000000000000090048063868e7fa4116100bf578063cc75c9b01161008e578063cc75c9b0146103a3578063e7d22fdb146103c0578063edf26d9b146103c8578063f2fde38b146103e5578063fdedc4241461040b57610128565b8063868e7fa4146103485780638da5cb5b146103765780638f32d59b1461037e5780639303b16f1461038657610128565b8063715018a6116100fb578063715018a61461024857806378446bc1146102525780637e2d21a51461025a5780637e82ae221461028857610128565b80631766486d1461012d57806332ed010e1461015c57806339477363146101e0578063556d477714610222575b600080fd5b61014a6004803603602081101561014357600080fd5b5035610431565b60408051918252519081900360200190f35b6101cc6004803603602081101561017257600080fd5b81019060208101813564010000000081111561018d57600080fd5b82018360208201111561019f57600080fd5b803590602001918460208302840111640100000000831117156101c157600080fd5b509092509050610443565b604080519115158252519081900360200190f35b610206600480360360208110156101f657600080fd5b5035600160a060020a03166104f2565b60408051600160a060020a039092168252519081900360200190f35b6102066004803603602081101561023857600080fd5b5035600160a060020a031661056c565b610250610587565b005b61014a6105e2565b6102506004803603604081101561027057600080fd5b50600160a060020a03813581169160200135166105e8565b6102f86004803603602081101561029e57600080fd5b8101906020810181356401000000008111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460208302840111640100000000831117156102ed57600080fd5b509092509050610880565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561033457818101518382015260200161031c565b505050509050019250505060405180910390f35b6102506004803603604081101561035e57600080fd5b50600160a060020a0381358116916020013516610955565b610206610bb4565b6101cc610bc4565b6102506004803603602081101561039c57600080fd5b5035610bd5565b610250600480360360208110156103b957600080fd5b5035610c2e565b6102f8610cc7565b610206600480360360208110156103de57600080fd5b5035610d29565b610250600480360360208110156103fb57600080fd5b5035600160a060020a0316610d50565b6102506004803603602081101561042157600080fd5b5035600160a060020a0316610d6d565b60026020526000908152604090205481565b600081806104855760405160e560020a62461bcd0281526004018080602001828103825260478152602001806112ba6047913960600191505060405180910390fd5b60005b818110156104e55760006004818787858181106104a157fe5b600160a060020a03602091820293909301358316845283019390935260409091016000205416919091141590506104dd576000925050506104ec565b600101610488565b5060019150505b92915050565b600160a060020a0381811660009081526004602052604081205490911661054d5760405160e560020a62461bcd02815260040180806020018281038252604681526020018061123e6046913960600191505060405180910390fd5b50600160a060020a039081166000908152600460205260409020541690565b600460205260009081526040902054600160a060020a031681565b61058f610bc4565b61059857600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360008054600160a060020a0319169055565b60015481565b6105f0610bc4565b6105f957600080fd5b610601610bc4565b61063f5760405160e560020a62461bcd02815260040180806020018281038252602f815260200180611399602f913960400191505060405180910390fd5b600154156107815760008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061071b57426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061087c565b60015461072f90829063ffffffff610ec516565b4210156107705760405160e560020a62461bcd0281526004018080602001828103825260368152602001806112846036913960400191505060405180910390fd5b506000908152600260205260408120555b600160a060020a0382811660009081526004602052604090205416156107db5760405160e560020a62461bcd0281526004018080602001828103825260498152602001806113016049913960600191505060405180910390fd5b60038054600181019091557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018054600160a060020a03808516600160a060020a03199283168117909355600083815260046020908152604091829020805493871693909416831790935580519384529183015280517f36c62519a51973cb772d5a3a93baf6d585bc7b6d7ed944ff4e9f415faf01c3c19281900390910190a15b5050565b606081806108c25760405160e560020a62461bcd02815260040180806020018281038252604f81526020018061134a604f913960600191505060405180910390fd5b6060816040519080825280602002602001820160405280156108ee578160200160208202803883390190505b50905060005b8281101561094c5761092086868381811061090b57fe5b90506020020135600160a060020a03166104f2565b82828151811061092c57fe5b600160a060020a03909216602092830291909101909101526001016108f4565b50949350505050565b61095d610bc4565b61096657600080fd5b61096e610bc4565b6109ac5760405160e560020a62461bcd02815260040180806020018281038252602f815260200180611399602f913960400191505060405180910390fd5b60015415610aee5760008036604051602001808383808284376040805191909301818103601f1901825283528051602091820120600081815260029092529290205491955090935050508115159050610a8857426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061087c565b600154610a9c90829063ffffffff610ec516565b421015610add5760405160e560020a62461bcd0281526004018080602001828103825260368152602001806112846036913960400191505060405180910390fd5b506000908152600260205260408120555b600160a060020a0382811660009081526004602052604090205416610b475760405160e560020a62461bcd0281526004018080602001828103825260468152602001806113c86046913960600191505060405180910390fd5b600160a060020a038281166000818152600460209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f36c62519a51973cb772d5a3a93baf6d585bc7b6d7ed944ff4e9f415faf01c3c1929181900390910190a15050565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b610bdd610bc4565b610be657600080fd5b6001548111610c295760405160e560020a62461bcd02815260040180806020018281038252603b815260200180611169603b913960400191505060405180910390fd5b600155565b610c36610bc4565b610c3f57600080fd5b600081815260026020526040902054610c8c5760405160e560020a62461bcd02815260040180806020018281038252604a8152602001806111a4604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60606003805480602002602001604051908101604052809291908181526020018280548015610d1f57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610d01575b5050505050905090565b60038181548110610d3657fe5b600091825260209091200154600160a060020a0316905081565b610d58610bc4565b610d6157600080fd5b610d6a81610ede565b50565b610d75610bc4565b610d7e57600080fd5b600160a060020a038082166000908152600460205260409020541680610dd85760405160e560020a62461bcd0281526004018080602001828103825260508152602001806111ee6050913960600191505060405180910390fd5b610e45826003805480602002602001604051908101604052809291908181526020018280548015610e3257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610e14575b5050505050610f4c90919063ffffffff16565b8051610e59916003916020909101906110df565b50600160a060020a038083166000818152600460209081526040918290208054600160a060020a031916905581519283529284169282019290925281517ffe18d6557d9f07bf044140aaf218164d192ba2755a44f7f16ba07faa0ae28693929181900390910190a15050565b600082820183811015610ed757600080fd5b9392505050565b600160a060020a038116610ef157600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360008054600160a060020a031916600160a060020a0392909216919091179055565b6060600080610f5b8585610f81565b9150915080610f6957600080fd5b6060610f758684610fe5565b5093506104ec92505050565b81516000908190815b81811015610fd45784600160a060020a0316868281518110610fa857fe5b6020026020010151600160a060020a03161415610fcc57925060019150610fde9050565b600101610f8a565b5060009250829150505b9250929050565b60606000808451905060606001820360405190808252806020026020018201604052801561101d578160200160208202803883390190505b50905060005b8581101561106b5786818151811061103757fe5b602002602001015182828151811061104b57fe5b600160a060020a0390921660209283029190910190910152600101611023565b50600185015b828110156110bc5786818151811061108557fe5b602002602001015182600183038151811061109c57fe5b600160a060020a0390921660209283029190910190910152600101611071565b50808686815181106110ca57fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215611134579160200282015b828111156111345782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906110ff565b50611140929150611144565b5090565b610bc191905b80821115611140578054600160a060020a031916815560010161114a56fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d75737420626520726567697374657265644f7261636c6557686974654c6973742e72656d6f7665546f6b656e4f7261636c65506169723a20546f6b656e2041646472657373206973206e6f742063757272656e742077686974656c69737465642e4f7261636c6557686974654c6973742e6765744f7261636c654164647265737346726f6d546f6b656e3a204e6f204f7261636c6520666f72207468617420616464726573732e54696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e4f7261636c6557686974654c6973742e61726556616c69644164647265737365733a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e4f7261636c6557686974654c6973742e616464546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c65207061697220616c7265616479206578697374732e4f7261636c6557686974654c6973742e6765744f7261636c654164647265737365734279546f6b656e3a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e65724f7261636c6557686974654c6973742e65646974546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c652070616972206d7573742065786973742ea165627a7a723058201b25b11e1956df35bd387f73a7afe5d7006da6347b053e461140981c009e2abb00294f7261636c6557686974654c6973742e636f6e7374727563746f723a20546f6b656e20616e64204f7261636c65206172726179206c656e67746873206d757374206d617463682e",
    "deployedBytecode": "0x608060405234801561001057600080fd5b5060043610610128576000357c010000000000000000000000000000000000000000000000000000000090048063868e7fa4116100bf578063cc75c9b01161008e578063cc75c9b0146103a3578063e7d22fdb146103c0578063edf26d9b146103c8578063f2fde38b146103e5578063fdedc4241461040b57610128565b8063868e7fa4146103485780638da5cb5b146103765780638f32d59b1461037e5780639303b16f1461038657610128565b8063715018a6116100fb578063715018a61461024857806378446bc1146102525780637e2d21a51461025a5780637e82ae221461028857610128565b80631766486d1461012d57806332ed010e1461015c57806339477363146101e0578063556d477714610222575b600080fd5b61014a6004803603602081101561014357600080fd5b5035610431565b60408051918252519081900360200190f35b6101cc6004803603602081101561017257600080fd5b81019060208101813564010000000081111561018d57600080fd5b82018360208201111561019f57600080fd5b803590602001918460208302840111640100000000831117156101c157600080fd5b509092509050610443565b604080519115158252519081900360200190f35b610206600480360360208110156101f657600080fd5b5035600160a060020a03166104f2565b60408051600160a060020a039092168252519081900360200190f35b6102066004803603602081101561023857600080fd5b5035600160a060020a031661056c565b610250610587565b005b61014a6105e2565b6102506004803603604081101561027057600080fd5b50600160a060020a03813581169160200135166105e8565b6102f86004803603602081101561029e57600080fd5b8101906020810181356401000000008111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460208302840111640100000000831117156102ed57600080fd5b509092509050610880565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561033457818101518382015260200161031c565b505050509050019250505060405180910390f35b6102506004803603604081101561035e57600080fd5b50600160a060020a0381358116916020013516610955565b610206610bb4565b6101cc610bc4565b6102506004803603602081101561039c57600080fd5b5035610bd5565b610250600480360360208110156103b957600080fd5b5035610c2e565b6102f8610cc7565b610206600480360360208110156103de57600080fd5b5035610d29565b610250600480360360208110156103fb57600080fd5b5035600160a060020a0316610d50565b6102506004803603602081101561042157600080fd5b5035600160a060020a0316610d6d565b60026020526000908152604090205481565b600081806104855760405160e560020a62461bcd0281526004018080602001828103825260478152602001806112ba6047913960600191505060405180910390fd5b60005b818110156104e55760006004818787858181106104a157fe5b600160a060020a03602091820293909301358316845283019390935260409091016000205416919091141590506104dd576000925050506104ec565b600101610488565b5060019150505b92915050565b600160a060020a0381811660009081526004602052604081205490911661054d5760405160e560020a62461bcd02815260040180806020018281038252604681526020018061123e6046913960600191505060405180910390fd5b50600160a060020a039081166000908152600460205260409020541690565b600460205260009081526040902054600160a060020a031681565b61058f610bc4565b61059857600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360008054600160a060020a0319169055565b60015481565b6105f0610bc4565b6105f957600080fd5b610601610bc4565b61063f5760405160e560020a62461bcd02815260040180806020018281038252602f815260200180611399602f913960400191505060405180910390fd5b600154156107815760008036604051602001808383808284376040805191909301818103601f190182528352805160209182012060008181526002909252929020549195509093505050811515905061071b57426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061087c565b60015461072f90829063ffffffff610ec516565b4210156107705760405160e560020a62461bcd0281526004018080602001828103825260368152602001806112846036913960400191505060405180910390fd5b506000908152600260205260408120555b600160a060020a0382811660009081526004602052604090205416156107db5760405160e560020a62461bcd0281526004018080602001828103825260498152602001806113016049913960600191505060405180910390fd5b60038054600181019091557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018054600160a060020a03808516600160a060020a03199283168117909355600083815260046020908152604091829020805493871693909416831790935580519384529183015280517f36c62519a51973cb772d5a3a93baf6d585bc7b6d7ed944ff4e9f415faf01c3c19281900390910190a15b5050565b606081806108c25760405160e560020a62461bcd02815260040180806020018281038252604f81526020018061134a604f913960600191505060405180910390fd5b6060816040519080825280602002602001820160405280156108ee578160200160208202803883390190505b50905060005b8281101561094c5761092086868381811061090b57fe5b90506020020135600160a060020a03166104f2565b82828151811061092c57fe5b600160a060020a03909216602092830291909101909101526001016108f4565b50949350505050565b61095d610bc4565b61096657600080fd5b61096e610bc4565b6109ac5760405160e560020a62461bcd02815260040180806020018281038252602f815260200180611399602f913960400191505060405180910390fd5b60015415610aee5760008036604051602001808383808284376040805191909301818103601f1901825283528051602091820120600081815260029092529290205491955090935050508115159050610a8857426002600084815260200190815260200160002081905550817fe44f46be6285c6d0bb89d91e4b554c2fd26cf7c68fc1379279b8e97a2d712b6a4260003660405180848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a2505061087c565b600154610a9c90829063ffffffff610ec516565b421015610add5760405160e560020a62461bcd0281526004018080602001828103825260368152602001806112846036913960400191505060405180910390fd5b506000908152600260205260408120555b600160a060020a0382811660009081526004602052604090205416610b475760405160e560020a62461bcd0281526004018080602001828103825260468152602001806113c86046913960600191505060405180910390fd5b600160a060020a038281166000818152600460209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f36c62519a51973cb772d5a3a93baf6d585bc7b6d7ed944ff4e9f415faf01c3c1929181900390910190a15050565b600054600160a060020a03165b90565b600054600160a060020a0316331490565b610bdd610bc4565b610be657600080fd5b6001548111610c295760405160e560020a62461bcd02815260040180806020018281038252603b815260200180611169603b913960400191505060405180910390fd5b600155565b610c36610bc4565b610c3f57600080fd5b600081815260026020526040902054610c8c5760405160e560020a62461bcd02815260040180806020018281038252604a8152602001806111a4604a913960600191505060405180910390fd5b6000818152600260205260408082208290555182917f068cc8f97648f23db94d0e1a707a54447d07effeb11c1c297168aa67321dc4ec91a250565b60606003805480602002602001604051908101604052809291908181526020018280548015610d1f57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610d01575b5050505050905090565b60038181548110610d3657fe5b600091825260209091200154600160a060020a0316905081565b610d58610bc4565b610d6157600080fd5b610d6a81610ede565b50565b610d75610bc4565b610d7e57600080fd5b600160a060020a038082166000908152600460205260409020541680610dd85760405160e560020a62461bcd0281526004018080602001828103825260508152602001806111ee6050913960600191505060405180910390fd5b610e45826003805480602002602001604051908101604052809291908181526020018280548015610e3257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610e14575b5050505050610f4c90919063ffffffff16565b8051610e59916003916020909101906110df565b50600160a060020a038083166000818152600460209081526040918290208054600160a060020a031916905581519283529284169282019290925281517ffe18d6557d9f07bf044140aaf218164d192ba2755a44f7f16ba07faa0ae28693929181900390910190a15050565b600082820183811015610ed757600080fd5b9392505050565b600160a060020a038116610ef157600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360008054600160a060020a031916600160a060020a0392909216919091179055565b6060600080610f5b8585610f81565b9150915080610f6957600080fd5b6060610f758684610fe5565b5093506104ec92505050565b81516000908190815b81811015610fd45784600160a060020a0316868281518110610fa857fe5b6020026020010151600160a060020a03161415610fcc57925060019150610fde9050565b600101610f8a565b5060009250829150505b9250929050565b60606000808451905060606001820360405190808252806020026020018201604052801561101d578160200160208202803883390190505b50905060005b8581101561106b5786818151811061103757fe5b602002602001015182828151811061104b57fe5b600160a060020a0390921660209283029190910190910152600101611023565b50600185015b828110156110bc5786818151811061108557fe5b602002602001015182600183038151811061109c57fe5b600160a060020a0390921660209283029190910190910152600101611071565b50808686815181106110ca57fe5b60200260200101519350935050509250929050565b828054828255906000526020600020908101928215611134579160200282015b828111156111345782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906110ff565b50611140929150611144565b5090565b610bc191905b80821115611140578054600160a060020a031916815560010161114a56fe54696d654c6f636b5570677261646556323a204e657720706572696f64206d7573742062652067726561746572207468616e206578697374696e6754696d654c6f636b5570677261646556322e72656d6f766552656769737465726564557067726164653a20557067726164652068617368206d75737420626520726567697374657265644f7261636c6557686974654c6973742e72656d6f7665546f6b656e4f7261636c65506169723a20546f6b656e2041646472657373206973206e6f742063757272656e742077686974656c69737465642e4f7261636c6557686974654c6973742e6765744f7261636c654164647265737346726f6d546f6b656e3a204e6f204f7261636c6520666f72207468617420616464726573732e54696d654c6f636b5570677261646556323a2054696d65206c6f636b20706572696f64206d757374206861766520656c61707365642e4f7261636c6557686974654c6973742e61726556616c69644164647265737365733a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e4f7261636c6557686974654c6973742e616464546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c65207061697220616c7265616479206578697374732e4f7261636c6557686974654c6973742e6765744f7261636c654164647265737365734279546f6b656e3a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e54696d654c6f636b5570677261646556323a205468652063616c6c6572206d75737420626520746865206f776e65724f7261636c6557686974654c6973742e65646974546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c652070616972206d7573742065786973742ea165627a7a723058201b25b11e1956df35bd387f73a7afe5d7006da6347b053e461140981c009e2abb0029",
    "sourceMap": "965:7071:9:-;;;2064:657;8:9:-1;5:2;;;30:1;27;20:12;5:2;2064:657:9;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2064:657:9;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;62:21;;123:4;114:14;;138:31;;;135:2;;;182:1;179;172:12;135:2;219:3;213:10;331:9;325:2;311:12;307:21;289:16;285:44;282:59;261:11;247:12;244:29;233:116;230:2;;;362:1;359;352:12;230:2;0:373;;2064:657:9;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;62:21;;123:4;114:14;;138:31;;;135:2;;;182:1;179;172:12;135:2;219:3;213:10;331:9;325:2;311:12;307:21;289:16;285:44;282:59;261:11;247:12;244:29;233:116;230:2;;;362:1;359;352:12;230:2;-1:-1;;515:6:24;:19;;-1:-1:-1;;;;;;515:19:24;524:10;515:19;;;;549:40;;2064:657:9;;-1:-1:-1;;;;;;582:6:24;;-1:-1:-1;515:6:24;-1:-1:-1;549:40:24;;515:6;;549:40;2264:23:9;:30;2231:22;:29;:63;2210:181;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2457:9;2452:263;2476:22;:29;2472:1;:33;2452:263;;;2526:25;2554:22;2577:1;2554:25;;;;;;;;;;;;;;;;;;2594:9;27:10:-1;;39:1;23:18;;45:23;;-1:-1;2594:33:9;;;;;;;;-1:-1:-1;;;;;;2594:33:9;-1:-1:-1;;;;;2594:33:9;;;;;2678:26;;2554:25;;-1:-1:-1;2678:26:9;;2702:1;;2678:26;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2641:34:9;;;;;;;:15;:34;;;;;;;:63;;-1:-1:-1;;;;;;2641:63:9;;;;;;;;;;;-1:-1:-1;2507:3:9;2452:263;;;;2064:657;;965:7071;;;;;;",
    "deployedSourceMap": "965:7071:9:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;965:7071:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1399:53:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1399:53:12;;:::i;:::-;;;;;;;;;;;;;;;;7315:717:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7315:717:9;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;7315:717:9;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7315:717:9;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;7315:717:9;;-1:-1:-1;7315:717:9;-1:-1:-1;7315:717:9;:::i;:::-;;;;;;;;;;;;;;;;;;6568:489;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6568:489:9;-1:-1:-1;;;;;6568:489:9;;:::i;:::-;;;;-1:-1:-1;;;;;6568:489:9;;;;;;;;;;;;;;1163:50;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1163:50:9;-1:-1:-1;;;;;1163:50:9;;:::i;1423:137:24:-;;;:::i;:::-;;1284:29:12;;;:::i;3004:505:9:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;3004:505:9;;;;;;;;;;:::i;5492:857::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5492:857:9;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;5492:857:9;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;5492:857:9;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;-1:-1;5492:857:9;;-1:-1:-1;5492:857:9;-1:-1:-1;5492:857:9;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5492:857:9;;;;;;;;;;;;;;;;;4428:557;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;4428:557:9;;;;;;;;;;:::i;659:77:24:-;;;:::i;979:90::-;;;:::i;4099:398:12:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4099:398:12;;:::i;3428:444::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3428:444:12;;:::i;5112:128:9:-;;;:::i;1131:26::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1131:26:9;;:::i;1731:107:24:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1731:107:24;-1:-1:-1;;;;;1731:107:24;;:::i;3663:518:9:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3663:518:9;-1:-1:-1;;;;;3663:518:9;;:::i;1399:53:12:-;;;;;;;;;;;;;:::o;7315:717:9:-;7439:4;7519:15;7633;7612:133;;;;-1:-1:-1;;;;;7612:133:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7761:9;7756:248;7780:11;7776:1;:15;7756:248;;;7945:1;7898:15;7945:1;7914:15;;7930:1;7914:18;;;;;;;-1:-1:-1;;;;;7914:18:9;;;;;;;;;;;7898:35;;;;;;;;;;;;-1:-1:-1;7898:35:9;;;:49;;;;7894:100;;-1:-1:-1;7894:100:9;;7974:5;7967:12;;;;;;7894:100;7793:3;;7756:248;;;;8021:4;8014:11;;;7315:717;;;;;:::o;6568:489::-;-1:-1:-1;;;;;6792:30:9;;;6683:7;6792:30;;;:15;:30;;;;;;6683:7;;6792:30;6771:161;;;;-1:-1:-1;;;;;6771:161:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;7013:30:9;;;;;;;:15;:30;;;;;;;;6568:489::o;1163:50::-;;;;;;;;;;;;-1:-1:-1;;;;;1163:50:9;;:::o;1423:137:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1521:1;1505:6;;1484:40;;-1:-1:-1;;;;;1505:6:24;;;;1484:40;;1521:1;;1484:40;1551:1;1534:19;;-1:-1:-1;;;;;;1534:19:24;;;1423:137::o;1284:29:12:-;;;;:::o;3004:505:9:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;1818:9:12;:7;:9::i;:::-;1797:103;;;;-1:-1:-1;;;;;1797:103:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2069:14;;:18;2065:1091;;2278:19;2365:8;;2327:64;;;;;;;30:3:-1;22:6;14;1:33;2327:64:12;;;45:16:-1;;;;26:21;;;-1:-1;;22:32;6:49;;2327:64:12;;2300:105;;49:4:-1;2300:105:12;;;;2420:24;2447:31;;;:18;:31;;;;;;;2300:105;;-1:-1:-1;2447:31:12;;-1:-1:-1;;;2583:21:12;;2579:293;;-1:-1:-1;2579:293:12;;2658:15;2624:18;:31;2643:11;2624:31;;;;;;;;;;;:49;;;;2736:11;2697:135;2769:15;2806:8;;2697:135;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;;74:27;2697:135:12;;137:4:-1;117:14;;;-1:-1;;113:30;157:16;;;2697:135:12;;;;-1:-1:-1;2697:135:12;;-1:-1:-1;;;;;2697:135:12;2851:7;;;;2579:293;2951:14;;2930:36;;:16;;:36;:20;:36;:::i;:::-;2911:15;:55;;2886:168;;;;-1:-1:-1;;;;;2886:168:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3143:1:12;3109:31;;;:18;:31;;;;;:35;2065:1091;-1:-1:-1;;;;;3195:30:9;;;3237:1;3195:30;;;:15;:30;;;;;;;:44;3174:164;;;;-1:-1:-1;;;;;3174:164:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3349:9;27:10:-1;;39:1;23:18;;45:23;;;3349:29:9;;;;-1:-1:-1;;;;;3349:29:9;;;-1:-1:-1;;;;;;3349:29:9;;;;;;;;-1:-1:-1;3388:30:9;;;:15;3349:29;3388:30;;;;;;;;:47;;;;;;;;;;;;;;3451:51;;;;;;;;;;;;;;;;;;;;;883:1:24;3004:505:9;;:::o;5492:857::-;5624:16;5716:15;5830;5809:141;;;;-1:-1:-1;;;;;5809:141:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6007:32;6056:11;6042:26;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;6042:26:9;-1:-1:-1;6007:61:9;-1:-1:-1;6084:9:9;6079:224;6103:11;6099:1;:15;6079:224;;;6219:73;6260:15;;6276:1;6260:18;;;;;;;;;;;;;-1:-1:-1;;;;;6260:18:9;6219:23;:73::i;:::-;6198:15;6214:1;6198:18;;;;;;;;-1:-1:-1;;;;;6198:94:9;;;:18;;;;;;;;;;;:94;6116:3;;6079:224;;;-1:-1:-1;6320:15:9;5492:857;-1:-1:-1;;;;5492:857:9:o;4428:557::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;1818:9:12;:7;:9::i;:::-;1797:103;;;;-1:-1:-1;;;;;1797:103:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2069:14;;:18;2065:1091;;2278:19;2365:8;;2327:64;;;;;;;30:3:-1;22:6;14;1:33;2327:64:12;;;45:16:-1;;;;26:21;;;-1:-1;;22:32;6:49;;2327:64:12;;2300:105;;49:4:-1;2300:105:12;;;;2420:24;2447:31;;;:18;:31;;;;;;;2300:105;;-1:-1:-1;2447:31:12;;-1:-1:-1;;;2583:21:12;;2579:293;;-1:-1:-1;2579:293:12;;2658:15;2624:18;:31;2643:11;2624:31;;;;;;;;;;;:49;;;;2736:11;2697:135;2769:15;2806:8;;2697:135;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;;74:27;2697:135:12;;137:4:-1;117:14;;;-1:-1;;113:30;157:16;;;2697:135:12;;;;-1:-1:-1;2697:135:12;;-1:-1:-1;;;;;2697:135:12;2851:7;;;;2579:293;2951:14;;2930:36;;:16;;:36;:20;:36;:::i;:::-;2911:15;:55;;2886:168;;;;-1:-1:-1;;;;;2886:168:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3143:1:12;3109:31;;;:18;:31;;;;;:35;2065:1091;-1:-1:-1;;;;;4620:30:9;;;4662:1;4620:30;;;:15;:30;;;;;;;4599:161;;;;-1:-1:-1;;;;;4599:161:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4830:30:9;;;;;;;:15;:30;;;;;;;;;:47;;-1:-1:-1;;;;;;4830:47:9;;;;;;;;;4893:85;;;;;;;;;;;;;;;;;;;;;;;;4428:557;;:::o;659:77:24:-;697:7;723:6;-1:-1:-1;;;;;723:6:24;659:77;;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:24;1042:10;:20;;979:90::o;4099:398:12:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;4348:14:12;;4330:15;:32;4309:138;;;;-1:-1:-1;;;;;4309:138:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4458:14;:32;4099:398::o;3428:444::-;863:9:24;:7;:9::i;:::-;855:18;;;;;;3568:32:12;;;;:18;:32;;;;;;3547:158;;;;-1:-1:-1;;;;;3547:158:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3787:1;3752:32;;;:18;:32;;;;;;:36;;;3804:59;3771:12;;3804:59;;;3428:444;:::o;5112:128:9:-;5185:16;5224:9;5217:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5217:16:9;;;;;;;;;;;;;;;;;;;;;;;5112:128;:::o;1131:26::-;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1131:26:9;;-1:-1:-1;1131:26:9;:::o;1731:107:24:-;863:9;:7;:9::i;:::-;855:18;;;;;;1803:28;1822:8;1803:18;:28::i;:::-;1731:107;:::o;3663:518:9:-;863:9:24;:7;:9::i;:::-;855:18;;;;;;-1:-1:-1;;;;;3804:30:9;;;3780:21;3804:30;;;:15;:30;;;;;;;3866:27;3845:154;;;;-1:-1:-1;;;;;3845:154:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4022:31;4039:13;4022:9;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4022:16:9;;;;;;;;;;;;;;;;;;;;;;;:31;;;;:::i;:::-;4010:43;;;;:9;;:43;;;;;;:::i;:::-;-1:-1:-1;;;;;;4063:30:9;;;4104:1;4063:30;;;:15;:30;;;;;;;;;:43;;-1:-1:-1;;;;;;4063:43:9;;;4122:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;883:1:24;3663:518:9;:::o;1439:145:23:-;1497:7;1528:5;;;1551:6;;;;1543:15;;;;;;1576:1;1439:145;-1:-1:-1;;;1439:145:23:o;1982:183:24:-;-1:-1:-1;;;;;2055:22:24;;2047:31;;;;;;2114:6;;;2093:38;;-1:-1:-1;;;;;2093:38:24;;;;2114:6;;;2093:38;;;2141:6;:17;;-1:-1:-1;;;;;;2141:17:24;-1:-1:-1;;;;;2141:17:24;;;;;;;;;;1982:183::o;5536:320:1:-;5630:16;5663:13;5678:9;5691:13;5699:1;5702;5691:7;:13::i;:::-;5662:42;;;;5719:4;5714:136;;5739:8;;;5714:136;5779:19;5803:13;5807:1;5810:5;5803:3;:13::i;:::-;-1:-1:-1;5778:38:1;-1:-1:-1;5830:9:1;;-1:-1:-1;;;5830:9:1;509:289;622:8;;580:7;;;;;640:125;664:6;660:1;:10;640:125;;;703:1;-1:-1:-1;;;;;695:9:1;:1;697;695:4;;;;;;;;;;;;;;-1:-1:-1;;;;;695:9:1;;691:64;;;732:1;-1:-1:-1;735:4:1;;-1:-1:-1;724:16:1;;-1:-1:-1;724:16:1;691:64;672:3;;640:125;;;-1:-1:-1;782:1:1;;-1:-1:-1;782:1:1;;-1:-1:-1;;509:289:1;;;;;;:::o;5004:473::-;5099:16;5117:7;5140:14;5157:1;:8;5140:25;;5175:29;5230:1;5221:6;:10;5207:25;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;5207:25:1;-1:-1:-1;5175:57:1;-1:-1:-1;5247:9:1;5242:83;5266:5;5262:1;:9;5242:83;;;5310:1;5312;5310:4;;;;;;;;;;;;;;5292:12;5305:1;5292:15;;;;;;;;-1:-1:-1;;;;;5292:22:1;;;:15;;;;;;;;;;;:22;5273:3;;5242:83;;;-1:-1:-1;5359:1:1;5351:9;;5334:96;5366:6;5362:1;:10;5334:96;;;5415:1;5417;5415:4;;;;;;;;;;;;;;5393:12;5410:1;5406;:5;5393:19;;;;;;;;-1:-1:-1;;;;;5393:26:1;;;:19;;;;;;;;;;;:26;5374:3;;5334:96;;;;5447:12;5461:1;5463:5;5461:8;;;;;;;;;;;;;;5439:31;;;;;;5004:473;;;;;:::o;965:7071:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;965:7071:9;-1:-1:-1;;;;;965:7071:9;;;;;;;;;;;-1:-1:-1;965:7071:9;;;;;;;-1:-1:-1;965:7071:9;;;-1:-1:-1;965:7071:9;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;965:7071:9;;;;;;",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\nimport { Ownable } from \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport { TimeLockUpgradeV2 } from \"./TimeLockUpgradeV2.sol\";\nimport { AddressArrayUtils } from \"./AddressArrayUtils.sol\";\n\n\n/**\n * @title OracleWhiteList\n * @author Set Protocol\n *\n * WhiteList that matches whitelisted tokens to their on chain price oracle\n */\ncontract OracleWhiteList is\n    Ownable,\n    TimeLockUpgradeV2\n{\n    using AddressArrayUtils for address[];\n\n    /* ============ State Variables ============ */\n\n    address[] public addresses;\n    mapping(address => address) public oracleWhiteList;\n\n    /* ============ Events ============ */\n\n    event TokenOraclePairAdded(\n        address _tokenAddress,\n        address _oracleAddress\n    );\n\n    event TokenOraclePairRemoved(\n        address _tokenAddress,\n        address _oracleAddress\n    );\n\n    /* ============ Constructor ============ */\n\n    /**\n     * Constructor function for OracleWhiteList\n     *\n     * Allow initial addresses to be passed in so a separate transaction is not required for each.\n     * Each token address passed is matched with a corresponding oracle address at the same index.\n     * The _initialTokenAddresses and _initialOracleAddresses arrays must be equal length.\n     *\n     * @param _initialTokenAddresses        Starting set of toke addresses to whitelist\n     * @param _initialOracleAddresses       Starting set of oracle addresses to whitelist\n     */\n    constructor(\n        address[] memory _initialTokenAddresses,\n        address[] memory _initialOracleAddresses\n    )\n        public\n    {\n        require(\n            _initialTokenAddresses.length == _initialOracleAddresses.length,\n            \"OracleWhiteList.constructor: Token and Oracle array lengths must match.\"\n        );\n\n        // Add each of initial addresses to state\n        for (uint256 i = 0; i < _initialTokenAddresses.length; i++) {\n            address tokenAddressToAdd = _initialTokenAddresses[i];\n\n            addresses.push(tokenAddressToAdd);\n            oracleWhiteList[tokenAddressToAdd] = _initialOracleAddresses[i];\n        }\n    }\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Add an address to the whitelist\n     *\n     * @param _tokenAddress    Token address to add to the whitelist\n     * @param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress\n     */\n    function addTokenOraclePair(\n        address _tokenAddress,\n        address _oracleAddress\n    )\n        external\n        onlyOwner\n        timeLockUpgrade\n    {\n        require(\n            oracleWhiteList[_tokenAddress] == address(0),\n            \"OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists.\"\n        );\n\n        addresses.push(_tokenAddress);\n        oracleWhiteList[_tokenAddress] = _oracleAddress;\n\n        emit TokenOraclePairAdded(_tokenAddress, _oracleAddress);\n    }\n\n    /**\n     * Remove a token oracle pair from the whitelist\n     *\n     * @param _tokenAddress    Token address to remove to the whitelist\n     */\n    function removeTokenOraclePair(\n        address _tokenAddress\n    )\n        external\n        onlyOwner\n    {\n        address oracleAddress = oracleWhiteList[_tokenAddress];\n\n        require(\n            oracleAddress != address(0),\n            \"OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted.\"\n        );\n\n        addresses = addresses.remove(_tokenAddress);\n        oracleWhiteList[_tokenAddress] = address(0);\n\n        emit TokenOraclePairRemoved(_tokenAddress, oracleAddress);\n    }\n\n    /**\n     * Edit oracle address associated with a token address\n     *\n     * @param _tokenAddress    Token address to add to the whitelist\n     * @param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress\n     */\n    function editTokenOraclePair(\n        address _tokenAddress,\n        address _oracleAddress\n    )\n        external\n        onlyOwner\n        timeLockUpgrade\n    {\n        require(\n            oracleWhiteList[_tokenAddress] != address(0),\n            \"OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist.\"\n        );\n\n        // Set new oracle address for passed token address\n        oracleWhiteList[_tokenAddress] = _oracleAddress;\n\n        emit TokenOraclePairAdded(\n            _tokenAddress,\n            _oracleAddress\n        );\n    }\n\n    /**\n     * Return array of all whitelisted addresses\n     *\n     * @return address[]      Array of addresses\n     */\n    function validAddresses()\n        external\n        view\n        returns (address[] memory)\n    {\n        return addresses;\n    }\n\n    /**\n     * Return array of oracle addresses based on passed in token addresses \n     *\n     * @param  _tokenAddresses    Array of token addresses to get oracle addresses for\n     * @return address[]          Array of oracle addresses\n     */\n    function getOracleAddressesByToken(\n        address[] calldata _tokenAddresses\n    )\n        external\n        view\n        returns (address[] memory)\n    {\n        // Get length of passed array\n        uint256 arrayLength = _tokenAddresses.length;\n\n        // Check that passed array length is greater than 0\n        require(\n            arrayLength > 0,\n            \"OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0.\"\n        );\n\n        // Instantiate oracle addresses array\n        address[] memory oracleAddresses = new address[](arrayLength);\n\n        for (uint256 i = 0; i < arrayLength; i++) {\n            // Get oracle address for token address at index i\n            oracleAddresses[i] = getOracleAddressByToken(\n                _tokenAddresses[i]\n            );\n        }\n\n        return oracleAddresses;       \n    }\n\n    /**\n     * Return oracle address associated with a passed token address \n     *\n     * @param  _tokenAddress    Address of token\n     * @return address          Address of oracle associated with token\n     */\n    function getOracleAddressByToken(\n        address _tokenAddress\n    )\n        public\n        view\n        returns (address)\n    {\n        // Require token address to have matching oracle address\n        require(\n            oracleWhiteList[_tokenAddress] != address(0),\n            \"OracleWhiteList.getOracleAddressFromToken: No Oracle for that address.\"\n        );\n\n        // Return oracle address associated with token address\n        return oracleWhiteList[_tokenAddress];       \n    }\n\n    /**\n     * Verifies an array of addresses against the whitelist\n     *\n     * @param  _tokenAddresses    Array of token addresses to check if oracle exists\n     * @return bool               Whether all addresses in the list are whitelsited\n     */\n    function areValidAddresses(\n        address[] calldata _tokenAddresses\n    )\n        external\n        view\n        returns (bool)\n    {\n        // Get length of passed array\n        uint256 arrayLength = _tokenAddresses.length;\n\n        // Check that passed array length is greater than 0\n        require(\n            arrayLength > 0,\n            \"OracleWhiteList.areValidAddresses: Array length must be greater than 0.\"\n        );\n\n        for (uint256 i = 0; i < arrayLength; i++) {\n            // Return false if token address doesn't have matching oracle address\n            if (oracleWhiteList[_tokenAddresses[i]] == address(0)) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n\n\n}",
    "sourcePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/OracleWhiteList.sol",
    "ast": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/OracleWhiteList.sol",
        "exportedSymbols": {
            "OracleWhiteList": [
                2129
            ]
        },
        "id": 2130,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1790,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:9"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 1792,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 3199,
                "src": "622:80:9",
                "symbolAliases": [
                    {
                        "foreign": 1791,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
                "file": "./TimeLockUpgradeV2.sol",
                "id": 1794,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 2424,
                "src": "704:60:9",
                "symbolAliases": [
                    {
                        "foreign": 1793,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 1796,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 700,
                "src": "765:60:9",
                "symbolAliases": [
                    {
                        "foreign": 1795,
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
                            "id": 1797,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "997:7:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 1798,
                        "nodeType": "InheritanceSpecifier",
                        "src": "997:7:9"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1799,
                            "name": "TimeLockUpgradeV2",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2423,
                            "src": "1010:17:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgradeV2_$2423",
                                "typeString": "contract TimeLockUpgradeV2"
                            }
                        },
                        "id": 1800,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1010:17:9"
                    }
                ],
                "contractDependencies": [
                    2423,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title OracleWhiteList\n@author Set Protocol\n * WhiteList that matches whitelisted tokens to their on chain price oracle",
                "fullyImplemented": true,
                "id": 2129,
                "linearizedBaseContracts": [
                    2129,
                    2423,
                    3198
                ],
                "name": "OracleWhiteList",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 1804,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1801,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "1040:17:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1034:38:9",
                        "typeName": {
                            "baseType": {
                                "id": 1802,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1062:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1803,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1062:9:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 1807,
                        "name": "addresses",
                        "nodeType": "VariableDeclaration",
                        "scope": 2129,
                        "src": "1131:26:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 1805,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1131:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1806,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1131:9:9",
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
                        "id": 1811,
                        "name": "oracleWhiteList",
                        "nodeType": "VariableDeclaration",
                        "scope": 2129,
                        "src": "1163:50:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                            "typeString": "mapping(address => address)"
                        },
                        "typeName": {
                            "id": 1810,
                            "keyType": {
                                "id": 1808,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1171:7:9",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1163:27:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                "typeString": "mapping(address => address)"
                            },
                            "valueType": {
                                "id": 1809,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1182:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1817,
                        "name": "TokenOraclePairAdded",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1813,
                                    "indexed": false,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1817,
                                    "src": "1300:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1812,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1300:7:9",
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
                                    "id": 1815,
                                    "indexed": false,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1817,
                                    "src": "1331:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1814,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:9",
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
                            "src": "1290:69:9"
                        },
                        "src": "1264:96:9"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1823,
                        "name": "TokenOraclePairRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1822,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1819,
                                    "indexed": false,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1823,
                                    "src": "1404:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1818,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1404:7:9",
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
                                    "id": 1821,
                                    "indexed": false,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1823,
                                    "src": "1435:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1820,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1435:7:9",
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
                            "src": "1394:69:9"
                        },
                        "src": "1366:98:9"
                    },
                    {
                        "body": {
                            "id": 1874,
                            "nodeType": "Block",
                            "src": "2200:521:9",
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
                                                "id": 1837,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1833,
                                                        "name": "_initialTokenAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1826,
                                                        "src": "2231:22:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1834,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2231:29:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1835,
                                                        "name": "_initialOracleAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1829,
                                                        "src": "2264:23:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1836,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2264:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2231:63:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e636f6e7374727563746f723a20546f6b656e20616e64204f7261636c65206172726179206c656e67746873206d757374206d617463682e",
                                                "id": 1838,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2308:73:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a7c5343bf8164ae8b129d217359985d05a6ca3d166aafbaf8745e0485a5c8fe9",
                                                    "typeString": "literal_string \"OracleWhiteList.constructor: Token and Oracle array lengths must match.\""
                                                },
                                                "value": "OracleWhiteList.constructor: Token and Oracle array lengths must match."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_a7c5343bf8164ae8b129d217359985d05a6ca3d166aafbaf8745e0485a5c8fe9",
                                                    "typeString": "literal_string \"OracleWhiteList.constructor: Token and Oracle array lengths must match.\""
                                                }
                                            ],
                                            "id": 1832,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2210:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1839,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2210:181:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1840,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2210:181:9"
                                },
                                {
                                    "body": {
                                        "id": 1872,
                                        "nodeType": "Block",
                                        "src": "2512:203:9",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    1853
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 1853,
                                                        "name": "tokenAddressToAdd",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 1872,
                                                        "src": "2526:25:9",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "typeName": {
                                                            "id": 1852,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2526:7:9",
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
                                                "id": 1857,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1854,
                                                        "name": "_initialTokenAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1826,
                                                        "src": "2554:22:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1856,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1855,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1842,
                                                        "src": "2577:1:9",
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
                                                    "src": "2554:25:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2526:53:9"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 1861,
                                                            "name": "tokenAddressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1853,
                                                            "src": "2609:17:9",
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
                                                            "id": 1858,
                                                            "name": "addresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1807,
                                                            "src": "2594:9:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                "typeString": "address[] storage ref"
                                                            }
                                                        },
                                                        "id": 1860,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "push",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2594:14:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 1862,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2594:33:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1863,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2594:33:9"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1870,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1864,
                                                            "name": "oracleWhiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1811,
                                                            "src": "2641:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                                "typeString": "mapping(address => address)"
                                                            }
                                                        },
                                                        "id": 1866,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1865,
                                                            "name": "tokenAddressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1853,
                                                            "src": "2657:17:9",
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
                                                        "src": "2641:34:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1867,
                                                            "name": "_initialOracleAddresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1829,
                                                            "src": "2678:23:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                "typeString": "address[] memory"
                                                            }
                                                        },
                                                        "id": 1869,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1868,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1842,
                                                            "src": "2702:1:9",
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
                                                        "src": "2678:26:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "2641:63:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 1871,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2641:63:9"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 1848,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 1845,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1842,
                                            "src": "2472:1:9",
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
                                                "id": 1846,
                                                "name": "_initialTokenAddresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1826,
                                                "src": "2476:22:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            "id": 1847,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2476:29:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2472:33:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1873,
                                    "initializationExpression": {
                                        "assignments": [
                                            1842
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 1842,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 1873,
                                                "src": "2457:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 1841,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2457:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 1844,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1843,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2469:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2457:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 1850,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2507:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 1849,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1842,
                                                "src": "2507:1:9",
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
                                        "id": 1851,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2507:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2452:263:9"
                                }
                            ]
                        },
                        "documentation": "Constructor function for OracleWhiteList\n     * Allow initial addresses to be passed in so a separate transaction is not required for each.\nEach token address passed is matched with a corresponding oracle address at the same index.\nThe _initialTokenAddresses and _initialOracleAddresses arrays must be equal length.\n     * @param _initialTokenAddresses        Starting set of toke addresses to whitelist\n@param _initialOracleAddresses       Starting set of oracle addresses to whitelist",
                        "id": 1875,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1830,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1826,
                                    "name": "_initialTokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1875,
                                    "src": "2085:39:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1824,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2085:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1825,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2085:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1829,
                                    "name": "_initialOracleAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1875,
                                    "src": "2134:40:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1827,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2134:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1828,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2134:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2075:105:9"
                        },
                        "returnParameters": {
                            "id": 1831,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2200:0:9"
                        },
                        "scope": 2129,
                        "src": "2064:657:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1914,
                            "nodeType": "Block",
                            "src": "3164:345:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1893,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1887,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "3195:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 1889,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1888,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1877,
                                                        "src": "3211:13:9",
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
                                                    "src": "3195:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1891,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3237:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1890,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3229:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1892,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3229:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "3195:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e616464546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c65207061697220616c7265616479206578697374732e",
                                                "id": 1894,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3253:75:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9ada840e9df700be6a468843552ce201061a4407e29813f166af55712e39faa3",
                                                    "typeString": "literal_string \"OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists.\""
                                                },
                                                "value": "OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9ada840e9df700be6a468843552ce201061a4407e29813f166af55712e39faa3",
                                                    "typeString": "literal_string \"OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists.\""
                                                }
                                            ],
                                            "id": 1886,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3174:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1895,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3174:164:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1896,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3174:164:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1900,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3364:13:9",
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
                                                "id": 1897,
                                                "name": "addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1807,
                                                "src": "3349:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 1899,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3349:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 1901,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3349:29:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1902,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3349:29:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1903,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "3388:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1905,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1904,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3404:13:9",
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
                                            "src": "3388:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1906,
                                            "name": "_oracleAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1879,
                                            "src": "3421:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3388:47:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1908,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3388:47:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1910,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3472:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1911,
                                                "name": "_oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1879,
                                                "src": "3487:14:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1909,
                                            "name": "TokenOraclePairAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1817,
                                            "src": "3451:20:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1912,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3451:51:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1913,
                                    "nodeType": "EmitStatement",
                                    "src": "3446:56:9"
                                }
                            ]
                        },
                        "documentation": "Add an address to the whitelist\n     * @param _tokenAddress    Token address to add to the whitelist\n@param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress",
                        "id": 1915,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1882,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1881,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3126:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3126:9:9"
                            },
                            {
                                "arguments": null,
                                "id": 1884,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1883,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "3144:15:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3144:15:9"
                            }
                        ],
                        "name": "addTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1880,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1877,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "3041:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1876,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3041:7:9",
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
                                    "id": 1879,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "3072:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1878,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3072:7:9",
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
                            "src": "3031:69:9"
                        },
                        "returnParameters": {
                            "id": 1885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3164:0:9"
                        },
                        "scope": 2129,
                        "src": "3004:505:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1957,
                            "nodeType": "Block",
                            "src": "3770:411:9",
                            "statements": [
                                {
                                    "assignments": [
                                        1923
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1923,
                                            "name": "oracleAddress",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1957,
                                            "src": "3780:21:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 1922,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3780:7:9",
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
                                    "id": 1927,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 1924,
                                            "name": "oracleWhiteList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1811,
                                            "src": "3804:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                "typeString": "mapping(address => address)"
                                            }
                                        },
                                        "id": 1926,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 1925,
                                            "name": "_tokenAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1917,
                                            "src": "3820:13:9",
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
                                        "src": "3804:30:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3780:54:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1933,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1929,
                                                    "name": "oracleAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1923,
                                                    "src": "3866:13:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1931,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3891:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1930,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3883:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1932,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3883:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "3866:27:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e72656d6f7665546f6b656e4f7261636c65506169723a20546f6b656e2041646472657373206973206e6f742063757272656e742077686974656c69737465642e",
                                                "id": 1934,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3907:82:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_40ce44712e722af196e8d6a26904fff2906d0de1419e2ba3817817c6264d2c4e",
                                                    "typeString": "literal_string \"OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted.\""
                                                },
                                                "value": "OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_40ce44712e722af196e8d6a26904fff2906d0de1419e2ba3817817c6264d2c4e",
                                                    "typeString": "literal_string \"OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted.\""
                                                }
                                            ],
                                            "id": 1928,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3845:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1935,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3845:154:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1936,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3845:154:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1942,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1937,
                                            "name": "addresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1807,
                                            "src": "4010:9:9",
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
                                                    "id": 1940,
                                                    "name": "_tokenAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1917,
                                                    "src": "4039:13:9",
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
                                                    "id": 1938,
                                                    "name": "addresses",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1807,
                                                    "src": "4022:9:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 1939,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "4022:16:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 1941,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4022:31:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "4010:43:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 1943,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4010:43:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1950,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1944,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "4063:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1946,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1945,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1917,
                                                "src": "4079:13:9",
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
                                            "src": "4063:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 1948,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4104:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    }
                                                ],
                                                "id": 1947,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4096:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 1949,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4096:10:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "4063:43:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1951,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4063:43:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1953,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1917,
                                                "src": "4145:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1954,
                                                "name": "oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1923,
                                                "src": "4160:13:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1952,
                                            "name": "TokenOraclePairRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1823,
                                            "src": "4122:22:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4122:52:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1956,
                                    "nodeType": "EmitStatement",
                                    "src": "4117:57:9"
                                }
                            ]
                        },
                        "documentation": "Remove a token oracle pair from the whitelist\n     * @param _tokenAddress    Token address to remove to the whitelist",
                        "id": 1958,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1920,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1919,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3756:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3756:9:9"
                            }
                        ],
                        "name": "removeTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1918,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1917,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1958,
                                    "src": "3703:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1916,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3703:7:9",
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
                            "src": "3693:37:9"
                        },
                        "returnParameters": {
                            "id": 1921,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3770:0:9"
                        },
                        "scope": 2129,
                        "src": "3663:518:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1991,
                            "nodeType": "Block",
                            "src": "4589:396:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1976,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1970,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "4620:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 1972,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1971,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1960,
                                                        "src": "4636:13:9",
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
                                                    "src": "4620:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1974,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "4662:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1973,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4654:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1975,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4654:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "4620:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e65646974546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c652070616972206d7573742065786973742e",
                                                "id": 1977,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4678:72:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_eb1db12f4e83976e7db2fec62a9e320c87aa46dfc018622b6a945b28bb27c3cb",
                                                    "typeString": "literal_string \"OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist.\""
                                                },
                                                "value": "OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_eb1db12f4e83976e7db2fec62a9e320c87aa46dfc018622b6a945b28bb27c3cb",
                                                    "typeString": "literal_string \"OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist.\""
                                                }
                                            ],
                                            "id": 1969,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "4599:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1978,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4599:161:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1979,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4599:161:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1984,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1980,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "4830:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1982,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1981,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "4846:13:9",
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
                                            "src": "4830:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1983,
                                            "name": "_oracleAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1962,
                                            "src": "4863:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4830:47:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1985,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4830:47:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1987,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "4927:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1988,
                                                "name": "_oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1962,
                                                "src": "4954:14:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1986,
                                            "name": "TokenOraclePairAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1817,
                                            "src": "4893:20:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1989,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4893:85:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1990,
                                    "nodeType": "EmitStatement",
                                    "src": "4888:90:9"
                                }
                            ]
                        },
                        "documentation": "Edit oracle address associated with a token address\n     * @param _tokenAddress    Token address to add to the whitelist\n@param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress",
                        "id": 1992,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1965,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1964,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "4551:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4551:9:9"
                            },
                            {
                                "arguments": null,
                                "id": 1967,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1966,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "4569:15:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4569:15:9"
                            }
                        ],
                        "name": "editTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1960,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "4466:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1959,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4466:7:9",
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
                                    "id": 1962,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "4497:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1961,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4497:7:9",
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
                            "src": "4456:69:9"
                        },
                        "returnParameters": {
                            "id": 1968,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4589:0:9"
                        },
                        "scope": 2129,
                        "src": "4428:557:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2000,
                            "nodeType": "Block",
                            "src": "5207:33:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1998,
                                        "name": "addresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1807,
                                        "src": "5224:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1997,
                                    "id": 1999,
                                    "nodeType": "Return",
                                    "src": "5217:16:9"
                                }
                            ]
                        },
                        "documentation": "Return array of all whitelisted addresses\n     * @return address[]      Array of addresses",
                        "id": 2001,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1993,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5135:2:9"
                        },
                        "returnParameters": {
                            "id": 1997,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1996,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2001,
                                    "src": "5185:16:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1994,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5185:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1995,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5185:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5184:18:9"
                        },
                        "scope": 2129,
                        "src": "5112:128:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2056,
                            "nodeType": "Block",
                            "src": "5646:703:9",
                            "statements": [
                                {
                                    "assignments": [
                                        2011
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2011,
                                            "name": "arrayLength",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2056,
                                            "src": "5694:19:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2010,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5694:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2014,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2012,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2004,
                                            "src": "5716:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 2013,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "5716:22:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5694:44:9"
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
                                                "id": 2018,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2016,
                                                    "name": "arrayLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2011,
                                                    "src": "5830:11:9",
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
                                                    "id": 2017,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5844:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "5830:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e6765744f7261636c654164647265737365734279546f6b656e3a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e",
                                                "id": 2019,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5859:81:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a02fdcede3f353615082a108c258e30a0af243f842e563e3c848bec09623b8cb",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0.\""
                                                },
                                                "value": "OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_a02fdcede3f353615082a108c258e30a0af243f842e563e3c848bec09623b8cb",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0.\""
                                                }
                                            ],
                                            "id": 2015,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "5809:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2020,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5809:141:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2021,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5809:141:9"
                                },
                                {
                                    "assignments": [
                                        2025
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2025,
                                            "name": "oracleAddresses",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2056,
                                            "src": "6007:32:9",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2023,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6007:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2024,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "6007:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2031,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2029,
                                                "name": "arrayLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2011,
                                                "src": "6056:11:9",
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
                                            "id": 2028,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "6042:13:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (address[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2026,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6046:7:9",
                                                    "stateMutability": "nonpayable",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2027,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "6046:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            }
                                        },
                                        "id": 2030,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6042:26:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6007:61:9"
                                },
                                {
                                    "body": {
                                        "id": 2052,
                                        "nodeType": "Block",
                                        "src": "6121:182:9",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2050,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2042,
                                                            "name": "oracleAddresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2025,
                                                            "src": "6198:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                "typeString": "address[] memory"
                                                            }
                                                        },
                                                        "id": 2044,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2043,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2033,
                                                            "src": "6214:1:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "6198:18:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 2046,
                                                                    "name": "_tokenAddresses",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2004,
                                                                    "src": "6260:15:9",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                        "typeString": "address[] calldata"
                                                                    }
                                                                },
                                                                "id": 2048,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 2047,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2033,
                                                                    "src": "6276:1:9",
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
                                                                "src": "6260:18:9",
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
                                                            "id": 2045,
                                                            "name": "getOracleAddressByToken",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2080,
                                                            "src": "6219:23:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_address_$",
                                                                "typeString": "function (address) view returns (address)"
                                                            }
                                                        },
                                                        "id": 2049,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6219:73:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "6198:94:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2051,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6198:94:9"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2038,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2036,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2033,
                                            "src": "6099:1:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 2037,
                                            "name": "arrayLength",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2011,
                                            "src": "6103:11:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6099:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2053,
                                    "initializationExpression": {
                                        "assignments": [
                                            2033
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2033,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2053,
                                                "src": "6084:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2032,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6084:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2035,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2034,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6096:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6084:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2040,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "6116:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2039,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2033,
                                                "src": "6116:1:9",
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
                                        "id": 2041,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6116:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "6079:224:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2054,
                                        "name": "oracleAddresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2025,
                                        "src": "6320:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 2009,
                                    "id": 2055,
                                    "nodeType": "Return",
                                    "src": "6313:22:9"
                                }
                            ]
                        },
                        "documentation": "Return array of oracle addresses based on passed in token addresses \n     * @param  _tokenAddresses    Array of token addresses to get oracle addresses for\n@return address[]          Array of oracle addresses",
                        "id": 2057,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getOracleAddressesByToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2005,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2004,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2057,
                                    "src": "5536:34:9",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2002,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5536:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2003,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5536:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5526:50:9"
                        },
                        "returnParameters": {
                            "id": 2009,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2008,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2057,
                                    "src": "5624:16:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2006,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5624:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2007,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5624:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5623:18:9"
                        },
                        "scope": 2129,
                        "src": "5492:857:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2079,
                            "nodeType": "Block",
                            "src": "6696:361:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2071,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2065,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "6792:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 2067,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2066,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2059,
                                                        "src": "6808:13:9",
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
                                                    "src": "6792:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2069,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6834:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 2068,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "6826:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2070,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6826:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "6792:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e6765744f7261636c654164647265737346726f6d546f6b656e3a204e6f204f7261636c6520666f72207468617420616464726573732e",
                                                "id": 2072,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6850:72:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_59cc12d2d8cdd1d4ed6c8fddc34d0f60ffc61ae56508d878839df11d18c8b12d",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressFromToken: No Oracle for that address.\""
                                                },
                                                "value": "OracleWhiteList.getOracleAddressFromToken: No Oracle for that address."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_59cc12d2d8cdd1d4ed6c8fddc34d0f60ffc61ae56508d878839df11d18c8b12d",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressFromToken: No Oracle for that address.\""
                                                }
                                            ],
                                            "id": 2064,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "6771:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2073,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6771:161:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2074,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6771:161:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 2075,
                                            "name": "oracleWhiteList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1811,
                                            "src": "7013:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                "typeString": "mapping(address => address)"
                                            }
                                        },
                                        "id": 2077,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 2076,
                                            "name": "_tokenAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2059,
                                            "src": "7029:13:9",
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
                                        "src": "7013:30:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 2063,
                                    "id": 2078,
                                    "nodeType": "Return",
                                    "src": "7006:37:9"
                                }
                            ]
                        },
                        "documentation": "Return oracle address associated with a passed token address \n     * @param  _tokenAddress    Address of token\n@return address          Address of oracle associated with token",
                        "id": 2080,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getOracleAddressByToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2060,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2059,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2080,
                                    "src": "6610:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2058,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6610:7:9",
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
                            "src": "6600:37:9"
                        },
                        "returnParameters": {
                            "id": 2063,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2062,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2080,
                                    "src": "6683:7:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2061,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6683:7:9",
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
                            "src": "6682:9:9"
                        },
                        "scope": 2129,
                        "src": "6568:489:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2127,
                            "nodeType": "Block",
                            "src": "7449:583:9",
                            "statements": [
                                {
                                    "assignments": [
                                        2089
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2089,
                                            "name": "arrayLength",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2127,
                                            "src": "7497:19:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2088,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7497:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2092,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2090,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2083,
                                            "src": "7519:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 2091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "7519:22:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7497:44:9"
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
                                                "id": 2096,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2094,
                                                    "name": "arrayLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2089,
                                                    "src": "7633:11:9",
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
                                                    "id": 2095,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "7647:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "7633:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e61726556616c69644164647265737365733a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e",
                                                "id": 2097,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7662:73:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_75a0fcb7b25d977366e421fd20f9aeee16d86600ef6d2340179acb9d331ef786",
                                                    "typeString": "literal_string \"OracleWhiteList.areValidAddresses: Array length must be greater than 0.\""
                                                },
                                                "value": "OracleWhiteList.areValidAddresses: Array length must be greater than 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_75a0fcb7b25d977366e421fd20f9aeee16d86600ef6d2340179acb9d331ef786",
                                                    "typeString": "literal_string \"OracleWhiteList.areValidAddresses: Array length must be greater than 0.\""
                                                }
                                            ],
                                            "id": 2093,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "7612:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2098,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7612:133:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2099,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7612:133:9"
                                },
                                {
                                    "body": {
                                        "id": 2123,
                                        "nodeType": "Block",
                                        "src": "7798:206:9",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 2118,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2110,
                                                            "name": "oracleWhiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1811,
                                                            "src": "7898:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                                "typeString": "mapping(address => address)"
                                                            }
                                                        },
                                                        "id": 2114,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2111,
                                                                "name": "_tokenAddresses",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2083,
                                                                "src": "7914:15:9",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                    "typeString": "address[] calldata"
                                                                }
                                                            },
                                                            "id": 2113,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2112,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2101,
                                                                "src": "7930:1:9",
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
                                                            "src": "7914:18:9",
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
                                                        "src": "7898:35:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "hexValue": "30",
                                                                "id": 2116,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7945:1:9",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                }
                                                            ],
                                                            "id": 2115,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "7937:7:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": "address"
                                                        },
                                                        "id": 2117,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7937:10:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "src": "7898:49:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 2122,
                                                "nodeType": "IfStatement",
                                                "src": "7894:100:9",
                                                "trueBody": {
                                                    "id": 2121,
                                                    "nodeType": "Block",
                                                    "src": "7949:45:9",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "hexValue": "66616c7365",
                                                                "id": 2119,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "bool",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7974:5:9",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                "value": "false"
                                                            },
                                                            "functionReturnParameters": 2087,
                                                            "id": 2120,
                                                            "nodeType": "Return",
                                                            "src": "7967:12:9"
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
                                        "id": 2106,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2104,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2101,
                                            "src": "7776:1:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 2105,
                                            "name": "arrayLength",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2089,
                                            "src": "7780:11:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7776:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2124,
                                    "initializationExpression": {
                                        "assignments": [
                                            2101
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2101,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2124,
                                                "src": "7761:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2100,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "7761:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2103,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7773:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "7761:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2108,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "7793:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2107,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2101,
                                                "src": "7793:1:9",
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
                                        "id": 2109,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7793:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "7756:248:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 2125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "8021:4:9",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 2087,
                                    "id": 2126,
                                    "nodeType": "Return",
                                    "src": "8014:11:9"
                                }
                            ]
                        },
                        "documentation": "Verifies an array of addresses against the whitelist\n     * @param  _tokenAddresses    Array of token addresses to check if oracle exists\n@return bool               Whether all addresses in the list are whitelsited",
                        "id": 2128,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "areValidAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2084,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2083,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2128,
                                    "src": "7351:34:9",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2081,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7351:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2082,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7351:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7341:50:9"
                        },
                        "returnParameters": {
                            "id": 2087,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2086,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2128,
                                    "src": "7439:4:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2085,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7439:4:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7438:6:9"
                        },
                        "scope": 2129,
                        "src": "7315:717:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2130,
                "src": "965:7071:9"
            }
        ],
        "src": "597:7439:9"
    },
    "legacyAST": {
        "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/OracleWhiteList.sol",
        "exportedSymbols": {
            "OracleWhiteList": [
                2129
            ]
        },
        "id": 2130,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1790,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:9"
            },
            {
                "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                "id": 1792,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 3199,
                "src": "622:80:9",
                "symbolAliases": [
                    {
                        "foreign": 1791,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/TimeLockUpgradeV2.sol",
                "file": "./TimeLockUpgradeV2.sol",
                "id": 1794,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 2424,
                "src": "704:60:9",
                "symbolAliases": [
                    {
                        "foreign": 1793,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/brianweickmann/Documents/Source/set-protocol-contract-utils/contracts/lib/AddressArrayUtils.sol",
                "file": "./AddressArrayUtils.sol",
                "id": 1796,
                "nodeType": "ImportDirective",
                "scope": 2130,
                "sourceUnit": 700,
                "src": "765:60:9",
                "symbolAliases": [
                    {
                        "foreign": 1795,
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
                            "id": 1797,
                            "name": "Ownable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3198,
                            "src": "997:7:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Ownable_$3198",
                                "typeString": "contract Ownable"
                            }
                        },
                        "id": 1798,
                        "nodeType": "InheritanceSpecifier",
                        "src": "997:7:9"
                    },
                    {
                        "arguments": null,
                        "baseName": {
                            "contractScope": null,
                            "id": 1799,
                            "name": "TimeLockUpgradeV2",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 2423,
                            "src": "1010:17:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TimeLockUpgradeV2_$2423",
                                "typeString": "contract TimeLockUpgradeV2"
                            }
                        },
                        "id": 1800,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1010:17:9"
                    }
                ],
                "contractDependencies": [
                    2423,
                    3198
                ],
                "contractKind": "contract",
                "documentation": "@title OracleWhiteList\n@author Set Protocol\n * WhiteList that matches whitelisted tokens to their on chain price oracle",
                "fullyImplemented": true,
                "id": 2129,
                "linearizedBaseContracts": [
                    2129,
                    2423,
                    3198
                ],
                "name": "OracleWhiteList",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 1804,
                        "libraryName": {
                            "contractScope": null,
                            "id": 1801,
                            "name": "AddressArrayUtils",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 699,
                            "src": "1040:17:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AddressArrayUtils_$699",
                                "typeString": "library AddressArrayUtils"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1034:38:9",
                        "typeName": {
                            "baseType": {
                                "id": 1802,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1062:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1803,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1062:9:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 1807,
                        "name": "addresses",
                        "nodeType": "VariableDeclaration",
                        "scope": 2129,
                        "src": "1131:26:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 1805,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1131:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 1806,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "1131:9:9",
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
                        "id": 1811,
                        "name": "oracleWhiteList",
                        "nodeType": "VariableDeclaration",
                        "scope": 2129,
                        "src": "1163:50:9",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                            "typeString": "mapping(address => address)"
                        },
                        "typeName": {
                            "id": 1810,
                            "keyType": {
                                "id": 1808,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1171:7:9",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1163:27:9",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                "typeString": "mapping(address => address)"
                            },
                            "valueType": {
                                "id": 1809,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1182:7:9",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1817,
                        "name": "TokenOraclePairAdded",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1813,
                                    "indexed": false,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1817,
                                    "src": "1300:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1812,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1300:7:9",
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
                                    "id": 1815,
                                    "indexed": false,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1817,
                                    "src": "1331:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1814,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:9",
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
                            "src": "1290:69:9"
                        },
                        "src": "1264:96:9"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 1823,
                        "name": "TokenOraclePairRemoved",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 1822,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1819,
                                    "indexed": false,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1823,
                                    "src": "1404:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1818,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1404:7:9",
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
                                    "id": 1821,
                                    "indexed": false,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1823,
                                    "src": "1435:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1820,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1435:7:9",
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
                            "src": "1394:69:9"
                        },
                        "src": "1366:98:9"
                    },
                    {
                        "body": {
                            "id": 1874,
                            "nodeType": "Block",
                            "src": "2200:521:9",
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
                                                "id": 1837,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1833,
                                                        "name": "_initialTokenAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1826,
                                                        "src": "2231:22:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1834,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2231:29:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 1835,
                                                        "name": "_initialOracleAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1829,
                                                        "src": "2264:23:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1836,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "2264:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2231:63:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e636f6e7374727563746f723a20546f6b656e20616e64204f7261636c65206172726179206c656e67746873206d757374206d617463682e",
                                                "id": 1838,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2308:73:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a7c5343bf8164ae8b129d217359985d05a6ca3d166aafbaf8745e0485a5c8fe9",
                                                    "typeString": "literal_string \"OracleWhiteList.constructor: Token and Oracle array lengths must match.\""
                                                },
                                                "value": "OracleWhiteList.constructor: Token and Oracle array lengths must match."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_a7c5343bf8164ae8b129d217359985d05a6ca3d166aafbaf8745e0485a5c8fe9",
                                                    "typeString": "literal_string \"OracleWhiteList.constructor: Token and Oracle array lengths must match.\""
                                                }
                                            ],
                                            "id": 1832,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "2210:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1839,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2210:181:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1840,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2210:181:9"
                                },
                                {
                                    "body": {
                                        "id": 1872,
                                        "nodeType": "Block",
                                        "src": "2512:203:9",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    1853
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 1853,
                                                        "name": "tokenAddressToAdd",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 1872,
                                                        "src": "2526:25:9",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "typeName": {
                                                            "id": 1852,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2526:7:9",
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
                                                "id": 1857,
                                                "initialValue": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1854,
                                                        "name": "_initialTokenAddresses",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1826,
                                                        "src": "2554:22:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                            "typeString": "address[] memory"
                                                        }
                                                    },
                                                    "id": 1856,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1855,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1842,
                                                        "src": "2577:1:9",
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
                                                    "src": "2554:25:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2526:53:9"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 1861,
                                                            "name": "tokenAddressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1853,
                                                            "src": "2609:17:9",
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
                                                            "id": 1858,
                                                            "name": "addresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1807,
                                                            "src": "2594:9:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                "typeString": "address[] storage ref"
                                                            }
                                                        },
                                                        "id": 1860,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "push",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2594:14:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 1862,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2594:33:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 1863,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2594:33:9"
                                            },
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 1870,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1864,
                                                            "name": "oracleWhiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1811,
                                                            "src": "2641:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                                "typeString": "mapping(address => address)"
                                                            }
                                                        },
                                                        "id": 1866,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1865,
                                                            "name": "tokenAddressToAdd",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1853,
                                                            "src": "2657:17:9",
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
                                                        "src": "2641:34:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1867,
                                                            "name": "_initialOracleAddresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1829,
                                                            "src": "2678:23:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                "typeString": "address[] memory"
                                                            }
                                                        },
                                                        "id": 1869,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 1868,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1842,
                                                            "src": "2702:1:9",
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
                                                        "src": "2678:26:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "2641:63:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 1871,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2641:63:9"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 1848,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 1845,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1842,
                                            "src": "2472:1:9",
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
                                                "id": 1846,
                                                "name": "_initialTokenAddresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1826,
                                                "src": "2476:22:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                    "typeString": "address[] memory"
                                                }
                                            },
                                            "id": 1847,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2476:29:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2472:33:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 1873,
                                    "initializationExpression": {
                                        "assignments": [
                                            1842
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 1842,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 1873,
                                                "src": "2457:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 1841,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2457:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 1844,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 1843,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2469:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2457:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 1850,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "2507:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 1849,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1842,
                                                "src": "2507:1:9",
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
                                        "id": 1851,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2507:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2452:263:9"
                                }
                            ]
                        },
                        "documentation": "Constructor function for OracleWhiteList\n     * Allow initial addresses to be passed in so a separate transaction is not required for each.\nEach token address passed is matched with a corresponding oracle address at the same index.\nThe _initialTokenAddresses and _initialOracleAddresses arrays must be equal length.\n     * @param _initialTokenAddresses        Starting set of toke addresses to whitelist\n@param _initialOracleAddresses       Starting set of oracle addresses to whitelist",
                        "id": 1875,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1830,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1826,
                                    "name": "_initialTokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1875,
                                    "src": "2085:39:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1824,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2085:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1825,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2085:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 1829,
                                    "name": "_initialOracleAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1875,
                                    "src": "2134:40:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1827,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2134:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1828,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2134:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2075:105:9"
                        },
                        "returnParameters": {
                            "id": 1831,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2200:0:9"
                        },
                        "scope": 2129,
                        "src": "2064:657:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 1914,
                            "nodeType": "Block",
                            "src": "3164:345:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1893,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1887,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "3195:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 1889,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1888,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1877,
                                                        "src": "3211:13:9",
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
                                                    "src": "3195:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1891,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3237:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1890,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3229:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1892,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3229:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "3195:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e616464546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c65207061697220616c7265616479206578697374732e",
                                                "id": 1894,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3253:75:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9ada840e9df700be6a468843552ce201061a4407e29813f166af55712e39faa3",
                                                    "typeString": "literal_string \"OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists.\""
                                                },
                                                "value": "OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9ada840e9df700be6a468843552ce201061a4407e29813f166af55712e39faa3",
                                                    "typeString": "literal_string \"OracleWhiteList.addTokenOraclePair: Token and Oracle pair already exists.\""
                                                }
                                            ],
                                            "id": 1886,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3174:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1895,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3174:164:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1896,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3174:164:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1900,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3364:13:9",
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
                                                "id": 1897,
                                                "name": "addresses",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1807,
                                                "src": "3349:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 1899,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3349:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) returns (uint256)"
                                            }
                                        },
                                        "id": 1901,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3349:29:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 1902,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3349:29:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1903,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "3388:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1905,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1904,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3404:13:9",
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
                                            "src": "3388:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1906,
                                            "name": "_oracleAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1879,
                                            "src": "3421:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3388:47:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1908,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3388:47:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1910,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1877,
                                                "src": "3472:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1911,
                                                "name": "_oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1879,
                                                "src": "3487:14:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1909,
                                            "name": "TokenOraclePairAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1817,
                                            "src": "3451:20:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1912,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3451:51:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1913,
                                    "nodeType": "EmitStatement",
                                    "src": "3446:56:9"
                                }
                            ]
                        },
                        "documentation": "Add an address to the whitelist\n     * @param _tokenAddress    Token address to add to the whitelist\n@param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress",
                        "id": 1915,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1882,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1881,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3126:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3126:9:9"
                            },
                            {
                                "arguments": null,
                                "id": 1884,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1883,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "3144:15:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3144:15:9"
                            }
                        ],
                        "name": "addTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1880,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1877,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "3041:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1876,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3041:7:9",
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
                                    "id": 1879,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1915,
                                    "src": "3072:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1878,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3072:7:9",
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
                            "src": "3031:69:9"
                        },
                        "returnParameters": {
                            "id": 1885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3164:0:9"
                        },
                        "scope": 2129,
                        "src": "3004:505:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1957,
                            "nodeType": "Block",
                            "src": "3770:411:9",
                            "statements": [
                                {
                                    "assignments": [
                                        1923
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 1923,
                                            "name": "oracleAddress",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 1957,
                                            "src": "3780:21:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 1922,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3780:7:9",
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
                                    "id": 1927,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 1924,
                                            "name": "oracleWhiteList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1811,
                                            "src": "3804:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                "typeString": "mapping(address => address)"
                                            }
                                        },
                                        "id": 1926,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 1925,
                                            "name": "_tokenAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1917,
                                            "src": "3820:13:9",
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
                                        "src": "3804:30:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3780:54:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1933,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 1929,
                                                    "name": "oracleAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1923,
                                                    "src": "3866:13:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1931,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3891:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1930,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3883:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1932,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3883:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "3866:27:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e72656d6f7665546f6b656e4f7261636c65506169723a20546f6b656e2041646472657373206973206e6f742063757272656e742077686974656c69737465642e",
                                                "id": 1934,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3907:82:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_40ce44712e722af196e8d6a26904fff2906d0de1419e2ba3817817c6264d2c4e",
                                                    "typeString": "literal_string \"OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted.\""
                                                },
                                                "value": "OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_40ce44712e722af196e8d6a26904fff2906d0de1419e2ba3817817c6264d2c4e",
                                                    "typeString": "literal_string \"OracleWhiteList.removeTokenOraclePair: Token Address is not current whitelisted.\""
                                                }
                                            ],
                                            "id": 1928,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "3845:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1935,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3845:154:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1936,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3845:154:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1942,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 1937,
                                            "name": "addresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1807,
                                            "src": "4010:9:9",
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
                                                    "id": 1940,
                                                    "name": "_tokenAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1917,
                                                    "src": "4039:13:9",
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
                                                    "id": 1938,
                                                    "name": "addresses",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1807,
                                                    "src": "4022:9:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 1939,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "remove",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 591,
                                                "src": "4022:16:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_array$_t_address_$dyn_memory_ptr_$",
                                                    "typeString": "function (address[] memory,address) pure returns (address[] memory)"
                                                }
                                            },
                                            "id": 1941,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4022:31:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "src": "4010:43:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "id": 1943,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4010:43:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1950,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1944,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "4063:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1946,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1945,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1917,
                                                "src": "4079:13:9",
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
                                            "src": "4063:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 1948,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4104:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    }
                                                ],
                                                "id": 1947,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4096:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 1949,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4096:10:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "4063:43:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1951,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4063:43:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1953,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1917,
                                                "src": "4145:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1954,
                                                "name": "oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1923,
                                                "src": "4160:13:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1952,
                                            "name": "TokenOraclePairRemoved",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1823,
                                            "src": "4122:22:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4122:52:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1956,
                                    "nodeType": "EmitStatement",
                                    "src": "4117:57:9"
                                }
                            ]
                        },
                        "documentation": "Remove a token oracle pair from the whitelist\n     * @param _tokenAddress    Token address to remove to the whitelist",
                        "id": 1958,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1920,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1919,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "3756:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3756:9:9"
                            }
                        ],
                        "name": "removeTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1918,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1917,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1958,
                                    "src": "3703:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1916,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3703:7:9",
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
                            "src": "3693:37:9"
                        },
                        "returnParameters": {
                            "id": 1921,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3770:0:9"
                        },
                        "scope": 2129,
                        "src": "3663:518:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 1991,
                            "nodeType": "Block",
                            "src": "4589:396:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 1976,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1970,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "4620:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 1972,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 1971,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1960,
                                                        "src": "4636:13:9",
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
                                                    "src": "4620:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 1974,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "4662:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 1973,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4654:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 1975,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4654:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "4620:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e65646974546f6b656e4f7261636c65506169723a20546f6b656e20616e64204f7261636c652070616972206d7573742065786973742e",
                                                "id": 1977,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4678:72:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_eb1db12f4e83976e7db2fec62a9e320c87aa46dfc018622b6a945b28bb27c3cb",
                                                    "typeString": "literal_string \"OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist.\""
                                                },
                                                "value": "OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_eb1db12f4e83976e7db2fec62a9e320c87aa46dfc018622b6a945b28bb27c3cb",
                                                    "typeString": "literal_string \"OracleWhiteList.editTokenOraclePair: Token and Oracle pair must exist.\""
                                                }
                                            ],
                                            "id": 1969,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "4599:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 1978,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4599:161:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1979,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4599:161:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1984,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 1980,
                                                "name": "oracleWhiteList",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1811,
                                                "src": "4830:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                    "typeString": "mapping(address => address)"
                                                }
                                            },
                                            "id": 1982,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 1981,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "4846:13:9",
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
                                            "src": "4830:30:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 1983,
                                            "name": "_oracleAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1962,
                                            "src": "4863:14:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4830:47:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 1985,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4830:47:9"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 1987,
                                                "name": "_tokenAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1960,
                                                "src": "4927:13:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 1988,
                                                "name": "_oracleAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1962,
                                                "src": "4954:14:9",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 1986,
                                            "name": "TokenOraclePairAdded",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1817,
                                            "src": "4893:20:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 1989,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4893:85:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 1990,
                                    "nodeType": "EmitStatement",
                                    "src": "4888:90:9"
                                }
                            ]
                        },
                        "documentation": "Edit oracle address associated with a token address\n     * @param _tokenAddress    Token address to add to the whitelist\n@param _oracleAddress   Oracle address to add to the whitelist under _tokenAddress",
                        "id": 1992,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 1965,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1964,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3132,
                                    "src": "4551:9:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4551:9:9"
                            },
                            {
                                "arguments": null,
                                "id": 1967,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 1966,
                                    "name": "timeLockUpgrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2376,
                                    "src": "4569:15:9",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4569:15:9"
                            }
                        ],
                        "name": "editTokenOraclePair",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1960,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "4466:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1959,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4466:7:9",
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
                                    "id": 1962,
                                    "name": "_oracleAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "4497:22:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 1961,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4497:7:9",
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
                            "src": "4456:69:9"
                        },
                        "returnParameters": {
                            "id": 1968,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4589:0:9"
                        },
                        "scope": 2129,
                        "src": "4428:557:9",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2000,
                            "nodeType": "Block",
                            "src": "5207:33:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 1998,
                                        "name": "addresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1807,
                                        "src": "5224:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                            "typeString": "address[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 1997,
                                    "id": 1999,
                                    "nodeType": "Return",
                                    "src": "5217:16:9"
                                }
                            ]
                        },
                        "documentation": "Return array of all whitelisted addresses\n     * @return address[]      Array of addresses",
                        "id": 2001,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "validAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1993,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5135:2:9"
                        },
                        "returnParameters": {
                            "id": 1997,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1996,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2001,
                                    "src": "5185:16:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1994,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5185:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 1995,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5185:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5184:18:9"
                        },
                        "scope": 2129,
                        "src": "5112:128:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2056,
                            "nodeType": "Block",
                            "src": "5646:703:9",
                            "statements": [
                                {
                                    "assignments": [
                                        2011
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2011,
                                            "name": "arrayLength",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2056,
                                            "src": "5694:19:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2010,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5694:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2014,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2012,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2004,
                                            "src": "5716:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 2013,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "5716:22:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5694:44:9"
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
                                                "id": 2018,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2016,
                                                    "name": "arrayLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2011,
                                                    "src": "5830:11:9",
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
                                                    "id": 2017,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5844:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "5830:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e6765744f7261636c654164647265737365734279546f6b656e3a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e",
                                                "id": 2019,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5859:81:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a02fdcede3f353615082a108c258e30a0af243f842e563e3c848bec09623b8cb",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0.\""
                                                },
                                                "value": "OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_a02fdcede3f353615082a108c258e30a0af243f842e563e3c848bec09623b8cb",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressesByToken: Array length must be greater than 0.\""
                                                }
                                            ],
                                            "id": 2015,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "5809:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2020,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5809:141:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2021,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5809:141:9"
                                },
                                {
                                    "assignments": [
                                        2025
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2025,
                                            "name": "oracleAddresses",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2056,
                                            "src": "6007:32:9",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2023,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6007:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2024,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "6007:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2031,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2029,
                                                "name": "arrayLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2011,
                                                "src": "6056:11:9",
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
                                            "id": 2028,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "6042:13:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                                                "typeString": "function (uint256) pure returns (address[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 2026,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6046:7:9",
                                                    "stateMutability": "nonpayable",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2027,
                                                "length": null,
                                                "nodeType": "ArrayTypeName",
                                                "src": "6046:9:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                                    "typeString": "address[]"
                                                }
                                            }
                                        },
                                        "id": 2030,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6042:26:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6007:61:9"
                                },
                                {
                                    "body": {
                                        "id": 2052,
                                        "nodeType": "Block",
                                        "src": "6121:182:9",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2050,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2042,
                                                            "name": "oracleAddresses",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2025,
                                                            "src": "6198:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                "typeString": "address[] memory"
                                                            }
                                                        },
                                                        "id": 2044,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2043,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2033,
                                                            "src": "6214:1:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "6198:18:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "baseExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 2046,
                                                                    "name": "_tokenAddresses",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2004,
                                                                    "src": "6260:15:9",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                        "typeString": "address[] calldata"
                                                                    }
                                                                },
                                                                "id": 2048,
                                                                "indexExpression": {
                                                                    "argumentTypes": null,
                                                                    "id": 2047,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 2033,
                                                                    "src": "6276:1:9",
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
                                                                "src": "6260:18:9",
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
                                                            "id": 2045,
                                                            "name": "getOracleAddressByToken",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2080,
                                                            "src": "6219:23:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_address_$",
                                                                "typeString": "function (address) view returns (address)"
                                                            }
                                                        },
                                                        "id": 2049,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6219:73:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "6198:94:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 2051,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6198:94:9"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 2038,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2036,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2033,
                                            "src": "6099:1:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 2037,
                                            "name": "arrayLength",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2011,
                                            "src": "6103:11:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6099:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2053,
                                    "initializationExpression": {
                                        "assignments": [
                                            2033
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2033,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2053,
                                                "src": "6084:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2032,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6084:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2035,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2034,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6096:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6084:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2040,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "6116:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2039,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2033,
                                                "src": "6116:1:9",
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
                                        "id": 2041,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6116:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "6079:224:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2054,
                                        "name": "oracleAddresses",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2025,
                                        "src": "6320:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 2009,
                                    "id": 2055,
                                    "nodeType": "Return",
                                    "src": "6313:22:9"
                                }
                            ]
                        },
                        "documentation": "Return array of oracle addresses based on passed in token addresses \n     * @param  _tokenAddresses    Array of token addresses to get oracle addresses for\n@return address[]          Array of oracle addresses",
                        "id": 2057,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getOracleAddressesByToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2005,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2004,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2057,
                                    "src": "5536:34:9",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2002,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5536:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2003,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5536:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5526:50:9"
                        },
                        "returnParameters": {
                            "id": 2009,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2008,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2057,
                                    "src": "5624:16:9",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2006,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5624:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2007,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5624:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5623:18:9"
                        },
                        "scope": 2129,
                        "src": "5492:857:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 2079,
                            "nodeType": "Block",
                            "src": "6696:361:9",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2071,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2065,
                                                        "name": "oracleWhiteList",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1811,
                                                        "src": "6792:15:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                            "typeString": "mapping(address => address)"
                                                        }
                                                    },
                                                    "id": 2067,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2066,
                                                        "name": "_tokenAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2059,
                                                        "src": "6808:13:9",
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
                                                    "src": "6792:30:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2069,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6834:1:9",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 2068,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "6826:7:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2070,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6826:10:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "6792:44:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e6765744f7261636c654164647265737346726f6d546f6b656e3a204e6f204f7261636c6520666f72207468617420616464726573732e",
                                                "id": 2072,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6850:72:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_59cc12d2d8cdd1d4ed6c8fddc34d0f60ffc61ae56508d878839df11d18c8b12d",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressFromToken: No Oracle for that address.\""
                                                },
                                                "value": "OracleWhiteList.getOracleAddressFromToken: No Oracle for that address."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_59cc12d2d8cdd1d4ed6c8fddc34d0f60ffc61ae56508d878839df11d18c8b12d",
                                                    "typeString": "literal_string \"OracleWhiteList.getOracleAddressFromToken: No Oracle for that address.\""
                                                }
                                            ],
                                            "id": 2064,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "6771:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2073,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6771:161:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2074,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6771:161:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 2075,
                                            "name": "oracleWhiteList",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1811,
                                            "src": "7013:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                "typeString": "mapping(address => address)"
                                            }
                                        },
                                        "id": 2077,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 2076,
                                            "name": "_tokenAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2059,
                                            "src": "7029:13:9",
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
                                        "src": "7013:30:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 2063,
                                    "id": 2078,
                                    "nodeType": "Return",
                                    "src": "7006:37:9"
                                }
                            ]
                        },
                        "documentation": "Return oracle address associated with a passed token address \n     * @param  _tokenAddress    Address of token\n@return address          Address of oracle associated with token",
                        "id": 2080,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getOracleAddressByToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2060,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2059,
                                    "name": "_tokenAddress",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2080,
                                    "src": "6610:21:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2058,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6610:7:9",
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
                            "src": "6600:37:9"
                        },
                        "returnParameters": {
                            "id": 2063,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2062,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2080,
                                    "src": "6683:7:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2061,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6683:7:9",
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
                            "src": "6682:9:9"
                        },
                        "scope": 2129,
                        "src": "6568:489:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2127,
                            "nodeType": "Block",
                            "src": "7449:583:9",
                            "statements": [
                                {
                                    "assignments": [
                                        2089
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2089,
                                            "name": "arrayLength",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2127,
                                            "src": "7497:19:9",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 2088,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7497:7:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2092,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2090,
                                            "name": "_tokenAddresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2083,
                                            "src": "7519:15:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                "typeString": "address[] calldata"
                                            }
                                        },
                                        "id": 2091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "7519:22:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7497:44:9"
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
                                                "id": 2096,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2094,
                                                    "name": "arrayLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2089,
                                                    "src": "7633:11:9",
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
                                                    "id": 2095,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "7647:1:9",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "7633:15:9",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "hexValue": "4f7261636c6557686974654c6973742e61726556616c69644164647265737365733a204172726179206c656e677468206d7573742062652067726561746572207468616e20302e",
                                                "id": 2097,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7662:73:9",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_75a0fcb7b25d977366e421fd20f9aeee16d86600ef6d2340179acb9d331ef786",
                                                    "typeString": "literal_string \"OracleWhiteList.areValidAddresses: Array length must be greater than 0.\""
                                                },
                                                "value": "OracleWhiteList.areValidAddresses: Array length must be greater than 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_75a0fcb7b25d977366e421fd20f9aeee16d86600ef6d2340179acb9d331ef786",
                                                    "typeString": "literal_string \"OracleWhiteList.areValidAddresses: Array length must be greater than 0.\""
                                                }
                                            ],
                                            "id": 2093,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3216,
                                                3217
                                            ],
                                            "referencedDeclaration": 3217,
                                            "src": "7612:7:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 2098,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7612:133:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2099,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7612:133:9"
                                },
                                {
                                    "body": {
                                        "id": 2123,
                                        "nodeType": "Block",
                                        "src": "7798:206:9",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 2118,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2110,
                                                            "name": "oracleWhiteList",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1811,
                                                            "src": "7898:15:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                                                                "typeString": "mapping(address => address)"
                                                            }
                                                        },
                                                        "id": 2114,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2111,
                                                                "name": "_tokenAddresses",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2083,
                                                                "src": "7914:15:9",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                                                    "typeString": "address[] calldata"
                                                                }
                                                            },
                                                            "id": 2113,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 2112,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 2101,
                                                                "src": "7930:1:9",
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
                                                            "src": "7914:18:9",
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
                                                        "src": "7898:35:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "hexValue": "30",
                                                                "id": 2116,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7945:1:9",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                }
                                                            ],
                                                            "id": 2115,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "7937:7:9",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": "address"
                                                        },
                                                        "id": 2117,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7937:10:9",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "src": "7898:49:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": null,
                                                "id": 2122,
                                                "nodeType": "IfStatement",
                                                "src": "7894:100:9",
                                                "trueBody": {
                                                    "id": 2121,
                                                    "nodeType": "Block",
                                                    "src": "7949:45:9",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "hexValue": "66616c7365",
                                                                "id": 2119,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "bool",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7974:5:9",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                "value": "false"
                                                            },
                                                            "functionReturnParameters": 2087,
                                                            "id": 2120,
                                                            "nodeType": "Return",
                                                            "src": "7967:12:9"
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
                                        "id": 2106,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 2104,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2101,
                                            "src": "7776:1:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 2105,
                                            "name": "arrayLength",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2089,
                                            "src": "7780:11:9",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7776:15:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 2124,
                                    "initializationExpression": {
                                        "assignments": [
                                            2101
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 2101,
                                                "name": "i",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 2124,
                                                "src": "7761:9:9",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 2100,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "7761:7:9",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 2103,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 2102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7773:1:9",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "7761:13:9"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 2108,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "7793:3:9",
                                            "subExpression": {
                                                "argumentTypes": null,
                                                "id": 2107,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2101,
                                                "src": "7793:1:9",
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
                                        "id": 2109,
                                        "nodeType": "ExpressionStatement",
                                        "src": "7793:3:9"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "7756:248:9"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "hexValue": "74727565",
                                        "id": 2125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "8021:4:9",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 2087,
                                    "id": 2126,
                                    "nodeType": "Return",
                                    "src": "8014:11:9"
                                }
                            ]
                        },
                        "documentation": "Verifies an array of addresses against the whitelist\n     * @param  _tokenAddresses    Array of token addresses to check if oracle exists\n@return bool               Whether all addresses in the list are whitelsited",
                        "id": 2128,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "areValidAddresses",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2084,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2083,
                                    "name": "_tokenAddresses",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2128,
                                    "src": "7351:34:9",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2081,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7351:7:9",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2082,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7351:9:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7341:50:9"
                        },
                        "returnParameters": {
                            "id": 2087,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2086,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2128,
                                    "src": "7439:4:9",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2085,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7439:4:9",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7438:6:9"
                        },
                        "scope": 2129,
                        "src": "7315:717:9",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2130,
                "src": "965:7071:9"
            }
        ],
        "src": "597:7439:9"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-04-15T22:23:26.875Z",
    "devdoc": {
        "author": "Set Protocol * WhiteList that matches whitelisted tokens to their on chain price oracle",
        "methods": {
            "addTokenOraclePair(address,address)": {
                "params": {
                    "_oracleAddress": "Oracle address to add to the whitelist under _tokenAddress",
                    "_tokenAddress": "Token address to add to the whitelist"
                }
            },
            "areValidAddresses(address[])": {
                "params": {
                    "_tokenAddresses": "Array of token addresses to check if oracle exists"
                },
                "return": "bool               Whether all addresses in the list are whitelsited"
            },
            "constructor": {
                "params": {
                    "_initialOracleAddresses": "Starting set of oracle addresses to whitelist",
                    "_initialTokenAddresses": "Starting set of toke addresses to whitelist"
                }
            },
            "editTokenOraclePair(address,address)": {
                "params": {
                    "_oracleAddress": "Oracle address to add to the whitelist under _tokenAddress",
                    "_tokenAddress": "Token address to add to the whitelist"
                }
            },
            "getOracleAddressByToken(address)": {
                "params": {
                    "_tokenAddress": "Address of token"
                },
                "return": "address          Address of oracle associated with token"
            },
            "getOracleAddressesByToken(address[])": {
                "params": {
                    "_tokenAddresses": "Array of token addresses to get oracle addresses for"
                },
                "return": "address[]          Array of oracle addresses"
            },
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
            "removeTokenOraclePair(address)": {
                "params": {
                    "_tokenAddress": "Token address to remove to the whitelist"
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
        "title": "OracleWhiteList"
    },
    "userdoc": {
        "methods": {
            "addTokenOraclePair(address,address)": {
                "notice": "Add an address to the whitelist"
            },
            "areValidAddresses(address[])": {
                "notice": "Verifies an array of addresses against the whitelist"
            },
            "constructor": "Constructor function for OracleWhiteList     * Allow initial addresses to be passed in so a separate transaction is not required for each. Each token address passed is matched with a corresponding oracle address at the same index. The _initialTokenAddresses and _initialOracleAddresses arrays must be equal length.",
            "editTokenOraclePair(address,address)": {
                "notice": "Edit oracle address associated with a token address"
            },
            "getOracleAddressByToken(address)": {
                "notice": "Return oracle address associated with a passed token address "
            },
            "getOracleAddressesByToken(address[])": {
                "notice": "Return array of oracle addresses based on passed in token addresses "
            },
            "removeRegisteredUpgrade(bytes32)": {
                "notice": "Removes an existing upgrade."
            },
            "removeTokenOraclePair(address)": {
                "notice": "Remove a token oracle pair from the whitelist"
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
//# sourceMappingURL=OracleWhiteList.js.map