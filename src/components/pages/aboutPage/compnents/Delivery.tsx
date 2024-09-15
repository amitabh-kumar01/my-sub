import { aboutimg3, checksvg, discoversvg } from "@/assets";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between jbg-white py-16 px-6 lg:px-24 ">
      {/* Left Section with Images */}
      <div className=" ">
        <Image
          width={500}
          height={500}
          src={aboutimg3}
          alt="Groceries"
          className="object-contain max-w-full"
        />
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 px-1 max-w-full lg:max-w-md text-center lg:text-left md:mt-0 mt-8">
        <h3 className="text-xl  md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4">
          We Delivered, You Enjoy Your Order.
        </h3>
        <p className="text-gray-600 mb-6 text-justify">
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
          consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
          mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
          elementum.
        </p>
        <p className="flex items-center gap-2 text-sm my-2 font-normal text-gray-600">
          <span className="w-4 h-4 rounded-full text-center border-2 border-customLightBlue bg-customLightBlue">
            <img src={checksvg.src} alt="" />
          </span>
          Sed in metus pellentesque.
        </p>
        <p className="flex items-center gap-2 text-sm my-2 font-normal text-gray-600">
          <span className="w-4 h-4 rounded-full text-center border-2 border-customLightBlue bg-customLightBlue">
            <img src={checksvg.src} alt="" />
          </span>
          Fusce et ex commodo, aliquam nulla.
        </p>
        <p className="flex items-center gap-2 text-sm font-normal text-gray-600">
          <span className="w-4 h-4 rounded-full text-center border-2 border-customLightBlue bg-customLightBlue">
            <img src={checksvg.src} alt="" />
          </span>
          Maecenas ut nunc fringilla erat varius.
        </p>
        <button className="px-7 ml-2 py-2 bg-customBlue mt-6 text-white rounded-full text-base  hover:bg-blue-600 flex gap-2 items-center">
          shop now
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Delivery;
