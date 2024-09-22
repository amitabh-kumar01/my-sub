"use client"
import { useDispatch } from "react-redux";
import { Dashboardcomp } from "./component/dashboard";
// import { Sidebar } from "./component/sidebar";
import Topcomp from "./component/Topcomp";
import { getUserAddress } from "@/Redux/addressSlice";
import { getUserDetail } from "@/Redux/userSlice";
import { useEffect } from "react";

export const DashboardPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
  
    // dispatch(getUserAddress());
    // dispatch(getUserDetail());
},[])
  return (
    <div className="mt-20">
      <Dashboardcomp/>

      
    </div>
  );
};
