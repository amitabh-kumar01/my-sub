"use client"
import React from "react";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NewReviewCard from "./newReviewCard";

const Testimonial = () => {
  const reviewCardRef = React.useRef<{ scrollLeft: () => void; scrollRight: () => void }>(null);

  return (
    <div className="bg-gray-100 pb-10">
      <div className="flex md:justify-between md:px-20 justify-around ">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4 ">
          Client Testimonial
        </h3>
        <div className="flex gap-2 text-black">
          {/* Left Arrow */}
          <span
            className="text-center p-1 font-light  text-xl hover:text-white hover:bg-green-500 w-7 h-7 flex items-center border rounded-full"
            onClick={() => reviewCardRef.current?.scrollLeft()}
          >
            <GoArrowLeft />
          </span>
          {/* Right Arrow */}
          <span
            className="text-center p-1 text-xl hover:bg-green-500 w-7 h-7 flex items-center border font-thin hover:text-white   rounded-full"
            onClick={() => reviewCardRef.current?.scrollRight()}
          >
            <GoArrowRight />
          </span>
        </div>
      </div>
      <div className="md:pl-10">
        {/* Pass ref to ReviewCard */}
        <NewReviewCard ref={reviewCardRef} />
      </div>
    </div>
  );
};

export default Testimonial;
