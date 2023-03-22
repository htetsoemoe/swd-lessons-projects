import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const ValueBtn = () => {
    const {dispatch} = StateContextCustom()

    return (
        <div className='text-center mt-10'>
            <button onClick={() => dispatch({ type: "increaseValue" })} className='px-6 py-1 bg-teal-800 text-white rounded shadow-lg'>Increase Value Component</button>
        </div>
    )
}

export default ValueBtn
