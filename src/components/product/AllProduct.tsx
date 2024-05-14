import React from 'react';
import { Products } from '@/data'


type PropsChild = {
    prod: Products; // Assuming Products is an array of ProductType
}

const AllProduct: React.FC<PropsChild> = ({ prod }) => {
    console.log(prod);
    return (
        <div>
            {/* card */}
            <div className="">
                {/* image */}
                {prod.map((item, i) => (
                    <div key={i} className="">
                        <h1>{item.title}</h1>
                        {/* Render other product details here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProduct;