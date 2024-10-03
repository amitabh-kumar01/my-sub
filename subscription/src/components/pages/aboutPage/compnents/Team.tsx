import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="mt-5 pt-10 bg-gray-100">
      <div className=" flex flex-col  text-center items-center md:px-20 px-4">
        <h2 className="text-customDarkBlue md:w-1/2  md:text-cxl text-2xl font-semibold">
          Our Awesome Team
        </h2>
        <p className="text-gray-500 md:px-4 p-5 md:text-center text-justify">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus <br />
          neque. Duis non diam eget est luctus tincidunt a a mi.
        </p>
      </div>
      <TeamCard />
    </div>
  );
};
export default Team;
