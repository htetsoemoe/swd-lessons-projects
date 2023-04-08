import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { Input } from '@mantine/core';
import { Badge } from '@mantine/core';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-7 shadow-lg'>
      <Link to={'/'}>
        <h2 className="text-2xl font-semibold text-blue-800 hover:text-blue-500">TT Clothing Store</h2>
      </Link>
      <div className="flex gap-8 items-center">
        <Input
          icon={<AiOutlineSearch  />}
          variant="filled"
          placeholder="Search"
        />

        {/* Later, need to implement conditional render based on product in cart */}
        <Link to={'/'}>
          <div className="relative">
            <BsCart4 className='text-2xl' />
            <Badge className='absolute bottom-5 left-4 bg-red-500 text-white' color="red">0</Badge>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
