"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { CategoryProduct } from "@/data";
import Image from "next/image";
import { useGetCategory } from "@/utils/hook/apiCall";
import { useCategory } from "@/utils/zustand/categoryState";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const Category = () => {
  const { categories, isLoading, error } = useGetCategory();
  const { getCategory, category } = useCategory();
  const [data, setData] = useState<CategoryProduct[] | null>();
  // const [error, setError] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  //SETT TO ZUSTAND
  useEffect(() => {
    if (!isLoading && categories && Array.isArray(categories)) {
      //add category to zustand
      getCategory(categories); // Only update Zustand if category is valid
    }
  }, [categories, getCategory, isLoading]);

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

  console.log(data);
  //DATA FETHING REPLACE WITH USESWR ON FOLDER UTILS/HOOK
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/category");
  //       if (!res.ok) {
  //         throw new Error("Someting went wrong !");
  //       }
  //       const data: CategoryProduct[] = await res.json();
  //       setData(data);
  //     } catch (error: any) {
  //       // setError(error);
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="px-6 bg-red-50">
      <div className=" flex justify-between items-center ">
        <h1 className="font-semibold text-base md:text-lg whitespace-nowrap">
          category
        </h1>
      </div>
      {/* slider */}
      <div className="  ">
        {/* <div className="flex justify-between gap-4 h-auto  "> */}
        <Swiper
          loop={false}
          spaceBetween={10}
          slidesPerView={windowSize.width && windowSize.width < 640 ? 2.5 : 6.5}
          // slidesPerView={4.3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {category?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full mb-8">
                <div className="flex justify-center items-center rounded-2xl capitalize font-medium text-zinc-500  w-full p-4 ">
                  <div className="flex flex-col p-4 max-w-48 border rounded-2xl cursor-pointer hover:bg-green-100 hover:border-green-400 transition-all">
                    <div className="flex justify-center  ">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex justify-center">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
