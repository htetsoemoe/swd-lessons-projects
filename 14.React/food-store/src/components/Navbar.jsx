import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around p-8 rounded-lg shadow-lg'>
      <Link to={'/'}>
        <GiKnifeFork className='text-3xl'/>
      </Link>
      <div>
        <input type="text" className='bg-black'/>
      </div>
    </div>
  )
}

export default Navbar
