import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`)
    const data = await api.json()
    setProducts(data)
  }

  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
      {products.map(product => {
        return (
          <Product key={product.id} {...product}/>
        )
      })}
    </div>
  )
}

export default Products
