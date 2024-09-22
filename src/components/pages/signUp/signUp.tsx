"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signUp, logo, yourLogo } from "@/assets";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { FormIcon } from "@/components/common/FormIcon";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "@/Redux/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/Redux/store";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  pwd: string;
  cpwd: string;
  check: string;
}

export const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.check) {
      alert("Accept privacy policy first");
      return;
    }

    try {
      const resultAction = await dispatch(RegisterUser(data));

      if (RegisterUser.fulfilled.match(resultAction)) {
        toast.success("signup successful!");
        router.push("/login");
      } else {
        if (resultAction.payload) {
          toast.error(`sign up failed: `);
        } else {
          toast.error("Sign up failed: Unknown error");
        }
      }
    } catch (error) {
      toast.error(`Login failed: `);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row border-2">
      <Toaster />
      {isLoading ? (
        <RingLoader color="#1792fe" />
      ) : (
        <div className="bg-white  rounded-lg shadow-lg w-4/5 md:w-4/5 flex flex-col md:flex-row">
          <div className="flex gap-28">
            <div className="flex-1 w-full lg:w-4/6 p-4">
              <div className="flex h-8 gap-2 mb-6">
                <div className="flex h-10 items-center justify-center gap-2 mb-2">
                  <Image src={logo.src} height={50} width={20} alt="image" />
                  <Image
                    src={yourLogo.src}
                    height={80}
                    width={100}
                    alt="image"
                  />
                </div>
              </div>
              <h2 className="w-36 mb-4 font-poppins font-medium text-3xl">
                Sign up
              </h2>
              <p className="font-poppins font-normal text-xs  text-gray-600  ">
                Let’s get you all set up so you can access your personal
                account.
              </p>

              <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-4">
                  <div className="w-1/2 relative">
                    <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 mt-5 border border-customInput rounded text-customInput outline-none text-base font-normal"
                      placeholder="John"
                      {...register("fname", {
                        required: "First name is required",
                      })}
                    />
                    {errors.fname && (
                      <p className="text-red-500">{errors.fname.message}</p>
                    )}
                  </div>
                  <div className="w-1/2 relative">
                    <label className="absolute block mt-3 bg-white  ml-3 px-2 text-xs font-normal  text-customInput">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 mt-5 border border-customInput rounded outline-none text-customInput text-base font-normal"
                      placeholder="Doe"
                      {...register("lname", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lname && (
                      <p className="text-red-500">{errors.lname.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4 relative">
                  <div className="w-1/2">
                    <label className="absolute block mt-3 bg-white ml-3 px-2 text-xs font-normal text-customInput">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 mt-5 border border-customInput rounded outline-none text-customInput text-base font-normal"
                      placeholder="john.doe@gmail.com"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="w-1/2 relative">
                    <label className="absolute block mt-3 bg-white ml-3 px-2 text-xs font-normal text-customInput">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 mt-5 border border-customInput rounded outline-none text-customInput text-base font-normal"
                      placeholder="+1234567890"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute block mt-3 bg-white ml-3 px-2 text-xs font-normal text-customInput">
                    Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-full px-3 py-2 mt-5 border border-customInput outline-none rounded text-customInput text-base font-normal"
                    placeholder="••••••••"
                    {...register("pwd", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <MdRemoveRedEye className="mt-3" />
                    ) : (
                      <FaEyeSlash className="mt-3" />
                    )}
                  </div>
                  {errors.pwd && (
                    <p className="text-red-500">{errors.pwd.message}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="absolute block mt-3 bg-white ml-3 px-2 text-xs font-normal text-customInput">
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    className="w-full px-3 py-2 mt-5 border border-customInput outline-none rounded text-customInput text-base font-normal mb-4"
                    placeholder="••••••••"
                    {...register("cpwd", {
                      validate: (value) =>
                        value === watch("pwd") || "Passwords must match",
                    })}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? (
                      <MdRemoveRedEye className="mt-2" />
                    ) : (
                      <FaEyeSlash className="mt-2" />
                    )}
                  </div>
                  {errors.cpwd && (
                    <p className="text-red-500">{errors.cpwd.message}</p>
                  )}
                </div>

                <div className="flex flex-col items-start  font-medium font-poppins text-sm mb-8">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        {...register("check", {
                          required: "You must accept the privacy policy",
                        })}
                      />
                      <label className="font-poppins font-md text-xs text-center flex items-center text-customRemember whitespace-nowrap">
                        I agree to the
                        <a
                          href="#"
                          className="text-customForgot font-poppins mx-1 whitespace-nowrap"
                        >
                          Terms
                        </a>{" "}
                        and
                        <a
                          href="#"
                          className="text-customForgot font-poppins ml-1 "
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {errors.check && (
                      <p className="text-red-500">{errors.check.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-3  text-white bg-customBlue rounded font-poppins font-normal text-sm translate-y-3"
                >
                  create account
                </button>
              </form>

              <div className="font-poppins text-xs font-normal text-center mt-5">
                Already have an account?
                <Link href="/login" className="text-blue-500 ml-2">
                  Login
                </Link>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="poppins text-slate-400 mx-4 text-xs">
                  or sign up with
                </div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <FormIcon />
            </div>
            <div className="hidden w-full md:block md:w-2/6 rounded-r-lg mt-10 mr-20">
              <img
                src={signUp.src}
                alt="sign up"
                className="w-full h-auto object-cover rounded-r-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
