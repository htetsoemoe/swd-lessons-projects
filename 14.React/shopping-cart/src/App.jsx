import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import './styles.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default App
