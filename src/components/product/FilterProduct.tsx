"use client";
import { CategoryProduct, ProductType } from "@/data";
import useProduct from "@/utils/zustand/product";

import React, { useEffect, useState } from "react";

//data parameter dari product page
const FilterProduct = ({ prod }: { prod: ProductType[] }) => {
  //update product dari zustand
  const { updateProduct } = useProduct();
  const [dataCategory, setDataCategory] = useState<CategoryProduct[]>([]);
  const [checked, setChecked] = useState<string[]>([]);

  //ambil data category ketika pertamakali di reload
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/category");
      try {
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const response: CategoryProduct[] = await res.json();
        setDataCategory(response);
      } catch (error: any) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the value is already in the array
    if (e.target.checked) {
      // Add the category to the array if checked
      setChecked((prev) => [...prev, value]);
    } else {
      // Remove the category from the array if unchecked
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    const data = prod.filter((product) => checked.includes(product.catSlug));
    if (data.length) {
      updateProduct(data);
    } else if (!data.length && checked.length) {
      updateProduct(data);
    } else {
      updateProduct(prod);
    }
  }, [prod, updateProduct, checked]);

  return (
    <div>
      <div className=" wrapp-kategory container overscroll-contain overflow-auto  p-4 ">
        {dataCategory.map((item) => (
          <div className="flex items-center mb-4" key={item.id}>
            <input
              onChange={handleChange}
              type="checkbox"
              name="brandFilter"
              id={item.title}
              // checked={brandFilter.includes(item.title)}
              value={item.slug}
              // onChange={handleBrand}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-3xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={item.title}
              className="ml-2 text-sm font-medium text-gray-400 transition-all"
            >
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
