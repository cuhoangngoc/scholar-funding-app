import Image from "next/image";
import { useRouter } from "next/router";
import { loader } from "../assets";
import FundCard from "./FundCard";
import { v4 as uuidv4 } from "uuid";
import { Campaign } from "~~/types";
import Link from "next/link";
import { useStateContext } from "../context";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  isLoading: boolean;
  campaigns: Campaign[];
};

const DisplayCampaigns = ({ title, isLoading, campaigns }: Props) => {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState("");
  const handleNavigate = (campaign: Campaign) => {
    router.push({
      pathname: "/campaign-details/[pid]",
      query: {
        pid: campaign.pId,
      },
    });
  };
  const { getOwnerAddress, address } = useStateContext();

  useEffect(() => {
    const fetchOwnerAddress = async () => {
      const ownerAddress = await getOwnerAddress();
      setOwnerAddress(ownerAddress);
    };
    fetchOwnerAddress();
  }, [ownerAddress, address]);

  return (
    <div className="mt-8 mx-6">
      <h1 className="font-epilogue font-semibold text-[18px] text-left flex justify-between">
        <span>
          {title} ({campaigns?.length})
        </span>
        {address === ownerAddress && (
          <Link href="/create-campaigns" className="btn btn-outline btn-primary border-2 font-extrabold">
            Create a new campaign
          </Link>
        )}
      </h1>

      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-[1rem] gap-[2rem] place-content-around place-items-center">
        {isLoading && <Image src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}

        {!isLoading && campaigns?.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading &&
          campaigns?.length > 0 &&
          campaigns?.map((campaign: Campaign) => (
            <FundCard key={uuidv4()} {...campaign} handleClick={() => handleNavigate(campaign)} />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
