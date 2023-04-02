import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './feature/counterSlide'

const Two = () => {
    const dispatch = useDispatch()

    return (
        <div className='ml-10 flex gap-5'>
            <button onClick={() => dispatch(increment(10))} className='px-5 py-3 bg-slate-800 text-white rounded'>Increment</button>
            <button onClick={() => dispatch(decrement(10))} className='px-5 py-3 bg-slate-800 text-white rounded'>Decrement</button>
        </div>
    )
}

export default Two
