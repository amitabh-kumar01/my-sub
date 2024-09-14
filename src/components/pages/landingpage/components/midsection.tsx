
import { discoversvg } from '@/assets';
import Image from 'next/image';
import React from 'react';

const Midsection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-16 px-6 lg:px-24">
      {/* Left Section with Images */}
      <div className="flex-1 flex justify-center lg:justify-end lg:pr-8 mb-8 lg:mb-0">
        <Image
          width={500}
          height={500}
          src={discoversvg}
          alt="Groceries"
          className="object-contain max-w-full"
        />
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 max-w-full lg:max-w-md md:text-center md:ml-0 ml-1  lg:text-left">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4">
          Connecting our user with iOS & Android apps. Download from App Store & Play store
        </h3>
        <p className="text-gray-600 mb-6 text-justify">
          At [Your Company Name], we believe in the power of fresh, organic produce and the convenience of home delivery. Founded in [Year], our mission has always been to bring farm-fresh groceries directly to your doorstep, ensuring you and your family enjoy healthy and delicious meals every day. What started as a small local initiative has grown into a community-driven service, trusted by countless households for their daily grocery needs.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Midsection;
