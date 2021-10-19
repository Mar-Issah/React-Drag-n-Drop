import React, { Component } from 'react'
import axios from 'axios'

//create three input elements and add a state with userid, title and body. destructure them in the render method
//add the values to the input and an onChange  method to keep track of any changes make whiles typing

//the changehandler set the states of the name which has bn collected together in an array. to the values  typed

//on submitting the form prevent default to prevent refreshing and print out the state set. you will see a json object in the console

//let do same with axios. it quite similar to the get except you use post which accepts the url and the state

//when you check the console you get the same result plus another in a axioswhich id and all

class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             userId: "",
             title: "",
             body: ""
         }
     }
     
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios
            .post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response => {
            console.log(response);
        })
            .catch(error => {
            console.log(error);
        })
    }
    

     render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                             onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                             onChange={this.changeHandler}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
