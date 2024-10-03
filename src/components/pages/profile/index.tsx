//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { svgvisa, mcsvg } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserImage,
  getUserProfile,
  updateUserProfile,
} from "@/Redux/slices/userImageSlice";
import { FaArrowRight, FaEdit, FaUserCircle } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";

export const Profile: React.FC = () => {
  const [addresses, setAddresses] = useState<string[]>(["Default Address"]);
  const [selectedAddress, setSelectedAddress] = useState<string>(
    addresses[0] || ""
  );
  const { userProfile } = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      defaultAddress: "",
      alternativeAddress: "",
      birthdate: "",
      nation: "",
      gender: "",
      language: "",
      subscription: "",
      paymentMethod: "",
      password: "",
    },
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setLoadingMessage("Loading...");
    dispatch(getUserProfile()).then((res: any) => {
      if (res.payload) {
        const user = res.payload.user;
        setValue("firstName", user.name || "");
        setValue("lastName", user.name || "");
        setValue("email", user.email || "");
        setValue("phone", user.phone || "");
        setValue("defaultAddress", user.defaultAddress || "");
        setValue("birthdate", user.birthdate || "");
      }
      setLoadingMessage("");
    });
    return () => setLoadingMessage("");
  }, [dispatch, setValue]);

  const saveAddress = (address: string) => {
    if (address.trim()) {
      setAddresses((prevAddresses) => [...prevAddresses, address]);
      setSelectedAddress(address);
    }
    closeModal();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedImage(file);
      handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (file) {
      const image = await convertBase64(file);
      const formData = new FormData();
      formData.append("profile_image", image as string);

      dispatch(updateUserImage(formData))
        .then(() => console.log("Image updated successfully"))
        .catch((error: any) => console.error("Error updating image:", error));
    }
  };

  const convertBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const resultAction = await dispatch(updateUserProfile(data));
      if (updateUserProfile.fulfilled.match(resultAction)) {
        console.log("Profile updated successfully!");
        toast.success("Profile updated successfully!", { duration: 3000 });
      } else {
        toast.error(
          "Profile update failed: " + (resultAction.payload || "Unknown error"),
          { duration: 3000 }
        );
      }
    } catch (error) {
      toast.error(
        "Profile update failed: " + (error.message || "Unknown error"),
        { duration: 3000 }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center md:flex-row">
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        {isLoading ? (
          <RingLoader color="#1792fe" />
        ) : (
          <div className="max-h-full  min-w-full rounded-2xl shadow-2xl lg:w-7/12 md:w-full sm:w-10/12">
            <div className="flex justify-between pt-2 px-8 place-items-center">
              {loadingMessage ? (
                <h1 className="text-green-600 font-semibold text-base">
                  {loadingMessage}
                </h1>
              ) : (
                <h1 className="text-2xl font-bold text-gray-800 md:text-xl lg:text-2xl">
                  Profile
                </h1>
              )}
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-green-600 flex flex-row items-center gap-2 px-4 h-9 rounded-xl text-white font-medium shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                {isLoading ? "Saving..." : "Save"}{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row  md:pb-6 px-8 lg:gap-12  gap-1">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center justify-center relative">
                  {userProfile?.user?.profile_image ? (
                    <img
                      src={userProfile?.user?.profile_image}
                      alt="User"
                      className="w-20 h-20 rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="w-20 h-20 text-gray-400" />
                  )}

                  <span
                    className="bg-customBlue p-1.5 absolute mt-16 ml-9 rounded-full text-white text-base cursor-pointer"
                    onClick={handleImageUpload}
                  >
                    <FaEdit />
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e);
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mt-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-customInput">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full py-1 px-2 border border-gray-300 rounded-md outline-none"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-customInput">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full py-1 px-2 border border-gray-300 rounded-md outline-none"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 ">
                    <label className="block text-sm font-medium text-customInput">
                      Password
                    </label>
                    <div className="flex items-center">
                      <input
                        type="password"
                        className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <button className="ml-4 text-sm bg-customBlueCart rounded-lg font-medium hover:bg-blue-700 text-nowrap py-2 px-6 transition-colors duration-200 text-white">
                        Change Password
                      </button>
                    </div>
                    {errors.password && (
                      <span className="text-red-500 text-sm">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 ">
                    <label className="block text-sm font-medium text-customInput">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 row-span-1">
                    <label className="block text-sm font-medium text-customInput">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 row-span-1">
                    <label className="block text-sm font-medium text-customInput ">
                      Default Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                      {...register("defaultAddress", {
                        required: "Default Address is required",
                      })}
                    />
                    {errors.defaultAddress && (
                      <span className="text-red-500 text-sm">
                        {errors.defaultAddress.message}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-customInput">
                      Alternative Address
                    </label>
                    <div className="relative flex items-center">
                      <select
                        className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none items-center"
                        {...register("alternativeAddress")}
                        value={selectedAddress}
                        onChange={(e) => setSelectedAddress(e.target.value)}
                      >
                        {addresses.map((address, index) => (
                          <option key={index} value={address}>
                            {address}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-24 pointer-events-none">
                        <span className="text-2xl">
                          <RiArrowDropDownLine />
                        </span>
                      </div>
                      <button
                        type="button"
                        className="ml-4 text-sm bg-customBlueCart hover:bg-blue-700 rounded-lg font-medium text-nowrap py-2 px-6 transition-colors duration-200 text-white"
                        onClick={openModal}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 my-2">
                {" "}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-customInput">
                    Nation
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                    {...register("nation")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-customInput">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none"
                      {...register("gender")}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <span className="text-2xl">
                        <RiArrowDropDownLine />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-customInput">
                    Language
                  </label>
                  <div className="relative">
                    <select
                      className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none"
                      {...register("language")}
                    >
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <span className="text-2xl">
                        <RiArrowDropDownLine />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-customInput">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="p-1 py-5 pl-2 pr-2.5 border border-gray-300 rounded-md outline-none w-full "
                      {...register("birthdate", {
                        required: "Date of Birth is required",
                      })}
                    />
                  </div>
                  {errors.birthdate && (
                    <span className="text-red-500 text-sm">
                      {errors.birthdate.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-customInput">
                    Subscription
                  </label>
                  <div className="relative">
                    <select
                      className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none"
                      {...register("subscription")}
                    >
                      <option value="">Select Subscription</option>
                      <option value="Subscription 1">Subscription 1</option>
                      <option value="Subscription 2">Subscription 2</option>
                      <option value="Subscription 3">Subscription 3</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <span className="text-2xl">
                        <RiArrowDropDownLine />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 w-full">
                  <label className="block text-sm font-medium text-customInput">
                    Payment Method
                  </label>
                  <div className="flex flex-col md:flex-row gap-y-1 md:space-x-4 mt-2 w-full md:gap-x-3 ">
                    <div className="border rounded py-5 md:w-1/2 w-full bg-customWhite items-center flex flex-row gap-4 px-4">
                      <Image src={svgvisa} alt="" height={46} width={46} />

                      <div className="flex flex-col gap-px ">
                        <p className="text-sm font-semibold">Visa ....1054</p>
                        <p className="text-sm font-normal">dsdhvdvdvhw</p>
                      </div>
                    </div>
                    <div className="border rounded py-5 md:w-1/2 w-full bg-customWhite items-center flex flex-row md:gap-3 px-4">
                      <Image src={mcsvg} alt="" height={46} width={46} />

                      <div className="flex flex-col gap-px  ">
                        <p className="text-sm font-semibold">Visa ....1054</p>
                        <p className="text-sm font-normal">dsdhvdvdvhw</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full py-2 !mt-4 px-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isModalOpen && <Modal onClose={closeModal} onSave={saveAddress} />}
      </div>
    </>
  );
};
