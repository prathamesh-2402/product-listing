import React from "react";
import { UilSlidersVAlt } from "@iconscout/react-unicons";
import { brand, category, price } from "../data/data";

export const Filters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white rounded-md w-[18rem] h-min">
      <div className="flex items-center justify-between border-b-2 border-[#ededed] pb-[0.5rem] px-[1rem] pt-[0.5rem]">
        <h1 className="text-[1.5rem] ">Filter</h1>
        <UilSlidersVAlt className="rotate-90" />
      </div>

      <div className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-col gap-[0.1rem] mt-[0.5rem] border-b-2 border-[#ededed] pb-[0.5rem] px-[1rem]">
          <h1 className="text-[1rem] m-0">Brand</h1>
          <div className="">
            {brand?.map((itm, k) => {
              return (
                <div className="flex items-center gap-[0.5rem]">
                  <input
                    checked={filters?.brand === itm?.name}
                    type="checkbox"
                    value={itm?.name}
                    onChange={(e) => {
                      if (filters.brand == e.target.value) {
                        setFilters({ ...filters, brand: "" });
                      } else {
                        setFilters({ ...filters, brand: e.target.value });
                      }
                    }}
                  />
                  <h1>{itm?.name.toUpperCase()}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[0.1rem] border-b-2 border-[#ededed] pb-[0.5rem] px-[1rem]">
          <h1 className="text-[1rem] m-0">Category</h1>
          <div className="">
            {category?.map((itm, k) => {
              return (
                <div className="flex items-center gap-[0.5rem]">
                  <input
                    checked={filters.category === itm?.name}
                    type="checkbox"
                    value={itm?.name}
                    onChange={(e) => {
                      if (filters.category == e.target.value) {
                        setFilters({ ...filters, category: "" });
                      } else {
                        setFilters({ ...filters, category: e.target.value });
                      }
                    }}
                  />
                  <h1>{itm?.name.toUpperCase()}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[0.1rem] pb-[0.8rem] px-[1rem]">
          <h1 className="text-[1rem] m-0">Price</h1>
          <div className=" pb-[0.5rem]"></div>
          {price?.map((itm, k) => {
            return (
              <div className="flex items-center gap-[0.5rem]">
                <input
                  checked={filters.price == itm?.value}
                  type="checkbox"
                  value={itm?.value}
                  onChange={(e) => {
                    if (filters.price == e.target.value) {
                      setFilters({ ...filters, price: "" });
                    } else {
                      setFilters({ ...filters, price: e.target.value });
                    }
                  }}
                />
                <h1>{itm?.name.toUpperCase()}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
