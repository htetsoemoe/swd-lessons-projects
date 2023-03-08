import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errors = () => {

    const navigate = useNavigate();

    const handler = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>404 Bad Request.</h1>
            <button onClick={handler} className="btn btn-danger">Home</button>
        </div>
    )
}

export default Errors
