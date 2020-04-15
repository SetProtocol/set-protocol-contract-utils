export declare const TradingPoolViewer: {
    "contractName": string;
    "abi": {
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": ({
            "components": {
                "name": string;
                "type": string;
            }[];
            "name": string;
            "type": string;
        } | {
            "name": string;
            "type": string;
            "components"?: undefined;
        })[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
    }[];
    "metadata": string;
    "bytecode": string;
    "deployedBytecode": string;
    "sourceMap": string;
    "deployedSourceMap": string;
    "source": string;
    "sourcePath": string;
    "ast": {
        "absolutePath": string;
        "exportedSymbols": {
            "TradingPoolViewer": number[];
        };
        "id": number;
        "nodeType": string;
        "nodes": ({
            "id": number;
            "literals": string[];
            "nodeType": string;
            "src": string;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "scope"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "absolutePath": string;
            "file": string;
            "id": number;
            "nodeType": string;
            "scope": number;
            "sourceUnit": number;
            "src": string;
            "symbolAliases": {
                "foreign": number;
                "local": any;
            }[];
            "unitAlias": string;
            "literals"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "baseContracts": any[];
            "contractDependencies": any[];
            "contractKind": string;
            "documentation": string;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
                "canonicalName": string;
                "id": number;
                "members": ({
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "stateMutability": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "contractScope"?: undefined;
                        "referencedDeclaration"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "contractScope": any;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "referencedDeclaration": number;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "stateMutability"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "stateMutability"?: undefined;
                        "contractScope"?: undefined;
                        "referencedDeclaration"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                })[];
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "visibility": string;
                "body"?: undefined;
                "documentation"?: undefined;
                "implemented"?: undefined;
                "kind"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "canonicalName": string;
                "id": number;
                "members": ({
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "baseType": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "length": any;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "name"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "baseType": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "stateMutability"?: undefined;
                        };
                        "id": number;
                        "length": any;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "name"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "baseType"?: undefined;
                        "length"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                })[];
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "visibility": string;
                "body"?: undefined;
                "documentation"?: undefined;
                "implemented"?: undefined;
                "kind"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": string;
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                                "expression"?: undefined;
                                "memberName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "stateMutability"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "kind"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": ({
                                "argumentTypes": any;
                                "baseExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "indexExpression": {
                                    "argumentTypes": any;
                                    "hexValue": string;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "subdenomination": any;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "value": string;
                                };
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "arguments"?: undefined;
                                "expression"?: undefined;
                                "kind"?: undefined;
                                "names"?: undefined;
                            } | {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "baseExpression"?: undefined;
                                "indexExpression"?: undefined;
                            })[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "kind"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                    "referencedDeclaration"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "stateMutability": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
                                "declarations": {
                                    "constant": boolean;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "scope": number;
                                    "src": string;
                                    "stateVariable": boolean;
                                    "storageLocation": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": {
                                        "contractScope": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "value": any;
                                    "visibility": string;
                                }[];
                                "id": number;
                                "initialValue": {
                                    "argumentTypes": any;
                                    "baseExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "indexExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "typeName": string;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "arguments": any[];
                                                        "expression": {
                                                            "argumentTypes": any[];
                                                            "expression": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "memberName": string;
                                                            "nodeType": string;
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "memberName": string;
                                                "nodeType": string;
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": any[];
                                        "expression": {
                                            "argumentTypes": any[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
                                "declarations": {
                                    "constant": boolean;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "scope": number;
                                    "src": string;
                                    "stateVariable": boolean;
                                    "storageLocation": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "stateMutability": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "value": any;
                                    "visibility": string;
                                }[];
                                "id": number;
                                "initialValue": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "arguments": any[];
                                        "expression": {
                                            "argumentTypes": any[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "typeName": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "components": {
                                            "argumentTypes": any;
                                            "baseExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "indexExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isInlineArray": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "contractScope": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "contractScope": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": ({
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            } | {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            })[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    }[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": string;
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            })[];
            "scope": number;
            "src": string;
            "literals"?: undefined;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
        })[];
        "src": string;
    };
    "legacyAST": {
        "absolutePath": string;
        "exportedSymbols": {
            "TradingPoolViewer": number[];
        };
        "id": number;
        "nodeType": string;
        "nodes": ({
            "id": number;
            "literals": string[];
            "nodeType": string;
            "src": string;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "scope"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "absolutePath": string;
            "file": string;
            "id": number;
            "nodeType": string;
            "scope": number;
            "sourceUnit": number;
            "src": string;
            "symbolAliases": {
                "foreign": number;
                "local": any;
            }[];
            "unitAlias": string;
            "literals"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "baseContracts": any[];
            "contractDependencies": any[];
            "contractKind": string;
            "documentation": string;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
                "canonicalName": string;
                "id": number;
                "members": ({
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "stateMutability": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "contractScope"?: undefined;
                        "referencedDeclaration"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "contractScope": any;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "referencedDeclaration": number;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "stateMutability"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "stateMutability"?: undefined;
                        "contractScope"?: undefined;
                        "referencedDeclaration"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                })[];
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "visibility": string;
                "body"?: undefined;
                "documentation"?: undefined;
                "implemented"?: undefined;
                "kind"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "canonicalName": string;
                "id": number;
                "members": ({
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "baseType": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "length": any;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "name"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "baseType": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "stateMutability"?: undefined;
                        };
                        "id": number;
                        "length": any;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "name"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                } | {
                    "constant": boolean;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "scope": number;
                    "src": string;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                    "typeName": {
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "baseType"?: undefined;
                        "length"?: undefined;
                    };
                    "value": any;
                    "visibility": string;
                })[];
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "visibility": string;
                "body"?: undefined;
                "documentation"?: undefined;
                "implemented"?: undefined;
                "kind"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": string;
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                                "expression"?: undefined;
                                "memberName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "stateMutability"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "kind"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": ({
                                "argumentTypes": any;
                                "baseExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "indexExpression": {
                                    "argumentTypes": any;
                                    "hexValue": string;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "subdenomination": any;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "value": string;
                                };
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "arguments"?: undefined;
                                "expression"?: undefined;
                                "kind"?: undefined;
                                "names"?: undefined;
                            } | {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "baseExpression"?: undefined;
                                "indexExpression"?: undefined;
                            })[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "kind"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                    "referencedDeclaration"?: undefined;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "stateMutability": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
                                "declarations": {
                                    "constant": boolean;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "scope": number;
                                    "src": string;
                                    "stateVariable": boolean;
                                    "storageLocation": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": {
                                        "contractScope": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "value": any;
                                    "visibility": string;
                                }[];
                                "id": number;
                                "initialValue": {
                                    "argumentTypes": any;
                                    "baseExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "indexExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "typeName": string;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "arguments": any[];
                                                        "expression": {
                                                            "argumentTypes": any[];
                                                            "expression": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "memberName": string;
                                                            "nodeType": string;
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "memberName": string;
                                                "nodeType": string;
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": any[];
                                        "expression": {
                                            "argumentTypes": any[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
                                "declarations": {
                                    "constant": boolean;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "scope": number;
                                    "src": string;
                                    "stateVariable": boolean;
                                    "storageLocation": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "typeName": {
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "src": string;
                                        "stateMutability": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "value": any;
                                    "visibility": string;
                                }[];
                                "id": number;
                                "initialValue": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "arguments": any[];
                                        "expression": {
                                            "argumentTypes": any[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "typeName": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "components": {
                                            "argumentTypes": any;
                                            "baseExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "indexExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isInlineArray": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "expression": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "components": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "id": number;
                            "isConstant": boolean;
                            "isInlineArray": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "memberName": string;
                            "nodeType": string;
                            "referencedDeclaration": any;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "arguments"?: undefined;
                            "kind"?: undefined;
                            "names"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "baseType": {
                                    "contractScope": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "length": any;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "baseType": {
                                        "contractScope": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "length": any;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "memberName"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "nodeType": string;
                        "src": string;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "baseExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "indexExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "baseExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "indexExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
                            "declarations": {
                                "constant": boolean;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "scope": number;
                                "src": string;
                                "stateVariable": boolean;
                                "storageLocation": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": {
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "value": any;
                                "visibility": string;
                            }[];
                            "id": number;
                            "initialValue": {
                                "argumentTypes": any;
                                "hexValue": string;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "subdenomination": any;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "value": string;
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "baseType": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": ({
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            } | {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            })[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    }[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": string[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "contractScope": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "typeName"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "assignments": number[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "stateMutability": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "expression": {
                                    "argumentTypes": any[];
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "typeName": string;
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                                "referencedDeclaration"?: undefined;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                    })[];
                };
                "documentation": any;
                "id": number;
                "implemented": boolean;
                "kind": string;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "stateMutability": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
            })[];
            "scope": number;
            "src": string;
            "literals"?: undefined;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
        })[];
        "src": string;
    };
    "compiler": {
        "name": string;
        "version": string;
    };
    "networks": {};
    "schemaVersion": string;
    "updatedAt": string;
    "devdoc": {
        "author": string;
        "methods": {};
        "title": string;
    };
    "userdoc": {
        "methods": {};
    };
};
