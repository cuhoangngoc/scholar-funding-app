const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        ScholarFunding: {
          address: "0x8Ec7c7126b5a6360f639Fd014eea611b79bEcA5b",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ScholarFunding__MinimumFundingAmountNotReached",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__NotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__OwnerCannotRegisterAsStudent",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__ReceiverAlreadyAdded",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__StudentAlreadyRegistered",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__StudentNotRegistered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [],
              name: "CampaignCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "CampaignFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              name: "ContractFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "StudentRegistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_target",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_deadline",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_image",
                  type: "string",
                },
              ],
              name: "createCampaign",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              name: "fund",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "fundCampaign",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllStudents",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "studentId",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "cicd",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "walletAddress",
                      type: "address",
                    },
                  ],
                  internalType: "struct Student[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCampaigns",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "target",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountCollected",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "image",
                      type: "string",
                    },
                    {
                      internalType: "bool",
                      name: "hasDisbursed",
                      type: "bool",
                    },
                    {
                      internalType: "address[]",
                      name: "funders",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "funds",
                      type: "uint256[]",
                    },
                    {
                      internalType: "address[]",
                      name: "receivers",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct Campaign[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "getFunders",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "getReceiversOfCampaign",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_walletAddress",
                  type: "address",
                },
              ],
              name: "getStudentByAddress",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "studentId",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "cicd",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "walletAddress",
                      type: "address",
                    },
                  ],
                  internalType: "struct Student",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfCampaigns",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_studentId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_cicd",
                  type: "string",
                },
              ],
              name: "registerStudent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_receivers",
                  type: "address[]",
                },
              ],
              name: "updateReceiversOfCampaign",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        ScholarFunding: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "ScholarFunding__MinimumFundingAmountNotReached",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__NotOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__OwnerCannotRegisterAsStudent",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__ReceiverAlreadyAdded",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__StudentAlreadyRegistered",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__StudentNotRegistered",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [],
              name: "CampaignCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "CampaignFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              name: "ContractFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "StudentRegistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_target",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_deadline",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_image",
                  type: "string",
                },
              ],
              name: "createCampaign",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "message",
                  type: "string",
                },
              ],
              name: "fund",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "fundCampaign",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllStudents",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "studentId",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "cicd",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "walletAddress",
                      type: "address",
                    },
                  ],
                  internalType: "struct Student[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getCampaigns",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "target",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountCollected",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "image",
                      type: "string",
                    },
                    {
                      internalType: "bool",
                      name: "hasDisbursed",
                      type: "bool",
                    },
                    {
                      internalType: "address[]",
                      name: "funders",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "funds",
                      type: "uint256[]",
                    },
                    {
                      internalType: "address[]",
                      name: "receivers",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct Campaign[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "getFunders",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "getReceiversOfCampaign",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_walletAddress",
                  type: "address",
                },
              ],
              name: "getStudentByAddress",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "studentId",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "cicd",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "walletAddress",
                      type: "address",
                    },
                  ],
                  internalType: "struct Student",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "numberOfCampaigns",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_studentId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_cicd",
                  type: "string",
                },
              ],
              name: "registerStudent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_receivers",
                  type: "address[]",
                },
              ],
              name: "updateReceiversOfCampaign",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
