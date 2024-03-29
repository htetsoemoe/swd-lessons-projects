import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { StateContextCustom } from '../context/StateContext'

const ProductList = ({ product, increaseTotal, decreaseTotal}) => {
    const { id, title, price, image } = product
    const [quantity, setQuantity] = useState(1)
    const {dispatch} = StateContextCustom()

    const increaseQty = () => {
        setQuantity(quantity + 1)
        increaseTotal(price)
    }

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            decreaseTotal(price)
        }
    }

    const oneItemPrice = price * quantity

    // If user remove from one product form a cart, we need to remove that "product" from a "cart" and decrease the "total"
    const removeHandler = () => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product })
        decreaseTotal(oneItemPrice)
    }
    
    return (
        <div className='flex justify-around items-center mb-10'>
            <div className="flex gap-7 justify-center items-center">
                <img src={image} className="w-[100px] h-[100px]" alt={title} />
                <div>
                    <p className='text-gray-500 font-semibold'>{title.substring(0,15)}...</p>
                    <p className='mb-3'>${oneItemPrice.toFixed(2)}</p>
                    <p onClick={removeHandler} className="cursor-pointer text-red-800">remove</p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <p onClick={increaseQty} className='cursor-pointer'>
                    <IoIosArrowUp className='text-2xl'/>
                </p>
                <p>{quantity}</p>
                <p onClick={decreaseQty} className='cursor-pointer'>
                    <IoIosArrowDown className='text-2xl'/>
                </p>
            </div>
        </div>
    )
}

export default ProductList
