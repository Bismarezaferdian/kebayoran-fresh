import { FaCartShopping, FaUser } from "react-icons/fa6";
import React from "react";
import ThemeSwitcher from "@/components/darkmode/ThemeSwitcher";
import Link from "next/link";
import NavLinks from "./NavLink";
import NavbarMobile from "./NavbarMobile";
import { getSession } from "@/action";
import { NavUser } from "./NavUser";
import useCartStore from "@/utils/zustand/cartZustand";

const Navbar = async () => {
  const session = await getSession();
  //convert ke string sebelum dikirim ke children
  const plainSessionData = JSON.parse(JSON.stringify(session));
  return (
    <div className="flex flex-col items-center md:flex-row py-2 md:h-16 md:justify-between px-6 ">
      {/* <div className="flex justify-between items-center md:h-full md:w-5/6 bg-red-200"> */}
      <div className="flex justify-between gap-2">
        <h1 className="font-bold text-green-600 text-xl ">kebayoran fresh</h1>
        {/* <ThemeSwitcher /> */}
      </div>

      <div className="flex gap-2">
        <NavLinks user={plainSessionData} />
      </div>

      <div className="flex justify-between gap-2 my-4 md:m-0 md:w-1/6 items-center w-full">
        <input
          placeholder="Search"
          className="bg-gray-300 rounded-full w-full h-8 px-4"
        />
        {/* icon for nav user */}
        <div className="flex justify-between items-center  gap-4">
          <div className="">
            <NavUser user={plainSessionData} />
          </div>
        </div>
      </div>
      {/* for mobile viewed */}
      <div className="fixed bottom-0 h-fit py-4 px-8 md:hidden w-full bg-neutral-50 z-40">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
