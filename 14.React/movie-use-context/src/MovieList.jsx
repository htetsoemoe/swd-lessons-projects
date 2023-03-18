import React, { useContext, useState } from 'react'
import { StateContext } from './context/StateContext'
import Movie from './Movie'

const MovieList = () => {

    const [movieList, setMovieList] = useState([
        { id: 1, name: "3 Idiots", rating: "7.5" },
        {id: 2, name: "Me Before You", rating: "5.5"},
        {id: 3, name: "Green Miles", rating: "8.5"},
        { id: 4, name: "The Ghazi Attack", rating: "6.5" },
    ])

    const { userName } = useContext(StateContext)
    console.log(userName);

    return (
        <div >
            {movieList.map(movie => {
                return (
                    <Movie key={movie.id} {...movie} />
                )
            })}
        </div>
    )
}

export default MovieList
