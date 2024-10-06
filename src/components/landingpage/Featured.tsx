"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductType, featureProducts } from "@/data";
import Image from "next/image";
import { error } from "console";
import { json } from "stream/consumers";

interface WindowSize {
  width: number | null;
  height: number | null;
}

const Featured = () => {
  const [data, setData] = useState<ProductType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/product");
      try {
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const response: ProductType[] = await res.json();
        setData(response);
      } catch (error: any) {
        setError(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="px-6">
      <div className="flex justify-between items-center overflow-hidden pt-4">
        <h1 className="font-semibold text-base md:text-lg whitespace-nowrap">
          Featured
        </h1>
        <button className="">
          <Link href="/products">
            <p className="text-emerald-600 font-semibold">lihat semua</p>
          </Link>
        </button>
      </div>
      {/* Slider */}
      <div className="">
        <Swiper
          loop={false}
          slidesPerView={windowSize.width && windowSize.width < 640 ? 2.5 : 4.5}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Autoplay]}
          spaceBetween={10}
          passiveListeners={false}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} cz-shortcut-listen="false">
              <div className=" rounded-md text-center py-10 ">
                {/* <div className="absolute bg-rose-500 translate-y-translate-x-6 w-36">12%</div> */}
                <div className="flex  md:h-auto justify-center overflow-hidden rounded-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full"
                    width={300}
                    height={300}
                    priority={true}
                  />
                </div>
                <p className="text-start font-semibold">
                  {item.title.length > 20
                    ? item.title.substring(0, 15) + "..."
                    : item.title}
                </p>
                <p className="text-green-500 text-start">{item.price}</p>
                <div className="pt-3 mx-2">
                  <button className="flex justify-center btn-primary w-full h-10 ">
                    Add Cart
                  </button>
                </div>
                {/* <button className="btn-primary">detail</button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
