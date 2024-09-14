"use client";
import { person1, person2, person3 } from "@/assets";
import React, { useState } from "react";
import { RiVisaLine } from "react-icons/ri";

const LeftComp = () => {

  return (
    <div className="md:min-w-full  w-80 ">
      <div className="md:w-11/12 p-4  md:py-6  md:px-8  bg-white ">
        <h2 className="text-xl font-semibold md:mb-2 text-customBlack px-2">
          Order
        </h2>
        <div className="flex w-full justify-between text-center items-center text-gray-700 text-sm mb-4 px-2">
          <p>Order Id : 2134256432</p>
          <p>status : dispatch</p>
        </div>
        <div className="flex w-full justify-between text-center items-center px-2 text-gray-700 text-sm mb-4">
          <p className="mb-6 text-xs font-normal text-gray-500 whitespace-nowrap">
            Order date : 27/02/2929
          </p>

          <p className="mb-6 text-xs  text-green-500 font-bold">
            Delivery time : 32/03/2030
          </p>
        </div>
        {/* //----------------- products ------------------------- */}
        <Proudcts/>
        <MobileProudcts/>
      </div>
    </div>
  );
};
const MobileProudcts =()=>{
  return (
    <div className="md:hidden flex flex-col w-full  justify-between gap-4 border-t pt-10">
    <div className="flex flex-col justify-between w-full   text-xs text-gray-500 items-center gap-2 border-b border-black pb-4">
      <div className="flex gap-4 items-center flex-col text-center shadow-sm">
        <img src={person1.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row items-center justify-between w-full  md:items-end md:px-2 px-8">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
    <div className="flex flex-col justify-between w-full   text-xs text-gray-500 items-center gap-2 border-b border-black pb-4">
      <div className="flex gap-4 items-center flex-col text-center">
        <img src={person3.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row items-center justify-between w-full  md:items-end md:px-2 px-8">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
    <div className="flex flex-col justify-between w-full   text-xs text-gray-500 items-center gap-2 border-b border-black pb-4">
      <div className="flex gap-4 items-center flex-col text-center">
        <img src={person2.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row items-center justify-between w-full  md:items-end md:px-2 px-8">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
  </div>

  )
}

const Proudcts =()=>{
  return (
    <div className="md:flex hidden flex-col w-full  justify-between gap-4 border-t pt-10  ">
    <div className="flex justify-between w-full  shadow p-2 rounded-xl  text-xs text-gray-500 items-center gap-2">
      <div className="flex gap-4 items-center ">
        <img src={person1.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end px-2">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
    <div className="flex justify-between w-full shadow p-2 rounded-xl  text-xs text-gray-500 items-center gap-2">
      <div className="flex gap-4 items-center">
        <img src={person2.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end px-2">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
    <div className="flex justify-between w-full shadow p-2 rounded-xl  text-xs text-gray-500 items-center gap-2">
      <div className="flex gap-4 items-center">
        <img src={person3.src} alt="person1" />
        <div>
          <p>mac book pro 14</p>
          <div className="flex gap-2">
            <span>space gray |</span>
            <span>32gb |</span>
            <span>1tb</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end px-2">
        <span className="text-xl text-gray-800 font-semibold">
          $324532
        </span>
        <span>Qty : 1</span>
      </div>
    </div>
  </div>

  )
}
export default LeftComp;
