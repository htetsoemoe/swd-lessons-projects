import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Value = () => {
    const {state} = StateContextCustom()

    return (
        <div>
            <h1 className="text-center text-3xl mt-10">Value Component: {state?.value}</h1>
        </div>
    )
}

export default Value
