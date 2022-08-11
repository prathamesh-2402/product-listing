import React from "react";
import "../styles/Header.css";
import { MenuAlt1Icon, SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/solid";

export const Header = ({ search, setSearch }) => {
  return (
    <div
      className="flex bg-white w-full justify-evenly items-center"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px" }}
    >
      <div className="flex justify-center items-center gap-[2rem]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
          alt="logo"
          className="w-1/6"
        />
        <div className="flex items-center px-[0.5rem] py-[0.2rem] border-solid border-2 border-[#E1E1E1]  h-[2rem] rounded">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="outline-none w-[10rem]"
          />
          <SearchIcon className="h-4 text-[#4d4d4d]" />
        </div>
      </div>
      <div className="flex gap-[1rem] items-center">
        <div className="flex gap-1">
          <MenuAlt1Icon className="h-6" />
          <p>Categories</p>
        </div>
        <BellIcon className="h-6 text-[#B8B8B8]" />
        <img
          src="https://avatarfiles.alphacoders.com/297/297557.png"
          alt="avatar"
          className="rounded-full w-[42px] object-cover border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Header;
