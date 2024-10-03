"use client";
import React, { useState } from "react";
import { workarrowsvg } from "@/assets";
import Image from "next/image";
import PlandCards from "./PlanCards";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="relative mt-12 ">
      <div className="top grid place-items-center gap-4 mx-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-customDarkBlue">
          Select Your Perfect Plan
        </h2>
        <p className="md:w-1/2 md:px-2 px-3 md:text-center text-gray-500 text-justify">
          All plans come with free delivery and customizable grocery lists.
          Choose the plan that suits your lifestyle and enjoy fresh produce
          daily.
        </p>
        <div className="md:mt-5 md:translate-y-0 translate-y-12 font-semibold md:min-w-80 md:text-sm text-xs min-w-52 flex items-center justify-between">
          <span className={isYearly ? "text-gray-500" : "text-black"}>
            Pay Monthly
          </span>
          <div
            onClick={handleToggle}
            className={`relative inline-block w-12 h-6 cursor-pointer ${
              isYearly ? "bg-gray-400" : "bg-customBlue"
            } rounded-full`}
          >
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
          <span className={isYearly ? "text-black" : "text-gray-500"}>
            Pay Yearly
          </span>
        </div>
      </div>
      <div className="flex  justify-center absolute md:right-[23rem] top-48  md:top-28 right-20 ">
        <Image
          src={workarrowsvg}
          alt="Groceries"
          className="object-contain md:w-20  w-10 h-20 "
        />
        <span className="text-customBlue font-normal top-10 text-xs -right-14 absolute md:top-11 md:left-20  whitespace-nowrap">
          save 25%
        </span>
      </div>
      <PlandCards />
    </div>
  );
};

export default Plans;
