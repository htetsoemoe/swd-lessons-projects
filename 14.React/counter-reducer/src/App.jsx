import React from 'react'
import { useReducer } from 'react'

const App = () => {

  const initialState = 0


  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':        
        return state + 1;
      case 'decrease':
        return state - 1;
      case 'reset':
        return 0;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Hello from Reducer</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({type: "increase"})}>Increase</button>
      <button onClick={() => dispatch({type: 'decrease'})}>Decrease</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default App
