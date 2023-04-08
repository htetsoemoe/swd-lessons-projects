import React from 'react'
import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
   </div>
  )
}

export default App
