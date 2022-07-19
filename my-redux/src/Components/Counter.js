import React, { useContext } from 'react'
import { CounterContext } from '../Context/index'

export default function Counter() {
  
  const [state , dispatch] = useContext(CounterContext)
  

  const incrementCounter =()=> dispatch({
    type: "INCREMENT"
  })
  const decrementCounter =()=> dispatch({
    type: "DECREMENT"
  })
  const resetCounter =()=> dispatch({
    type: "RESET"
  })
  
    return (
    <>
      <h3>Counter {state.count}</h3>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  )
}

