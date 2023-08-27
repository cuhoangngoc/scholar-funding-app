// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./library/Student.sol";
import "./library/Campaign.sol";

error ScholarFunding__NotOwner();
error ScholarFunding__DeadlineNotInFuture();
error ScholarFunding__StudentAlreadyRegistered();
error ScholarFunding__StudentNotRegistered();
error ScholarFunding__MinimumFundingAmountNotReached();
error ScholarFunding__ReceiverAlreadyAdded();
error ScholarFunding__OwnerCannotRegisterAsStudent();

contract ScholarFunding {
	mapping(address => Student) studentByAddress; // address => Student
	Student[] students;
	mapping(uint256 => Campaign) campaigns; // id => Campaign
	uint256 public numberOfCampaigns = 0;
	address internal immutable i_owner;
	uint256 constant MINIMUM_FUNDING_AMOUNT = 0.02 * 1e18;

	constructor(address _owner) {
		i_owner = _owner;
	}

	modifier onlyOwner() {
		if (msg.sender != i_owner) revert ScholarFunding__NotOwner();
		_;
	}

	event CampaignCreated();
	event CampaignFunded();
	event ContractFunded(address indexed sender, string indexed message);
	event StudentRegistered();

	function fund(string memory message) public payable returns (bool) {
		if (msg.value < MINIMUM_FUNDING_AMOUNT)
			revert ScholarFunding__MinimumFundingAmountNotReached();

		// (bool sent, ) = payable(msg.sender).call{ value: msg.value }("");
		emit ContractFunded(msg.sender, message);
		// return sent;
		return true;
	}

	/**
	 * @dev Create a new campaign
	 * @param _owner The address of the owner of the campaign
	 * @param _title The title of the campaign
	 * @param _description The description of the campaign
	 * @param _target The target amount of the campaign
	 * @param _deadline The deadline of the campaign
	 * @param _image The thumbnail of the campaign
	 * @return The id of the campaign
	 */
	function createCampaign(
		address _owner,
		string memory _title,
		string memory _description,
		uint256 _target,
		uint256 _deadline,
		string memory _image
	) public onlyOwner returns (uint256) {
		Campaign storage campaign = campaigns[numberOfCampaigns];

		// if (campaign.deadline < block.timestamp)
		// 	revert ScholarFunding__DeadlineNotInFuture();

		campaign.owner = _owner;
		campaign.title = _title;
		campaign.description = _description;
		campaign.target = _target;
		campaign.deadline = _deadline;
		campaign.amountCollected = 0;
		campaign.image = _image;
		campaign.hasDisbursed = false;
		numberOfCampaigns++;

		emit CampaignCreated();

		return numberOfCampaigns - 1;
	}

	/**
	 * @dev Fund a campaign
	 * @param _id The id of the campaign
	 */
	function fundCampaign(uint256 _id) public payable {
		Campaign storage campaign = campaigns[_id];

		campaign.funders.push(msg.sender);
		campaign.funds.push(msg.value);

		campaign.amountCollected = campaign.amountCollected + msg.value;

		// (bool sent, ) = payable(campaign.owner).call{ value: msg.value }("");

		// if (sent)
		// 	campaign.amountCollected = campaign.amountCollected + msg.value;

		emit CampaignFunded();
	}

	/**
	 * @dev Get the funders and funds of a campaign
	 * @param _id The id of the campaign
	 * @return The funders and funds of the campaign
	 */
	function getFunders(
		uint256 _id
	) public view returns (address[] memory, uint256[] memory) {
		return (campaigns[_id].funders, campaigns[_id].funds);
	}

	function updateReceiversOfCampaign(
		uint256 _id,
		address[] memory _receivers
	) public onlyOwner {
		// check if all receivers are registered or already added;
		for (uint i = 0; i < _receivers.length; i++) {
			if (studentByAddress[_receivers[i]].walletAddress == address(0))
				revert ScholarFunding__StudentNotRegistered();

			for (uint j = 0; j < i; j++) {
				if (_receivers[j] == _receivers[i])
					revert ScholarFunding__ReceiverAlreadyAdded();
			}
		}

		for (uint i = 0; i < _receivers.length; i++)
			campaigns[_id].receivers.push(_receivers[i]);
	}

	function registerStudent(
		string memory _name,
		string memory _studentId,
		string memory _email,
		string memory _cicd
	) public returns (bool) {
		if (studentByAddress[msg.sender].walletAddress != address(0))
			revert ScholarFunding__StudentAlreadyRegistered();

		if (msg.sender == i_owner)
			revert ScholarFunding__OwnerCannotRegisterAsStudent();

		for (uint256 i = 0; i < students.length; i++) {
			if (
				keccak256(abi.encodePacked(students[i].studentId)) ==
				keccak256(abi.encodePacked(_studentId)) ||
				keccak256(abi.encodePacked(students[i].email)) ==
				keccak256(abi.encodePacked(_email)) ||
				keccak256(abi.encodePacked(students[i].cicd)) ==
				keccak256(abi.encodePacked(_cicd))
			) revert ScholarFunding__StudentAlreadyRegistered();
		}

		Student storage newStudent = studentByAddress[msg.sender];
		newStudent.name = _name;
		newStudent.studentId = _studentId;
		newStudent.email = _email;
		newStudent.cicd = _cicd;
		newStudent.walletAddress = msg.sender;

		students.push(newStudent);

		return true;
	}

	/**
	 * @dev Get all campaigns
	 * @return All campaigns
	 */
	function getCampaigns() public view returns (Campaign[] memory) {
		Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);
		for (uint i = 0; i < numberOfCampaigns; i++) {
			Campaign storage item = campaigns[i];
			allCampaigns[i] = item;
		}

		return allCampaigns;
	}

	/**
	 * @dev Get the owner of the contract
	 * @return The owner of the contract
	 */
	function getOwner() public view returns (address) {
		return i_owner;
	}

	function getReceiversOfCampaign(
		uint256 _id
	) public view returns (address[] memory) {
		return campaigns[_id].receivers;
	}

	function getAllStudents() public view returns (Student[] memory) {
		return students;
	}

	function getStudentByAddress(
		address _walletAddress
	) public view returns (Student memory) {
		return studentByAddress[_walletAddress];
	}
}
