"use client";
import React, { useEffect } from "react";
import { data } from "../../../../constants/dashboard/constant";

import { dianne } from "@/assets";
import { Sidebar } from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "@/Redux/userSlice";
import { AppDispatch, RootState } from "@/Redux/store";

export const Dashboardcomp = () => {
  const dispatch : AppDispatch = useDispatch();
  const userDetail = useSelector((state: RootState) => state.user.userDetail);

  useEffect(() => {
    console.log("getting user detail");
    dispatch(getUserDetail());
  }, []);
  return (
    <>
      <div className="flex ">
        <Sidebar />

        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="col-span-1 bg-white p-6 rounded-lg shadow relative">
              <div className="flex items-center space-x-4">
                <img
                  src={dianne.src}
                  alt="User"
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h2 className=" text-lg font-poppins font-medium">
                    {userDetail.length > 0 ? userDetail[0]?.name || "user name" : "user name"}
                  </h2>
                  <span className="text-customDashText text-lg font-normal">
                    Customer ID:
                    <span className="text-sm font-medium text-customDashText px-1">
                      123456789
                    </span>
                  </span>
                  <div>
                    <span className="text-customDashText text-lg font-normal">
                      Phone No:
                    </span>
                    <span className="text-sm font-medium text-customDashText px-1">
                    {userDetail.length > 0 ? userDetail[0]?.phone|| "8403952334" : "8403952334"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <a
                  href="#"
                  className="right-6 top-3 absolute  text-customWhite mr-3 font-poppins font-medium text-base leading-2 "
                >
                  Edit Profile
                </a>
              </div>
              <div className=" bg-customBlueCart p-2 mt-3 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-customWhite font-normal font-manrop text-base">
                      Standard Plan
                    </p>
                    <p className="text-xl font-extrabold font-manrope text-customWhite">
                      10 kg
                    </p>
                  </div>
                  <h2 className="text-4xl font-semibold text-customWhite">
                    $50{" "}
                    <span className="text-customWhite font-light font-manrop text-lg">
                      / Month
                    </span>
                  </h2>

                  <button className="bg-white text-customBlueCart font-medium  text-base px-4 py-2 rounded">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1   bg-white p-6 rounded-lg space-y-1 shadow">
              <h2 className=" text-sm font-poppins text-customGray py-2 font-medium">
                Billing Address
              </h2>
              <h2 className=" text-lg text-customText font-poppins font-medium">
                    {userDetail.length > 0 ? userDetail[0]?.name || "user name" : "user name"}
              </h2>
              <p className="text-customGray">
                
                    {userDetail.length > 0 ? userDetail[0]?.address|| "4340 Parker Rd, Allentown, New Mexico 31134" : "4340 Parker Rd, Allentown, New Mexico 31134"}

              </p>
              <p className="text-customNav font-poppins text-base lowercase">
              {userDetail.length > 0 ? userDetail[0]?.email|| "dianne.russell@gmail.com" : "dianne.russell@gmail.com"}

              </p>
              <p className="text-customNav font-poppins text-base">
                (671) 555-0100
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className=" text-customForgot mr-3 font-poppins font-medium text-base leading-4"
                >
                  Edit Address
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Order History</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index} className="">
                    <td className="py-3">{order.orderId}</td>
                    <td className="py-3">{order.date}</td>
                    <td className="py-3">{order.Total}</td>
                    <td className="py-3">{order.status}</td>
                    <td>
                      <a href="#" className="text-blue-500 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <a href="#" className="text-blue-500 hover:underline">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
