"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { sidebarItems } from "../../../../constants/sidebar/constant";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
type SidebarProps = {
  setActivePage: Dispatch<SetStateAction<string>>;
};
export const Sidebar = ({ setActivePage }:SidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePageState] = useState("userDetail");

  const handleSidebarClick = (page:string) => {
    setActivePage(page);
    setActivePageState(page);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="md:hidden bg-gray-100 p-4 flex justify-between items-center ">
        <span className="text-customNav font-medium text-xl">Navigation</span>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-900 hover:text-customBlue"
        >
          {isDropdownOpen ? <FaTimes size={24} /> : <FaChevronDown size={24} />}
        </button>
      </div>

      <div className="hidden md:block bg-gray-100 w-64 h-screen p-4">
        <nav className="space-y-4">
          <a
            href="#"
            onClick={() => handleSidebarClick("userDetail")}
            className={`md:flex hidden items-center space-x-2 text-gray-900 hover:bg-gray-200 p-2 rounded ${
              activePage === "userDetail" ? " text-customBlue" : ""
            }`}
          >
            <span className="text-customNav font-medium text-xl leading-3 ">
              Navigation
            </span>
          </a>

          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleSidebarClick(item.page)}
              className={`flex items-center space-x-2 text-gray-700 hover:bg-white hover:shadow-xl p-2 rounded ${
                activePage === item.page
                  ? "shadow-lg bg-white text-customBlue"
                  : ""
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
        </nav>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 p-4 z-50 shadow-lg md:hidden">
          <nav className="space-y-4">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleSidebarClick(item.page)}
                className={`flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded ${
                  activePage === item.page
                    ? "shadow-lg bg-white text-customBlue"
                    : ""
                }`}
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
