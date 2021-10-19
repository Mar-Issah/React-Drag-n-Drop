import React, {useState, useEffect} from 'react'
import axios from 'axios'

//we are going to get the json data from placeholder.com using axios in hooks

//in the useEffect implement axios to get data from jsonplaceholder then log the response. set the posts to the response if error print error

//use map fxn to render a list if the data title in the jsx

//you realize thet when you looj into the console, the fetching occur multiple times, add a second paramete ie empty array the the useeffect to ,ake sure mounting is done once


//===========================================================
//how to reatrive an individual data odbject with id. firist add an input element to type the id we are searching for

//the value it the id. add an onChange to the input to refresh its value. it will return the event.target.value updated

//add a new state variable if id, setId and initial value of 1. which will show in the input box. add the variable at the end of the url

//change the posts to post and the initial value an empty object not array. remove the map fxn since it no longer an array, return the a div of post. title


//======================================================
//lets add a button so changes are made only base on the button click

//create new state variable for the button click.
//add a new button element and onClick handler. on click of the button set the id of the buttonClick variable to the value present in the input field (the value/onChane value)

//so onclick of the button pass the id typed to the button (setIdFromButtonClick)

//finally let use Effect know that it is depending on the id from the button not the regular id value.



function DataFetching() {
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1)
    const [ idFromButtonClick, setIdFromButtonClick ] = useState(1)
    
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={ handleClick}>Fetch Post</button>
            <div>{post.title }</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{ post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching