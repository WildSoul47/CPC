// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

contract AuthVerify is Initializable, ContextUpgradeable {

    address public ERC721Token;
    address public ERC20Token;

    function initialize(address nft, address token) initializer public {
        require(nft != address(0), "AuthVerify: params invalid");
        ERC721Token = nft;
        ERC20Token = token;
    }

    function Verify(uint256 tokenId) public view returns(bool) {
        address owner = IERC721Upgradeable(ERC721Token).ownerOf(tokenId);
        bool bok = false;
        bok = (_msgSender() == owner);
        return bok;
    }
}