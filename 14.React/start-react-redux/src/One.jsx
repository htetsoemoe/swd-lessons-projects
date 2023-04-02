import React from 'react'
import { useSelector } from 'react-redux'

const One = () => {
    const {count} = useSelector(state => state.counter);

    return (
        <div>
            <h2 className='text-3xl ml-10'>{count}</h2>
        </div>
    )
}

export default One
