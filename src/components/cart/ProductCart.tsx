import Image from "next/image";
import React from "react";
import { ProductCarts } from "@/data";
import { MdOutlineDeleteForever } from "react-icons/md";

const ProductCart = () => {
  return (
    <div className=" md:container mx-auto p-2 md:px-6">
      {ProductCarts.map((item, i) => (
        <div className="p-2 border-b-2 flex" key={i}>
          {/* image */}
          <div className=" w-fit px-1">
            <Image src={item.img} alt="" width={120} height={120} />
          </div>
          {/* content */}
          <div className="flex justify-between px-2 w-full">
            {/* title */}
            <div className="flex flex-col justify-between">
              <div className="">
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-sm">{item.weight} gr</p>
              </div>
              {/* qty */}
              <div className="flex">
                <button className="px-2 border cursor-pointer text-gray-900 ">
                  -
                </button>
                <p className="flex justify-center px-2 border-none items-center  bg-green-200 mx-2">
                  2
                </p>
                <button className=" px-2 border  text-gray-900 ">+</button>
              </div>
            </div>
            {/* icon & amount */}
            <div className="flex flex-col justify-between py-2 items-center">
              <MdOutlineDeleteForever className="text-2xl cursor-pointer text-red-700" />
              <p>Rp.{item.price}</p>
            </div>
          </div>
        </div>
      ))}
      {/* amount */}
      <div className="bg-green-50 w-full py-4 px-2">
        <div className="flex justify-end flex-col items-end gap-4">
          <div className="flex justify-between w-full md:w-1/2">
            <p>Sub Total (3 item)</p>
            <p>Rp.2000000</p>
          </div>
          <div className="flex justify-between items-center w-full md:w-1/2">
            <p>biaya pengiriman</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center w-full md:w-1/2">
            <p>Total</p>
            <p>Rp.2000000</p>
          </div>
          <div className="flex justify-end items w-full md:w-1/2">
            <button className="flex items-end px-3 bg-green-400">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
