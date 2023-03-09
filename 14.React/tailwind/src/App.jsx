import React from 'react'
import About from './components/About'
import Card from './components/Card'

const App = () => {
  return (
    <div className="flex flex-wrap gap-5 h-screen justify-center items-center mt-5">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App
