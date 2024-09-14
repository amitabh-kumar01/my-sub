"use client"
import React from "react";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";

const Topcomp = () => {
  return (
  <div className="flex md:flex-row flex-col-reverse  rounded-lg  md:bg-white md:shadow-xl mt-4 ">
      <div className="md:w-1/2  rounded-l-lg  grid place-items-center py-3 md:px-12  " >
        <LeftComp />
      </div>

      <div
        className="md:w-1/2  rounded-r-lg grid  place-items-center  py-3 md:px-12  "
      >
        <RightComp />
      </div>
    </div>
  );
};

export default Topcomp;
