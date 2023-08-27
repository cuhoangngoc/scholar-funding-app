import React from "react";
import { calculateBarPercentage } from "../utils/calculateBarPercentage";
import { daysLeft } from "../utils/daysLeft";
import { Address } from "./scaffold-eth/Address";

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(Number(deadline ?? 0));
  const percentage = calculateBarPercentage(target, amountCollected);

  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-primary cursor-pointer hover:scale-105 transition-all duration-200"
      onClick={handleClick}
    >
      <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]" />
      <div className="flex flex-col p-4">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${percentage <= 100 ? percentage : 100}%` }}
          >
            {percentage}%
          </div>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {title}
          </h3>
          <p className="mt-[5px] font-epilogue font-normal text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[1.5rem] text-[#519872] leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className={`font-epilogue font-semibold text-[1.5rem] leading-[22px]`}>{remainingDays}</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] sm:max-w-[120px] truncate">
              Days Left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="flex-1 font-epilogue font-normal truncate flex gap-2 items-center">
            By{" "}
            <span className="">
              <Address address={owner} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
