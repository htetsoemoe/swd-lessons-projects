import React, { useContext, useState } from 'react'
import { StateContext } from './context/StateContext'
import Movie from './Movie'

const MovieList = () => {

    const { movieList, setMovieList } = useContext(StateContext)
    // console.log(userName);

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
