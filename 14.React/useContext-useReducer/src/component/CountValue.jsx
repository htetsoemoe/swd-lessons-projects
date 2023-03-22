import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const CountValue = () => {
    const {state} = StateContextCustom()

    return (
        <div>
            <h1 className="text-center text-3xl mt-10">Count Component : {state?.count}</h1>
        </div>

    )
}

export default CountValue
