import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const AddToCart = () => {

    const { cartItems } = useSelector(state => state.cart)


    return (
        <div className='mt-10'>
            {cartItems?.map(item => {
                return (
                    <Cart key={item.id} {...item} />
                )
            })}
        </div>
    )
}

export default AddToCart
