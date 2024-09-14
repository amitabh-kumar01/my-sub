"use client"

import React, { useEffect, useState } from "react";
import { AboutPersonsvg, logosvg } from "@/assets";
import Image from "next/image";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { nav_links as links } from "@/constants/global_constants";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@/Redux/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { AppDispatch, RootState } from "@/Redux/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const userDetail = useSelector((state: RootState) => state.user.userDetail);

  useEffect(() => {
    if (pathname === "/") {
      setNav(true);
    } else {
      setNav(false);
    }
  }, [pathname]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const resultAction = await dispatch(Logout());

      if (Logout.fulfilled.match(resultAction)) {
        toast.success("Logout successful!");
        router.push("/login");
      } else {
        toast.error("Logout failed: Unknown error");
      }
    } catch (error) {
      toast.error("Logout failed: Unknown error");
    }
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6 lg:px-16 relative">
        <Toaster />
        <Link href={"/"} className="flex items-center gap-5">
          <Image src={logosvg} alt="Groceries" width={40} height={40} />
          <span className="text-xl font-bold">Your Logo</span>
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`lg:flex hidden justify-between items-center gap-4 w-3/5`}
        >
          <div className="flex space-x-8 justify-around whitespace-nowrap text-sm font-normal w-full">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-blue-500 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {nav ? (
            <div className="flex space-x-5 whitespace-nowrap text-sm font-normal">
              <Link
                href={"/login"}
                className="border-blue-500 border text-sm px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Login
              </Link>
              <Link
                href={"/signup"}
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="relative flex items-center space-x-2 whitespace-nowrap">
              <Image
                src={AboutPersonsvg}
                alt="User"
                className="object-contain w-8 h-8 rounded-full"
              />
              <p>{userDetail.length > 0 ? userDetail[0].name || "user name" : "user name"}</p>
              <span onClick={toggleDropdown} className="cursor-pointer">
                <FaAngleDown />
              </span>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white border shadow-lg py-2 rounded-md z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-16 right-0 bg-white shadow-md z-10 py-6 px-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out w-64 z-30 shadow-xl`}
      >
        <div className="flex flex-col space-y-4 items-start">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-blue-500 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {nav ? (
          <div className="flex flex-col items-start mt-6 space-y-3">
            <Link
              href={"/login"}
              className="w-fit border-blue-500 border text-sm px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 text-left"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="w-fit bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-left"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-aroung mt-2 space-x-5 whitespace-nowrap text-sm font-normal">
            <Image
              src={AboutPersonsvg}
              alt="User"
              className="object-contain w-8 h-8 rounded-full"
            />
            <p>{userDetail.length > 0 ? userDetail[0].name || "user name" : "user name"}</p>
            <span onClick={toggleDropdown} className="cursor-pointer">
              <FaAngleDown />
            </span>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white border shadow-lg py-2 rounded-md z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
