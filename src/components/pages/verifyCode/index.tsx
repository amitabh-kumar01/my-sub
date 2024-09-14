"use client";
import React, { useState } from "react";
import Image from "next/image";
import { login, logo, setPassword, yourLogo } from "@/assets";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export const VerifyCode = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-8/12 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <div className=" flex h-10 items-center  gap-2 mb-2">
            <Image src={logo.src} height={50} width={20} alt="image" />
            <Image src={yourLogo.src} height={80} width={100} alt="image" />
          </div>
          <div className="flex items-center">
            <IoIosArrowBack />
            <p className="font-medium text-small my-3">back to login</p>
          </div>
          <h2 className="w-36 mb-4 font-poppins text-nowrap font-medium text-3xl">
            Verify code
          </h2>
          <form className="space-y-1">
            <p className="font-poppins font-normal text-sm text-customRemember leading-4">
              An authentication code has been sent to your email.
            </p>
            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-gray-700 ">
                Enter Code
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full px-3 py-2 mt-5 border border-customInput rounded-lg text-customInput outline-none text-base font-normal"
                placeholder="••••••••"
              />
              <div
                className="absolute inset-y-0 right-3  flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <span className="justify-center mt-3">
                    <MdRemoveRedEye />
                  </span>
                ) : (
                  <span className="justify-center mt-3">
                    <FaEyeSlash />
                  </span>
                )}
              </div>
            </div>

            <p className="font-medium font-poppins text-sm !my-3">
              Didn’t receive a code?
              <a href="#" className="text-customBlueCart ml-1">
                Resend
              </a>
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              verify
            </button>
          </form>
        </div>

        <div className="w-full  md:w-2/3 px-1 flex items-center justify-center">
          <Image src={login.src} height={800} width={500} alt="image" />
        </div>
      </div>
    </div>
  );
};
