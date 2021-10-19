import React, { Component } from 'react'


//create the form add the label and input text and its value
//create your constructor , inside it is a property called username and and empty string value
//now set the value of the input to the state
//you realized that nothing happens as you type, this is when the onChange method sets in. assign it to a method handler username change
//now write your mentod passing a parameter called event. set the state of the event so that the username will target the current element and get its value
//add another dive for comment using the same procedure
// add your select element which is the dropdown.make the default value React by adding the topic to the state and a value attribute to the select element. also assign an onChane which calls the handleTopicChange method

//finally add a submit button to the form. when you click on it you realize the default action which is a reload of the webpage

//add t0 the form element onSubmit which tells react what do with the data on the form. write a method for it

//fill the form and sumit it to display the alert. You notice that the data is lost after the page refreshes. handle it by preventing default. this will prevent the page from refreshing after the alert and the data stay on the form

//clean the code by using destructure to reference this.state in the render method so as not to type this.state in all three occurences

class Form extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            comments: "",
            topic : "React"
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
        
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
        
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        const { username, comments, topic } = this.state;
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Username </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}></input>
                    </div>
                    <br/>
                    <div>
                        <label>Comments </label>
                        <textarea value={comments}
                        onChange = {this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic : </label>
                        <select value= {topic} onChange = {this.handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value = 'vue'>Vue</option>
                        </select>
                    </div>

                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form