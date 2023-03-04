import React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <div className="container">
     <div className="mb-4">
        <Link to={'/about'} className="mx-2">
          <button className="btn btn-outline-primary">About</button>
        </Link>

        <Link to={'/contact'} className="mx-2">
          <button className="btn btn-outline-primary">Contact</button>
        </Link>
     </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
