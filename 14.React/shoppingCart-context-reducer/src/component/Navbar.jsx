import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    const [search, setSearch] = useState('')
    console.log(search);

    return (
        <div className='flex justify-around shadow rounded p-10 items-center'>
            <h2 className='text-3xl font-semibold'>TT Clothing Shop</h2>
            <div className="flex gap-7">
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="outline-none border-b-2 border-b-gray-500 bg-transparent" />
                <div className="relative">
                    <AiOutlineShoppingCart className='text-3xl' />
                    <span className="absolute bottom-5 left-5 h-8 w-7 bg-red-500  flex items-center justify-center rounded-[100%] text-white">0</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
