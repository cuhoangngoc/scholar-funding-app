// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "./Student.sol";

struct Campaign {
	address owner;
	string title;
	string description;
	uint256 target;
	uint256 deadline;
	uint256 amountCollected;
	string image;
	bool hasDisbursed;
	address[] funders;
	uint256[] funds;
	address[] receivers;
}
