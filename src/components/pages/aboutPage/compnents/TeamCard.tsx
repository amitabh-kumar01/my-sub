"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Teamdata } from "@/constants/aboutpage_constants/constants";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const TeamCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollLeft = (val: number = 1) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300 * val, behavior: "smooth" });
    }
  };

  const scrollRight = (val: number = 1) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300 * val, behavior: "smooth" });
    }
  };

  function handleDotClick(index: number) {
    if (scrollRef.current) {
      const itemsToScroll = index - activeIndex;
      if (itemsToScroll > 0) {
        scrollRight(itemsToScroll);
      } else {
        scrollLeft(Math.abs(itemsToScroll));
      }
    }
    setActiveIndex(index);
  }

  return (
    <div className="mt-10 md:px-10 ">
      <div className="relative grid place-items-center md:mx-20">
        {/* Scroll Left Button */}
        {/* <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-400"
          onClick={() => scrollLeft()}
        >
          <BsArrowLeft />
        </button> */}

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto md:w-10/12 w-64 scroll-container items-center text-center mb-10 px-2 pb-4 min-h-60"
          style={{ scrollBehavior: "smooth" }}
        >
          {Teamdata.map((item, index) => (
            <div
              key={item.id}
              className="relative min-w-64 h-auto bg-white rounded-2xl  group shadow-md "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Team Member Image */}
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-90"
                />
                {/* Social Media Icons */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center scale-90 bg-gray-700 bg-opacity-50 transition-opacity duration-300">
                    <div className="flex space-x-4 text-white">
                      <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                      <FaTwitter className="hover:text-blue-400 cursor-pointer" />

                      <FaPinterestP className="hover:text-red-600 cursor-pointer" />
                      <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                    </div>
                  </div>
                )}
              </div>
              {/* Team Member Info */}
              <div className="p-4 text-start">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-sm text-gray-500 font-normal">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-400"
          onClick={() => scrollRight()}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
