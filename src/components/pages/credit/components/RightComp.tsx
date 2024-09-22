
"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAddLocationAlt } from "react-icons/md";

interface Address {
  id: number;
  name: string;
  address: string;
}

const RightComp = () => {
  const [selectedAddress, setSelectedAddress] = useState({
    name: "John Doe",
    address: "123, Main Street, Anytown, USA 12345",
  });
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Work", address: "123, Main Street, Anytown, USA 12345" },
  ]);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: "", address: "" });

  // Handle address selection
  const handleSelectAddress = (address:Address) => {
    setSelectedAddress(address);
  };

  // Handle adding a new address
  const handleAddNewAddress = () => {
    if (newAddress.name && newAddress.address) {
      setAddresses([{ ...newAddress, id: addresses.length + 1 }, ...addresses]);
      setNewAddress({ name: "", address: "" });
      setShowAddAddressModal(false);
    }
  };

  return (
    <div className="md:w-11/12 w-80 px-4 py-4  bg-white">
      {/* Delivery Section */}
      <h2 className="text-2xl font-bold text-customDarkBlue">Delivery</h2>
      <p className="text-sm text-gray-600 ">
        Select where you want your lunch box delivered. Its easy! Just choose
        your address from the options provided below.
      </p>

      {/* Selected Address Card */}
      <div className="mt-2 p-4 bg-customBlue  shadow-blue-300 shadow-xs hover:shadow-md min-h-28 hover:shadow-blue-300 rounded-lg flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-blue-600">
        <div>
          <p className="font-bold text-lg text-white ">{selectedAddress.name}</p>
          <p className="text-sm  mt-1 text-customLightBlue">{selectedAddress.address}</p>
        </div>
        <button
          className="text-sm bg-white border border-gray-300 rounded-md px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-200"
        >
          Change
        </button>
      </div>

      {/* Add New Address Button */}
      <div className="mt-4 w-full  flex  justify-center">
        <button
          className="w-fit flex  items-center justify-center gap-2 p-3 border rounded-md border-customBlue   text-sm transition-all duration-300 ease-in-out hover:bg-customBlue hover:text-white text-customBlue "
          onClick={() => setShowAddAddressModal(!showAddAddressModal)}
        >
          <span className="text-xl">
            <MdOutlineAddLocationAlt />
          </span>{" "}
          Add new address
        </button>
      </div>

      {/* My Address Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-customDarkBlue">My address</h3>

        <div className="mt-2 max-h-40 overflow-y-auto scroll-container">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="mt-2 p-4 flex items-center gap-3 border rounded-md shadow cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100"
              onClick={() => handleSelectAddress(address)}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <FaLocationDot />
              </div>
              <div>
                <p className="text-sm font-bold text-customDarkBlue">{address.name}</p>
                <p className="text-xs text-gray-600">{address.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-4 flex justify-center">
        <button className="bg-customBlue text-white w-fit py-1 px-6  rounded-md text-lg transition-transform duration-300 ease-in-out hover:scale-105">
          Continue
        </button>
      </div>

      {/* Add New Address Modal */}
      {showAddAddressModal && (
        <div className="fixed inset-0 bg-gray-500  bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white  md:mx-0 mx-4 p-6 rounded-md shadow-lg max-w-lg w-full transform transition-all duration-500 ease-in-out scale-100 opacity-100">
            <h4 className="text-lg font-bold mb-4">Add New Address</h4>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 outline-none focus:border-customBlue border-gray-700 border rounded shadow-sm"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 outline-none focus:border-customBlue border-gray-700 border rounded shadow-sm"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="text-sm bg-gray-200 border border-gray-300 rounded-md px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300"
                onClick={() => setShowAddAddressModal(false)}
              >
                Cancel
              </button>
              <button
                className="text-sm bg-customBlue text-white rounded-md px-4 py-2 transition-all duration-300 ease-in-out hover:bg-blue-700"
                onClick={handleAddNewAddress}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightComp;
