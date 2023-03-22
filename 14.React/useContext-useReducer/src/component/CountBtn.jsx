import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const CountBtn = () => {
    const {dispatch} = StateContextCustom()

    return (
        <div className='text-center mt-10'>
            <button onClick={() => dispatch({ type: "increaseCount" })} className='px-6 py-1 bg-teal-800 text-white rounded shadow-lg'>Increase Count Component</button>
        </div>
    )
}

export default CountBtn
