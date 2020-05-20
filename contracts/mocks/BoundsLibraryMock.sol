pragma solidity 0.5.7;
pragma experimental "ABIEncoderV2";

import { BoundsLibrary } from "../lib/BoundsLibrary.sol";


contract BoundsLibraryMock {
    using BoundsLibrary for BoundsLibrary.Bounds;

    BoundsLibrary.Bounds public bounds;

    constructor(uint256 _lower, uint256 _upper)
        public
    {
        bounds.lower = _lower;
        bounds.upper = _upper;
    }

    function testIsValid(BoundsLibrary.Bounds calldata _bounds) external pure {
        require(_bounds.isValid(), "Not a valid bound struct");
    }

    function testIsWithin(uint256 _value) external view returns (bool) {
        return bounds.isWithin(_value);
    }

    function testIsOutside(uint256 _value) external view returns (bool) {
        return bounds.isOutside(_value);
    }
}