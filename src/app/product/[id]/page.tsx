import SingleProduct from '@/components/product/SingleProduct'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Params {
    id: number
}

const Product: React.FC<{ params: Params }> = ({ params }) => {
    // console.log(params)
    return (
        <div>
            <SingleProduct />
        </div>
    )
}

export default Product