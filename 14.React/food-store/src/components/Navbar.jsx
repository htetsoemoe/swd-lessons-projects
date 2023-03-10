import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='flex justify-around p-8 rounded-lg shadow-lg'>
      <GiKnifeFork className='text-3xl'/>
      <div>
        <input type="text" className='bg-black'/>
      </div>
    </div>
  )
}

export default Navbar
