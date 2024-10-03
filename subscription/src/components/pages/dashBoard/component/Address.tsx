//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {MdOutlineAddLocationAlt,  MdEdit,  MdCheckCircle,  MdDelete,} from "react-icons/md";
import { LuMoreVertical } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppDispatch } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { addUserNewAddress,  defaultAddress, editAddress,  getUserAddress,  removeUserAddress,} from "@/Redux/slices/addressSlice";
import { Address, FormData } from "./types";
import AddressModal from "./AddressMobal";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { usePathname } from "next/navigation";
// Skeleton Component
const SkeletonAddress = () => {
  return (
    <div className="flex min-w-80 flex-col gap-4">
      <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-200 animate-pulse">
        <div className="h-4 bg-gray-300 mb-2 w-24 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-40 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-32 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-28 rounded"></div>
        <div className="h-3 bg-gray-300 w-24 rounded"></div>
      </div>
      <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-gray-200 animate-pulse">
        <div className="h-4 bg-gray-300 mb-2 w-24 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-40 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-32 rounded"></div>
        <div className="h-3 bg-gray-300 mb-1 w-28 rounded"></div>
        <div className="h-3 bg-gray-300 w-24 rounded"></div>
      </div>
    </div>
  );
};

const AddressPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<number | null>(null);
  const [isCredit ,setIsCredit]= useState(false)
  const [loading, setLoading] = useState(true);
  const path = usePathname()
 
  const dispatch: AppDispatch = useDispatch();
  const addressDetail = useSelector(
    (state: RootState) => state.address.address
  );
  const isLoading= useSelector(
    (state: RootState) => state.address.isLoading
  );


  const {register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>();


  useEffect(() => {
    
  
if(addressDetail?.length > 0){
  setLoading(false)
}else{
      setLoading(true);

     dispatch(getUserAddress()).finally(() => {
      setLoading(false);
     })  
}
    if(path.includes("/credit")){
      setIsCredit(true)
    }
  }, [dispatch]);

  useEffect(() => {
    const formattedAddresses: Address[] =
      addressDetail?.map((item: any) => ({
        id: item.id,
        name: item.full_name,
        address: item.address,
        city: item.city,
        pincode: item.pincode,
        phone: item.phone,
        country: item.country,
        isDefault: item.is_default === 1,
      })) || [];
    setAddresses(formattedAddresses);
  }, [addressDetail]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleAddOrEditAddress(data);
setTimeout(() => {
  
    dispatch(getUserAddress());
}, 2000);
  };

  const handleAddOrEditAddress = (data: FormData) => {
    if (editing) {
      dispatch(
        editAddress({id: newAddress.id,name: data.name,phone: data.phone,pincode: data.pincode,address: data.address,city: data.city,country: data.country,isDefault: newAddress.isDefault,
        })
      );
      setAddresses(
        addresses.map((addr) =>
          addr.id === newAddress.id ? { ...addr, ...data } : addr
        )
      );
    } else {
      dispatch(
        addUserNewAddress({
          name: data.name,
          phone: data.phone,
          pincode: data.pincode,
          address: data.address,
          city: data.city,
          country: data.country,
          isDefault: false,
        })
      );
      const newId =
        addresses.length > 0 ? addresses[addresses.length - 1].id! + 1 : 1;
      setAddresses([{ id: newId, ...data, isDefault: false }, ...addresses]);
    }
    reset();
    setShowModal(false);
    setEditing(false);
  };

  const handleEditAddress = (address: Address) => {
    setNewAddress(address);
    setShowModal(true);
    setEditing(true);
    setVisibleOptions(null);
    reset({
      name: address.name,
      phone: address.phone,
      pincode: address.pincode,
      address: address.address,
      city: address.city,
      country: address.country,
    });
  };

  const handleSetDefault = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({ ...addr, isDefault: addr.id === id }))
    );
    dispatch(defaultAddress(id));
    setVisibleOptions(null);
    setTimeout(() => {
  
      dispatch(getUserAddress());
  }, 2000);
  
  };

  const handleRemoveAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    dispatch(removeUserAddress(id));
    setVisibleOptions(null);
    setTimeout(() => {
  
      dispatch(getUserAddress());
  }, 2000);
  
  };

  const [newAddress, setNewAddress] = useState<Address>({
    id: null,
    name: "",
    phone: "",
    pincode: "",
    address: "",
    city: "",
    country: "",
    isDefault: false,
  });
  const closeDropdown = () => {
    setVisibleOptions(null)
}
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <div className="px-8">
      <h1 className="md:text-3xl text-xl font-bold mb-3 text-customDarkBlue">My Address</h1>

      {/* Scrollable Address List */}
      <div className="overflow-y-auto max-h-96 min-h-96 custom-scrollbar scroll-container">
        <div className={`grid grid-cols-1 ${isCredit?"md:grid-cols-1 lg:grid-cols-1":"md:grid-cols-2 lg:grid-cols-2"}  gap-6`}>
        {loading ? (
            // Show skeletons while loading
            <>
              <SkeletonAddress />
            </>
          ):
          (addresses.map((address) => (
            <div
              key={address.id}
              className={`p-6 border border-customBlue rounded-lg shadow-lg hover:shadow-xl transition-shadow relative ${
                address.isDefault ? "border-blue-500 bg-blue-50" : "bg-white"
              }`}
            >
              {/* Default Badge */}
              {address.isDefault && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                  Default
                </span>
              )}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-blue-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {address.name}
                    </p>
                    <p className="text-xs text-gray-600 ">{address.address}</p>
                    <p className="text-xs text-gray-600 ">
                      {address.city}, {address.pincode}
                    </p>
                    <p className="text-xs text-gray-600">
                      Phone: {address.phone}
                    </p>
                    <p className="text-xs text-gray-600">
                      Country: {address.country}
                    </p>
                  </div>
                </div>

                {/* Options Menu Icon */}
                <div className="relative">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() =>
                      visibleOptions === address.id
                        ? setVisibleOptions(null)
                        : setVisibleOptions(address.id)
                    }
                  >
                    <LuMoreVertical className="text-lg" />
                  </button>

                  {/* Actions Dropdown */}
                  {visibleOptions === address.id && (
                    <div ref={ref} className="absolute top-8 right-0 bg-white border border-gray-200 shadow-md rounded-md p-2 z-10">
                      <button
                        className="text-sm text-blue-500 flex whitespace-nowrap items-center gap-1 hover:underline hover:text-blue-700 mb-2"
                        onClick={() => handleEditAddress(address)}
                      >
                        <MdEdit /> Edit
                      </button>
                      {!address.isDefault && (
                        <button
                          className="text-sm text-green-500 flex whitespace-nowrap items-center gap-1 hover:underline hover:text-green-700 mb-2"
                          onClick={() => handleSetDefault(address.id)}
                        >
                          <MdCheckCircle /> Set as Default
                        </button>
                      )}
                      <button
                        className="text-sm text-red-500 flex whitespace-nowrap items-center gap-1 hover:underline hover:text-red-700"
                        onClick={() => handleRemoveAddress(address.id)}
                      >
                        <MdDelete /> Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>

      {/* Add New Address Button */}
      <div className="mt-4">
        <button
          className="px-4 py-3 bg-gradient-to-r  from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          onClick={() => {
            setShowModal(true);
            setEditing(false);
            reset(); // Reset form when adding a new address
          }}
        >
          <MdOutlineAddLocationAlt className="inline mr-1" /> 
          Add new Address
        </button>
      </div>

      {/* Modal for Adding/Editing Address */}
      {showModal && (
        <AddressModal
          showModal={showModal}
          setShowModal={setShowModal}
          onSubmit={handleSubmit(onSubmit)}
          editing={editing}
          reset={reset}
          errors={errors}
          register={register}
        />
      )}
    </div>
  );
};
export default AddressPage;
