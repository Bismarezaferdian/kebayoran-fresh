"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { featureProducts } from '@/data';
import Image from 'next/image';


interface WindowSize {
  width: number | null;
  height: number | null;
}

const NewProducts = () => {
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

  return (
    <div className='px-6'>
      <div className="flex justify-between items-center overflow-hidden pt-4">
        <h1 className="font-semibold text-base md:text-lg whitespace-nowrap">
          new products
        </h1>
        <button className="">
          <Link href="/products">
            <p className="text-emerald-600 font-semibold">see all</p>
          </Link>
        </button>
      </div>
      {/* Slider */}
      <div className="">
        <Swiper
          loop={false}
          slidesPerView={windowSize.width && windowSize.width < 640 ? 2.5 : 5.5}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Autoplay]}
          spaceBetween={10}
          passiveListeners={false}
        >
          {featureProducts.map((item) => (
            <SwiperSlide key={item.id} cz-shortcut-listen="false">
              <div className=" rounded-md text-center py-10 max-w-56 ">
                {/* <div className="absolute bg-rose-500 translate-y-translate-x-6 w-36">12%</div> */}
                <div className="flex  md:h-auto justify-center overflow-hidden rounded-md">
                  <Image
                    src={
                      item.img
                    }
                    alt={item.title}
                    className='w-full'
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
                <p className="text-green-500 text-start">
                  {(item.price)}
                </p>
                <div className="pt-3 mx-2">
                  <button className='flex justify-center btn-primary w-full h-10 '>Add Cart</button>
                </div>
                {/* <button className="btn-primary">detail</button> */}
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default NewProducts