import { BreadCrumbs } from "@/assets";
import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Topcomp = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden mt-20">
      <div className="absolute -left-24 -top-10 -right-20 -bottom-20 inset-0 flex items-center justify-center z-10 scale-90 bg-black min-w-dvw bg-opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0">
        <Image
          src={BreadCrumbs}
          alt="Groceries"
          className="object-cover w-full h-full transform scale-x-[-1]"
        />
      </div>

      <div className="relative z-20 flex flex-col justify-center h-full p-8 max-w-screen-xl mx-auto">
        <p className="flex items-center text-sm text-blue-600 mb-2">
          <IoHomeOutline className="mr-1" />
          <span>About Us</span>
        </p>

        <h2 className="text-3xl font-bold text-white">About Us</h2>
      </div>
    </div>
  );
};

export default Topcomp;
