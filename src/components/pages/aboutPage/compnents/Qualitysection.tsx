import { aboutimg2, BGForest } from "@/assets";
import Image from "next/image";
import React from "react";
import { features } from "@/constants/aboutpage_constants/constants";
const Quality = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-40 bg-white py-16 px-7  relative">
      {/* Left Section with Image */}
      <div className=" flex justify-center lg:justify-start lg:mb-0">
        <Image
          // width={420}
          // height={450}
          src={aboutimg2}
          alt="Groceries"
          className="object-contain max-w-full w-80 md:w-96  z-20   md:translate-y-0 translate-y-2"
        />
        <Image
          width={485}
          height={550}
          src={BGForest}
          alt="Groceries"
          className="object-contain left-0 max-w-full absolute z-10"
        />
      </div>

      {/* Right Section with Text */}
      <div className="  lg:max-w-md  text-left  text-sm -mt-20">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-justify font-bold text-customDarkBlue mb-4">
          100% Trusted Organic Food Store
        </h3>
        <p>
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi. Nulla eu eros consequat tortor tincidunt feugiat.
        </p>

        {/* Dynamic Feature List */}

        <div className="flex md:flex-row flex-col md:gap-4 mt-10 md:w-3/5 w-full ">
          {/* Left and Right Column for Icons */}
          <div className="flex flex-col gap-4 min-w-full">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex md:gap-2 gap-8 items-center min-w-full  ">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-customLightBlue">
                  <img
                    src={feature.icon.src}
                    className="w-8 h-8 object-contain"
                    alt={feature.title}
                  />
                </span>
                <div>
                  <h4 className="font-medium md:text-nl text-lg  leading-8">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 md:text-sm text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 min-w-full">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="flex md:gap-2 gap-8 items-center min-w-full">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-customLightBlue">
                  <img
                    src={feature.icon.src}
                    className="w-8 h-8 object-contain"
                    alt={feature.title}
                  />
                </span>
                <div>
                  <h4 className="font-medium md:text-nl text-lg leading-8">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quality;
