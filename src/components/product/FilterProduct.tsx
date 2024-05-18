import { category } from '@/data'
import React from 'react'

const FilterProduct = () => {
    return (
        <div>
            <div className="wrapp-kategory container overscroll-contain overflow-auto md:h-48 p-4">
                {category.map((item) => (
                    <div className="flex items-center mb-4" key={item.id}>
                        <input
                            type="checkbox"
                            name="brandFilter"
                            id={item.title}
                            // checked={brandFilter.includes(item.title)}
                            value={item.title}
                            // onChange={handleBrand}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded-3xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor={item.title}
                            className="ml-2 text-sm font-medium text-gray-400 transition-all"
                        >
                            {item.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterProduct