import React from 'react'

const Product = (props) => {
  const {id, image, price, title, description} = props
  return (
    <div>
      <div className='flex flex-col w-72 shadow p-7'>
        <img src={image} alt="" className="max-w-[130px] h-[150px] mx-auto" />
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="font-semibold">{title.substring(0, 25)}...</h2>
          <p className='font-bold'>${price}</p>
          <button className='px-6 py-2 bg-blue-900 text-white rounded'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
