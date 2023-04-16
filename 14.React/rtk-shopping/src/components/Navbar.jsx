import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { Input } from '@mantine/core';
import { Badge } from '@mantine/core';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);

  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-32 flex items-center justify-between">
        <Link to={'/'}>
          <h2 className="text-2xl font-semibold text-blue-800 hover:text-blue-500">TT Clothing Store</h2>
        </Link>

        <div className="flex gap-8 items-center">
          <Input
            icon={<AiOutlineSearch />}
            variant="filled"
            placeholder="Search"
          />
          <Link to={'/addtocart'}>
            <div className="relative">
              {/* Implement conditional render based on product in cart */}
              {(cartItems.length) === 0 ? (
                <BsCart4 className='text-2xl' />
              ) : (
                <>
                  <BsCart4 className='text-2xl' />
                  <Badge className='absolute bottom-4 left-4 bg-red-500 text-white' color="red">{cartItems.length}</Badge>
                </>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
