import React, { useContext } from 'react'
import { StateContext } from './context/StateContext'

const Movie = ({ name, rating }) => {
 
    return (
        <div>
            <ul>
                <li>Name : {name}</li>
                <li>Rating : {rating}</li>
            </ul>
        </div>
    )
}

export default Movie
