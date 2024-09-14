import { aboutimg1 } from "@/assets";
import Image from "next/image";
import React from "react";

const Midsection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-white py-16 px-6 lg:px-10 md:ml-8 ml-2">
      {/* Left Section with Images */}
      <div className="flex-1 flex justify-center lg:justify-end lg:pr-8 mb-8 lg:mb-0">
        <Image
          width={500}
          height={500}
          src={aboutimg1}
          alt="Groceries"
          className="object-contain max-w-full"
        />
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 max-w-full lg:max-w-md text-center lg:text-left">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4">
          100% Trusted Organic Food Store
        </h3>
        <p className="text-gray-600 mb-6 text-justify">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae. <br /> <br />
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare.
        </p>
     </div>
    </div>
  );
};

export default Midsection;
