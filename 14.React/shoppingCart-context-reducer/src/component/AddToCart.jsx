import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../context/StateContext'
import ProductList from './ProductList'
import { Link } from 'react-router-dom'

const AddToCart = () => {
    const { state: { cart } } = StateContextCustom()
    console.log(cart);
    const [mainTotal, setMainTotal] = useState(0)

    useEffect(() => {
        setMainTotal(total)
    }, [])

    // calculate total of cart
    const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0)

    const increaseTotal = price => {
        setMainTotal(mainTotal + price)
    }

    const decreaseTotal = price => {
        setMainTotal(mainTotal - price)
    }

    return (
        <div>
            {cart.length > 1 ? (
                <div>
                    <div className='flex flex-col mt-10'>
                        {cart?.map(product => {
                            return (
                                <ProductList key={product.id} product={product} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} />
                            )
                        })}
                    </div>
                    <hr className='w-[70%] mx-auto' />
                    <div className="flex justify-around items-center mt-5">
                        <h2 className='text-gray-500 font-semibold text-2xl'>Total</h2>
                        <p className='font-semibold text-2xl'>$ {mainTotal.toFixed(2)}</p>
                    </div>
                </div>
            ) : (
                    <div className="flex justify-center gap-5 my-52 items-center">
                    <p className='text-red-800 text-2xl'>Please add a product to cart.</p>
                    <Link to='/'>
                        <button className="px-10 py-3 bg-red-800 rounded shadow text-white">Go Shopping</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default AddToCart
