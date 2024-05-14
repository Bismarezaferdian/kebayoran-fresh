import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row w-full  px-6 py-4 gap-2'>
      {/* vegetable card */}
      <div className="flex bg-green-200 md:w-1/2 rounded-lg">
 {/* wrapp title */}
 <div className="flex justify-center flex-col px-3 md:px-10  w-1/2">
          <h2 className='font-semibold text-sm md:text-base text-green-700'>Fresh fruits</h2>
          <h1 className='font-bold text-xl md:text-3xl'>Green World</h1>
          <p className='font-thin text-sm'>Get 60% off in selected item</p>
        </div>
        {/* wrapp image */}
        <div className="flex justify-end md:w-1/2">
          <Image src={"/banner/brocoli.png"} objectFit='cover' width={200 } height={200}  alt=''/>
        </div>
      </div>
      {/* fruits card */}
      <div className="flex  bg-yellow-200 md:w-1/2 rounded-lg">
        {/* wrapp title */}
        <div className="flex justify-center flex-col px-3 md:px-10 w-1/2">
          <h2 className='font-semibold text-sm md:text-base text-green-700'>Fresh fruits</h2>
          <h1 className='font-bold text-xl md:text-3xl'>Healty Food</h1>
          <p className='font-thin text-sm'>Get 60% off in selected item</p>
        </div>
        {/* wrapp image */}
        <div className="flex justify-end  w-1/2 ">
          <Image src={"/banner/strawbery.png"}  width={200} height={200} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Banner