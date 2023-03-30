import React, { useEffect, useState } from 'react'
import Filter from './component/Filter'
import Movie from './component/Movie'

const App = () => {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e6b505386f51fe88bd115d9e0541ad9a&language=en-US&page=1`)
    const { results } = await api.json()
    setPopular(results)
    setFiltered(results)
    console.log(results);
  }

  return (
    <div>
      <Filter filtered={filtered} setFiltered={setFiltered}/>
      <div className='flex flex-wrap gap-10 justify-center items-center mt-16'>
        {popular.map(movie => {
          return (
            <Movie key={movie.id} {...movie} />
          )
        })}
      </div>
    </div>
  )
}

export default App
