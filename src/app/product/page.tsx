import AllProduct from '@/components/product/AllProduct'
import { ProductDisplay, Products } from '@/data'
import React from 'react'

const Product = () => {

    console.log("ProductDisplay")
    return (
        <div className='flex'>
            {/* fillter */}
            <div className=""></div>
            {/* product */}
            <div className="">
                <AllProduct prod={ProductDisplay} />
            </div>
        </div>
    )
}

export default Product
