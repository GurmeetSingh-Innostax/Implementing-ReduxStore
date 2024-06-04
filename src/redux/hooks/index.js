import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counter'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
            <h1> COUNT : {count}</h1>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
         
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }
  