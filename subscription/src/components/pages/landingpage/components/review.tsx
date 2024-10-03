import React from "react";
import ReviewCard from "./reviewCard";
const Review = () => {
  return (
    <div className="mt-10">
      <div className="top grid place-items-center gap-4">
        <h2 className="font-semibold  whitespace-pre-wrap p-2 text-center text-2xl md:text-3xl text-customDarkBlue">See what our subscribers are saying</h2>
        <p className="md:w-1/2 text-center text-gray-500 px-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy.</p>
      </div>
      <ReviewCard/>
    </div>
  );
};
export default Review;
