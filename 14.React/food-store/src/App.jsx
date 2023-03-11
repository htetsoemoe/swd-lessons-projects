import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Meal from './components/Meal'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
