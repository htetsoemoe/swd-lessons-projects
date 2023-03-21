import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const One = () => {
    const { count } = useContext(StateContext)

    return (
        <div>
            <h1>Count (One) : <span>{count}</span> </h1>
        </div>
    )
}

export default One
