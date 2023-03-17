import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = ({products}) => {
    return (
        <div className='flex flex-wrap justify-center gap-7'>
            {
                products.map(item => {
                    return (
                        <Product key={item.id} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default Products
