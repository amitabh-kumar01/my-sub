import React from "react";

import { dataFAQ } from "../../../../constants/landingpage_constants/constants";
import FaqCard from "./FaqCards";
const Faq = () => {
  return (
    <div className="mt-10  p-6 md:p-10 font-inter">
        <h1 className="md:text-cxl m text-2xl font-poppins text-center whitespace-nowrap font-semibold md:text-2xl order-2 md:order-1">
          Common Questions
        </h1>
      <div className="flex -mt-10 flex-col gap-4">
        <div>
          <FaqCard dataFAQ={dataFAQ} />
        </div>
        <div className="flex md:flex-row flex-col md:items-center w-auto justify-between rounded-md bg-customLightBluethird md:py-6 md:px-10 md:mx-5 gap-4 px-2 py-5">
          <div>
            <h4 className="text-xl font-semibold leading-10">Still Have Questions?</h4>
            <p className="text-sm text-gray-800">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="px-6 text-start capitalize w-fit py-2 bg-customBlue text-sm text-white rounded-lg hover:bg-blue-600">
          get in touch
          </button>

        </div>
      </div>
    </div>
  );
};

export default Faq;
