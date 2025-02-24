import { getSession } from "@/action";
import SingleProduct from "@/components/product/SingleProduct";
import useProduct from "@/utils/zustand/product";
import React from "react";

const getDataProduct = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("product not found !");
  }
  return res.json();
};

const Product = async ({ params }: { params: { slug: string } }) => {
  const { userId } = await getSession();
  //get data from ssr
  const product = await getDataProduct(params.slug);
  // //destructuring from product zustand
  // const { addProduct } = useProduct();
  // //add data ke zustand
  // addProduct(product);
  return (
    <div>
      <SingleProduct product={product} userId={userId} />
    </div>
  );
};

export default Product;
