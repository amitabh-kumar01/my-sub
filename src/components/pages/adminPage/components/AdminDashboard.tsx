"use client"

import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Sidebar } from '../../dashBoard/component/sidebar';
import { customerData, data, marketingData, productData } from '@/constants/dashboard/adminConstant';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


const AdminDashboard = () => {
  return (
    <div className=" ">
      {/* Main Content */}
      <div className="">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg w-72 border-customBlue"
          />
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-customBlue shadow-lg">
            <h3 className="text-lg font-semibold">3.456K</h3>
            <p>Total sales</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-customBlue shadow-lg">
            <h3 className="text-lg font-semibold">$45.2K</h3>
            <p>Total Profit</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-customBlue">
            <h3 className="text-lg font-semibold">2.450</h3>
            <p>Total Products</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          <Line data={data} />
        </div>
        <div className="flex gap-8 mr-10 ">
          {/* Customer Data Chart */}
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Customer Data</h3>
            <Pie data={customerData} />
          </div>
          {/* Product & Inventory Data */}

          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Product Performance</h3>
            <Bar data={productData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 mr-10">
          <h3 className="text-lg font-semibold mb-4">Marketing Performance</h3>
          <Bar data={marketingData} />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
