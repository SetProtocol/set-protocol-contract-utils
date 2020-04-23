pragma solidity 0.5.7;

import { AddressArrayUtils } from "../lib/AddressArrayUtils.sol";


contract AddressArrayUtilsMock {
    using AddressArrayUtils for address[];

    function testSort(address[] calldata _addressArray) external pure returns(address[] memory) {
        return _addressArray.sort();
    }
}