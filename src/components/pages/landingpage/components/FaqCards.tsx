"use client";
import React, { useState } from "react";
// import { dataFAQ } from './constants'
import { FaAngleUp } from "react-icons/fa";

import { FaAngleDown } from "react-icons/fa6";
type FAQItem = {
  id: number;
  ques: string;
  ans: string;
};
interface FaqCardProps {
  dataFAQ: FAQItem[];
}
const FaqCard: React.FC<FaqCardProps> = ({ dataFAQ }) => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (id: any) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1  gap-5 w-full mt-20 md:px-4">
      {dataFAQ.map((item: any) => (
        <div key={item.id}>
          <div
            className={`p-4 border border-gray-100 rounded-lg  transition-all duration-300 ${
              item.id === open ? "bg-white shadow-md" : "bg-gray-50"
            }`}
          >
            <div
              className="flex justify-between items-center hover:opacity-70 cursor-pointer"
              onClick={() => handleToggle(item.id)}
            >
              <p className={`text-sm ${item.id === open ? "text-customBlue " : "text-gray-800" }font-medium`}>{item.ques}</p>
              <span className="text-sm text-gray-500">
                {item.id === open ? <FaAngleUp/> : <FaAngleDown/>}
              </span>
            </div>
            <p
              className={`text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out ${
                item.id === open ? "block" : "hidden"
              }`}
            >
              {item.ans}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
