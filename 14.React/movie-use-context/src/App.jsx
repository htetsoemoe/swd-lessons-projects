import React, { useContext } from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'

import './App.css'
import { StateContext } from './context/StateContext'

const App = () => {
  //Using state from ContextProvider
  const { userName } = useContext(StateContext)
  //console.log(userName);

  return (
    <div>
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App
