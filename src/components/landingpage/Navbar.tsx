// import {
//   ChartBarIcon,
//   ShoppingCartIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import React from "react";
import ThemeSwitcher from "@/components/darkmode/ThemeSwitcher";
import Link from "next/link";
import NavLinks from "./NavLink";


const Navbar = () => {
  return (
    <div className="flex flex-col items-center md:flex-row py-2 md:h-16 md:justify-between px-6 ">
      {/* <div className="flex justify-between items-center md:h-full md:w-5/6 bg-red-200"> */}
      <div className="flex justify-between gap-2">
        <h1 className="font-bold text-green-600 text-xl ">kebayoran fresh</h1>
        <ThemeSwitcher />
      </div>
      <div className="flex gap-2">
        <NavLinks />
      </div>

      <div className="flex gap-2 my-4 md:m-0 md:w-1/6 items-center">
        <input
          placeholder="Search"
          className="bg-gray-300 rounded-full w-full h-8 px-4"
        />
        <div className="flex gap-2">
          {/* <ShoppingCartIcon className="w-6 h-6" /> */}
          <Link href={"/cart"}>
            <FaCartShopping />
          </Link>
          {/* <UserIcon className="w-6 h-6" /> */}
          <FaUser />

        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
