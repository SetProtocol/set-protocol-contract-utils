"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRebalancingSetTokenV3 = {
    "contractName": "IRebalancingSetTokenV3",
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
            "constant": false,
            "inputs": [],
            "name": "actualizeFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newFeeData",
                    "type": "bytes"
                }
            ],
            "name": "adjustFee",
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
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"unitShares\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newLiquidator\",\"type\":\"address\"}],\"name\":\"setLiquidator\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"entryFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceInterval\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"actualizeFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceFee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"liquidator\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"naturalUnit\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startingCurrentSetAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_rebalanceFeeCalldata\",\"type\":\"bytes\"}],\"name\":\"initialize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceFeeCalculator\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeRecipient\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_nextSet\",\"type\":\"address\"},{\"name\":\"_liquidatorData\",\"type\":\"bytes\"}],\"name\":\"startRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"placeBid\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"},{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceStartTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_quantity\",\"type\":\"uint256\"}],\"name\":\"getBidPrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"},{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuctionPriceParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBiddingParameters\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastRebalanceTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextSet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newFeeData\",\"type\":\"bytes\"}],\"name\":\"adjustFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newFeeRecipient\",\"type\":\"address\"}],\"name\":\"setFeeRecipient\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newEntryFee\",\"type\":\"uint256\"}],\"name\":\"setEntryFee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rebalanceState\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"settleRebalance\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * The IRebalancingSetTokenV3 interface provides a light-weight, structured way to interact with the RebalancingSetTokenV3 contract from another contract.\",\"methods\":{\"balanceOf(address)\":{\"params\":{\"owner\":\"The address to query the balance of.\"},\"return\":\"A uint256 representing the amount owned by the passed address.\"},\"currentSet()\":{\"return\":\"A address representing the base SetToken\"},\"liquidator()\":{\"return\":\"ILiquidator    Liquidator instance\"},\"nextSet()\":{\"return\":\"address    Address representing the base SetToken\"}},\"title\":\"IRebalancingSetTokenV2\"},\"userdoc\":{\"methods\":{\"balanceOf(address)\":{\"notice\":\"Gets the balance of the specified address.\"},\"currentSet()\":{\"notice\":\"Returns the address of the current base SetToken with the current allocation\"},\"liquidator()\":{\"notice\":\"Returns liquidator instance\"},\"nextSet()\":{\"notice\":\"Returns the address of the next base SetToken with the post auction allocation\"}}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV3.sol\":\"IRebalancingSetTokenV3\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol\":{\"keccak256\":\"0xfdce9b333367bfed8f379738b0eabfe4be0045db735e9f24493de09729593d4d\",\"urls\":[\"bzzr://d2fa7438b492f4f08009810e3e9a2e2c22a429c307562e3f5274d4bfe2d21734\"]},\"set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol\":{\"keccak256\":\"0x9d1e66d56cd51d14787cce5ff8fb378eb6a0bb704e7102d7c4eda5de7f585af3\",\"urls\":[\"bzzr://c44220025ac21fda1dda68e236572c5c4f82bf53ccf504a020487b8c746c7b26\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetToken.sol\":{\"keccak256\":\"0xe7356a7b0f0cc95d9526395d776f523a48fd65618730d67b4f31f20ffbd380da\",\"urls\":[\"bzzr://605a33a818eff7ce3370f25fccb751f61c066b4db0772605a2215d1357d68072\"]},\"set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV3.sol\":{\"keccak256\":\"0xf5b8197ff63c2a234856bca7b7973703890e2e8510524616d96504e7b4810217\",\"urls\":[\"bzzr://bc2cd5938bbeeb45cd59bf010f9edc253be7177866fb35455782b7243b115d3c\"]},\"set-protocol-contracts/contracts/core/interfaces/ISetToken.sol\":{\"keccak256\":\"0xfa6c0c07f8394d89b6b8f72e15778f8452a9341acb20cebb8421f3522aaca1bd\",\"urls\":[\"bzzr://ccf23bb78fd507bf8cbf5cf7ac2a660a1463b87a3689196e42b8f6862d1a6b11\"]},\"set-protocol-contracts/contracts/core/lib/Rebalance.sol\":{\"keccak256\":\"0x74ffa689d93ced6c6e0377a35ec1274241b6191b5aaac5576ada379ac3840286\",\"urls\":[\"bzzr://25bdda3f1f5adfa2c83c760c44993d250cd2df037360f0018d22d268df79e887\"]},\"set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol\":{\"keccak256\":\"0x7f9dd2f95b2ee71a98b94cb9b0df15874aa134e7480d04a1fcf36aff166a55f4\",\"urls\":[\"bzzr://f43a5563ec5df095151eee30cf7a0941b5a971917c27c7b34d9586b36563ab5b\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\npragma experimental \"ABIEncoderV2\";\n\nimport { RebalancingLibrary } from \"../lib/RebalancingLibrary.sol\";\nimport { IFeeCalculator } from \"./IFeeCalculator.sol\";\nimport { ILiquidator } from \"./ILiquidator.sol\";\nimport { ISetToken } from \"./ISetToken.sol\";\n\n/**\n * @title IRebalancingSetTokenV2\n * @author Set Protocol\n *\n * The IRebalancingSetTokenV3 interface provides a light-weight, structured way to interact with the\n * RebalancingSetTokenV3 contract from another contract.\n */\n\ninterface IRebalancingSetTokenV3 {\n\n    /*\n     * Get totalSupply of Rebalancing Set\n     *\n     * @return  totalSupply\n     */\n    function totalSupply()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Returns liquidator instance\n     *\n     * @return  ILiquidator    Liquidator instance\n     */\n    function liquidator()\n        external\n        view\n        returns (ILiquidator);\n\n    /*\n     * Get lastRebalanceTimestamp of Rebalancing Set\n     *\n     * @return  lastRebalanceTimestamp\n     */\n    function lastRebalanceTimestamp()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceStartTime of Rebalancing Set\n     *\n     * @return  rebalanceStartTime\n     */\n    function rebalanceStartTime()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get startingCurrentSets of RebalancingSetToken\n     *\n     * @return  startingCurrentSets\n     */\n    function startingCurrentSetAmount()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get rebalanceInterval of Rebalancing Set\n     *\n     * @return  rebalanceInterval\n     */\n    function rebalanceInterval()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get array returning [startTime, timeToPivot, startPrice, endPrice]\n     *\n     * @return  AuctionPriceParameters\n     */\n    function getAuctionPriceParameters() external view returns (uint256[] memory);\n\n    /*\n     * Get array returning [minimumBid, remainingCurrentSets]\n     *\n     * @return  BiddingParameters\n     */\n    function getBiddingParameters() external view returns (uint256[] memory);\n\n    /*\n     * Get rebalanceState of Rebalancing Set\n     *\n     * @return RebalancingLibrary.State    Current rebalance state of the RebalancingSetTokenV3\n     */\n    function rebalanceState()\n        external\n        view\n        returns (RebalancingLibrary.State);\n\n    /**\n     * Gets the balance of the specified address.\n     *\n     * @param owner      The address to query the balance of.\n     * @return           A uint256 representing the amount owned by the passed address.\n     */\n    function balanceOf(\n        address owner\n    )\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get manager of Rebalancing Set\n     *\n     * @return  manager\n     */\n    function manager()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get feeRecipient of Rebalancing Set\n     *\n     * @return  feeRecipient\n     */\n    function feeRecipient()\n        external\n        view\n        returns (address);\n\n    /*\n     * Get entryFee of Rebalancing Set\n     *\n     * @return  entryFee\n     */\n    function entryFee()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Retrieves the current expected fee from the fee calculator\n     * Value is returned as a scale decimal figure.\n     */\n    function rebalanceFee()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Get calculator contract used to compute rebalance fees\n     *\n     * @return  rebalanceFeeCalculator\n     */\n    function rebalanceFeeCalculator()\n        external\n        view\n        returns (IFeeCalculator);\n\n    /*\n     * Initializes the RebalancingSetToken. Typically called by the Factory during creation\n     */\n    function initialize(\n        bytes calldata _rebalanceFeeCalldata\n    )\n        external;\n\n    /*\n     * Set new liquidator address. Only whitelisted addresses are valid.\n     */\n    function setLiquidator(\n        ILiquidator _newLiquidator\n    )\n        external;\n\n    /*\n     * Set new fee recipient address.\n     */\n    function setFeeRecipient(\n        address _newFeeRecipient\n    )\n        external;\n\n    /*\n     * Set new fee entry fee.\n     */\n    function setEntryFee(\n        uint256 _newEntryFee\n    )\n        external;\n\n    /*\n     * Initiates the rebalance in coordination with the Liquidator contract.\n     * In this step, we redeem the currentSet and pass relevant information\n     * to the liquidator.\n     *\n     * @param _nextSet                      The Set to rebalance into\n     * @param _liquidatorData               Bytecode formatted data with liquidator-specific arguments\n     *\n     * Can only be called if the rebalance interval has elapsed.\n     * Can only be called by manager.\n     */\n    function startRebalance(\n        address _nextSet,\n        bytes calldata _liquidatorData\n\n    )\n        external;\n\n    /*\n     * After a successful rebalance, the new Set is issued. If there is a rebalance fee,\n     * the fee is paid via inflation of the Rebalancing Set to the feeRecipient.\n     * Full issuance functionality is now returned to set owners.\n     *\n     * Anyone can call this function.\n     */\n    function settleRebalance()\n        external;\n\n    /*\n     * During the Default stage, the incentive / rebalance Fee can be triggered. This will\n     * retrieve the current inflation fee from the fee calulator and mint the according\n     * inflation to the feeRecipient. The unit shares is then adjusted based on the new\n     * supply.\n     *\n     * Anyone can call this function.\n     */\n    function actualizeFee()\n        external;\n\n    /*\n     * Validate then set new streaming fee.\n     *\n     * @param  _newFeeData       Fee type and new streaming fee encoded in bytes\n     */\n    function adjustFee(\n        bytes calldata _newFeeData\n    )\n        external;\n\n    /*\n     * Get natural unit of Set\n     *\n     * @return  uint256       Natural unit of Set\n     */\n    function naturalUnit()\n        external\n        view\n        returns (uint256);\n\n    /**\n     * Returns the address of the current base SetToken with the current allocation\n     *\n     * @return           A address representing the base SetToken\n     */\n    function currentSet()\n        external\n        view\n        returns (ISetToken);\n\n    /**\n     * Returns the address of the next base SetToken with the post auction allocation\n     *\n     * @return  address    Address representing the base SetToken\n     */\n    function nextSet()\n        external\n        view\n        returns (ISetToken);\n\n    /*\n     * Get the unit shares of the rebalancing Set\n     *\n     * @return  unitShares       Unit Shares of the base Set\n     */\n    function unitShares()\n        external\n        view\n        returns (uint256);\n\n    /*\n     * Place bid during rebalance auction. Can only be called by Core.\n     *\n     * @param _quantity                 The amount of currentSet to be rebalanced\n     * @return combinedTokenArray       Array of token addresses invovled in rebalancing\n     * @return inflowUnitArray          Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray         Array of amount of tokens taken out of system in bid\n     */\n    function placeBid(\n        uint256 _quantity\n    )\n        external\n        returns (address[] memory, uint256[] memory, uint256[] memory);\n\n    /*\n     * Get token inflows and outflows required for bid. Also the amount of Rebalancing\n     * Sets that would be generated.\n     *\n     * @param _quantity               The amount of currentSet to be rebalanced\n     * @return inflowUnitArray        Array of amount of tokens inserted into system in bid\n     * @return outflowUnitArray       Array of amount of tokens taken out of system in bid\n     */\n    function getBidPrice(\n        uint256 _quantity\n    )\n        external\n        view\n        returns (uint256[] memory, uint256[] memory);\n\n    /*\n     * Get name of Rebalancing Set\n     *\n     * @return  name\n     */\n    function name()\n        external\n        view\n        returns (string memory);\n\n    /*\n     * Get symbol of Rebalancing Set\n     *\n     * @return  symbol\n     */\n    function symbol()\n        external\n        view\n        returns (string memory);\n}\n",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV3.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV3.sol",
        "exportedSymbols": {
            "IRebalancingSetTokenV3": [
                2311
            ]
        },
        "id": 2312,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2129,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:18"
            },
            {
                "id": 2130,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:18"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 2132,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 2510,
                "src": "657:67:18",
                "symbolAliases": [
                    {
                        "foreign": 2131,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
                "file": "./IFeeCalculator.sol",
                "id": 2134,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 1686,
                "src": "725:54:18",
                "symbolAliases": [
                    {
                        "foreign": 2133,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "./ILiquidator.sol",
                "id": 2136,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 1788,
                "src": "780:48:18",
                "symbolAliases": [
                    {
                        "foreign": 2135,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 2138,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 2360,
                "src": "829:44:18",
                "symbolAliases": [
                    {
                        "foreign": 2137,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetTokenV2\n@author Set Protocol\n * The IRebalancingSetTokenV3 interface provides a light-weight, structured way to interact with the\nRebalancingSetTokenV3 contract from another contract.",
                "fullyImplemented": false,
                "id": 2311,
                "linearizedBaseContracts": [
                    2311
                ],
                "name": "IRebalancingSetTokenV3",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2143,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2139,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1254:2:18"
                        },
                        "returnParameters": {
                            "id": 2142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2141,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2143,
                                    "src": "1304:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2140,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1303:9:18"
                        },
                        "scope": 2311,
                        "src": "1234:79:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns liquidator instance\n     * @return  ILiquidator    Liquidator instance",
                        "id": 2148,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "liquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1447:2:18"
                        },
                        "returnParameters": {
                            "id": 2147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2146,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2148,
                                    "src": "1497:11:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2145,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "1497:11:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:13:18"
                        },
                        "scope": 2311,
                        "src": "1428:82:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2153,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2149,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1661:2:18"
                        },
                        "returnParameters": {
                            "id": 2152,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2151,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2153,
                                    "src": "1711:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2150,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1711:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1710:9:18"
                        },
                        "scope": 2311,
                        "src": "1630:90:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2158,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2154,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1859:2:18"
                        },
                        "returnParameters": {
                            "id": 2157,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2156,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2158,
                                    "src": "1909:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1909:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1908:9:18"
                        },
                        "scope": 2311,
                        "src": "1832:86:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2163,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2069:2:18"
                        },
                        "returnParameters": {
                            "id": 2162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2161,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2163,
                                    "src": "2119:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2119:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2118:9:18"
                        },
                        "scope": 2311,
                        "src": "2036:92:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2168,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2164,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2264:2:18"
                        },
                        "returnParameters": {
                            "id": 2167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2166,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2168,
                                    "src": "2314:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2314:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2313:9:18"
                        },
                        "scope": 2311,
                        "src": "2238:85:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2174,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2169,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2498:2:18"
                        },
                        "returnParameters": {
                            "id": 2173,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2172,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2174,
                                    "src": "2524:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2170,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2524:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2171,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2524:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2523:18:18"
                        },
                        "scope": 2311,
                        "src": "2464:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2180,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2175,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2695:2:18"
                        },
                        "returnParameters": {
                            "id": 2179,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2178,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2180,
                                    "src": "2721:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2176,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2721:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2177,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2721:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2720:18:18"
                        },
                        "scope": 2311,
                        "src": "2666:73:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2185,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2181,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2931:2:18"
                        },
                        "returnParameters": {
                            "id": 2184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2183,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2185,
                                    "src": "2981:24:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2182,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2981:24:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2980:26:18"
                        },
                        "scope": 2311,
                        "src": "2908:99:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 2192,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2187,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2192,
                                    "src": "3264:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2186,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3264:7:18",
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
                            "src": "3254:29:18"
                        },
                        "returnParameters": {
                            "id": 2191,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2190,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2192,
                                    "src": "3331:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2189,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3331:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3330:9:18"
                        },
                        "scope": 2311,
                        "src": "3236:104:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2197,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "manager",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2193,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3446:2:18"
                        },
                        "returnParameters": {
                            "id": 2196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2195,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2197,
                                    "src": "3496:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2194,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3496:7:18",
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
                            "src": "3495:9:18"
                        },
                        "scope": 2311,
                        "src": "3430:75:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2202,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2198,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3626:2:18"
                        },
                        "returnParameters": {
                            "id": 2201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2200,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2202,
                                    "src": "3676:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2199,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3676:7:18",
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
                            "src": "3675:9:18"
                        },
                        "scope": 2311,
                        "src": "3605:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2207,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "entryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2203,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3794:2:18"
                        },
                        "returnParameters": {
                            "id": 2206,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2205,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2207,
                                    "src": "3844:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2204,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3844:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3843:9:18"
                        },
                        "scope": 2311,
                        "src": "3777:76:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2212,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2208,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4013:2:18"
                        },
                        "returnParameters": {
                            "id": 2211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2210,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2212,
                                    "src": "4063:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2209,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4063:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4062:9:18"
                        },
                        "scope": 2311,
                        "src": "3992:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2217,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFeeCalculator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2213,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4232:2:18"
                        },
                        "returnParameters": {
                            "id": 2216,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2215,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2217,
                                    "src": "4282:14:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                        "typeString": "contract IFeeCalculator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2214,
                                        "name": "IFeeCalculator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1685,
                                        "src": "4282:14:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                            "typeString": "contract IFeeCalculator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4281:16:18"
                        },
                        "scope": 2311,
                        "src": "4201:97:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2222,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2219,
                                    "name": "_rebalanceFeeCalldata",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2222,
                                    "src": "4440:36:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2218,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4440:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4430:52:18"
                        },
                        "returnParameters": {
                            "id": 2221,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4499:0:18"
                        },
                        "scope": 2311,
                        "src": "4411:89:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2227,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2224,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2227,
                                    "src": "4626:26:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2223,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "4626:11:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4616:42:18"
                        },
                        "returnParameters": {
                            "id": 2226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4675:0:18"
                        },
                        "scope": 2311,
                        "src": "4594:82:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2232,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2230,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2229,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2232,
                                    "src": "4769:24:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2228,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:7:18",
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
                            "src": "4759:40:18"
                        },
                        "returnParameters": {
                            "id": 2231,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4816:0:18"
                        },
                        "scope": 2311,
                        "src": "4735:82:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2237,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setEntryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2235,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2234,
                                    "name": "_newEntryFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2237,
                                    "src": "4898:20:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2233,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4898:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4888:36:18"
                        },
                        "returnParameters": {
                            "id": 2236,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4941:0:18"
                        },
                        "scope": 2311,
                        "src": "4868:74:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2244,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2239,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2244,
                                    "src": "5465:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2238,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5465:7:18",
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
                                    "id": 2241,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2244,
                                    "src": "5491:30:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2240,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5491:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5455:73:18"
                        },
                        "returnParameters": {
                            "id": 2243,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5545:0:18"
                        },
                        "scope": 2311,
                        "src": "5432:114:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2247,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2245,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5872:2:18"
                        },
                        "returnParameters": {
                            "id": 2246,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5891:0:18"
                        },
                        "scope": 2311,
                        "src": "5848:44:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2250,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "actualizeFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2248,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6261:2:18"
                        },
                        "returnParameters": {
                            "id": 2249,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6280:0:18"
                        },
                        "scope": 2311,
                        "src": "6240:41:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2255,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adjustFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2253,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2252,
                                    "name": "_newFeeData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2255,
                                    "src": "6462:26:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2251,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6462:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6452:42:18"
                        },
                        "returnParameters": {
                            "id": 2254,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6511:0:18"
                        },
                        "scope": 2311,
                        "src": "6434:78:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2260,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2256,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6641:2:18"
                        },
                        "returnParameters": {
                            "id": 2259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2258,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2260,
                                    "src": "6691:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2257,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6691:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6690:9:18"
                        },
                        "scope": 2311,
                        "src": "6621:79:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 2265,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2261,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6898:2:18"
                        },
                        "returnParameters": {
                            "id": 2264,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2263,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2265,
                                    "src": "6948:9:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2262,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6948:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6947:11:18"
                        },
                        "scope": 2311,
                        "src": "6879:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 2270,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2266,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7156:2:18"
                        },
                        "returnParameters": {
                            "id": 2269,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2268,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2270,
                                    "src": "7206:9:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2267,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "7206:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7205:11:18"
                        },
                        "scope": 2311,
                        "src": "7140:77:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2275,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2271,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7375:2:18"
                        },
                        "returnParameters": {
                            "id": 2274,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2273,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2275,
                                    "src": "7425:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2272,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7425:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7424:9:18"
                        },
                        "scope": 2311,
                        "src": "7356:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2289,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2278,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2277,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7918:17:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2276,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7918:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7908:33:18"
                        },
                        "returnParameters": {
                            "id": 2288,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2281,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7976:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2279,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7976:7:18",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2280,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7976:9:18",
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
                                    "id": 2284,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7994:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2282,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7994:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2283,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7994:9:18",
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
                                    "id": 2287,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "8012:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2285,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8012:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2286,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8012:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7975:54:18"
                        },
                        "scope": 2311,
                        "src": "7891:139:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2300,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2292,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2291,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8475:17:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2290,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8475:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8465:33:18"
                        },
                        "returnParameters": {
                            "id": 2299,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2295,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8546:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2293,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8546:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2294,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8546:9:18",
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
                                    "id": 2298,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8564:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2296,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8564:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2297,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8564:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8545:36:18"
                        },
                        "scope": 2311,
                        "src": "8445:137:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2305,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2301,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8679:2:18"
                        },
                        "returnParameters": {
                            "id": 2304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2303,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2305,
                                    "src": "8729:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2302,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8729:6:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8728:15:18"
                        },
                        "scope": 2311,
                        "src": "8666:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2310,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2306,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8847:2:18"
                        },
                        "returnParameters": {
                            "id": 2309,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2308,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2310,
                                    "src": "8897:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2307,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8897:6:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8896:15:18"
                        },
                        "scope": 2311,
                        "src": "8832:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2312,
                "src": "1102:7812:18"
            }
        ],
        "src": "597:8318:18"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IRebalancingSetTokenV3.sol",
        "exportedSymbols": {
            "IRebalancingSetTokenV3": [
                2311
            ]
        },
        "id": 2312,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2129,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:18"
            },
            {
                "id": 2130,
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ],
                "nodeType": "PragmaDirective",
                "src": "620:35:18"
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/lib/RebalancingLibrary.sol",
                "file": "../lib/RebalancingLibrary.sol",
                "id": 2132,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 2510,
                "src": "657:67:18",
                "symbolAliases": [
                    {
                        "foreign": 2131,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/IFeeCalculator.sol",
                "file": "./IFeeCalculator.sol",
                "id": 2134,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 1686,
                "src": "725:54:18",
                "symbolAliases": [
                    {
                        "foreign": 2133,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ILiquidator.sol",
                "file": "./ILiquidator.sol",
                "id": 2136,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 1788,
                "src": "780:48:18",
                "symbolAliases": [
                    {
                        "foreign": 2135,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ISetToken.sol",
                "file": "./ISetToken.sol",
                "id": 2138,
                "nodeType": "ImportDirective",
                "scope": 2312,
                "sourceUnit": 2360,
                "src": "829:44:18",
                "symbolAliases": [
                    {
                        "foreign": 2137,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title IRebalancingSetTokenV2\n@author Set Protocol\n * The IRebalancingSetTokenV3 interface provides a light-weight, structured way to interact with the\nRebalancingSetTokenV3 contract from another contract.",
                "fullyImplemented": false,
                "id": 2311,
                "linearizedBaseContracts": [
                    2311
                ],
                "name": "IRebalancingSetTokenV3",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2143,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2139,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1254:2:18"
                        },
                        "returnParameters": {
                            "id": 2142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2141,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2143,
                                    "src": "1304:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2140,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1304:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1303:9:18"
                        },
                        "scope": 2311,
                        "src": "1234:79:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns liquidator instance\n     * @return  ILiquidator    Liquidator instance",
                        "id": 2148,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "liquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1447:2:18"
                        },
                        "returnParameters": {
                            "id": 2147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2146,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2148,
                                    "src": "1497:11:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2145,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "1497:11:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:13:18"
                        },
                        "scope": 2311,
                        "src": "1428:82:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2153,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lastRebalanceTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2149,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1661:2:18"
                        },
                        "returnParameters": {
                            "id": 2152,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2151,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2153,
                                    "src": "1711:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2150,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1711:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1710:9:18"
                        },
                        "scope": 2311,
                        "src": "1630:90:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2158,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceStartTime",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2154,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1859:2:18"
                        },
                        "returnParameters": {
                            "id": 2157,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2156,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2158,
                                    "src": "1909:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1909:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1908:9:18"
                        },
                        "scope": 2311,
                        "src": "1832:86:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2163,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startingCurrentSetAmount",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2159,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2069:2:18"
                        },
                        "returnParameters": {
                            "id": 2162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2161,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2163,
                                    "src": "2119:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2119:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2118:9:18"
                        },
                        "scope": 2311,
                        "src": "2036:92:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2168,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceInterval",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2164,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2264:2:18"
                        },
                        "returnParameters": {
                            "id": 2167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2166,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2168,
                                    "src": "2314:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2314:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2313:9:18"
                        },
                        "scope": 2311,
                        "src": "2238:85:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2174,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getAuctionPriceParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2169,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2498:2:18"
                        },
                        "returnParameters": {
                            "id": 2173,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2172,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2174,
                                    "src": "2524:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2170,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2524:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2171,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2524:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2523:18:18"
                        },
                        "scope": 2311,
                        "src": "2464:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2180,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBiddingParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2175,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2695:2:18"
                        },
                        "returnParameters": {
                            "id": 2179,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2178,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2180,
                                    "src": "2721:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2176,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2721:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2177,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2721:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2720:18:18"
                        },
                        "scope": 2311,
                        "src": "2666:73:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2185,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceState",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2181,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2931:2:18"
                        },
                        "returnParameters": {
                            "id": 2184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2183,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2185,
                                    "src": "2981:24:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_enum$_State_$2485",
                                        "typeString": "enum RebalancingLibrary.State"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2182,
                                        "name": "RebalancingLibrary.State",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2485,
                                        "src": "2981:24:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_enum$_State_$2485",
                                            "typeString": "enum RebalancingLibrary.State"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2980:26:18"
                        },
                        "scope": 2311,
                        "src": "2908:99:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Gets the balance of the specified address.\n     * @param owner      The address to query the balance of.\n@return           A uint256 representing the amount owned by the passed address.",
                        "id": 2192,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2187,
                                    "name": "owner",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2192,
                                    "src": "3264:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2186,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3264:7:18",
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
                            "src": "3254:29:18"
                        },
                        "returnParameters": {
                            "id": 2191,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2190,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2192,
                                    "src": "3331:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2189,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3331:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3330:9:18"
                        },
                        "scope": 2311,
                        "src": "3236:104:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2197,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "manager",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2193,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3446:2:18"
                        },
                        "returnParameters": {
                            "id": 2196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2195,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2197,
                                    "src": "3496:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2194,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3496:7:18",
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
                            "src": "3495:9:18"
                        },
                        "scope": 2311,
                        "src": "3430:75:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2202,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "feeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2198,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3626:2:18"
                        },
                        "returnParameters": {
                            "id": 2201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2200,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2202,
                                    "src": "3676:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2199,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3676:7:18",
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
                            "src": "3675:9:18"
                        },
                        "scope": 2311,
                        "src": "3605:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2207,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "entryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2203,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3794:2:18"
                        },
                        "returnParameters": {
                            "id": 2206,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2205,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2207,
                                    "src": "3844:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2204,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3844:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3843:9:18"
                        },
                        "scope": 2311,
                        "src": "3777:76:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2212,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2208,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4013:2:18"
                        },
                        "returnParameters": {
                            "id": 2211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2210,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2212,
                                    "src": "4063:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2209,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4063:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4062:9:18"
                        },
                        "scope": 2311,
                        "src": "3992:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2217,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rebalanceFeeCalculator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2213,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4232:2:18"
                        },
                        "returnParameters": {
                            "id": 2216,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2215,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2217,
                                    "src": "4282:14:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                        "typeString": "contract IFeeCalculator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2214,
                                        "name": "IFeeCalculator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1685,
                                        "src": "4282:14:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IFeeCalculator_$1685",
                                            "typeString": "contract IFeeCalculator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4281:16:18"
                        },
                        "scope": 2311,
                        "src": "4201:97:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2222,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2219,
                                    "name": "_rebalanceFeeCalldata",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2222,
                                    "src": "4440:36:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2218,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4440:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4430:52:18"
                        },
                        "returnParameters": {
                            "id": 2221,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4499:0:18"
                        },
                        "scope": 2311,
                        "src": "4411:89:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2227,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLiquidator",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2224,
                                    "name": "_newLiquidator",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2227,
                                    "src": "4626:26:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                        "typeString": "contract ILiquidator"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2223,
                                        "name": "ILiquidator",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 1787,
                                        "src": "4626:11:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ILiquidator_$1787",
                                            "typeString": "contract ILiquidator"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4616:42:18"
                        },
                        "returnParameters": {
                            "id": 2226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4675:0:18"
                        },
                        "scope": 2311,
                        "src": "4594:82:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2232,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeRecipient",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2230,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2229,
                                    "name": "_newFeeRecipient",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2232,
                                    "src": "4769:24:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2228,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4769:7:18",
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
                            "src": "4759:40:18"
                        },
                        "returnParameters": {
                            "id": 2231,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4816:0:18"
                        },
                        "scope": 2311,
                        "src": "4735:82:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2237,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setEntryFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2235,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2234,
                                    "name": "_newEntryFee",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2237,
                                    "src": "4898:20:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2233,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4898:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4888:36:18"
                        },
                        "returnParameters": {
                            "id": 2236,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4941:0:18"
                        },
                        "scope": 2311,
                        "src": "4868:74:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2244,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "startRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2242,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2239,
                                    "name": "_nextSet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2244,
                                    "src": "5465:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2238,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5465:7:18",
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
                                    "id": 2241,
                                    "name": "_liquidatorData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2244,
                                    "src": "5491:30:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2240,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5491:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5455:73:18"
                        },
                        "returnParameters": {
                            "id": 2243,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5545:0:18"
                        },
                        "scope": 2311,
                        "src": "5432:114:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2247,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "settleRebalance",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2245,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5872:2:18"
                        },
                        "returnParameters": {
                            "id": 2246,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5891:0:18"
                        },
                        "scope": 2311,
                        "src": "5848:44:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2250,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "actualizeFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2248,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6261:2:18"
                        },
                        "returnParameters": {
                            "id": 2249,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6280:0:18"
                        },
                        "scope": 2311,
                        "src": "6240:41:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2255,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "adjustFee",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2253,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2252,
                                    "name": "_newFeeData",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2255,
                                    "src": "6462:26:18",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 2251,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6462:5:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6452:42:18"
                        },
                        "returnParameters": {
                            "id": 2254,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6511:0:18"
                        },
                        "scope": 2311,
                        "src": "6434:78:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2260,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "naturalUnit",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2256,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6641:2:18"
                        },
                        "returnParameters": {
                            "id": 2259,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2258,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2260,
                                    "src": "6691:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2257,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6691:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6690:9:18"
                        },
                        "scope": 2311,
                        "src": "6621:79:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the current base SetToken with the current allocation\n     * @return           A address representing the base SetToken",
                        "id": 2265,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "currentSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2261,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6898:2:18"
                        },
                        "returnParameters": {
                            "id": 2264,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2263,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2265,
                                    "src": "6948:9:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2262,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "6948:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6947:11:18"
                        },
                        "scope": 2311,
                        "src": "6879:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Returns the address of the next base SetToken with the post auction allocation\n     * @return  address    Address representing the base SetToken",
                        "id": 2270,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nextSet",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2266,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7156:2:18"
                        },
                        "returnParameters": {
                            "id": 2269,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2268,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2270,
                                    "src": "7206:9:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ISetToken_$2359",
                                        "typeString": "contract ISetToken"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 2267,
                                        "name": "ISetToken",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2359,
                                        "src": "7206:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ISetToken_$2359",
                                            "typeString": "contract ISetToken"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7205:11:18"
                        },
                        "scope": 2311,
                        "src": "7140:77:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2275,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "unitShares",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2271,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7375:2:18"
                        },
                        "returnParameters": {
                            "id": 2274,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2273,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2275,
                                    "src": "7425:7:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2272,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7425:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7424:9:18"
                        },
                        "scope": 2311,
                        "src": "7356:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2289,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "placeBid",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2278,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2277,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7918:17:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2276,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7918:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7908:33:18"
                        },
                        "returnParameters": {
                            "id": 2288,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2281,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7976:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2279,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7976:7:18",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 2280,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7976:9:18",
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
                                    "id": 2284,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "7994:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2282,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7994:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2283,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "7994:9:18",
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
                                    "id": 2287,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2289,
                                    "src": "8012:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2285,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8012:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2286,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8012:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7975:54:18"
                        },
                        "scope": 2311,
                        "src": "7891:139:18",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2300,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBidPrice",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2292,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2291,
                                    "name": "_quantity",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8475:17:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2290,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8475:7:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8465:33:18"
                        },
                        "returnParameters": {
                            "id": 2299,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2295,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8546:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2293,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8546:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2294,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8546:9:18",
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
                                    "id": 2298,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2300,
                                    "src": "8564:16:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 2296,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8564:7:18",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 2297,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8564:9:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8545:36:18"
                        },
                        "scope": 2311,
                        "src": "8445:137:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2305,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2301,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8679:2:18"
                        },
                        "returnParameters": {
                            "id": 2304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2303,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2305,
                                    "src": "8729:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2302,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8729:6:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8728:15:18"
                        },
                        "scope": 2311,
                        "src": "8666:78:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 2310,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2306,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8847:2:18"
                        },
                        "returnParameters": {
                            "id": 2309,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2308,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2310,
                                    "src": "8897:13:18",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 2307,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8897:6:18",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8896:15:18"
                        },
                        "scope": 2311,
                        "src": "8832:80:18",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 2312,
                "src": "1102:7812:18"
            }
        ],
        "src": "597:8318:18"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.716Z",
    "devdoc": {
        "author": "Set Protocol * The IRebalancingSetTokenV3 interface provides a light-weight, structured way to interact with the RebalancingSetTokenV3 contract from another contract.",
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
//# sourceMappingURL=IRebalancingSetTokenV3.js.map