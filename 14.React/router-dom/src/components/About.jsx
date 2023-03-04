import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={'/'}>
        <button className="btn btn-outline-primary">Home</button>
      </Link>
    </div>
  )
}

export default About
