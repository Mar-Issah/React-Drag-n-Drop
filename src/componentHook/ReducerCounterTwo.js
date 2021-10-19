import React, { useReducer } from 'react'

//we are going to be using a state object and action object
//the initial state will now be an object with a firstCounter property of 0. so in the jsx it will be count.firstCounter

//the action is also an object with a property of type. so add the property to the codes below

//using the object for state and action is importanet for eg when you want to increase the decrease the count by certain number/value. lets add a second porperty of value and add more buttons

//so in the switch statement instaead of the hardcoded value of 1. use action.value

//now suppose you want a second counter with count starting at 10. add the secondCounter property with value of 10. add a more statement to your switch statement

//because we are adding two counters at the same time lets use the spread operator to save the state so it doesnt erase prev state

//add two more button for the second counter change name and value to increase by 2

//state{} = count{} and action{} = dispatch{}

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return {  ...state,firstCounter: state.firstCounter - action.value }
         case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state 
        }
    }

function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>First Counter - {count.firstCounter}</h2>
           
            <button onClick = {() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' ,value:1})}
            >Decrement</button>
             <button onClick = {() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement' ,value:5})}
            >Decrement 5</button>
             <h2>Second Counter - { count.secondCounter}</h2>
            <button onClick = {() => dispatch({type: 'increment2', value: 2})}>Increment 2</button>
            <button onClick={() => dispatch({ type: 'decrement2' ,value:2})}
            >Decrement 2</button>
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}
            >Reset</button>
        </div>
    )
}

export default ReducerCounterTwo
