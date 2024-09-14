import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptions } from "@/Redux/subscriptionSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PlanCards = () => {
  const dispatch :AppDispatch = useDispatch();
  const { subscriptions, isLoading, error } = useSelector(
    (state: RootState) => state.subscriptions
  );

  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const handlePlanSelect = (index: number) => {
    setSelectedPlan(index);
  };

  if (error) {
    return 
  }

  return (
    <div className="flex md:flex-row flex-col gap-4 mt-20 md:px-20 px-6  justify-around font-manrope">
      {isLoading
        ? [...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:w-80 w-auto p-4 rounded-lg border shadow-lg cursor-pointer"
            >
              <Skeleton width={80} height={20} />
              <Skeleton width={100} height={20} />
              <Skeleton width={60} height={15} className="mt-2" />
              <Skeleton width={100} height={30} className="mt-4" />
              <Skeleton width={120} height={35} className="mt-4" />
              <Skeleton width={160} height={20} className="mt-4" />
              <Skeleton width={140} height={20} className="mt-4" />
              <Skeleton width={50} height={20} className="mt-4" />
            </div>
          ))
        : subscriptions?.map((plan, index) => {
            const isSelected = selectedPlan === index;
            return (
              <div
                key={index}
                onClick={() => handlePlanSelect(index)}
                className={`flex flex-col md:w-80 w-auto p-4 rounded-lg border shadow-lg cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-customBlue text-white border-white "
                    : "bg-white text-customBlack border"
                }`}
              >
                <div className="flex justify-between font-bold">
                  <p>{plan.title}</p>
                  <p
                    className={`font-bold ${
                      isSelected ? "text-white" : "text-customBlue"
                    }`}
                  >
                    {plan.weight_allowed}
                  </p>
                </div>
                <p
                  className={`w-full mt-2 ${
                    isSelected
                      ? "text-white font-Manrope font-normal text-base text-opacity-75 whitespace-normal break-words"
                      : "text-gray-500 whitespace-normal break-words"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="text-3xl font-bold mt-4">
                  {plan.amount}{" "}
                  <span className="text-base">/{plan.duration}</span>
                </div>
                <button
                  className={`border rounded mt-4 p-2 leading-5 text-sm font-semibold text-customBlue hover:bg-customBlue hover:text-white ${
                    isSelected
                      ? "border-white text-white   hover:bg-white hover:text-customBlue"
                      : "border-customBlue text-customBlue"
                  }`}
                >
                  Get Started Now
                </button>
                <div className="mt-4">
                  <div className="text-base font-bold mt-4 items-center">
                    {plan?.products?.map((item, idx) => (
                      <div key={idx} className="flex justify-between">
                        <p className="font-medium text-sm leading-10">
                          {item.name}
                        </p>
                        <p
                          className={`${
                            isSelected ? "text-white" : "text-gray-500"
                          } text-sm font-medium  leading-10 `}
                        >
                          {item.weight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default PlanCards;
