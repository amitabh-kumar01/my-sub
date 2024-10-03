import { MdDashboard } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline, IoSettingsOutline } from "react-icons/io5";
import { PiHandbagThin } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";

export const sidebarItems = [
  {
    icon: <MdDashboard />,
    text: "Dashboard",
    page: "userDetail", 
  },
  {
    icon: <LuRefreshCcw />,
    text: "Order History",
    page: "orderHistory", 
  },
  {
    icon: <FaRegHeart />,
    text: "Profile",
    page: "profile", 
  },
  {
    icon: <IoLocationOutline />,
    text: "Address",
    page: "address", 
  },
  {
    icon: <PiHandbagThin />,
    text: "Shopping Cart",
    page: "cart", 
  },
  {
    icon: <IoSettingsOutline />,
    text: "Settings",
    page: "settings", 
  },
  {
    icon: <TbLogout />,
    text: "Log out",
    page: "logout", 
  },
];
