
"use client";
import { Heroimgsvg } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

const Topcomp = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true); // Keeping state for other future changes, if needed

  return (
    <>
      <div
        className="relative flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16 bg-customLightBlue transition-all duration-1000 mt-12 md:mt-20"
      >
        {/* Left Section */}
        <div className="z-10 w-full md:w-1/2 text-center md:text-left md:mt-0 mt-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-customDarkBlue leading-snug">
            Fresh Groceries at Your <br />
            Doorstep Every Morning
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-700">
            Pick a plan, customize your groceries, and enjoy the convenience of
            daily delivery.
          </p>
          <div className="flex items-center justify-center md:justify-start text-sm bg-white p-2 gap-2 rounded-lg">
            <span className="text-gray-500 ">
              <BsSend />
            </span>
            <input
              type="text"
              className="p-3 outline-none rounded-lg flex-1"
              placeholder="Enter your email address"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <Image
            width={400}
            height={400}
            src={Heroimgsvg}
            alt="Groceries"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>

      {/* Pagination Dot */}
      <div className="flex justify-center gap-2 bg-customLightBlue pb-4">
        <div className="w-2 h-2 bg-customBlue rounded-full"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
    </>
  );
};

export default Topcomp;
