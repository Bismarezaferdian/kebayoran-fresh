"use client";
import React, { useEffect, useState } from "react";
import { ProductType, Products } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { IoFilterSharp } from "react-icons/io5";
import useProduct from "@/utils/zustand/product";

// type PropsChild = {
//   prod: ProductType[]; // Assuming Products is an array of ProductType
// };

const AllProduct = ({ prod }: { prod: ProductType[] }) => {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);

  const handleClick = () => {};
  const { Product, addProduct, updateProduct } = useProduct();

  useEffect(() => {
    setAllProduct(prod);
  }, [prod, addProduct, Product, allProduct]);

  useEffect(() => {
    if (allProduct.length > 0) {
      updateProduct(allProduct);
    }
    useProduct.persist.rehydrate();
  }, [addProduct, allProduct, updateProduct]);

  return (
    <div className="">
      {!Product.length && <h1 className="bg-red-200">Product Not Found</h1>}
      <div className="flex md:hidden justify-between p-2">
        <h1 className="font-semibold">Product</h1>
        <IoFilterSharp />
      </div>
      <div className="flex justify-center mx-auto md:justify-start gap-2 flex-wrap w-full">
        {/* card */}
        {Product.map((item, i) => (
          <div
            className="flex flex-col h-[300px] w-[180px] md:w-[200px] md:max-h-[400px] border"
            key={i}
          >
            {/* image */}
            <Link href={`/product/${item.slug}`}>
              <div className="overflow-hidden">
                <Image src={item.img} alt="" width={200} height={200} />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm">Rp.{item.price}</h1>
                <h1 className="text-base">{item.title}</h1>
                {/* Render other product details here */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
