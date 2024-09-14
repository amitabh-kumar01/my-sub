
import {  appstore, latestPlaystore, playstore,  svgAppimg} from "@/assets"; 
import Image from "next/image";
import React from "react";

const Download= () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-20 items-center justify-around bg-customLightBlue  py-2   px-8 lg:px-24">
      {/* Left Section with Text */}
      <div className="flex-1 max-w-lg gap-4">
        <h3 className="md:text-3xl text-2xl font-bold text-customDarkBlue mb-8">Ready to Get Started</h3>
        <p className="text-gray-600 ">
        Join our community of happy customers and start enjoying fresh groceries delivered daily. Sign up now and choose the perfect plan for you.
        </p>
        <div className="flex mt-5 pb-4 md:pb-0 md:justify-normal justify-center">
          <img
            src={appstore.src}
            alt="Groceries"
            className="object-contain md:w-52 w-36"
          /><img
            src={latestPlaystore.src}
            alt="Groceries"
            className=" md:w-56 w-36 "
          />
        </div>
              </div>
      {/* Right Section with Images */}
      <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="relative">
          <Image
            width={400}
            src={svgAppimg}
            alt="Groceries"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
