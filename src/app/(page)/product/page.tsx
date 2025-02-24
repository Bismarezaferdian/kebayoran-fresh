import AllProduct from "@/components/product/AllProduct";
import FilterProduct from "@/components/product/FilterProduct";
import { ProductType, CategoryProduct } from "@/data";

import React from "react";

const getDataProduct = async () => {
  const res = await fetch("http://localhost:3000/api/product?", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const getDataCategory = async () => {
  const res = await fetch("http://localhost:3000/api/category");
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const Product = async () => {
  const data: ProductType[] = await getDataProduct();
  const dataCategory: CategoryProduct[] = await getDataCategory();
  return (
    <div className=" flex justify-center w-full gap-2 p-2 md:px-6">
      {/* fillter */}
      <div className="hidden md:flex w-1/6 bg-slate-100">
        <FilterProduct prod={data} />
      </div>
      {/* product */}
      <div className="w-full ">
        <AllProduct prod={data} />
      </div>
    </div>
  );
};

export default Product;
