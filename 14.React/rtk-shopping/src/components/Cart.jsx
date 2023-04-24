import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { addItemsQuantity, removeFromCart, subtractItemQuantity } from '../features/services/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = (props) => {

    const {id, title, price, image, quantity} = props
    const dispatch = useDispatch()

    const oneItemPrice = price * quantity

    return (
        <div className='flex justify-around items-center mb-10'>
            <div className="flex gap-5 items-center">
                <img src={image} className='w-[100px] h-[120px]' alt="" />
                <div className="">
                    <p className='text-gray-500 font-semibold'>{title.substring(0,20)}...</p>
                    <p className='mb-3'>{oneItemPrice.toFixed(2)}</p>
                    <button onClick={() => dispatch(removeFromCart(props))}
                    className='cursor-pointer text-red-800'>remove</button>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p onClick={() => dispatch(addItemsQuantity(props))}  className="cursor-pointer select-none mb-1">
                    <IoIosArrowUp className='text-2xl'/>
                </p>
                <p>{price}</p>
                <p onClick={() => quantity > 1 && dispatch(subtractItemQuantity(props))} className="cursor-pointer select-none mt-1">
                    <IoIosArrowDown className='text-2xl'/>
                </p>
            </div>
        </div>
    )
}

export default Cart
