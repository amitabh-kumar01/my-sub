"use client";
import { DeliveryBoy, Heroimgsvg } from "@/assets"; 
import { getUserAddress } from "@/Redux/slices/addressSlice";
import { AppDispatch } from "@/Redux/store";
import { fetchSubscriptions } from "@/Redux/slices/subscriptionSlice";
import { getUserDetail } from "@/Redux/slices/userSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Topcomp = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true); // State to track which slide is active
  const [animate, setAnimate] = useState(false); // Add animation state
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubscriptions());
    dispatch(getUserDetail());
    dispatch(getUserAddress());
  }, [dispatch]);

  // Toggle between slides with animation
  const toggleSlide = () => {
    setAnimate(true); 
    setTimeout(() => {
      setIsFirst(!isFirst);
      setAnimate(false); 
    }, 300); 
  };

  return (
    <div className="bg-customLightBlue">
      {/* Wrapper for the carousel */}
      <div
        className={`transition-all duration-1000 relative flex cursor-pointer mt-20 md:flex-row flex-col-reverse items-center justify-between bg-customLightBlue p-16 ${
          animate ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
        onClick={toggleSlide}
      >
        {/* Left Section */}
        <div className="z-10 max-w-md md:mt-0 mt-60">
          {isFirst ? (
            <>
              <h1 className="md:text-huge text-2xl md:leading-10 md:whitespace-nowrap font-semibold mb-4 text-customDarkBlue">
                Fresh Groceries at Your <br />
                Doorstep Every Morning
              </h1>
              <p className="text-lg mb-6 text-wrap">
                Pick a plan, customize your groceries, and enjoy the convenience
                of daily delivery.
              </p>
              <div className="flex items-center justify-between text-sm pl-2 bg-white gap-2 ">
                <span className="text-gray-500 ">
                  <BsSend />
                </span>
                <input
                  type="text"
                  className="py-3  max-w-44 md:max-w-full outline-none rounded-lg flex-1 "
                  placeholder="Enter your email address"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="px-2 md:px-4 md:ml-4 py-3 bg-customBlue text-white rounded-lg hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="md:text-huge text-2xl md:leading-10 md:whitespace-nowrap font-semibold mb-4 text-customDarkBlue">
                Fast & Reliable <br />
                Delivery Service
              </h1>
              <p className="text-lg mb-6 text-wrap">
                Our delivery partners ensure that your groceries are delivered
                fresh every day.
              </p>
              <div className="flex items-center justify-between text-sm pl-2 bg-white gap-2 ">
                <span className="text-gray-500 ">
                  <BsSend />
                </span>
                <input
                  type="text"
                  className="py-3  max-w-44 md:max-w-full outline-none rounded-lg flex-1 "
                  placeholder="Enter your email address"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="px-2 md:px-4 md:ml-4 py-3 bg-customBlue text-white rounded-lg hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </>
          )}
        </div>

        {/* Right Section (Image) */}
        <div className="absolute right-0 top-0 bottom-0">
          <Image
            width={500}
            height={500}
            src={isFirst ? Heroimgsvg : DeliveryBoy}
            alt="Hero Image"
            className="object-cover"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 bg-customLightBlue pb-4">
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-500 ${
            isFirst ? "bg-customBlue" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-500 ${
            isFirst ? "bg-gray-500" : "bg-customBlue"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Topcomp;
