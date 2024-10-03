"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import OrderHistory from "./orderHistory";
import UserDetail from "./UserDetail";
import AddressPage from "./Address";
import { Profile } from "../../profile";
import { Admin } from "../../adminPage";

export const Dashboardcomp = () => {
  const [activePage, setActivePage ] = useState<string>("userDetail"); 


  const renderContent = () => {
    switch (activePage) {
      case "address":
        return <AddressPage />;
      case "orderHistory":
        return <OrderHistory />;
      case "profile":
        return <Profile />;
        case "admin":
          return <Admin/>;
      default:
        return <UserDetail />;
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <Sidebar setActivePage={setActivePage} />

        <div className="flex-1 px-4 md:py-3 py-4">{renderContent()}</div>
      </div>
    </>
  );
};
