import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around py-8 bg-slate-500'>
      <Link to={'/'}>
        <h1 className='font-semibold text-xl'>TT Clothing Store</h1>
      </Link>
      <form>
        <input type="text" className='outline-none bg-slate-200 border-b-4 border-blue-800 p-1' name="search" id="" />
      </form>
    </div>
  )
}

export default Navbar
