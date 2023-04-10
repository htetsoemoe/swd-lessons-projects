import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const AddToCart = () => {

    const { cartItems, totalAmount } = useSelector(state => state.cart)

    if (cartItems.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">Your cart is empty!</h1>
                    <Link to={'/'}>
                        <button className='px-4 py-1 rounded text-white bg-blue-800'>Go to Shopping</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='mt-10'>
                {cartItems?.map(item => {
                    return (
                        <Cart key={item.id} {...item} />
                    )
                })}
            </div>

            <hr className='border max-w-[70%] mx-auto' />

            <div className="mt-5 flex justify-between w-[70%] mx-auto">
                <h2 className='font-semibold text-2xl'>Total</h2>
                <h4 className='font-semibold'>$ {totalAmount.toFixed(2)}</h4>
            </div>
        </>
    )
}

export default AddToCart
