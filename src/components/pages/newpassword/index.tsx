"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdRemoveRedEye } from "react-icons/md";
import { logo, yourLogo, setPassword } from "@/assets";
import { FaEyeSlash } from "react-icons/fa";

export const NewPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-3/5 md:w-8/12 flex flex-col lg:flex-row">
        <div className="flex-1  w-full lg:w-1/2 p-4">
          <div className=" flex h-10 items-center  gap-2 mb-2">
            <Image src={logo.src} height={50} width={20} alt="image" />
            <Image src={yourLogo.src} height={80} width={100} alt="image" />
          </div>
          <h2 className="w-36 mb-4 font-poppins text-nowrap font-medium text-3xl">
            Set a password
          </h2>
          <p className="font-poppins font-normal text-sm text-customRemember leading-4">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>
          <form className="space-y-3">
            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full px-3 py-2 mt-5 border border-customInput rounded-lg text-customInput outline-none text-base font-normal"
                placeholder="••••••••"
              />
              <div
                className="absolute inset-y-0 right-3 mt-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <MdRemoveRedEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                Confirm Password
              </label>
              <input
                type={passwordVisible2 ? "text" : "password"}
                className="w-full px-3 py-2 mt-5 border border-customInput rounded-lg text-customInput outline-none text-base font-normal"
                placeholder="••••••••"
              />
              <div
                className="absolute inset-y-0 right-3 mt-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility2}
              >
                {passwordVisible2 ? <MdRemoveRedEye /> : <FaEyeSlash />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 !mt-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Set Password
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 px-2">
          <img src={setPassword.src} alt="Login Image" className="h-full" />
        </div>
      </div>
    </div>
  );
};
