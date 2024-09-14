
import { discoversvg } from "@/assets"; 
import Image from "next/image";
import React from "react";

const Discover = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-customLightBlue mt-10 py-16 px-7 lg:px-24">
      {/* Left Section with Text */}
      <div className="flex-1 max-w-lg">
        <h3 className="md:text-3xl text-2xl font-bold  text-customDarkBlue mb-8">
          Discover the benefits of our subscription service.
        </h3>
        <div className="mt-14 ml-2">
          <div className="">
            <div className="flex  items-start py-4 border-l relative border-customBlue border-dashed  ">
              <div className="w-3 h-3 bg-customBlue rounded-full absolute -left-1.5 -top-2 "></div>
              <div className="ml-4">
                <h4 className=" text-xl absolute -top-4 ri font-semibold text-customDarkBlue">Quality</h4>
                <ul className="list-disc   list-outside pl-5 text-gray-700 font-light mt-2 text-sm">
                  <li className="">Fresh and organic produce sourced from local farms.</li>
                  <li>Commitment to sustainable and eco-friendly practices.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start border-l py-4 relative border-customBlue border-dashed ">
              <div className="w-3 h-3 bg-customBlue  rounded-full absolute -left-1.5 top-6 "></div>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-customDarkBlue">Convenience</h4>
                <ul className="list-disc   list-outside pl-5 text-gray-700 font-light mt-2 text-sm">
                  <li>Hassle-free daily morning  deliveries right to your doorstep.</li>
                  <li>No more grocery runs or long lines.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start border-l pt-4  h-32 relative border-customBlue border-dashed ">
              <div className="w-3 h-3 bg-customBlue rounded-full absolute -left-1.5 top-6 "></div>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-customDarkBlue">Flexibility</h4>
                <ul className="list-disc   list-outside pl-5 text-gray-700 font-light mt-2 text-sm">
                  <li>Easily switch plans or customize your orders.</li>
                  <li>Pause or cancel anytime with no .</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start py-4 relative  border-customBlue border-dashed ">
              <div className="w-3 h-3 bg-customBlue rounded-full absolute -left-1.5 -top-0 "></div>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-customDarkBlue absolute -top-2">Customer Service</h4>
                <ul className="list-disc   list-outside pl-5 text-gray-700 font-light mt-2 text-sm">
                  <li>24/7 dedicated support team ready to assist you.</li>
                  <li>Easy-to-use app and website for seamless management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section with Images */}
      <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={discoversvg}
            alt="Groceries"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
