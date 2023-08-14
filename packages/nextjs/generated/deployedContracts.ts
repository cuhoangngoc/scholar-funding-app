const contracts = {
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
              name: "ScholarFunding__DeadlineNotInFuture",
              type: "error",
            },
            {
              inputs: [],
              name: "ScholarFunding__NotOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "campaigns",
              outputs: [
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
              ],
              stateMutability: "view",
              type: "function",
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
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "donateToCampaign",
              outputs: [],
              stateMutability: "payable",
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
                      internalType: "address[]",
                      name: "donators",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "donations",
                      type: "uint256[]",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "studentId",
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
                      name: "students",
                      type: "tuple[]",
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
              name: "getDonators",
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
              name: "getStudentOfCampaign",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "studentId",
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
                  name: "",
                  type: "string",
                },
              ],
              name: "students",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "studentId",
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
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "studentId",
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
                  name: "_students",
                  type: "tuple[]",
                },
              ],
              name: "updateStudentsOfCampaign",
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
