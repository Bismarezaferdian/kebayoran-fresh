"use client";
import { DataSingleProd, ProductType } from "@/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewProducts from "../landingpage/NewProduct";
import { useRouter } from "next/navigation";
import { successMessage } from "@/utils/notification";
import useCartStore from "@/utils/zustand/cartZustand";
import { addToCartHook } from "@/utils/hook/apiCall";

// Define props interface
interface SingleProductProps {
  product: ProductType;
  userId: string;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product, userId }) => {
  const router = useRouter();
  const { addToCart } = useCartStore();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [dataSingleProd, setDataSingleProd] = useState<DataSingleProd>({
    // cartItems:[

    //product
    //option
    // ]
    prodId: product.id,
    optionId: null,
    userId: "",
    quantity: 0,
  });

  console.log(product);

  const getValue = (e: any) => {
    const idOptoin = e.target.value;
    setDataSingleProd((prevent) => ({ ...prevent, optionId: idOptoin }));
    const optinForPrice = product.option?.filter(
      (option) => option.id == idOptoin
    );
    if (optinForPrice) {
      setPrice(optinForPrice[0].price);
    }
  };

  const handleQty = (type: string) => {
    setDataSingleProd((prev) => {
      const updatedQty =
        type === "add" ? prev.quantity + 1 : Math.max(prev.quantity - 1, 0);
      return {
        ...prev,
        quantity: updatedQty,
      };
    });
  };

  useEffect(() => {
    if (!userId) {
      successMessage("Silahkan login terlebihdahulu");
      const timeout = setTimeout(() => {
        router.push("/masuk");
      }, 2000);
      return () => clearTimeout(timeout);
    }
    setDataSingleProd((prev) => ({ ...prev, userId }));
  }, [userId, router]);

  const handleAddToCart = async (item: DataSingleProd) => {
    addToCart(item);
  };

  // console.log(dataSingleProd);

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

          {/* <h1>Rp.{product?.price}</h1> */}

          {price ? <h1>Rp.{price}</h1> : <h1>Rp.{product?.price}</h1>}

          {/*DESKRIPSI*/}
          <div className="">
            <p className="font-semibold">Deskripsi product</p>
            <h1 className="text-slate-500">{product?.desc}</h1>
          </div>

          {/* SELECT */}
          {product.option && product.option.length > 0 && (
            <div className="">
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
                  value={selectedOption}
                  onChange={(e) => {
                    getValue(e);
                    setSelectedOption(e.target.value);
                  }}
                >
                  <option value={""} disabled>
                    select weight
                  </option>
                  {product.option.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.weight} gr
                    </option>
                  ))}
                </select>
              </form>
            </div>
          )}

          {/* PRICE */}

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
            <button
              onClick={() => handleQty("min")}
              className="px-3 py-2 border cursor-pointer text-gray-900 rounded-md"
            >
              -
            </button>
            <p className="flex justify-center px-4 border-none items-center rounded-md bg-green-200 mx-2">
              {dataSingleProd.quantity}
            </p>
            <button
              onClick={() => handleQty("add")}
              className="px-3 border  text-gray-900 rounded-md"
            >
              +
            </button>
          </div>
          <div className=" flex gap-4">
            <button
              onClick={() => handleAddToCart(dataSingleProd)}
              className="px-4 py-3 bg-green-500 text-slate-50 rounded-md"
            >
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
