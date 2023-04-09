import React from 'react'
import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Navbar from './components/Navbar'
import AddToCart from './components/AddToCart'

const App = () => {
  return (
   <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
   </div>
  )
}

export default App
