import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Child from '../components/Child'

const Home = () => {
    const navigate = useNavigate()

    const handler = () => {
        navigate('/about')
    }

    console.log("Home Parent Component");

    const [state, setState] = useState(0)
    const changeState = () => {
        setState(state + 1)
    }

    const inputRef = useRef()
    const funRef = () => {
        navigate('/service', {state: {test: inputRef.current.value}})
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <div className="mb-4">
                <h1>Home Page</h1>
                <button onClick={handler} className="btn btn-outline-primary">About</button>
            </div>

            <div className="mb-4 pe-4">
                <span className='pe-4'>{state}</span>
                <button onClick={changeState} className="btn btn-danger">Use State</button>
            </div>

            <div className="mb-4">
                <input type="text" ref={inputRef}/>
                <button onClick={funRef} className="btn btn-primary">Use Ref</button>
            </div>

            <Child />
        </div>
    )
}

export default Home
