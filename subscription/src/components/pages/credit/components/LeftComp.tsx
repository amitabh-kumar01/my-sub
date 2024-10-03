//@ts-nocheck
"use client";
import { AppDispatch ,RootState} from "@/Redux/store";
import { getSubscriptionDetails } from "@/Redux/slices/subscriptionSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionCard, SubscriptionSkeleton } from "./SubscriptionCard";
import { ProductListSkeleton, Products } from "./ProductCard";
interface LeftCompProps {
  path: string; 
}

const LeftComp: React.FC<LeftCompProps> = ({ path }) => {
  const [loading,setLoading] = useState(false)
  const dispatch: AppDispatch = useDispatch();
  const orderDetail = useSelector(
    (state: RootState) => state.subscriptions.selectedSubscription
  );

  useEffect(() => {
    setLoading(true)
;
    dispatch(getSubscriptionDetails(path)).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);
  useEffect(() => {
  }, [orderDetail]);
  const productDetail = Array.isArray(orderDetail?.userInterest) ? orderDetail.userInterest : [];

  return (
    <div className="md:min-w-full w--80 ">
      <div className=" mt-4  md:w-11/12 p-4 md:py-6 md:px-8 bg-white">
        <h2 className="md:text-3xl text-xl font-bold text-customDarkBlue px-2 md:-mt-8 md:-translate-y-2 md:mb-4">
          Subscription Details
        </h2>
        {loading ? (
          <>
            <SubscriptionSkeleton />
          </>
        ) : (
          orderDetail && <SubscriptionCard subscription={orderDetail} />
        )}

        {loading ? (
          <>
            <ProductListSkeleton />
            <ProductListSkeleton />
            <ProductListSkeleton />
          </>
        ) : (
          <Products productDetail={productDetail} />
        )}
      </div>
    </div>
  );
};

export default LeftComp;
