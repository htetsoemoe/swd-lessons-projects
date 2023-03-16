import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
