"use client";
import { ProductType } from "@/data";
import Image from "next/image";
import React from "react";
import NewProducts from "../landingpage/NewProduct";

// Define props interface
interface SingleProductProps {
  product: ProductType;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  console.log(product);

  return (
    <div className=" container mx-auto">
      <div className=" md:container mx-auto flex gap-2 flex-col md:flex-row justify-center w-full px-3">
        {/* image */}
        <div className="w-full md:w-fit">
          <Image src={product?.img} alt="" width={600} height={600} />
          {/* <Image src={product?.img}
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                /> */}
        </div>

        {/* CONTENT */}
        <div className=" w-full md:w-3/4 flex flex-col justify-between  gap-2 bg-white">
          <h1 className="font-bold">{product?.title}</h1>

          <h1>Rp.{product?.price}</h1>

          {/*DESKRIPSI*/}
          <div className="">
            <p className="font-semibold">Deskripsi product</p>
            <h1 className="text-slate-500">{product?.desc}</h1>
          </div>

          {/* SELECT */}
          {product.option?.length && (
            <div className="bg-slate-300">
              <form className="max-w-sm">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {product.option.map((item, i) => (
                    <option key={i} value="US">
                      {item.weight} gr
                    </option>
                  ))}
                </select>
              </form>
            </div>
          )}

          {/*PENGIRIMAN*/}
          <div className="">
            <h1 className="font-semibold">Pengiriman</h1>
            <div className="bg-green-100 md:w-fit p-3 ">
              <p className=" text-green-700">
                Free pengiriman min pembelian Rp.100.000
              </p>
            </div>
          </div>

          {/*QUANTITY*/}
          <p className="font-semibold">Kuantitas</p>
          <div className="flex">
            <button className="px-3 py-2 border cursor-pointer text-gray-900 rounded-md">
              -
            </button>
            <p className="flex justify-center px-4 border-none items-center rounded-md bg-green-200 mx-2">
              2
            </p>
            <button className="px-3 border  text-gray-900 rounded-md">+</button>
          </div>
          <div className=" flex gap-4">
            <button className="px-4 py-3 bg-green-500 text-slate-50 rounded-md">
              Masukan Keranjang
            </button>
            <button className="px-4 py-3  text-slate-900 border border-green-500 rounded-md">
              Beli Langsung
            </button>
          </div>
        </div>
      </div>
      <NewProducts />
    </div>
  );
};

export default SingleProduct;
