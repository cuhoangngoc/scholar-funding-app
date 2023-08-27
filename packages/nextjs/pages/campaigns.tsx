import { useEffect, useState } from "react";
import Head from "next/head";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <Head>
        <title>All campaigns</title>
      </Head>
      <DisplayCampaigns title={"All Campaigns"} isLoading={isLoading} campaigns={campaigns}></DisplayCampaigns>
    </>
  );
}
