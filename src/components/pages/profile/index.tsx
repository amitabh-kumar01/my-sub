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
} from "@/Redux/userImageSlice";
import { FaArrowRight, FaEdit, FaUserCircle } from "react-icons/fa";
import { AppDispatch, RootState } from "@/Redux/store";

export const Profile: React.FC = () => {
  const [addresses, setAddresses] = useState<string[]>(["Default Address"]);
  const [selectedAddress, setSelectedAddress] = useState<string>(
    addresses[0] || ""
  );
  const { userProfile } = useSelector((state:RootState) => state.profile);
  const dispatch :AppDispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    defaultAddress: "",
    alternativeAddress: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

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
      formData.append("profile_image", image);

      dispatch(updateUserImage(formData))
        .then(() => console.log("Image updated successfully"))
        .catch((error) => console.error("Error updating image:", error));
    }
  };

  const convertBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  //--------------------------------

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("jghfgf", formValues);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveProfile = () => {
    setIsLoading(true);
    // console.log("caleljdfs=>",formvalues)
    dispatch(updateUserProfile(formValues))
  
  };

  return (
    <>
      <div className="max-h-full min-w-full mt-20 rounded-2xl shadow-2xl lg:w-9/12 md:w-full  sm:w-10/12 ">
        <div className="flex justify-between py-2 px-8 place-items-center">
          <h1></h1>
          <button
            onClick={handleSaveProfile}
            className="bg-green-600 flex flex-row items-center gap-2 px-4 h-9 rounded-xl text-white font-medium shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            
          >
            {isLoading ? "Saving..." : "Save"}{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="flex   flex-col lg:flex-row   pb-10 px-8   md:gap-6 gap-1.5">
          <div className="w-full lg:w-1/2 ">
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

            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-6 gap-y-3 mt-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-customInput">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full py-1 px-2 border border-gray-300 rounded-md outline-none"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-customInput">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full py-1 px-2 border border-gray-300 rounded-md outline-none"
                  placeholder={userProfile?.user?.name}
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 ">
                <label className="block text-sm font-medium text-customInput">
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type="password"
                    name="password"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                    placeholder="********"
                  />
                  <button className="ml-4 text-sm bg-customBlueCart rounded-lg font-medium hover:bg-blue-700 text-nowrap py-2 px-6  transition-colors duration-200  text-white">
                    Change Password
                  </button>
                </div>
              </div>

              <div className="col-span-2 ">
                <label className="block text-sm font-medium text-customInput">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                  placeholder={userProfile?.user?.email}
                />
              </div>

              <div className="col-span-2 row-span-1">
                <label className="block text-sm font-medium text-customInput">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  placeholder={userProfile?.user?.phone}
                />
              </div>

              <div className="col-span-2 row-span-1">
                <label className="block text-sm font-medium text-customInput ">
                  Default Address
                </label>
                <input
                  type="text"
                  name="defaultAddress"
                  value={formValues.defaultAddress}
                  onChange={handleInputChange}
                  className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                  placeholder="..................."
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-customInput">
                  Alternative Address
                </label>
                <div className="relative flex items-center">
                  <select
                    className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none items-center"
                    name="selectedAddress"
                    // value={selectedAddress}
                    value={formValues.defaultAddress}
                    // onChange={handleInputChange}
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
                    className="ml-4 text-sm bg-customBlueCart hover:bg-blue-700 rounded-lg font-medium text-nowrap py-2 px-6 transition-colors duration-200 text-white"
                    onClick={openModal}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-customInput">
                Nation
              </label>
              <input
                type="text"
                className="mt-1 block w-full py-5 px-2 border border-gray-300 rounded-md outline-none"
                placeholder="...."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-customInput">
                Gender
              </label>
              <div className="relative">
                <select className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
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
                <select className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
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
                {" "}
                Date of Birth
              </label>
              <div className="flex space-x-4 mt-1">
                <div className="relative">
                  <select className="p-1 py-5 pl-2 pr-10 border border-gray-300 rounded-md outline-none appearance-none">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none outline-none">
                    <span className="text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <select className="p-1 py-5 pl-2 pr-10 border border-gray-300 rounded-md  appearance-none outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <span className="text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <select className="p-1 py-5 pl-3 pr-10 border border-gray-300 rounded-md outline-none appearance-none">
                    <option>2000</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <span className="text-2xl">
                      <RiArrowDropDownLine />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-customInput">
                Subscription
              </label>
              <div className="relative ">
                <select className="mt-1 block w-full py-5 pr-10 pl-2 border border-gray-300 rounded-md appearance-none outline-none">
                  <option>Subscription 1</option>
                  <option>Subscription 2</option>
                  <option>Subscription 3</option>
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
              <div className="flex flex-col md:flex-row gap-y-1 md:space-x-4 mt-2  w-full md:gap-x-3 ">
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
                type="submit"
                className="w-full py-2 !mt-4 px-4 bg-customBlueCart text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal onClose={closeModal} onSave={saveAddress} />}
    </>
  );
};
