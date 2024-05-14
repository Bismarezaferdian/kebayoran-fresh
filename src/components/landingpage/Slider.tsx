"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { bannerSlider } from '@/data';

const Slider = () => {
  const [currentSlide, setCurrenSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrenSlide(prev => prev == bannerSlider.length - 1 ? 0 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex md:h-[calc(80vh-6rem)]  h-1/2 bg-gradient-to-r from-[#234C20] to-[#3d9237]'>
      {/* text container */}
      <div className="flex flex-col justify-center pl-8 md:pl-24 w-1/2 text-slate-200 gap-1 " >
        <h1 className='text-2xl font-bold'>{bannerSlider[currentSlide].headTitle}</h1>
        <h1 className='md:text-5xl font-bold uppercase text-wrap sm:text-[40px]/[48px]'>{bannerSlider[currentSlide].mainTitle}</h1>
        <p className='dark:text-red-500'>{bannerSlider[currentSlide].desc}</p>
      </div>
      {/* image wrap */}
      <div className="flex justify-center items-center w-1/2 ">
        <Image src={bannerSlider[currentSlide].image} alt="" priority width={500} height={500} className='drop-shadow-2xl' />
      </div>
    </div>
  )
}

export default Slider


