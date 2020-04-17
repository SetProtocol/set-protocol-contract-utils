"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICToken = {
    "contractName": "ICToken",
    "abi": [
        {
            "constant": false,
            "inputs": [],
            "name": "exchangeRateCurrent",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "exchangeRateStored",
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
            "name": "decimals",
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
            "constant": false,
            "inputs": [
                {
                    "name": "mintAmount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "redeemTokens",
                    "type": "uint256"
                }
            ],
            "name": "redeem",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.7+commit.6da8b019\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"exchangeRateStored\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"mintAmount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"exchangeRateCurrent\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"redeemTokens\",\"type\":\"uint256\"}],\"name\":\"redeem\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Set Protocol * Interface for interacting with Compound cTokens\",\"methods\":{\"exchangeRateCurrent()\":{\"return\":\"Calculated exchange rate scaled by 1e18\"},\"mint(uint256)\":{\"params\":{\"mintAmount\":\"The amount of the underlying asset to supply\"},\"return\":\"uint 0=success, otherwise a failure\"},\"redeem(uint256)\":{\"details\":\"Accrues interest whether or not the operation succeeds, unless reverted\",\"params\":{\"redeemTokens\":\"The number of cTokens to redeem into underlying\"},\"return\":\"uint 0=success, otherwise a failure (see ErrorReporter.sol for details)\"}},\"title\":\"ICToken\"},\"userdoc\":{\"methods\":{\"exchangeRateCurrent()\":{\"notice\":\"Calculates the exchange rate from the underlying to the CTokenAccrue interest then return the up-to-date exchange rate\"},\"mint(uint256)\":{\"notice\":\"Sender supplies assets into the market and receives cTokens in exchangeAccrues interest whether or not the operation succeeds, unless reverted\"},\"redeem(uint256)\":{\"notice\":\"Sender redeems cTokens in exchange for the underlying asset\"}}}},\"settings\":{\"compilationTarget\":{\"set-protocol-contracts/contracts/core/interfaces/ICToken.sol\":\"ICToken\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"set-protocol-contracts/contracts/core/interfaces/ICToken.sol\":{\"keccak256\":\"0x661dd1d6e349160dd01e275b8138c9c78fe296abbb7d54ecdbc03b6be35cc5e8\",\"urls\":[\"bzzr://731700a131b20732ffba3070eaa6e0cdec2f42c7493d5af3f24e605cb3022fcb\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "/*\n    Copyright 2020 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.5.7;\n\n\n/**\n * @title ICToken\n * @author Set Protocol\n *\n * Interface for interacting with Compound cTokens\n */\ninterface ICToken {\n\n    /**\n     * Calculates the exchange rate from the underlying to the CToken\n     *\n     * @notice Accrue interest then return the up-to-date exchange rate\n     * @return Calculated exchange rate scaled by 1e18\n     */\n    function exchangeRateCurrent()\n        external\n        returns (uint256);\n\n    function exchangeRateStored() external view returns (uint256);\n\n    function decimals() external view returns(uint8);\n\n    /**\n     * Sender supplies assets into the market and receives cTokens in exchange\n     *\n     * @notice Accrues interest whether or not the operation succeeds, unless reverted\n     * @param mintAmount The amount of the underlying asset to supply\n     * @return uint 0=success, otherwise a failure\n     */\n    function mint(uint mintAmount) external returns (uint);\n\n    /**\n     * @notice Sender redeems cTokens in exchange for the underlying asset\n     * @dev Accrues interest whether or not the operation succeeds, unless reverted\n     * @param redeemTokens The number of cTokens to redeem into underlying\n     * @return uint 0=success, otherwise a failure (see ErrorReporter.sol for details)\n     */\n    function redeem(uint redeemTokens) external returns (uint);\n}",
    "sourcePath": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
    "ast": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
        "exportedSymbols": {
            "ICToken": [
                1662
            ]
        },
        "id": 1663,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1632,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:12"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ICToken\n@author Set Protocol\n * Interface for interacting with Compound cTokens",
                "fullyImplemented": false,
                "id": 1662,
                "linearizedBaseContracts": [
                    1662
                ],
                "name": "ICToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": "Calculates the exchange rate from the underlying to the CToken\n     * @notice Accrue interest then return the up-to-date exchange rate\n@return Calculated exchange rate scaled by 1e18",
                        "id": 1637,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exchangeRateCurrent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1633,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "999:2:12"
                        },
                        "returnParameters": {
                            "id": 1636,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1635,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1637,
                                    "src": "1036:7:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1634,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1036:7:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1035:9:12"
                        },
                        "scope": 1662,
                        "src": "971:74:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1642,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exchangeRateStored",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1638,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1078:2:12"
                        },
                        "returnParameters": {
                            "id": 1641,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1640,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1642,
                                    "src": "1104:7:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1639,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1104:7:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1103:9:12"
                        },
                        "scope": 1662,
                        "src": "1051:62:12",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1647,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1643,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1136:2:12"
                        },
                        "returnParameters": {
                            "id": 1646,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1645,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1647,
                                    "src": "1161:5:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1644,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1161:5:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1160:7:12"
                        },
                        "scope": 1662,
                        "src": "1119:49:12",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Sender supplies assets into the market and receives cTokens in exchange\n     * @notice Accrues interest whether or not the operation succeeds, unless reverted\n@param mintAmount The amount of the underlying asset to supply\n@return uint 0=success, otherwise a failure",
                        "id": 1654,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1650,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1649,
                                    "name": "mintAmount",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1654,
                                    "src": "1498:15:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1648,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1498:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1497:17:12"
                        },
                        "returnParameters": {
                            "id": 1653,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1652,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1654,
                                    "src": "1533:4:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1651,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1533:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1532:6:12"
                        },
                        "scope": 1662,
                        "src": "1484:55:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "@notice Sender redeems cTokens in exchange for the underlying asset\n@dev Accrues interest whether or not the operation succeeds, unless reverted\n@param redeemTokens The number of cTokens to redeem into underlying\n@return uint 0=success, otherwise a failure (see ErrorReporter.sol for details)",
                        "id": 1661,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1657,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1656,
                                    "name": "redeemTokens",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1898:17:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1655,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1898:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1897:19:12"
                        },
                        "returnParameters": {
                            "id": 1660,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1659,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1935:4:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1658,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1935:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1934:6:12"
                        },
                        "scope": 1662,
                        "src": "1882:59:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1663,
                "src": "726:1217:12"
            }
        ],
        "src": "597:1346:12"
    },
    "legacyAST": {
        "absolutePath": "set-protocol-contracts/contracts/core/interfaces/ICToken.sol",
        "exportedSymbols": {
            "ICToken": [
                1662
            ]
        },
        "id": 1663,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1632,
                "literals": [
                    "solidity",
                    "0.5",
                    ".7"
                ],
                "nodeType": "PragmaDirective",
                "src": "597:22:12"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": "@title ICToken\n@author Set Protocol\n * Interface for interacting with Compound cTokens",
                "fullyImplemented": false,
                "id": 1662,
                "linearizedBaseContracts": [
                    1662
                ],
                "name": "ICToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": null,
                        "documentation": "Calculates the exchange rate from the underlying to the CToken\n     * @notice Accrue interest then return the up-to-date exchange rate\n@return Calculated exchange rate scaled by 1e18",
                        "id": 1637,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exchangeRateCurrent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1633,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "999:2:12"
                        },
                        "returnParameters": {
                            "id": 1636,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1635,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1637,
                                    "src": "1036:7:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1634,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1036:7:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1035:9:12"
                        },
                        "scope": 1662,
                        "src": "971:74:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1642,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exchangeRateStored",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1638,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1078:2:12"
                        },
                        "returnParameters": {
                            "id": 1641,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1640,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1642,
                                    "src": "1104:7:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1639,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1104:7:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1103:9:12"
                        },
                        "scope": 1662,
                        "src": "1051:62:12",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": null,
                        "id": 1647,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1643,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1136:2:12"
                        },
                        "returnParameters": {
                            "id": 1646,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1645,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1647,
                                    "src": "1161:5:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 1644,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1161:5:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1160:7:12"
                        },
                        "scope": 1662,
                        "src": "1119:49:12",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "Sender supplies assets into the market and receives cTokens in exchange\n     * @notice Accrues interest whether or not the operation succeeds, unless reverted\n@param mintAmount The amount of the underlying asset to supply\n@return uint 0=success, otherwise a failure",
                        "id": 1654,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1650,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1649,
                                    "name": "mintAmount",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1654,
                                    "src": "1498:15:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1648,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1498:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1497:17:12"
                        },
                        "returnParameters": {
                            "id": 1653,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1652,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1654,
                                    "src": "1533:4:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1651,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1533:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1532:6:12"
                        },
                        "scope": 1662,
                        "src": "1484:55:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    },
                    {
                        "body": null,
                        "documentation": "@notice Sender redeems cTokens in exchange for the underlying asset\n@dev Accrues interest whether or not the operation succeeds, unless reverted\n@param redeemTokens The number of cTokens to redeem into underlying\n@return uint 0=success, otherwise a failure (see ErrorReporter.sol for details)",
                        "id": 1661,
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 1657,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1656,
                                    "name": "redeemTokens",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1898:17:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1655,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1898:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1897:19:12"
                        },
                        "returnParameters": {
                            "id": 1660,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 1659,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 1661,
                                    "src": "1935:4:12",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 1658,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1935:4:12",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1934:6:12"
                        },
                        "scope": 1662,
                        "src": "1882:59:12",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "external"
                    }
                ],
                "scope": 1663,
                "src": "726:1217:12"
            }
        ],
        "src": "597:1346:12"
    },
    "compiler": {
        "name": "solc",
        "version": "0.5.7+commit.6da8b019.Linux.g++"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-03-27T02:16:56.700Z",
    "devdoc": {
        "author": "Set Protocol * Interface for interacting with Compound cTokens",
        "methods": {
            "exchangeRateCurrent()": {
                "return": "Calculated exchange rate scaled by 1e18"
            },
            "mint(uint256)": {
                "params": {
                    "mintAmount": "The amount of the underlying asset to supply"
                },
                "return": "uint 0=success, otherwise a failure"
            },
            "redeem(uint256)": {
                "details": "Accrues interest whether or not the operation succeeds, unless reverted",
                "params": {
                    "redeemTokens": "The number of cTokens to redeem into underlying"
                },
                "return": "uint 0=success, otherwise a failure (see ErrorReporter.sol for details)"
            }
        },
        "title": "ICToken"
    },
    "userdoc": {
        "methods": {
            "exchangeRateCurrent()": {
                "notice": "Calculates the exchange rate from the underlying to the CTokenAccrue interest then return the up-to-date exchange rate"
            },
            "mint(uint256)": {
                "notice": "Sender supplies assets into the market and receives cTokens in exchangeAccrues interest whether or not the operation succeeds, unless reverted"
            },
            "redeem(uint256)": {
                "notice": "Sender redeems cTokens in exchange for the underlying asset"
            }
        }
    }
};
//# sourceMappingURL=ICToken.js.map