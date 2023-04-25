import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/services/cartSlice'

const SearchedItems = (props) => {
    const {id, image, price, title} = props
    const dispatch = useDispatch()
    const [inCart, setInCart] = useState(true)

    const clickHandler = () => {
        dispatch(addToCart(props))
        setInCart(false)
    }

    return (
        <div className='flex flex-col w-72 shadow p-7'>
            <img className='max-w-[130px] h-[150px] mx-auto' src={image} alt={title} />
            <div className="mt-5 flex flex-col gap-3">
                <h2 className="font-semibold">{title.substring(0, 25)}...</h2>
                <p className='font-bold'>${price}</p>
                <button onClick={clickHandler} className={`${inCart ? "px-6 py-2 bg-blue-900 text-white rounded" : "px-6 py-2 bg-red-900 text-white rounded"}`}>
                    {(inCart) ? 'Add To Cart' : 'In Cart'}
                </button>
            </div>
        </div>
    )
}

export default SearchedItems
