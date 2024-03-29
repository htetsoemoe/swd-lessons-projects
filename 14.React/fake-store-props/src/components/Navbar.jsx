import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({items, setItems}) => {
  const [search, setSearch] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    const filterProduct = items.filter(item => item.title.toLowerCase().includes(search))
    setItems(filterProduct)
    console.log(filterProduct);
  }

  return (
    <div className='flex items-center justify-around py-8 bg-slate-500'>
      <Link to={'/'}>
        <h1 className='font-semibold text-xl'>TT Clothing Store</h1>
      </Link>
      <form onSubmit={submitHandler}>
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='outline-none bg-slate-200 border-b-4 border-blue-800 p-1' name="search" id="" />
      </form>
    </div>
  )
}

export default Navbar
