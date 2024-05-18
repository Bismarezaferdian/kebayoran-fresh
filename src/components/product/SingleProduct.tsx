"use client"
import { ProductDisplay } from '@/data'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import NewProducts from '../landingpage/NewProduct'

const SingleProduct = () => {
    const path = usePathname()
    const params = useParams()

    console.log(params)
    return (
        <div className=" container mx-auto">
            <div className=' md:container mx-auto flex gap-2 flex-col md:flex-row justify-center w-full px-3'>
                {/* image */}
                <div className="w-full md:w-fit">
                    <Image src={ProductDisplay[0].img} alt='' width={600} height={600} />
                    {/* <Image src={ProductDisplay[0].img}
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                /> */}
                </div>
                {/* contect  */}
                <div className=" w-full md:w-3/4 flex flex-col justify-between  gap-2 bg-white">
                    <h1 className='font-bold'>{ProductDisplay[0].title}</h1>

                    <h1>Rp.{ProductDisplay[0].price}</h1>
                    {/* deskripsi */}
                    <div className="">
                        <p className='font-semibold'>Deskripsi product</p>
                        <h1 className='text-slate-500'>{ProductDisplay[0].desc}</h1>
                    </div>
                    {/* Pnegiriman */}
                    <div className="">
                        <h1 className='font-semibold'>Pengiriman</h1>
                        <div className="bg-green-100 md:w-fit p-3 ">
                            <p className=' text-green-700'>Free pengiriman min pembelian Rp.100.000</p>
                        </div>
                    </div>
                    {/* qty */}
                    <p className='font-semibold'>Kuantitas</p>
                    <div className="flex">
                        <button className='px-3 py-2 border cursor-pointer text-gray-900 rounded-md'>-</button>
                        <p className='flex justify-center px-4 border-none items-center rounded-md bg-green-200 mx-2'>2</p>
                        <button className='px-3 border  text-gray-900 rounded-md'>+</button>
                    </div>
                    <div className="">
                        <button className='px-4 py-3 bg-green-500 text-slate-50 rounded-md'>Masukan Keranjang</button>
                    </div>
                </div>
            </div>
            <NewProducts />
        </div>

    )
}

export default SingleProduct