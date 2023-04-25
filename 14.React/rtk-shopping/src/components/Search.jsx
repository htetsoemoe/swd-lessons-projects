import React from 'react'
import { useLocation } from 'react-router'
import SearchedItems from './SearchedItems';

const Search = () => {
    const location = useLocation();
    const products = location.state.filterProduct
    console.log(products);
    
    return (
        <div className='flex flex-wrap gap-10 justify-center items-center mt-12'>
            {products.map(product => {
                return (
                    <SearchedItems key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default Search
