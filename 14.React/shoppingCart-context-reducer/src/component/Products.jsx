import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Products = () => {

    const {state} = StateContextCustom()
    console.log(state);

    return (
        <div>
            <h1 className="text-3xl">Products</h1>
        </div>
    )
}

export default Products
