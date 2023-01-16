import { useReducer } from 'react'

type stateProps = {
  count: number
}

type updateAction = {
  type: 'increment' | 'decrement'
  payload: number
}

type resetAction = {
  type: 'reset'
}

type actionProps = updateAction | resetAction

const initialState = { count: 0 }

function reducer(state: stateProps, action: actionProps) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div>Count: {state.count}</div>
    </div>
  )
}

export default Counter
