import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './MealCart.css'

const MealCart = ({name, image}) => {
  return (
    <div className='relative parent'>
      <img src={image} className="image h-[300px] object-cover rounded"  alt="cuisine-photo" />
      <p className='icon bg-red-800 h-12 w-12 rounded-[100%] flex justify-center items-center absolute top-[40%] left-[40%]'>
        <BiSearch className='text-2xl text-white'/>
      </p>
    </div>
  )
}

export default MealCart
