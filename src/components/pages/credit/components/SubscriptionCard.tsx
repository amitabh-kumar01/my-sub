//@ts-nocheck
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
interface SubscriptionData {
  subscription: {
    name: string;
    duration: string;
    amount: number;
    tax: number;
    totalamount: number;
  };
}
export const SubscriptionSkeleton = () => {
  return (
     <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Subscription and Duration */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800">
        <div className="flex justify-between items-center">
          <p className="font-medium">Subscription:</p>
          <Skeleton width={70} height={20} />
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <p className="font-medium">Duration:</p>
          <Skeleton width={50} height={20} />
        </div>

        {/* Amount and Tax */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <p className="font-medium">Amount:</p>
          <Skeleton width={50} height={20} />
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <p className="font-medium">Tax:</p>
          <Skeleton width={30} height={20} />
        </div>

        {/* Total Amount and Date */}
        <div className="flex justify-between items-center text-gray-800 text-base">
          <p className="font-medium">Total:</p>
          <Skeleton width={70} height={20} />
        </div>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <p className="font-medium">Date:</p>
          <Skeleton width={80} height={20} />
        </div>
      </div>
    </div>
  );
};

export const SubscriptionCard = () => {
  const subscription = useSelector(
    (state: RootState) => state.subscriptions.selectedSubscription
  );


  return (
    <div className="border border-gray-200 rounded-lg md:p-4 px-1 py-4 shadow-sm">
            {/* Subscription and Duration */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800">
              <div className="flex justify-between items-center">
                <p className="font-medium">Subscription:</p>
                <p className="font-semibold whitespace-nowrap">
                  {subscription?.subscription.name}
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-600 text-sm">
                <p className="font-medium">Duration:</p>
                <p>{subscription?.subscription.duration}</p>
              </div>

              {/* Amount and Tax */}
              <div className="flex justify-between items-center text-gray-600 text-sm">
                <p className="font-medium">Amount:</p>
                <p className="font-semibold text-green-600">
                  ₹{subscription?.subscription.amount}
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-600 text-sm">
                <p className="font-medium">Tax:</p>
                <p>₹{subscription?.subscription.tax}</p>
              </div>

              {/* Total Amount and Date */}
              <div className="flex justify-between items-center text-gray-800 text-base">
                <p className="font-medium">Total:</p>
                <p className="font-semibold text-blue-600">
                  ₹{Math.ceil(subscription?.subscription.totalamount)}
                </p>
              </div>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p className="font-medium">Date:</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
  );
};
