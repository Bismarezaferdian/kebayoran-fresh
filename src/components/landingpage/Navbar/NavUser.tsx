"use client";
import { logout } from "@/action";
import { SessionData } from "@/data";
import useCartStore from "@/utils/zustand/cartZustand";
import resetAll from "@/utils/zustand/resetState";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";

// Handler hook for when Outside click dropdown close
export const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement | null>(null); // Specify the element type

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

type props = {
  user: SessionData;
};
// export default useClickOutside;
// Handler hook for when Outside click dropdown close End Code====>>

export const NavUser = (props: props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartItems } = useCartStore();

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
    console.log("clicked outside");
  });

  const handleLogout = (): void => {
    //reset state local from resetAll
    resetAll();
    logout();
  };

  return (
    <section className=" dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex justify-between items-center  gap-4">
            <Link href={"/cart"}>
              <div className="flex justify-center bg-red-600 text-slate-100 rounded-[50%] w-4 h-4 absolute translate-x-4 -translate-y-2 z-0">
                <span className=" text-xs">
                  {cartItems ? cartItems.length : 0}
                </span>
              </div>
              <FaCartShopping className="text-2xl z-10" />
            </Link>
          </div>
          <div ref={domNode} className="w-full sm:w-1/2 lg:w-1/4">
            <div className=" text-center">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center rounded-[5px] px-5 py-[13px] bg-dark dark:bg-dark-2 text-2xl font-medium "
                >
                  <FaUser className=" md:flex hidden " />
                </button>
                <div
                  className={` max-w-[300px] text-right text-gray-800 bg-gray-50  shadow-1 dark:shadow-box-dark absolute right-0 z-40 mt-2 rounded-md bg-dark dark:bg-dark-2 py-[10px] transition-all ${
                    dropdownOpen
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  }`}
                >
                  {/* <DropdownItem label="Dashboard" href="/#" />
                  <DropdownItem label="Pesanan" href="/#" />
                  <DropdownItem label="Profile" href="/#" />
                  <DropdownItem label="Logout" href="/#" /> */}
                  {/* <div className="flex flex-col  bg-gray-50 min-w-[200px]"> */}
                  {props?.user?.isLoggedIn && (
                    <div className=" opacity-80 py-2 px-5 text-base text-dark-5 hover:text-green-700">
                      <p>hello, {props?.user?.userName}</p>
                    </div>
                  )}
                  {props?.user?.isLoggedIn && (
                    <div className="  opacity-80 py-2 px-5 text-base text-end text-dark-5 hover:text-green-700">
                      <Link href="/cart">
                        <button>pesanan</button>
                      </Link>
                    </div>
                  )}
                  <div className=" bg-gray-50 opacity-80 py-2 px-5 text-base text-dark-5 hover:text-green-700">
                    {props?.user?.isLoggedIn ? (
                      <button onClick={handleLogout}>Logout</button>
                    ) : (
                      <Link href="/masuk">
                        <button>Login</button>
                      </Link>
                    )}
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DropdownItem = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="block bg-gray-50 opacity-80 py-2 px-5 text-base text-dark-5 hover:text-green-700"
    >
      {label}
    </a>
  );
};

//   export default Dropdown3;
