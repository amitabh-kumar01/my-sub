
"use client";
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { FaStar } from "react-icons/fa";
import { data } from "../../../../constants/landingpage_constants/constants";
import { vector1 } from "@/assets";
import Image from "next/image";

// Use forwardRef to expose scrollLeft and scrollRight methods to the parent
const NewReviewCard = forwardRef((_, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Expose scrollLeft and scrollRight methods to the parent component via ref
  useImperativeHandle(ref, () => ({
    scrollLeft() {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    },
    scrollRight() {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    },
  }));

  function handleDotClick(index: number) {
    if (scrollRef.current) {
      const itemsToScroll = index - activeIndex;
      if (itemsToScroll > 0) {
        ref.current.scrollRight(itemsToScroll);
      } else {
        ref.current.scrollLeft(Math.abs(itemsToScroll));
      }
    }
    setActiveIndex(index);
  }

  return (
    <div className="mt-10 md:px-10 mb-20">
      <div className="flex items-center justify-between">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-container"
          style={{ scrollBehavior: "smooth" }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="md:min-w-80 my-4 min-w-[20rem] md:mx-8 mx-4 rounded-md shadow-xl p-4 md:p-6"
            >
              <Image width={20} height={20} src={vector1.src} alt="" className="" />
              <p className="text-sm text-gray-500 font-light text-justify">{item.review}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex justify-around gap-2">
                  <img
                    src={item.image.src}
                    className="w-10 h-10 rounded-full bg-yellow-200"
                    alt="person"
                  />
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-gray-500">customer</span>
                  </div>
                  <div className="text-yellow-500 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 mt-6 items-center text-center justify-center">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
});

export default NewReviewCard;
