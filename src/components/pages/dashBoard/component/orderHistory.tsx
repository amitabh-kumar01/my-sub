import React from 'react'

import { data } from "../../../../constants/dashboard/constant";
const OrderHistory= () => {
  return (

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
  )
}

export default OrderHistory
