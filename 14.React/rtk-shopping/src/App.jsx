import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './features/services/counterSlice'

const App = () => {
  const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='text-3xl ml-10'>{value}</h1>
      <button onClick={() => dispatch(increment())} className='my-3 mx-5 bg-slate-500 p-3 rounded'>Increment</button>
    </div>
  )
}

export default App
