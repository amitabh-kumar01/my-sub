import React from 'react';
import { MapPin, emailsvg, callsvg } from '@/assets'; 
import Form from './Form';

const Formsection = () => {
  return (
    <div className='flex w-full md:w-3/4   md:p-8  items-center mt-10 justify-center cursor-pointer' >
    <div className="flex flex-col  md:flex-row bg-white  rounded-lg md:p-8 p-2 w-11/12 md:gap- gap-20">
      {/* Left Section - Contact Information */}
      <div className="md:w-1/3 p-12 bg-gray-50 rounded-lg  shadow-2xl ">
        <div className="flex flex-col items-center mb-6 text-center">
          <span className="flex items-center justify-center w-12 h-12 ">
                  <img
                    src={MapPin.src}
                    className="w-8 h-8 object-contain"
                  />
                </span>
          <p className='text-sm text-gray-700'>2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className="flex items-center mb-6 flex-col text-center">
          <span className="flex items-center justify-center w-12 h-12 ">
                  <img
                    src={emailsvg.src}
                    className="w-8 h-8 object-contain"
                  />
                </span>
          <div className='text-sm text-gray-700'>
            <p >Proxy@gmail.com</p>
            <p>Help.proxy@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <span className="flex items-center justify-center w-12 h-12 ">
                  <img
                    src={callsvg.src}
                    className="w-8 h-8 object-contain"
                  />
                </span>
          <div className='text-sm text-gray-700'>
            <p>(219) 555-0114</p>
            <p>(164) 333-0487</p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
     <Form/> 
    </div>  
    </div>
    
  );
};

export default Formsection;
