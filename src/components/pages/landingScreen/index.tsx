"use client";

import { useEffect, useState } from "react";
import { products as productData } from "./constant";
import { logo, selectItem, yourLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/categoriesSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function LandingScreen() {
  const [products, setProducts] = useState(productData);
  const [filterProduct, setFilterProduct] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch :AppDispatch = useDispatch();

  const {
    categories,
    isLoading: catLoading,
    error,
  } = useSelector((state: RootState) => state.userCat);

  console.log(categories);

  const handleSelect = (index: number) => {
    const updatedProducts = filterProduct.map((product, i) => {
      if (i === index) {
        return { ...product, isSelected: !product.isSelected };
      }
      return product;
    });
    setFilterProduct(updatedProducts);
  };

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      await dispatch(fetchCategories());
      setIsLoading(false);
    };

    loadCategories();
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      const filteredData = productData.filter((data) =>
        categories.some((cat) => cat.name === data.name)
      );
      setFilterProduct(filteredData);
    }
  }, [categories]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl mx-auto py-8 px-8 bg-white rounded-lg shadow-md">
        <div className="flex h-10 items-center justify-center gap-2 pb-5">
          <Image src={logo.src} height={50} width={20} alt="image" />
          <Image src={yourLogo.src} height={80} width={100} alt="image" />
        </div>
        <div className="px-1 md:px-32 pb-1">
          <h1 className="font-poppins font-500 text-3xl leading-8 text-center">
            Choose Your 5 Favorite Grocery Products for Subscription
          </h1>
          <p className="font-poppins font-normal text-sm leading-4 text-center px-0.5 lg:px-3 my-3">
            Select your top 5 grocery items and enjoy effortless, regular
            deliveries. Simplify your shopping today!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {isLoading || catLoading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="relative border p-2 rounded-lg flex flex-col items-center cursor-pointer"
                >
                  <Skeleton circle width={64} height={64} />
                  <Skeleton width={80} height={20} className="mt-2" />
                  <Skeleton width={60} height={15} className="mt-2" />
                </div>
              ))
            : filterProduct?.map((product, index) => (
                <div
                  key={index}
                  className={`relative border p-2 rounded-lg flex flex-col items-center cursor-pointer ${product.className}`}
                  onClick={() => handleSelect(index)}
                >
                  <img
                    src={product.imageUrl.src}
                    alt={product.name}
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <h3 className="text-customItem text-base leading-7 font-poppins">
                    {product.name}
                  </h3>
                  <p className="text-customQuantity text-sm leading-4 text-nowrap">
                    {product.quantity}
                  </p>

                  {product.isSelected && (
                    <Image
                      src={selectItem.src}
                      height={50}
                      width={20}
                      alt="image"
                      className="absolute top-1 left-1 text-lg"
                    />
                  )}
                </div>
              ))}
        </div>

        <div className="flex items-center justify-center gap-1 pt-5">
          <Link href="/">
            <button
              className="bg-customBlueCart font-medium w-56 h-12 text-white rounded-md px-4 py-2"
              onClick={() => {}}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
