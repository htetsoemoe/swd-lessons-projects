import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const api = await axios.get('https://fakestoreapi.com/products')
    setItems(api.data)
  }

  return (
    <div className=''>
      <Navbar items = {items} setItems = {setItems}/>
      <Routes>
        <Route path='/' element={<Products products = {items}/>} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
