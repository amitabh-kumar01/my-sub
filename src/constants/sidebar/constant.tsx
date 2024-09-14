import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { PiHandbagThin } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const sidebarItems = [
  {
    icon: <MdDashboard />,
    text: "Dashboard",
    href: "#",
  },
  {
    icon: <LuRefreshCcw />,
    text: "Order History",
    href: "#",
  },
  {
    icon: <FaRegHeart />,
    text: "Wishlist",
    href: "#",
  },
  {
    icon: <PiHandbagThin />,
    text: "Shopping Cart",
    href: "#",
  },
  {
    icon: <IoSettingsOutline />,
    text: "Settings",
    href: "#",
  },
  {
    icon: <TbLogout />,
    text: "Log out",
    href: "#",
  },
];
