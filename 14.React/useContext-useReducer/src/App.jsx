import React, { useReducer } from 'react'
import CountBtn from './component/CountBtn'
import CountValue from './component/CountValue'
import Value from './component/Value'
import ValueBtn from './component/ValueBtn'
import { StateContextCustom } from './context/StateContext'

const App = () => {

  return (
    <div>

      <CountValue />
      <CountBtn />
      <Value />
      <ValueBtn />

      {/* <div className='text-center mt-10'>
        <h2 className='text-3xl'>{state.count}</h2>
        <button onClick={() => dispatch({ type: "increaseCount"})} className='px-6 py-1 bg-teal-800 text-white rounded shadow-lg'>Increase</button>
      </div>

      <div className='text-center mt-10'>
        <h2 className='text-3xl'>{state.value}</h2>
        <button onClick={() => dispatch({ type: "increaseValue"})} className='px-6 py-1 bg-teal-800 text-white rounded shadow-lg'>Increase</button>
      </div> */}
    </div>
  )
}

export default App
