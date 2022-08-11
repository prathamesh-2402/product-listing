import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import ReviewStars from "./ReviewStars";

export const Product = ({ name, brand, img, price, reviewCount, op, star }) => {

  const findDiscount = (p, o) => {
    return Math.floor((p / o) * 100);
  };

  return (
    <div className="bg-white rounded shadow-md w-[15rem] h-[20rem] relative">
      <img
        src={img}
        alt="product"
        className="w-full h-2/4 object-cover rounded mb-2"
      />
      <HeartIcon className="h-6 text-[#98999B] absolute right-2 top-2" />
      <div className="p-[0.75rem] flex flex-col gap-1">
        <h1 className="font-medium text-[#4e4e4e] truncate">{name}</h1>
        <p className="text-[0.75rem] font-bold text-[#8F8F8F]">{brand}</p>
        <div className="flex text-[#8F8F8F] items-center gap-2">
          <ReviewStars stars={star} size={20} />
          <span>({reviewCount})</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <h1 className="text-black text-[1.5rem] font-semibold">
            ${Math.floor(price)}
          </h1>
          <h1 className="line-through text-[#7e7e7e] font-semibold">
            ${op}
          </h1>
          <h1 className="text-green-600 font-semibold">{findDiscount(price, op)}% off</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
