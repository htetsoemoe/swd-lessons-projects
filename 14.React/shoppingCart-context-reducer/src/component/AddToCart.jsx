import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import ProductList from './ProductList'

const AddToCart = () => {
    const {state: {cart}} = StateContextCustom()
    console.log(cart);

    return (
       <div>
            <div className='flex flex-col mt-10'>
                {cart?.map(product => {
                    return (
                        <ProductList key={product.id} {...product} />
                    )
                })}
            </div>
            <hr className='w-[70%] mx-auto'/>
            <div className="flex justify-around items-center mt-5">
                <h2 className='text-gray-500 font-semibold text-2xl'>Total</h2>
                <p className='font-semibold text-2xl'>$ 1000</p>
            </div>
       </div>
    )
}

export default AddToCart
