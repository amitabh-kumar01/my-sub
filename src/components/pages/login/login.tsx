"use client";
import React, { useState } from "react";
import Image from "next/image";
import { login, logo, yourLogo } from "@/assets";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { FormIcon } from "@/components/common/FormIcon";
import Link from "next/link";
import { LoginUser } from "@/Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/Redux/store";
interface FormData {
  email: string;
  pwd: string;
}

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch :AppDispatch= useDispatch();
  const router = useRouter();
  const isLoading = useSelector((state :RootState) => state.user.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const resultAction = await dispatch(LoginUser(data));

      if (LoginUser.fulfilled.match(resultAction)) {
        toast.success("Login successful!",{duration:4000});
        router.push("/interest");
      } else {
        if (resultAction.payload) {
          toast.error(`Login failed: `);
        } else {
          toast.error("Login failed: Unknown error");
        }
      }
    } catch (error) {
      toast.error(`Login failed: `);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row">
      <Toaster />
      {isLoading ? (
        <RingLoader color="#1792fe" />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-9/12 md:w-11/12 w-full sm:w-10/12  flex flex-col md:flex-row">
          <div className="flex-1 w-full md:w-1/2 p-4">
            <div className="flex h-8 gap-2 mb-6">
              <div className="flex h-10 items-center justify-center gap-2 mb-2">
                <Image src={logo.src} height={50} width={20} alt="image" />
                <Image src={yourLogo.src} height={80} width={100} alt="image" />
              </div>
            </div>
            <h2 className="w-36 mb-4 font-poppins text-customRemember font-medium text-3xl">
              Login
            </h2>

            <p className="font-poppins text-customRemember font-normal text-sm leading-4">
              Login to access your travelwise account
            </p>
            <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-5 border border-customInput rounded-lg outline-none text-customInput text-base font-normal"
                  placeholder="john.doe@gmail.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="relative">
                <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-full py-2 px-3 mb-2 mt-5 border border-customInput outline-none rounded-lg text-customInput text-base font-normal"
                  placeholder="••••••••"
                  {...register("pwd", { required: "Password is required" })}
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center mt-3 cursor-pointer text-customInput"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <MdRemoveRedEye /> : <FaEyeSlash />}
                </div>
                {errors.pwd && (
                  <p className="text-red-500">{errors.pwd.message}</p>
                )}
              </div>

              <div className="flex justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 text-customRemember font-medium text-base text-nowrap"
                  />
                  Remember me
                </label>
                <Link
                  href="/forgotpassword"
                  className="w-28 text-customForgot mr-3 font-poppins font-medium text-sm leading-2 text-nowrap text-right"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2 !mt-4 px-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center font-poppins font-medium text-sm">
              <p>
                Do not have an account?
                <Link
                  href="/signup"
                  className="text-customForgot font-poppins ml-1"
                >
                  Sign up
                </Link>
              </p>
              <div className="flex items-center mt-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="font-normal text-sm text-customInput mx-4">
                  Or login with
                </div>

                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <FormIcon />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 hidden md:block">
            <img src={login.src} alt="Login Image" className="h-full" />
          </div>
        </div>
      )}
    </div>
  );
};
