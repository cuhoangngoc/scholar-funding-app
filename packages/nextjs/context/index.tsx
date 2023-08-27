import React, { createContext, useContext } from "react";
import { ethers } from "ethers";
import { useAccount, useWalletClient } from "wagmi";
import {
  useDeployedContractInfo,
  useScaffoldContract,
  useScaffoldContractRead,
  useScaffoldContractWrite,
} from "~~/hooks/scaffold-eth";
import type { Campaign } from "~~/types";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

type StateContextType = {
  address: string | undefined;
  contract: any;
  createCampaign: (form: Campaign) => Promise<void>;
  getCampaigns: () => Promise<any>;
  getUserCampaigns: () => Promise<any>;
  donate: (pId: bigint, amount: string) => Promise<void>;
  getFunders: (pId: bigint) => Promise<any>;
  getCampaignByPid: (pId: bigint) => Promise<any>;
  registerStudent: (name: string, studentId: string, email: string, cicd: string) => Promise<void>;
  getOwnerAddress: () => Promise<string>;
};

const StateContext = createContext({} as StateContextType);

export const StateContextProvider = ({ children }) => {
  const contractNames = getContractNames();
  const contractName = contractNames[0];
  const { data: deployedContractInfo } = useDeployedContractInfo(contractName);

  const { data: walletClient } = useWalletClient();
  const { data: scholarFundingContract } = useScaffoldContract({ contractName, walletClient });

  const { address } = useAccount();

  const { writeAsync: createCampaign } = useScaffoldContractWrite({
    contractName,
    functionName: "createCampaign",
    args: [],
  });

  const publishCampaign = async (form: Campaign) => {
    try {
      const data = await createCampaign({
        args: [
          address, // owner
          form.title, // title
          form.description, // description
          form.target,
          BigInt(new Date(form.deadline.toString()).getTime()), // deadline,
          form.image,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const { data: campaigns } = useScaffoldContractRead({
    contractName,
    functionName: "getCampaigns",
  });
  const getCampaigns = async () => {
    const parsedCampaigns = campaigns?.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toString(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getCampaignByPid = async (pId: bigint) => {
    const parsedCampaigns = campaigns?.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toString(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));
    const filteredCampaign = parsedCampaigns?.find(campaign => campaign.pId === Number(pId));
    return filteredCampaign;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns?.filter(campaign => campaign.owner === address);

    return filteredCampaigns;
  };

  const { writeAsync: fundCampaign } = useScaffoldContractWrite({
    contractName,
    functionName: "fundCampaign",
    args: [],
  });
  const donate = async (pId: bigint, amount: string) => {
    try {
      const data = fundCampaign({
        args: [pId],
        value: amount,
      });

      return data;
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getFunders = async (pId: bigint) => {
    const donations = await scholarFundingContract?.read.getFunders([pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  const { writeAsync: register } = useScaffoldContractWrite({
    contractName,
    functionName: "registerStudent",
    args: [],
  });
  const registerStudent = async (name: string, studentId: string, email: string, cicd: string) => {
    try {
      const data = await register({
        args: [name, studentId, email, cicd],
      });

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getOwnerAddress = async () => {
    const ownerAddress = await scholarFundingContract?.read.getOwner()!;
    return ownerAddress;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract: deployedContractInfo,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getFunders,
        getCampaignByPid,
        registerStudent,
        getOwnerAddress,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
