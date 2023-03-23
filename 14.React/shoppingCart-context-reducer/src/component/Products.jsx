import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import Product from './Product';

const Products = () => {

    const {state: {products}} = StateContextCustom()
    console.log(products);

    return (
        <div className='flex flex-wrap justify-center gap-7 mt-10'>
            {products.map(product => {
                return (
                    <Product key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default Products
