
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import {   truck, leaf, time,  svgvisa, mcsvg, avgAE, svgBird, svgCircle, svgRocket, svgPlaystore, svgApple } from '@/assets'; 

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20 font-inter border-t border-customDarkBlue">

      <div className="max-w-7xl mx-auto grid md:grid-rows-1 md:grid-cols-4 grid-rows-2 grid-cols-2 whitespace-nowrap md:gap-36 gap-8">
        {/* Download Section */}
        <div className="flex flex-col space-y-4 items-start md:w-1/4 w-full col-span-2 md:col-span-1">
          <h3 className="text-sm  font-medium">Download our app</h3>
          <div className="flex md:flex-col md:space-y-2 md:gap-0 gap-4  md:text-justify md:items-start items-center text-center  justify-between  w-full ">
            <a href="#" className="w-40">
              <Image src={svgApple} alt="App Store" width={160} height={50} />
            </a>
            <a href="#" className="w-40">
              <Image src={svgPlaystore} alt="Google Play" width={160} height={50} />
            </a>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-xs">Follow us on social media:</p>
            <div className="flex  md:space-x-3 md:text-lg text-3xl md:justify-start justify-around px-4 md:w-auto w-80  ">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaPinterestP className="hover:text-red-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        
<div className="flex flex-col space-y-4 items-start  md:w-1/4 px-4 md:px-0">
  <h3 className="text-sm font-medium">Need help</h3>
  <div className="md:flex min-w-full gap-y-2  md:flex-col gap-x-40  md:space-y-1 grid grid-cols-2 grid-rows-2">
    <p className=''>+88012345678910</p>
    <p className=''>+88012345678910</p>
    <a href="mailto:contact@example.com" className="text-blue-500 text-xs">contact@example.com</a>
  </div>
</div>


        {/* Customer Section */}
        <div className="md:flex hidden md:flex-col space-y-4 items-start md:w-1/4 w-full">
          <h3 className="text-sm  font-medium ">Customer</h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer">My account</li>
            <li className="hover:underline cursor-pointer">My orders</li>
            <li className="hover:underline cursor-pointer">Return orders</li>
            <li className="hover:underline cursor-pointer">Wishlist</li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="md:flex md:flex-col hidden space-y-4 items-start md:w-1/4 w-full">
          <h3 className="text-sm  font-medium">Information</h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Contact us</li>
            <li className="hover:underline cursor-pointer">Shipping & return</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
          </ul>
        </div>

      </div>
      {/* truck time */}
     
<div className='grid md:mt-5 grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-28 py-4 text-xs md:text-sm justify-between border-y'>
  <div className='flex items-center gap-2'>
    <img src={truck.src} alt="Truck" className="w-4 h-4 md:w-auto md:h-auto" />
    Delivery from 2-4 hours
  </div>
  <div className='flex items-center gap-2'>
    <img src={leaf.src} alt="Leaf" className="w-4 h-4 md:w-auto md:h-auto" />
    Quality assurance
  </div>
  <div className='flex items-center gap-2'>
    <img src={time.src} alt="Clock" className="w-4 h-4 md:w-auto md:h-auto" />
    24/7 delivery service
  </div> 
</div>
 
      <div className='flex justify-between md:flex-row flex-col  text-xs items-center text-gray-600 mt-8'>
        <p>Copyright © 2024 Name Web. All Rights Reserved</p>
        <div className='flex md:gap-2 gap-4 md:mt-0 mt-4'>
          <Image src={svgvisa} alt="" />
          <Image src={mcsvg} alt="" />
          <Image src={avgAE} alt="" />
          <Image src={svgBird} alt="" />
          <Image src={svgCircle} alt="" />
          <Image src={svgRocket} alt="" />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
