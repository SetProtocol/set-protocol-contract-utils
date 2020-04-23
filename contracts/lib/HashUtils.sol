pragma solidity 0.5.7;

import { AddressArrayUtils } from "./AddressArrayUtils.sol";


library HashUtils {
    using AddressArrayUtils for address[];

    /**
     * Sorts the address array and hashes it using the keccak256 hashing algorithm.
     * @param a The input array
     * @return Returns bytes32 hash
     */
    function sortHash(address[] memory a) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(a.sort()));
    }
}
