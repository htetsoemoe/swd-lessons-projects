import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Errors from './components/Errors'
import './app.css'

const App = () => {
  return (
    <div className="">

      <div className='container-fluid'>
        <Navbar />
      </div>

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Errors />}/>
        </Routes>
      </div>
    </div>
   
  )
}

export default App
