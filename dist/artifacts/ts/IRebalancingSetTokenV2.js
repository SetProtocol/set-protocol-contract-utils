"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRebalancingSetTokenV2 = {
    "contractName": "IRebalancingSetTokenV2",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
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
            "name": "liquidator",
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
            "name": "lastRebalanceTimestamp",
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
            "name": "rebalanceStartTime",
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
            "name": "startingCurrentSetAmount",
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
            "name": "rebalanceInterval",
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
            "name": "getAuctionPriceParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBiddingParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rebalanceState",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
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
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "name": "manager",
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
            "name": "feeRecipient",
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
            "name": "entryFee",
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
            "name": "rebalanceFee",
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
            "name": "rebalanceFeeCalculator",
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
                    "name": "_rebalanceFeeCalldata",
                    "type": "bytes"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newLiquidator",
                    "type": "address"
                }
            ],
            "name": "setLiquidator",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newFeeRecipient",
                    "type": "address"
                }
            ],
            "name": "setFeeRecipient",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newEntryFee",
                    "type": "uint256"
                }
            ],
            "name": "setEntryFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_nextSet",
                    "type": "address"
                },
                {
                    "name": "_liquidatorData",
                    "type": "bytes"
                }
            ],
            "name": "startRebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "settleRebalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "naturalUnit",
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
            "name": "currentSet",
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
            "name": "nextSet",
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
            "name": "unitShares",
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
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "placeBid",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "getBidPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"unitShares\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newLiquidator\",\"type\":\"address\"}],\"name\":\"setLiquidator\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"entryFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceInterval\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"liquidator\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"naturalUnit\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startingCurrentSetAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_rebalanceFeeCalldata\",\"type\":\"bytes\"}],\"name\":\"initialize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceFeeCalculator\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeRecipient\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_nextSet\",\"type\":\"address\"},{\"name\":\"_liquidatorData\",\"type\":\"bytes\"}],\"name\":\"startRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"placeBid\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"},{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceStartTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"getBidPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuctionPriceParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBiddingParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastRebalanceTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newFeeRecipient\",\"type\":\"address\"}],\"name\":\"setFeeRecipient\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newEntryFee\",\"type\":\"uint256\"}],\"name\":\"setEntryFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceState\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"settleRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * The IRebalancingSetTokenV2 interface provides a light-weight, structured way to interact with the RebalancingSetTokenV2 contract from another contract.\",\"methods\":{\"balanceOf(address)\":{\"params\":{\"owner\":\"The address to query the balance of.\"},\"return\":\"A uint256 representing the amount owned by the passed address.\"},\"currentSet()\":{\"return\":\"A address representing the base SetToken\"},\"liquidator()\":{\"return\":\"ILiquidator    Liquidator instance\"},\"nextSet()\":{\"return\":\"address    Address representing the base SetToken\"}},\"title\":\"IRebalancingSetTokenV2\"},\"userdoc\":{\"methods\":{\"balanceOf(address)\":{\"notice\":\"Gets the balance of the specified address.\"},\"currentSet()\":{\"notice\":\"Returns the address of the current base SetToken with the current allocation\"},\"liquidator()\":{\"notice\":\"Returns liquidator instance\"},\"nextSet()\":{\"notice\":\"Returns the address of the next base SetToken with the post auction allocation\"}}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\":\"IRebalancingSetTokenV2\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":{\"keccak256\":\"0xfdce9b333367bfed8f379738b0eabfe4be0045db735e9f24493de09729593d4d\",\"urls\":[\"bzzr://d2fa7438b492f4f08009810e3e9a2e2c22a429c307562e3f5274d4bfe2d21734\"]},\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":{\"keccak256\":\"0x9d1e66d56cd51d14787cce5ff8fb378eb6a0bb704e7102d7c4eda5de7f585af3\",\"urls\":[\"bzzr://c44220025ac21fda1dda68e236572c5c4f82bf53ccf504a020487b8c746c7b26\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol\":{\"keccak256\":\"0x46c9dc7c09957eaa4f896b33d8d25ff5268e710172330f033379eed62a052ace\",\"urls\":[\"bzzr://c5b5cdc4e58c0905a03ef70954ac23eefe4776c243049f37e7b93cd8277bb7cb\"]},\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2019 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { RebalancingLibrary } from \"../lib/RebalancingLibrary.sol\";\nimport { IFeeCalculator } from \"./IFeeCalculator.sol\";\nimport { ILiquidator } from \"./ILiquidator.sol\";\nimport { ISetToken } from \"./ISetToken.sol\";\n\n/**\n * @title IRebalancingSetTokenV2\n * @author Set Protocol\n *\n * The IRebalancingSetTokenV2 interface provides a light-weight, structured way to interact with the\n * RebalancingSetTokenV2 contract from another contract.\n */\n\ninterface IRebalancingSetTokenV2 {\n\n    /*\n     * Get totalSupply of Rebalancing Set\n     *\n     * @return  totalSupply\n     */\n    function totalSupply()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Returns liquidator instance\n     *\n     * @return  ILiquidator    Liquidator instance\n     */\n    function liquidator()\n        external\n        view\n        returns (ILiquidator);\n\n    /*\n     * Get lastRebalanceTimestamp of Rebalancing Set\n     *\n     * @return  lastRebalanceTimestamp\n     */\n    function lastRebalanceTimestamp()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceStartTime of Rebalancing Set\n     *\n     * @return  rebalanceStartTime\n     */\n    function rebalanceStartTime()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get startingCurrentSets of RebalancingSetToken\n     *\n     * @return  startingCurrentSets\n     */\n    function startingCurrentSetAmount()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceInterval of Rebalancing Set\n     *\n     * @return  rebalanceInterval\n     */\n    function rebalanceInterval()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get array returning [startTime, timeToPivot, startPrice, endPrice] \n     *\n     * @return  AuctionPriceParameters\n     */\n    function getAuctionPriceParameters() external view returns (uint256[] memory);\n\n    /*\n     * Get array returning [minimumBid, remainingCurrentSets] \n     *\n     * @return  BiddingParameters\n     */\n    function getBiddingParameters() external view returns (uint256[] memory);\n\n    /*\n     * Get rebalanceState of Rebalancing Set\n     *\n     * @return RebalancingLibrary.State    Current rebalance state of the RebalancingSetTokenV2\n     */\n    function rebalanceState()\n        external\n        view\n        returns (RebalancingLibrary.State);\n\n    /**\n     * Gets the balance of the specified address.\n     *\n     * @param owner      The address to query the balance of.\n     * @return           A uint256 representing the amount owned by the passed address.\n     */\n    function balanceOf(\n        address owner\n    )\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get manager of Rebalancing Set\n     *\n     * @return  manager\n     */\n    function manager()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get feeRecipient of Rebalancing Set\n     *\n     * @return  feeRecipient\n     */\n    function feeRecipient()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get entryFee of Rebalancing Set\n     *\n     * @return  entryFee\n     */\n    function entryFee()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Retrieves the current expected fee from the fee calculator\n     * Value is returned as a scale decimal figure.\n     */\n    function rebalanceFee()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get calculator contract used to compute rebalance fees\n     *\n     * @return  rebalanceFeeCalculator\n     */\n    function rebalanceFeeCalculator()\n        external\n        view\n        returns (IFeeCalculator);\n\n    /*\n     * Initializes the RebalancingSetToken. Typically called by the Factory during creation\n     */\n    function initialize(\n        bytes calldata _rebalanceFeeCalldata\n    )\n        external;\n\n    /*\n     * Set new liquidator address. Only whitelisted addresses are valid.\n     */\n    function setLiquidator(\n        ILiquidator _newLiquidator\n    )\n        external;\n\n    /*\n     * Set new fee recipient address.\n     */\n    function setFeeRecipient(\n        address _newFeeRecipient\n    )\n        external;\n\n    /*\n     * Set new fee entry fee.\n     */\n    function setEntryFee(\n        uint256 _newEntryFee\n    )\n        external;\n\n    /*\n     * Initiates the rebalance in coordination with the Liquidator contract. \n     * In this step, we redeem the currentSet and pass relevant information\n     * to the liquidator.\n     *\n     * @param _nextSet                      The Set to rebalance into\n     * @param _liquidatorData               Bytecode formatted data with liquidator-specific arguments\n     *\n     * Can only be called if the rebalance interval has elapsed.\n     * Can only be called by manager.\n     */\n    function startRebalance(\n        address _nextSet,\n        bytes calldata _liquidatorData\n\n    )\n        external;\n\n    /*\n     * After a successful rebalance, the new Set is issued. If there is a rebalance fee,\n     * the fee is paid via inflation of the Rebalancing Set to the feeRecipient.\n     * Full issuance functionality is now returned to set owners.\n     *\n     * Anyone can call this function.\n     */\n    function settleRebalance()\n        external;\n\n    /*\n     * Get natural unit of Set\n     *\n     * @return  uint256       Natural unit of Set\n     */\n    function naturalUnit()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Returns the address of the current base SetToken with the current allocation\n     *\n     * @return           A address representing the base SetToken\n     */\n    function currentSet()\n        external\n        view\n        returns (ISetToken);\n\n    /**\n     * Returns the address of the next base SetToken with the post auction allocation\n     *\n     * @return  address    Address representing the base SetToken\n     */\n    function nextSet()\n        external\n        view\n        returns (ISetToken);\n\n    /*\n     * Get the unit shares of the rebalancing Set\n     *\n     * @return  unitShares       Unit Shares of the base Set\n     */\n    function unitShares()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Place bid during rebalance auction. Can only be called by Core.\n     *\n     * @param _quantity                 The amount of currentSet to be rebalanced\n     * @return combinedTokenArray       Array of token addresses invovled in rebalancing\n     * @return inflowUnitArray          Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray         Array of amount of tokens taken out of system in bid\n     */\n    function placeBid(\n        uint256 _quantity\n    )\n        external\n        returns (address[] memory, uint256[] memory, uint256[] memory);\n\n    /*\n     * Get token inflows and outflows required for bid. Also the amount of Rebalancing\n     * Sets that would be generated.\n     *\n     * @param _quantity               The amount of currentSet to be rebalanced\n     * @return inflowUnitArray        Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray       Array of amount of tokens taken out of system in bid\n     */\n    function getBidPrice(\n        uint256 _quantity\n    )\n        external\n        view\n        returns (uint256[] memory, uint256[] memory);\n\n    /*\n     * Get name of Rebalancing Set\n     *\n     * @return  name\n     */\n    function name()\n        external\n        view\n        returns (string memory);\n\n    /*\n     * Get symbol of Rebalancing Set\n     *\n     * @return  symbol\n     */\n    function symbol()\n        external\n        view\n        returns (string memory);\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
        "exportedSymbols": {
            "IRebalancingSetTokenV2": [
                2127
            ]
        },
        "id": 2128,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1953,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:17"
            },
            {
                "id": 1954,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:17"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1956,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 2510,
                "src": "657:67:17",
                "symbolAliases": [
                    {
                        "foreign": 1955,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
                "file": "./IFeeCalculator.sol",
                "id": 1958,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 1686,
                "src": "725:54:17",
                "symbolAliases": [
                    {
                        "foreign": 1957,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "./ILiquidator.sol",
                "id": 1960,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 1788,
                "src": "780:48:17",
                "symbolAliases": [
                    {
                        "foreign": 1959,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 1962,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 2360,
                "src": "829:44:17",
                "symbolAliases": [
                    {
                        "foreign": 1961,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetTokenV2\n@author Set Protocol\n * The IRebalancingSetTokenV2 interface provides a light-weight, structured way to interact with the\nRebalancingSetTokenV2 contract from another contract.",
                "fullyImplemented": false,
                "id": 2127,
                "linearizedBaseContracts": [
                    2127
                ],
                "name": "IRebalancingSetTokenV2",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1967,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1963,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1254:2:17"
                        },
                        "returnParameters": {
                            "id": 1966,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1965,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1967,
                                    "src": "1304:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1964,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1303:9:17"
                        },
                        "scope": 2127,
                        "src": "1234:79:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns liquidator instance\n     * @return  ILiquidator    Liquidator instance",
                        "id": 1972,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "liquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1968,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1447:2:17"
                        },
                        "returnParameters": {
                            "id": 1971,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1970,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1972,
                                    "src": "1497:11:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1969,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "1497:11:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:13:17"
                        },
                        "scope": 2127,
                        "src": "1428:82:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1977,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1973,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1661:2:17"
                        },
                        "returnParameters": {
                            "id": 1976,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1975,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1977,
                                    "src": "1711:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1974,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1711:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1710:9:17"
                        },
                        "scope": 2127,
                        "src": "1630:90:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1982,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1978,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1859:2:17"
                        },
                        "returnParameters": {
                            "id": 1981,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1980,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1982,
                                    "src": "1909:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1979,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1909:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1908:9:17"
                        },
                        "scope": 2127,
                        "src": "1832:86:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1987,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1983,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2069:2:17"
                        },
                        "returnParameters": {
                            "id": 1986,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1985,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1987,
                                    "src": "2119:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1984,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2119:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2118:9:17"
                        },
                        "scope": 2127,
                        "src": "2036:92:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1992,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1988,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2264:2:17"
                        },
                        "returnParameters": {
                            "id": 1991,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1990,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "2314:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1989,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2314:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2313:9:17"
                        },
                        "scope": 2127,
                        "src": "2238:85:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1998,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1993,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2499:2:17"
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
                                    "scope": 1998,
                                    "src": "2525:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1994,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2525:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1995,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2525:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2524:18:17"
                        },
                        "scope": 2127,
                        "src": "2465:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2004,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1999,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2697:2:17"
                        },
                        "returnParameters": {
                            "id": 2003,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2002,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2004,
                                    "src": "2723:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2000,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2723:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2001,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2723:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2722:18:17"
                        },
                        "scope": 2127,
                        "src": "2668:73:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2009,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2005,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2933:2:17"
                        },
                        "returnParameters": {
                            "id": 2008,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2007,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2009,
                                    "src": "2983:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2006,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2983:24:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2982:26:17"
                        },
                        "scope": 2127,
                        "src": "2910:99:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 2016,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2011,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2016,
                                    "src": "3266:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2010,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3266:7:17",
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
                            "src": "3256:29:17"
                        },
                        "returnParameters": {
                            "id": 2015,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2014,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2016,
                                    "src": "3333:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2013,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3333:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3332:9:17"
                        },
                        "scope": 2127,
                        "src": "3238:104:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2021,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "manager",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2017,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3448:2:17"
                        },
                        "returnParameters": {
                            "id": 2020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2019,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2021,
                                    "src": "3498:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2018,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3498:7:17",
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
                            "src": "3497:9:17"
                        },
                        "scope": 2127,
                        "src": "3432:75:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2026,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2022,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3628:2:17"
                        },
                        "returnParameters": {
                            "id": 2025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2024,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2026,
                                    "src": "3678:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2023,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3678:7:17",
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
                            "src": "3677:9:17"
                        },
                        "scope": 2127,
                        "src": "3607:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2031,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "entryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2027,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3796:2:17"
                        },
                        "returnParameters": {
                            "id": 2030,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2029,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2031,
                                    "src": "3846:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2028,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3846:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3845:9:17"
                        },
                        "scope": 2127,
                        "src": "3779:76:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2036,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2032,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4015:2:17"
                        },
                        "returnParameters": {
                            "id": 2035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2034,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2036,
                                    "src": "4065:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2033,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4065:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4064:9:17"
                        },
                        "scope": 2127,
                        "src": "3994:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2041,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFeeCalculator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2037,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4234:2:17"
                        },
                        "returnParameters": {
                            "id": 2040,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2039,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2041,
                                    "src": "4284:14:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                        "typeString": "contract IFeeCalculator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2038,
                                        "name": "IFeeCalculator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1685,
                                        "src": "4284:14:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                            "typeString": "contract IFeeCalculator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4283:16:17"
                        },
                        "scope": 2127,
                        "src": "4203:97:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2046,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2044,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2043,
                                    "name": "_rebalanceFeeCalldata",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2046,
                                    "src": "4442:36:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2042,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4442:5:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4432:52:17"
                        },
                        "returnParameters": {
                            "id": 2045,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4501:0:17"
                        },
                        "scope": 2127,
                        "src": "4413:89:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2051,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2048,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2051,
                                    "src": "4628:26:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2047,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "4628:11:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4618:42:17"
                        },
                        "returnParameters": {
                            "id": 2050,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4677:0:17"
                        },
                        "scope": 2127,
                        "src": "4596:82:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2056,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2054,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2053,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2056,
                                    "src": "4771:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2052,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4771:7:17",
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
                            "src": "4761:40:17"
                        },
                        "returnParameters": {
                            "id": 2055,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4818:0:17"
                        },
                        "scope": 2127,
                        "src": "4737:82:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2061,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setEntryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2059,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2058,
                                    "name": "_newEntryFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2061,
                                    "src": "4900:20:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2057,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4900:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4890:36:17"
                        },
                        "returnParameters": {
                            "id": 2060,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4943:0:17"
                        },
                        "scope": 2127,
                        "src": "4870:74:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2068,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2066,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2063,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2068,
                                    "src": "5468:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2062,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5468:7:17",
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
                                    "id": 2065,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2068,
                                    "src": "5494:30:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2064,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5494:5:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5458:73:17"
                        },
                        "returnParameters": {
                            "id": 2067,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5548:0:17"
                        },
                        "scope": 2127,
                        "src": "5435:114:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2071,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2069,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5875:2:17"
                        },
                        "returnParameters": {
                            "id": 2070,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5894:0:17"
                        },
                        "scope": 2127,
                        "src": "5851:44:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2076,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2072,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6024:2:17"
                        },
                        "returnParameters": {
                            "id": 2075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2074,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2076,
                                    "src": "6074:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2073,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6074:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6073:9:17"
                        },
                        "scope": 2127,
                        "src": "6004:79:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 2081,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2077,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6281:2:17"
                        },
                        "returnParameters": {
                            "id": 2080,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2079,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2081,
                                    "src": "6331:9:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2078,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6331:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6330:11:17"
                        },
                        "scope": 2127,
                        "src": "6262:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 2086,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2082,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6539:2:17"
                        },
                        "returnParameters": {
                            "id": 2085,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2084,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2086,
                                    "src": "6589:9:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2083,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6589:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6588:11:17"
                        },
                        "scope": 2127,
                        "src": "6523:77:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2091,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2087,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6758:2:17"
                        },
                        "returnParameters": {
                            "id": 2090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2089,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2091,
                                    "src": "6808:7:17",
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
                                        "src": "6808:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6807:9:17"
                        },
                        "scope": 2127,
                        "src": "6739:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2105,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2093,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7301:17:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2092,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7301:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7291:33:17"
                        },
                        "returnParameters": {
                            "id": 2104,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2097,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7359:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2095,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7359:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2096,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7359:9:17",
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
                                    "id": 2100,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7377:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2098,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7377:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2099,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7377:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2103,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7395:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2101,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7395:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2102,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7395:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7358:54:17"
                        },
                        "scope": 2127,
                        "src": "7274:139:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2116,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2107,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7858:17:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2106,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7858:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7848:33:17"
                        },
                        "returnParameters": {
                            "id": 2115,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2111,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7929:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2109,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7929:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2110,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7929:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2114,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7947:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2112,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7947:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2113,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7947:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7928:36:17"
                        },
                        "scope": 2127,
                        "src": "7828:137:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2121,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2117,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8062:2:17"
                        },
                        "returnParameters": {
                            "id": 2120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2119,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2121,
                                    "src": "8112:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2118,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8112:6:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8111:15:17"
                        },
                        "scope": 2127,
                        "src": "8049:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2126,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2122,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8230:2:17"
                        },
                        "returnParameters": {
                            "id": 2125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2124,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2126,
                                    "src": "8280:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2123,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8280:6:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8279:15:17"
                        },
                        "scope": 2127,
                        "src": "8215:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2128,
                "src": "1102:7195:17"
            }
        ],
        "src": "597:7701:17"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV2.sol",
        "exportedSymbols": {
            "IRebalancingSetTokenV2": [
                2127
            ]
        },
        "id": 2128,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1953,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:17"
            },
            {
                "id": 1954,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:17"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 1956,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 2510,
                "src": "657:67:17",
                "symbolAliases": [
                    {
                        "foreign": 1955,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
                "file": "./IFeeCalculator.sol",
                "id": 1958,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 1686,
                "src": "725:54:17",
                "symbolAliases": [
                    {
                        "foreign": 1957,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "./ILiquidator.sol",
                "id": 1960,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 1788,
                "src": "780:48:17",
                "symbolAliases": [
                    {
                        "foreign": 1959,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 1962,
                "nodeType": "ImportDirective",
                "scope": 2128,
                "sourceUnit": 2360,
                "src": "829:44:17",
                "symbolAliases": [
                    {
                        "foreign": 1961,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetTokenV2\n@author Set Protocol\n * The IRebalancingSetTokenV2 interface provides a light-weight, structured way to interact with the\nRebalancingSetTokenV2 contract from another contract.",
                "fullyImplemented": false,
                "id": 2127,
                "linearizedBaseContracts": [
                    2127
                ],
                "name": "IRebalancingSetTokenV2",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1967,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1963,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1254:2:17"
                        },
                        "returnParameters": {
                            "id": 1966,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1965,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1967,
                                    "src": "1304:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1964,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1303:9:17"
                        },
                        "scope": 2127,
                        "src": "1234:79:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns liquidator instance\n     * @return  ILiquidator    Liquidator instance",
                        "id": 1972,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "liquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1968,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1447:2:17"
                        },
                        "returnParameters": {
                            "id": 1971,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1970,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1972,
                                    "src": "1497:11:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 1969,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "1497:11:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:13:17"
                        },
                        "scope": 2127,
                        "src": "1428:82:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1977,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1973,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1661:2:17"
                        },
                        "returnParameters": {
                            "id": 1976,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1975,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1977,
                                    "src": "1711:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1974,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1711:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1710:9:17"
                        },
                        "scope": 2127,
                        "src": "1630:90:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1982,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1978,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1859:2:17"
                        },
                        "returnParameters": {
                            "id": 1981,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1980,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1982,
                                    "src": "1909:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1979,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1909:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1908:9:17"
                        },
                        "scope": 2127,
                        "src": "1832:86:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1987,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1983,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2069:2:17"
                        },
                        "returnParameters": {
                            "id": 1986,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1985,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1987,
                                    "src": "2119:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1984,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2119:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2118:9:17"
                        },
                        "scope": 2127,
                        "src": "2036:92:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1992,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1988,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2264:2:17"
                        },
                        "returnParameters": {
                            "id": 1991,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1990,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1992,
                                    "src": "2314:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1989,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2314:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2313:9:17"
                        },
                        "scope": 2127,
                        "src": "2238:85:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1998,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1993,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2499:2:17"
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
                                    "scope": 1998,
                                    "src": "2525:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 1994,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2525:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 1995,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2525:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2524:18:17"
                        },
                        "scope": 2127,
                        "src": "2465:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2004,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1999,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2697:2:17"
                        },
                        "returnParameters": {
                            "id": 2003,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2002,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2004,
                                    "src": "2723:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2000,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2723:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2001,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2723:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2722:18:17"
                        },
                        "scope": 2127,
                        "src": "2668:73:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2009,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2005,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2933:2:17"
                        },
                        "returnParameters": {
                            "id": 2008,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2007,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2009,
                                    "src": "2983:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2006,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2983:24:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2982:26:17"
                        },
                        "scope": 2127,
                        "src": "2910:99:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 2016,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2011,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2016,
                                    "src": "3266:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2010,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3266:7:17",
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
                            "src": "3256:29:17"
                        },
                        "returnParameters": {
                            "id": 2015,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2014,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2016,
                                    "src": "3333:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2013,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3333:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3332:9:17"
                        },
                        "scope": 2127,
                        "src": "3238:104:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2021,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "manager",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2017,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3448:2:17"
                        },
                        "returnParameters": {
                            "id": 2020,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2019,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2021,
                                    "src": "3498:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2018,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3498:7:17",
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
                            "src": "3497:9:17"
                        },
                        "scope": 2127,
                        "src": "3432:75:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2026,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2022,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3628:2:17"
                        },
                        "returnParameters": {
                            "id": 2025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2024,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2026,
                                    "src": "3678:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2023,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3678:7:17",
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
                            "src": "3677:9:17"
                        },
                        "scope": 2127,
                        "src": "3607:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2031,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "entryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2027,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3796:2:17"
                        },
                        "returnParameters": {
                            "id": 2030,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2029,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2031,
                                    "src": "3846:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2028,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3846:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3845:9:17"
                        },
                        "scope": 2127,
                        "src": "3779:76:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2036,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2032,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4015:2:17"
                        },
                        "returnParameters": {
                            "id": 2035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2034,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2036,
                                    "src": "4065:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2033,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4065:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4064:9:17"
                        },
                        "scope": 2127,
                        "src": "3994:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2041,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFeeCalculator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2037,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4234:2:17"
                        },
                        "returnParameters": {
                            "id": 2040,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2039,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2041,
                                    "src": "4284:14:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                        "typeString": "contract IFeeCalculator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2038,
                                        "name": "IFeeCalculator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1685,
                                        "src": "4284:14:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                            "typeString": "contract IFeeCalculator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4283:16:17"
                        },
                        "scope": 2127,
                        "src": "4203:97:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2046,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2044,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2043,
                                    "name": "_rebalanceFeeCalldata",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2046,
                                    "src": "4442:36:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2042,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4442:5:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4432:52:17"
                        },
                        "returnParameters": {
                            "id": 2045,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4501:0:17"
                        },
                        "scope": 2127,
                        "src": "4413:89:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2051,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2048,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2051,
                                    "src": "4628:26:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2047,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "4628:11:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4618:42:17"
                        },
                        "returnParameters": {
                            "id": 2050,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4677:0:17"
                        },
                        "scope": 2127,
                        "src": "4596:82:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2056,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2054,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2053,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2056,
                                    "src": "4771:24:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2052,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4771:7:17",
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
                            "src": "4761:40:17"
                        },
                        "returnParameters": {
                            "id": 2055,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4818:0:17"
                        },
                        "scope": 2127,
                        "src": "4737:82:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2061,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setEntryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2059,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2058,
                                    "name": "_newEntryFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2061,
                                    "src": "4900:20:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2057,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4900:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4890:36:17"
                        },
                        "returnParameters": {
                            "id": 2060,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4943:0:17"
                        },
                        "scope": 2127,
                        "src": "4870:74:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2068,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2066,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2063,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2068,
                                    "src": "5468:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2062,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5468:7:17",
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
                                    "id": 2065,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2068,
                                    "src": "5494:30:17",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2064,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5494:5:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5458:73:17"
                        },
                        "returnParameters": {
                            "id": 2067,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5548:0:17"
                        },
                        "scope": 2127,
                        "src": "5435:114:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2071,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2069,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5875:2:17"
                        },
                        "returnParameters": {
                            "id": 2070,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5894:0:17"
                        },
                        "scope": 2127,
                        "src": "5851:44:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2076,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2072,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6024:2:17"
                        },
                        "returnParameters": {
                            "id": 2075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2074,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2076,
                                    "src": "6074:7:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2073,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6074:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6073:9:17"
                        },
                        "scope": 2127,
                        "src": "6004:79:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 2081,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2077,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6281:2:17"
                        },
                        "returnParameters": {
                            "id": 2080,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2079,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2081,
                                    "src": "6331:9:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2078,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6331:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6330:11:17"
                        },
                        "scope": 2127,
                        "src": "6262:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 2086,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2082,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6539:2:17"
                        },
                        "returnParameters": {
                            "id": 2085,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2084,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2086,
                                    "src": "6589:9:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2083,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6589:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6588:11:17"
                        },
                        "scope": 2127,
                        "src": "6523:77:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2091,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2087,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6758:2:17"
                        },
                        "returnParameters": {
                            "id": 2090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2089,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2091,
                                    "src": "6808:7:17",
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
                                        "src": "6808:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6807:9:17"
                        },
                        "scope": 2127,
                        "src": "6739:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2105,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2093,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7301:17:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2092,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7301:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7291:33:17"
                        },
                        "returnParameters": {
                            "id": 2104,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2097,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7359:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2095,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7359:7:17",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2096,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7359:9:17",
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
                                    "id": 2100,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7377:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2098,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7377:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2099,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7377:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2103,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2105,
                                    "src": "7395:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2101,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7395:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2102,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7395:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7358:54:17"
                        },
                        "scope": 2127,
                        "src": "7274:139:17",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2116,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2107,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7858:17:17",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2106,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7858:7:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7848:33:17"
                        },
                        "returnParameters": {
                            "id": 2115,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2111,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7929:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2109,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7929:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2110,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7929:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 2114,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2116,
                                    "src": "7947:16:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2112,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7947:7:17",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2113,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7947:9:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7928:36:17"
                        },
                        "scope": 2127,
                        "src": "7828:137:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2121,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2117,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8062:2:17"
                        },
                        "returnParameters": {
                            "id": 2120,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2119,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2121,
                                    "src": "8112:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2118,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8112:6:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8111:15:17"
                        },
                        "scope": 2127,
                        "src": "8049:78:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2126,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2122,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8230:2:17"
                        },
                        "returnParameters": {
                            "id": 2125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2124,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2126,
                                    "src": "8280:13:17",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2123,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8280:6:17",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8279:15:17"
                        },
                        "scope": 2127,
                        "src": "8215:80:17",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2128,
                "src": "1102:7195:17"
            }
        ],
        "src": "597:7701:17"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.714Z",
    "devdoc": {
        "author": "Set Protocol * The IRebalancingSetTokenV2 interface provides a light-weight, structured way to interact with the RebalancingSetTokenV2 contract from another contract.",
        "methods": {
            "balanceOf(address)": {
                "params": {
                    "owner": "The address to query the balance of."
                },
                "return": "A uint256 representing the amount owned by the passed address."
            },
            "currentSet()": {
                "return": "A address representing the base SetToken"
            },
            "liquidator()": {
                "return": "ILiquidator    Liquidator instance"
            },
            "nextSet()": {
                "return": "address    Address representing the base SetToken"
            }
        },
        "title": "IRebalancingSetTokenV2"
    },
    "userdoc": {
        "methods": {
            "balanceOf(address)": {
                "notice": "Gets the balance of the specified address."
            },
            "currentSet()": {
                "notice": "Returns the address of the current base SetToken with the current allocation"
            },
            "liquidator()": {
                "notice": "Returns liquidator instance"
            },
            "nextSet()": {
                "notice": "Returns the address of the next base SetToken with the post auction allocation"
            }
        }
    }
};
//# sourceMappingURL=IRebalancingSetTokenV2.js.map