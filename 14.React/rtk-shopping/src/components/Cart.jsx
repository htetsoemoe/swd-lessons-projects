import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Cart = (props) => {

    const {id, title, price, image, quantity} = props

    return (
        <div className='flex justify-around items-center mb-10'>
            <div className="flex gap-5 items-center">
                <img src={image} className='w-[100px] h-[120px]' alt="" />
                <div className="">
                    <p className='text-gray-500 font-semibold'>{title.substring(0,20)}...</p>
                    <p className='mb-3'>{price}</p>
                    <button className='cursor-pointer text-red-800'>remove</button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="cursor-pointer">
                    <IoIosArrowUp className='text-2xl'/>
                </p>
                <p>0</p>
                <p className="cursor-pointer">
                    <IoIosArrowDown className='text-2xl'/>
                </p>
            </div>
        </div>
    )
}

export default Cart
