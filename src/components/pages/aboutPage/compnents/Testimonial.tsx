import React from "react";
import ReviewCard from "../../landingpage/components/reviewCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 pb-10">
      <div className="flex md:justify-between md:px-20 justify-around ">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4 ">
          Client Testimonail
        </h3>
        <div className="flex gap-2 text-black">
          <span className="text-center p-1 font-light  text-xl hover:text-white hover:bg-green-500 w-7 h-7 flex items-center border rounded-full">
            <GoArrowLeft/>
          </span>
          <span className="text-center p-1 text-xl hover:bg-green-500 w-7 h-7 flex items-center border font-thin hover:text-white   rounded-full">
            <GoArrowRight/>
          </span>
        </div>
      </div>
      <div className="md:pl-10">
        <ReviewCard />
      </div>
    </div>
  );
};

export default Testimonial;
