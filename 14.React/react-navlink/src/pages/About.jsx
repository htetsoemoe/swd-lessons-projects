import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const handler = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={handler} className="btn btn-outline-primary">Home</button>
        </div>
    )
}

export default About
