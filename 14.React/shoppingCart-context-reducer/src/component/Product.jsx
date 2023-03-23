import React from 'react'

const Product = (props) => {
    const { id, title, price, image } = props
    return (
        <div className="w-65 bg-slate-100 shadow rounded border p-4">
            <img src={image} className="w-[200px] h-[250px] mb-2 mx-auto" alt="" />
            <div className='gap-3'>
                <p className="font-semibold mb-3">{title.substring(0, 25)}...</p>
                <p className="font-semibold mb-3">$ {price}</p>
                <button className=" px-6 py-2 bg-blue-800 rounded shadow text-white mr-2">
                    Add To Cart
                </button>
                <button className="px-6 py-2 bg-blue-800 rounded shadow text-white">
                    Details
                </button>
            </div>
        </div>
    )
}

export default Product
