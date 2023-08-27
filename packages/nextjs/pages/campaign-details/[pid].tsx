import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { thirdweb } from "../../assets";
import { CountBox, CustomButton, Loader } from "../../components";
import { useStateContext } from "../../context";
import useFetchCampaignDetail from "../../hooks/useFetchCampaignDetail";
import useFetchDonators from "../../hooks/useFetchDonators";
import { calculateBarPercentage } from "../../utils/calculateBarPercentage";
import { daysLeft } from "../../utils/daysLeft";
import { Address } from "~~/components/scaffold-eth";
import { FaEthereum } from "react-icons/fa";

export default function CampaignDetail() {
  const router = useRouter();
  const { pid: pId } = router.query;
  const { campaign, isLoadingCampaignDetail } = useFetchCampaignDetail(pId);
  const { donators } = useFetchDonators(pId, campaign);
  const { getFunders, contract, address, donate, getCampaignByPid } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const remainingDays = daysLeft(Number(campaign?.deadline ?? 0));

  const handleDonate = async () => {
    setIsLoading(true);
    await donate(pId, amount);
    setIsLoading(false);
    router.push("/campaigns");
  };

  if (!campaign) {
    return <Loader content="" />;
  }
  const percentage = calculateBarPercentage(campaign?.target, campaign?.amountCollected);
  return (
    <>
      <Head>
        <title>Campaign Detail</title>
      </Head>
      <div className="mx-6">
        {isLoading && <Loader />}

        <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
          <div className="flex-1 flex-col">
            <img src={campaign?.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${percentage <= 100 ? percentage : 100}%` }}
              >
                {percentage}%
              </div>
            </div>
          </div>

          <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
            <CountBox title="Days Left" value={remainingDays} />
            <CountBox title={`Raised of ${campaign?.target}`} value={campaign?.amountCollected} />
            <CountBox title="Total Backers" value={donators.length} />
          </div>
        </div>

        <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
          <div className="flex-[2] flex flex-col gap-[40px]">
            <div>
              <h4 className="font-epilogue font-semibold text-[18px] uppercase">Creator</h4>

              <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                <Address address={campaign?.owner} />
              </div>
            </div>

            <div>
              <h4 className="font-epilogue font-semibold text-[18px] uppercase">Story</h4>

              <div className="mt-[20px]">
                <p className="font-epilogue font-normal text-[16px] leading-[26px] text-justify">
                  {campaign?.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-epilogue font-semibold text-[18px] uppercase">Donators</h4>

              <div className="mt-[20px] flex flex-col gap-4">
                {donators.length > 0 ? (
                  donators.map((item, index) => (
                    <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                      <p className="font-epilogue font-normal text-[16px] leading-[26px] break-ll">
                        {index + 1}. {item.donator}
                      </p>
                      <p className="font-epilogue font-normal text-[16px] leading-[26px] break-ll flex gap-1 items-center">
                        {item.donation} <FaEthereum />
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="font-epilogue font-normal text-[16px] leading-[26px] text-justify">
                    No donators yet. Be the first one!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Fund</h4>

            <div className="mt-[20px] flex flex-col p-4 bg-primary rounded-[10px]">
              <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center">Fund the campaign</p>
              <div className="mt-[30px]">
                <input
                  type="number"
                  placeholder="ETH 0.1"
                  step="0.01"
                  className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                  value={amount}
                  min="0.02"
                  onChange={e => setAmount(e.target.value)}
                />

                <div className="my-[20px] p-4 bg-secondary rounded-[10px]">
                  <h4 className="font-epilogue font-semibold text-[14px] leading-[22px]">
                    Back it because you believe in it.
                  </h4>
                  <p className="mt-[20px] font-epilogue font-normal leading-[22px]">
                    Support the project for no reward, just because it speaks to you.
                  </p>
                </div>

                <CustomButton
                  btnType="button"
                  title="Fund Campaign"
                  styles="w-full bg-secondary disabled:opacity-50 text-black"
                  handleClick={handleDonate}
                  disabled={amount === "" || amount === "0"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
