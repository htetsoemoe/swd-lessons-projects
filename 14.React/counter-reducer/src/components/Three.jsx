import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const Three = () => {
    const {setCount} = useContext(StateContext)

    return (
        <div>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease from Three</button>
        </div>
    )
}

export default Three
