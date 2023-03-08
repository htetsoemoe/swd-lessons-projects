import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Service = () => {
    const navigate = useNavigate()

    const location = useLocation()
    console.log(location);

    const handler = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Service Page</h1>
            <button onClick={handler} className="btn btn-outline-primary">Home</button><br />

            <p>{location.state?.test}</p>
        </div>
    )
}

export default Service
