import AllProduct from '@/components/product/AllProduct'
import FilterProduct from '@/components/product/FilterProduct'
import { ProductDisplay, Products } from '@/data'
import React from 'react'

const Product = () => {

    console.log("ProductDisplay")
    return (
        <div className=' flex justify-center w-full gap-2 px-6' >
            {/* fillter */}
            <div className="hidden md:flex w-1/6 bg-slate-100" >
                <FilterProduct />
            </div>
            {/* product */}
            <div className="w-full ">
                <AllProduct prod={ProductDisplay} />
            </div>
        </div>
    )
}

export default Product
