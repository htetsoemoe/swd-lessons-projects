import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext'

const Navbar = () => {
    const {search, setSearch, state:{cart}} = StateContextCustom()
    console.log(cart);
    return (
        <div className='flex justify-around shadow rounded p-10 items-center'>
            <Link to={'/'}>
                <h2 className='text-3xl font-semibold'>TT Clothing Shop</h2>            
            </Link>
            <div className="flex gap-7">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="search" className="outline-none border-l-2 border-l-gray-200  border-t-2 border-t-gray-200 border-r-2 border-r-gray-200  border-b-2 border-b-gray-500 bg-transparent" />
                <Link to={'/addtocart'}>
                    <div className="relative">
                        <AiOutlineShoppingCart className='text-3xl' />
                        <span className="absolute bottom-5 left-5 h-8 w-7 bg-red-500  flex items-center justify-center rounded-[100%] text-white">{cart.length}</span>
                    </div>               
                </Link>
            </div>
        </div>
    )
}

export default Navbar
