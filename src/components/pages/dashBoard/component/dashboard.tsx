
"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import OrderHistory from "./orderHistory";
import UserDetail from "./UserDetail";
import AddressPage from "./Address";
import { Profile } from "../../profile";


export const Dashboardcomp = () => {
  const [activePage, setActivePage] = useState("userDetail"); 


  const renderContent = () => {
    switch (activePage) {
      case "address":
        return <AddressPage />;
      case "orderHistory":
        return <OrderHistory />;
        case "profile":
          return <Profile/>;
      default:
        return <UserDetail />;
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Sidebar setActivePage={setActivePage} /> 

        <div className="flex-1 p-6">
          {renderContent()} 
        </div>
      </div>
    </>
  );
};
