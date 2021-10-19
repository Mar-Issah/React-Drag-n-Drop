import React, {useState, useEffect} from 'react'
import axios from 'axios'

//first lets write the code using useState/useEffect and then later useReducer and then compare the two

//for this scenario we need 3 state variables a loading to indicate the data fetching happening in the background default is set to true, an error message to display a message if something went wrong default set to an empty string and finally a variable to hold the post which we will be fetching from an api end point defualt is an empty object to receive the new object

//for side effect, use use effect which accepts a fxn as a first parameter and an empty array as second ensuring that the object onlt mounts once

//go to the url and copy the link to only one object, paste it in the axios get request. When the get request is made, a promise is return so we add a then block and a catch block

//in then block set the loading to false we assume it finish loading. set the post to the post and set rror to empty

//in the catch block also set loading to false just making sure and set post to empty object so it doesnt display any other thing and then display the error mege if any

//Now in the jsx if the loading display loading else display the post title and if error display error else null

//at the begginig loading is set to true so it will displa loading then loading turn to false so it will diplay the object

function DataFetchingOne() {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState('')
    const [ post, setPost ] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
        })
            .catch(error => {
             setLoading(false)
                setPost({})
                setError('Something went wrong')
        })
    },[])
    
    return (
        <div>
            {
                loading ? "Loading" :post.title
            }
            {
                error? error : null
            }
        </div>
    )
}

export default DataFetchingOne
