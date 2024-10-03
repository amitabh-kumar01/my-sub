//@ts-nocheck
import { Sidebar } from "../dashBoard/component/sidebar"
import AdminDashboard from "./components/AdminDashboard"

export const Admin=()=>{
  return (
    <>
      <div className="flex md:flex-row flex-col mt-20">
      <Sidebar />
        <div className="flex-1 box-border  md:py-3 py-4 px-10 ">
          <AdminDashboard />
        </div>
      </div>
    </>
  );
}
