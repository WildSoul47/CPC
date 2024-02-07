// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PausableUpgradeable.sol";

contract ERC20Token is ERC20PausableUpgradeable {
    function initialize(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) public virtual initializer {
        __ERC20Token_initialize(name, symbol, initialSupply);
    }

    function __ERC20Token_initialize(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) internal onlyInitializing {
        __ERC20_init(name, symbol);
        _mint(_msgSender(), initialSupply);
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[45] private __gap;
}
