import { arrowdown, arrowup, Deliverysvg, qasvg, walksvg } from "@/assets";
import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className="mt-20">
      <div className=" flex flex-col  md:text-center items-center md:px-20">
        <h2 className="text-customDarkBlue md:w-1/2  m:text-cxl text-2xl font-semibold">
          How it Works
        </h2>
        <p className="text-gray-500 px-8 md:text-center text-justify">
          All plans come with free delivery and customizable grocery lists.
          Choose the <br /> plan that suits your lifestyle and enjoy fresh
          produce daily.
        </p>
      </div>
      <div className="flex px-10 md:flex-row md:gap-0 gap-10 flex-col  mt-10">
        <div className="flex flex-col gap-4 text-center items-center md:w-1/4 w-full">
          <Image
            width={200}
            src={qasvg}
            alt="Groceries"
            className="object-contain"
          />
          <h5 className="font-semibold">choose a plan</h5>
          <p className="text-gray-800 text-sm w-10/12  text-justify">
            Select from our Basic, Standard, or Premium plans based on your
            household size.
          </p>
        </div>
        <div className=" w- h-48 text-center items-center md:flex hidden">
          <Image
            width={200}
            src={arrowdown}
            alt="Groceries"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 text-center items-center md:w-1/4">
          <Image
            width={200}
            src={Deliverysvg}
            alt="Groceries"
            className="object-contain"
          />
          <h5 className="font-semibold">choose a plan</h5>
          <p className="text-gray-800 text-sm w-10/12  text-justify">
            Select from our Basic, Standard, or Premium plans based on your
            household size.
          </p>
        </div>
        <div className=" w- h-48 text-center items-center md:flex hidden ">
          <Image
            width={200}
            src={arrowup}
            alt="Groceries"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-center gap-4 items-center md:w-1/4">
          <Image
            width={200}
            src={walksvg}
            alt="Groceries"
            className="object-contain"
          />
          <h5 className="font-semibold">choose a plan</h5>
          <p className="text-gray-800 text-sm w-10/12  text-justify">
            Select from our Basic, Standard, or Premium plans based on your
            household size.
          </p> 
        </div>
      </div>
    </div>
  );
};
export default Works;
