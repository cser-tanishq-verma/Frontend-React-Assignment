import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../Action/ActionProvider'

const Counter = () => {

  let data = useSelector(prev => prev.counter.count)
  let dispatch = useDispatch()

  console.log(data);

  return (
    <div>
      <h1>This is Redux Count {data}</h1>

      <button onClick={() => {
        dispatch(incrementCount())
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispatch(decrementCount())
      }}>
        Decrement
      </button>

      {/* <button>Decrement</button> */}
    </div>
  )
}

export default Counter