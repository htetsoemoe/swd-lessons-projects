import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddToCart from './component/AddToCart'
import Navbar from './component/Navbar'
import Products from './component/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
    </div>
  )
}

export default App
