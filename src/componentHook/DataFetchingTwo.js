import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

//there are four step, 1, make the inport of axios and usereducer
//2nd, declare the variables, initial state and reducer. this time around the initial state is an object of properties loading, error and post

//3rd,for the reducer fxn, use the switch statement to define the action

//4th, lets call the useReducer method which we knows accepts the reducer and the initial state and return a pair of values

//now add the useEffect call to it and state the dispatch/action to take in it

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
             return {
                loading: false,
                post: action.payload,
                error: 'Someting went wrong'
            }
        default:
            return state
    }
}


function DataFetchingTwo() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    
     useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
            .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error? state.error: null}
        </div>
    )
}

export default DataFetchingTwo