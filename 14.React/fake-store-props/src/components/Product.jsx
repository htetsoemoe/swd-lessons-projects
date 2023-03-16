import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ id, title, image, price }) => {
    return (
        <div className='w-65 rounded shadow border p-4 mt-12'>
            <img src={image} className="w-[200px] h-[250px] mb-2 mx-auto" alt="" />
            <div className="">
                <p className='mb-2'>{title.substring(0, 27)}...</p>
                <p className='mb-2'>{price}</p>
                <button className="px-6 py-2 bg-teal-800 text-white shadow rounded mr-2">Add To Cart</button>

                <Link to={`/details/${id}`}>
                    <button className="px-6 py-2 bg-teal-800 text-white shadow rounded">Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
