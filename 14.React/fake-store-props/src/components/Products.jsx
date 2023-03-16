import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const api = await axios.get('https://fakestoreapi.com/products')
        setItems(api.data)
    }

    return (
        <div className='flex flex-wrap justify-center gap-7'>
            {
                items.map(item => {
                    return (
                        <Product key={item.id} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default Products
