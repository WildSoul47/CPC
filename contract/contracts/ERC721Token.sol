// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract ERC721Token is ERC721Upgradeable {
    string private _baseTokenURI;

    function initialize(string memory name, string memory symbol, string memory baseTokenURI) initializer public {
        __ERC721_init(name, symbol);
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }
}