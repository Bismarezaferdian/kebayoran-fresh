import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className="px-6 ">
    <div className='flex flex-col md:flex-row w-full justify-center items-center bg-gradient-to-r from-[#96d991] to-[#1e4d15] rounded-3xl '>
        {/* image over */}
        <div className=" flex flex-1 justify-center ">
            <Image src={"/product/dagingSlice.png"} alt='' width={400} height={400}/>
        </div>
         {/* title offer */}
         <div className="flex flex-1 flex-col justify-center h-full p-3 ">
            <p className='text-red-500 font-semibold font-sans'>Hot deals !</p>
            <h1 className='text-slate-200 text-2xl md:text-4xl font-bold'>DAGING SHORTFLATE BEEF YOSHINOYA SLINCE 1KG</h1>
            <h1 className='text-base md:text-xl text-slate-100'>Dapatkan harga terbaik hanya hari ini </h1>
        </div>
        </div>
    </div>
  )
}

export default Offer