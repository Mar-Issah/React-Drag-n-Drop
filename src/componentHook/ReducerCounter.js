import React, { useReducer } from 'react'

//first we import the useReducer from react. it is a fxn so we call it and pass in the parameters, reducer, initialState

//the reducer is a fxn which accepts state and action and return a new state based on the action specified in this case we are using a switch statement and  the initial state/value is  e.g 0.

//so step one is to find the initial state and two is to write the reduce fxn

//the useReducer returns a pair of values in this we call it array  count and dispatch.state =count and dispatch = action which allows us to execute the code corresdonding to particular action

//so you pass in the already defined variable in the usereducer fuxn and also retreieve the pair of vlaue whicis use in the jsx

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

    return (
        <div>
            <h2>Count - { count}</h2>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}
            >Decrement</button>
            <button onClick = {() => dispatch('reset')}
            >Reset</button>
        </div>
    )
}

export default ReducerCounter