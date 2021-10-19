import React, { Component } from 'react'
import axios from 'axios'

//first import the axios here
//create a state which will store the list of posts(post array)
//so where do we place the code to make the http call ? in the COMPONENTDIDMOUNT lifecycle method
//go to page copy the posts file url and paste it in the get method as a parameter, then console.log the response whcih is an object and has properties including the data. if err log also
//now how do we display the data on the web?.set the state by retrieving the data property of the response object
//in the render() destructure (declare) the posts for simplicity

//we now have the data in the post variable, use the ternary condition(make sure you dont have null/error ..validation) and map method to render into the JSX and onto the web page

//you can add an error property to the state to display your erro message

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({posts: response.data})
        })
            .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        const { posts } = this.state
        
        return (
            <div>
                List of posts
                {
                    posts.length ? posts.map(post => <div key={post.id}>{ post.title}</div>):null
                 }
            </div>
        )
    }
}

export default PostList