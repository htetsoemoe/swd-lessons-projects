import React from 'react'

const Movie = ({ title, poster_path }) => {
    return (
        <div className=''>
            <p className='text-xs font-bold mb-3'>{title}</p>
            <img className='rounded' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
        </div>
    )
}

export default Movie
