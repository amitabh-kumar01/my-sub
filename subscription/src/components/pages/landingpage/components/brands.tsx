import React from "react";
import {
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo1,
  
} from "@/assets";
import Image from "next/image";
const Brands = () => {
  return (
    <div className="bg-customLightBluesec m-5 rounded-md px-5 py-10">
      <h3 className="text-center font-semibold text-customDarkBlue text-2xl md:text-4xl" >Popular brands</h3>
      <div className="grid md:grid-row-2 grid-row-3 grid-cols-4 md:grid-cols-6 gap-4 place-items-center mt-8  md:px-5 ">
        <div>
          <Image src={Logo1} alt="Logo 1" width={80}/>
        </div>
        <div>
          <Image src={Logo2} alt="Logo 2" width={80} />
        </div>
        <div>
          <Image src={Logo3} alt="Logo 3" width={80}/>
        </div>
        <div>
          <Image src={Logo4} alt="Logo 4" width={80}/>
        </div>
        <div>
          <Image src={Logo5} alt="Logo 5" width={80}/>
        </div>
        <div>
          <Image src={Logo6} alt="Logo 6" width={80}/>
        </div>
        <div>
          <Image src={Logo7} alt="Logo 7" width={80}/>
        </div>
        <div>
          <Image src={Logo8} alt="Logo 8" width={80}/>
        </div>
        <div>
          <Image src={Logo9} alt="Logo 8" width={80}/>
        </div>
        <div>
          <Image src={Logo10} alt="Logo 8" width={80}/>
        </div>
        <div>
          <Image src={Logo11} alt="Logo 8" width={80}/>
        </div>
        <div>
          <Image src={Logo12} alt="Logo 8" width={80}/>
        </div>
        
     </div>
    </div>
  );
};

export default Brands;
