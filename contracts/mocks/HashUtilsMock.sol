pragma solidity 0.5.7;

import { HashUtils } from "../lib/HashUtils.sol";


contract HashUtilsMock {
    function testSortHash(address[] calldata _addressArray) external pure returns(bytes32) {
        return HashUtils.sortHash(_addressArray);
    }
}