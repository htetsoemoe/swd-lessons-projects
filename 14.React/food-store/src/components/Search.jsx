import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCart from './MealCart'

const Search = () => {
    const {name} = useParams() // this param value "name" used in api request
    const [items, setItems] = useState([])
    //console.log(name)

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await api.json() // json contains array named = meals: [{}]
        setItems(data.meals)
        //console.log(data.meals);
    }

    return (
        <div className='flex flex-wrap gap-10 mt-10 mb-10 justify-center'>
            {
                items.map((item) => {
                    return (
                        <div className="" key={item.idMeal}>
                            <img src={item.strMealThumb} className="image h-[300px] w-[400px] object-cover rounded" alt="cuisine-photo" />

                            <p className='my-5 text-center text-[12px] bg-green-800 text-white p-2 rounded'>
                                {item.strMeal}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search
