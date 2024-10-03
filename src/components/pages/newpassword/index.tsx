//@ts-nocheck
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "@/Redux/slices/userSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import { logo, yourLogo, setPassword } from "@/assets";

export const NewPassword = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, success, error } = useSelector(
    (state: RootState) => state.user
  );

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateForm = () => {
    let formErrors = { oldPassword: "", newPassword: "", confirmPassword: "" };
    if (!oldPassword) formErrors.oldPassword = "Old password is required.";
    if (!newPassword) formErrors.newPassword = "New password is required.";
    if (!confirmPassword)
      formErrors.confirmPassword = "Confirm password is required.";
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match!";
    }
    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await dispatch(updatePassword({ oldPassword, newPassword })).unwrap();
      alert("Password updated successfully!");
    } catch (err) {
      console.error("Error updating password:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 md:flex-row">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-9/12 md:w-11/12 w-full sm:w-10/12  flex flex-col md:flex-row">
        <div className="flex-1 w-full md:w-1/2 p-4">
          <div className="flex h-10 items-center gap-2 mb-2">
            <Image src={logo.src} height={50} width={20} alt="logo" />
            <Image src={yourLogo.src} height={80} width={100} alt="your logo" />
          </div>
          <h2 className="w-36 mb-4 font-poppins text-nowrap font-medium text-3xl">
            Set a password
          </h2>
          <p className="font-poppins font-normal text-sm text-customRemember leading-4">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                Old Password
              </label>
              <input
                type={oldPasswordVisible ? "text" : "password"}
                className={`w-full px-3 py-2 mt-5 border ${
                  errors.oldPassword ? "border-red-500" : "border-customInput"
                } rounded text-customInput outline-none text-base font-normal`}
                placeholder="••••••••"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-3 mt-4 flex items-center cursor-pointer"
                onClick={toggleOldPasswordVisibility}
              >
                {oldPasswordVisible ? <MdRemoveRedEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div>
              {" "}
              {errors.oldPassword && (
                <p className="text-red-500 text-sm">{errors.oldPassword}</p>
              )}
            </div>

            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                New Password
              </label>

              <input
                type={newPasswordVisible ? "text" : "password"}
                className={`w-full px-3 py-2 mt-5 border  ${
                  errors.newPassword ? "border-red-500" : "border-customInput"
                } rounded text-customInput outline-none text-base font-normal`}
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <div
                className="absolute inset-y-0 right-3 mt-4 flex items-center justify-center cursor-pointer"
                onClick={toggleNewPasswordVisibility}
              >
                {newPasswordVisible ? <MdRemoveRedEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div>
              {" "}
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword}</p>
              )}
            </div>

            <div className="relative">
              <label className="absolute block mt-3 bg-white ml-3 px-2 text-sm font-medium text-customInput">
                Confirm Password
              </label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className={`w-full px-3 py-2 mt-5 border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-customInput"
                } rounded text-customInput outline-none text-base font-normal`}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-3 mt-4 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? <MdRemoveRedEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 !mt-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {isLoading ? "Updating..." : "Set Password"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 mt-3">
              Error updating password: {error}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/2 px-2 hidden md:block">
          <img
            src={setPassword.src}
            alt="Set Password Image"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};
