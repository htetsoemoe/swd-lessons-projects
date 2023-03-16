import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const api = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setItem(api.data)
    }

    return (
        <div>
            {item.title}
        </div>
    )
}

export default Details
