import React from 'react'
import { RiVisaLine } from 'react-icons/ri';

const Payment = () => {
  return (
    <div className=" mt-8   w-80  ">
      <div className="md:w-11/12 w-full shadow rounded-xl md:py-4 md:px-4 px-8  bg-white  pb-4  ">
        <h2 className="text-xl font-semibold md:mb-2 text-customBlack">
          Payment Details
        </h2>
        <p className="mb-6 text-xs font-normal text-gray-500 md:mt-0 mt-2">
          Complete your purchase by providing your payment details.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Zahra.uix@email.com"
              className="w-full py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2  focus:ring-customBlue"
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-700">Card Details</p>
            <input
              type="text"
              placeholder="Barly Vallendito"
              className="w-full py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-customBlue"
            />
            <div className="flex items-center border rounded-lg focus:ring-2 focus:ring-customBlue">
              <input
                type="text"
                placeholder="8877 3256 8952 3326"
                className="col-span-2 py-2 px-3 w-11/12 rounded-lg text-sm focus:outline-none  "
              />
              <RiVisaLine
                size={40}
                className="text-gray-500 mr-4 hover:text-customBlue"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="03/25"
                className="py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
              <input
                type="password"
                placeholder="••••"
                className="py-2 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-700">
            <p>Subtotal:</p>
            <p>$225.00</p>
          </div>
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <p>Total:</p>
            <p className="text-customBlue font-bold">$230.87</p>
          </div>

          <button
            type="submit"
            className="w-full bg-customBlue rounded-xl text-white px-3 py-1 font-semibold hover:bg-blue-600 transition duration-300"
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment
