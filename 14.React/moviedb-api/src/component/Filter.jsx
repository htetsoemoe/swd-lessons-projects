import React, { useEffect } from 'react'

const Filter = ({ filtered, setFiltered, activeGenre, setActiveGenre, popular }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular)
            return
        }
        const filterMovie = popular.filter(movie => movie.genre_ids.includes(activeGenre))
        setFiltered(filterMovie)
    }, [activeGenre])
    
    return (
        <div className='flex justify-around shadow rounded p-10 items-center'>
            <h1 className='font-semibold text-2xl'>TT Movie Store</h1>
            <div className="flex gap-5">
                <button onClick={() => setActiveGenre(0)} className='px-7 py-3 bg-cyan-950 text-white rounded'>All</button>
                <button onClick={() => setActiveGenre(28)} className='px-7 py-3 bg-cyan-950 text-white rounded'>Action</button>
                <button onClick={() => setActiveGenre(35)} className='px-7 py-3 bg-cyan-950 text-white rounded'>Comedy</button>
            </div>
        </div>
    )
}

export default Filter
