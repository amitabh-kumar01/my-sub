"use client"
import React from "react";
import Image from "next/image";
import { logo, yourLogo, setPassword } from "@/assets";
import { IoIosArrowBack } from "react-icons/io";
import { FormIcon } from "@/components/common/FormIcon";

export const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/5 md:w-8/12 flex flex-col lg:flex-row">
        <div className="flex-1 w-full lg:w-1/2 p-4">
          <div className="flex h-10 items-center gap-2 mb-2">
            <Image src={logo.src} height={50} width={20} alt="image" />
            <Image src={yourLogo.src} height={80} width={100} alt="image" />
          </div>
          <div className="flex items-center">
            <IoIosArrowBack />
            <p className="font-medium text-small my-3">back to login</p>
          </div>
          <h2 className="w-36 mb-4 font-poppins text-nowrap font-medium text-3xl">
            Forgot Your Password?
          </h2>
          <p className="font-poppins font-normal text-sm text-customRemember leading-4">
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>
          <form className="space-y-5">
            <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-gray-700">
              EMail
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-5 border border-customInput rounded-lg text-customInput outline-none text-base font-normal"
              placeholder="john.doe@gmail.com"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="poppins text-sm text-slate-400 mx-4">login</div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <FormIcon />
        </div>

        <div className="w-full lg:w-1/2 px-2">
          <img src={setPassword.src} alt="Login Image" className="h-full" />
        </div>
      </div>
    </div>
  );
};


