import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsYoutube } from 'react-icons/bs'

const Details = () => {
    const { id } = useParams()

    const [meals, setMeals] = useState({})

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const { meals } = await api.json()
        setMeals(meals[0])
        console.log(meals[0]);
    }

    return (
        <div className='flex w-[80%] gap-8 mx-auto items-center h-screen'>
            <img className='w-[400px] rounded object-cover' src={meals.strMealThumb} alt="" />
            <div className="">
                <h2 className="text-2xl font-semibold text-gray-600 tracking-wide mb-3">{meals.strMeal}</h2>
                <h2 className="text-lg font-semibold text-gray-600 tracking-wide">{meals.strArea}</h2>
                <h2 className="text-base font-semibold text-gray-600 tracking-wide mb-2">{meals.strCategory}</h2>
                <p className="text-gray-600 tracking-wide leading-8 mb-3">{meals.strInstructions}</p>
                <a href={meals.strYoutube}>
                    <BsYoutube className='text-red-600 text-4xl' />
                </a>
            </div>
        </div>
    )
}

export default Details
