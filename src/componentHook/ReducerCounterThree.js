import React, { useReducer } from 'react'

//what if we need two counters withe exact state transitons. use multiple usereducer hooks..more like having two usereducers and two separate groupf button but same fxnality

//duplicate the button the the use reducer

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
       case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state 
        }
    }

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [ countTwo, dispatchTwo ] = useReducer(reducer, initialState)
    
    return (
    <div>
        <div>
            <h2>Count : { count}</h2>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}
            >Decrement</button>
            <button onClick = {() => dispatch('reset')}
            >Reset</button>
        </div>

        <div>
            <h2>Count Two : { countTwo}</h2>
            <button onClick = {() => dispatchTwo('increment')}>Increment</button>
            <button onClick = {() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick = {() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ReducerCounter

