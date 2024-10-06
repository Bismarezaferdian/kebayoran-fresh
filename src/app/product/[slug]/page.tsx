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
  const product = await getDataProduct(params.slug);
  const { addProduct } = useProduct();
  addProduct(product);
  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default Product;
