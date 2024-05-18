import React from 'react';
import { Products } from '@/data'
import Image from 'next/image';
import Link from 'next/link';


type PropsChild = {
    prod: Products; // Assuming Products is an array of ProductType
}

const AllProduct: React.FC<PropsChild> = ({ prod }) => {
    return (
        <div className='flex gap-2 flex-wrap'>
            {/* card */}
            {prod.map((item, i) => (
                <div className="flex flex-col  max-w-[200px] max-h-[400px] border" key={i}>
                    {/* image */}
                    <Link href={`/product/${item.id}`}>
                        <div className="">
                            <Image src={item.img} alt='' width={200} height={200} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-semibold text-sm'>Rp.{item.price}</h1>
                            <h1 className='text-base'>{item.title}</h1>
                            {/* Render other product details here */}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllProduct;