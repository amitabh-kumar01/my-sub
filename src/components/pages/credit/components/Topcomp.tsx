"use client"
import React from "react";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";
import AddressPage from "../../dashBoard/component/Address";
interface LeftCompProps {
  path: string; // Specify that path is a string
}



const Topcomp: React.FC<LeftCompProps> = ({ path }) => {  return (
  <div className="flex md:flex-row flex-col  rounded-lg  md:bg-white md:shadow-xl  ">
      <div className="md:w-1/2  rounded-l-lg  grid place-items-center py-3 md:px-12 px-0  " >
        <LeftComp path={path}/>
      </div>

      <div
        className="md:w-1/2  rounded-r-lg grid  place-items-center  py-1 md:px-12 mb-4  "
      >
        {/* <RightComp /> */}
        <AddressPage/>
      </div>
    </div>
  );
};

export default Topcomp;
