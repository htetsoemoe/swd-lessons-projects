import React, { useState } from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch] = useState('')
  const navigation = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigation(`/search/${search}`)
  }

  return (
    <div className='flex justify-around p-8 rounded-lg shadow-lg'>
      <Link to={'/'}>
        <GiKnifeFork className='text-3xl'/>
      </Link>
      <div className='flex'>
        <FiSearch className='mr-5' />
        <form onSubmit={submitHandler}>
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='outline-none border-b-4 border-green-800' />
        </form>
      </div>
    </div>
  )
}

export default Navbar
