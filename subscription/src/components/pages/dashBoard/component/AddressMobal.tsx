// @ts-nocheck
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormData } from './types';

interface AddressModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  onSubmit: SubmitHandler<FormData>;
  editing: boolean;
  reset: () => void;
  errors: any;
  register: any;
}

const AddressModal: React.FC<AddressModalProps> = ({
  showModal,
  setShowModal,
  onSubmit,
  editing,
  reset,
  errors,
  register,
}) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-md shadow-2xl max-w-lg w-full transform transition-all duration-500">
          <h4 className="text-lg font-bold mb-4 text-gray-800">
            {editing ? "Edit Address" : "Add New Address"}
          </h4>

          <form onSubmit={onSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full border-customBlue border outline-none rounded shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                className="mt-1 block w-full border-customBlue border outline-none rounded shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Phone number must be at least 10 digits" },
                  pattern: { value: /^[0-9]+$/, message: "Phone number must only contain digits" },
                })}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Pincode */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                className="mt-1 block w-full border-customBlue border rounded outline-none shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                {...register("pincode", {
                  required: "Pincode is required",
                  minLength: { value: 6, message: "Pincode must be at least 6 digits" },
                  pattern: { value: /^[0-9]+$/, message: "Pincode must only contain digits" },
                })}
              />
              {errors.pincode && <p className="text-red-600 text-sm mt-1">{errors.pincode.message}</p>}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="mt-1 block w-full border-customBlue border rounded shadow-sm outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>}
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                className="mt-1 block w-full border-customBlue border rounded shadow-sm focus:ring outline-none focus:ring-blue-500 focus:border-blue-500"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>}
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                className="mt-1 block outline-none w-full border-customBlue border rounded shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 mr-3"
                onClick={() => {
                  setShowModal(false);
                  reset();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {editing ? "Update Address" : "Add Address"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddressModal;
