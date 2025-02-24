"use client";
import { SessionData } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  user: SessionData;
};

const NavLinks = (props: props) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <div className="hidden md:flex gap-10  ">
        <div className="flex justify-center items-center max-w-[200px]">
          <div className="relative">
            <Link href="/">
              <button className="text-slate-500 items-center text-center hover:text-green-700 ">
                Home
              </button>
            </Link>
            {path == "/" && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center max-w-[200px]">
          <div className="relative">
            <Link href="/product">
              <button className="text-slate-500 items-center text-center hover:text-green-700">
                Product
              </button>
            </Link>
            {path == "/product" && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center max-w-[200px]">
          <div className="relative">
            <Link href="/about">
              <button className="text-slate-500 items-center text-center hover:text-green-700">
                About
              </button>
            </Link>
            {path == "/about" && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center max-w-[200px]">
          <div className="relative">
            <Link href="/contact">
              <button className="text-slate-500 items-center text-center hover:text-green-700">
                Contact
              </button>
            </Link>
            {path == "/contact" && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
