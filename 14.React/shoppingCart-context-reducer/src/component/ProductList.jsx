import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const ProductList = (props) => {
    const { id, title, price, image } = props
    
    return (
        <div className='flex justify-around items-center mb-10'>
            <div className="flex gap-7 justify-center items-center">
                <img src={image} className="w-[100px] h-[100px]" alt={title} />
                <div>
                    <p className='text-gray-500 font-semibold'>{title.substring(0,15)}...</p>
                    <p className='mb-3'>${price}</p>
                    <p className="cursor-pointer text-red-800">remove</p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <p className='cursor-pointer'>
                    <IoIosArrowUp className='text-2xl'/>
                </p>
                <p>0</p>
                <p className='cursor-pointer'>
                    <IoIosArrowDown className='text-2xl'/>
                </p>
            </div>
        </div>
    )
}

export default ProductList
