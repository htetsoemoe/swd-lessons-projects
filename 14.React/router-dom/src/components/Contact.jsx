import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to={'/'}>
        <button className="btn btn-outline-primary">Home</button>
      </Link>
    </div>
  )
}

export default Contact
