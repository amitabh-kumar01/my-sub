
import React from "react";
import { sidebarItems } from "../../../../constants/sidebar/constant";

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <nav className="space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-900 hover:bg-gray-200 p-2 rounded"
        >
          <span className="text-customNav font-medium text-xl leading-3">
            Navigation
          </span>
        </a>

        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded"
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
