import React, { Component } from 'react'
// for binding event handlers in react remove the export before the class
class EventBind extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hi there!"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
       // console.log(this);      //this keyword is undefined. my understanding says because the function is not defined using the function keyword unlike in the function component

        this.setState({
            message:"Goodbye"
        })
    }

    //first approach is to use .bind(this), this is not a proble for small application. It causes the application to re-render any time there is a change

    //second approach is to use the arrow function in the render method similar to the first it has performance issues

    //approach 3 is the best approach where you bind the handler in the constructor above.

    //the fourth appraoch is saving the arrow function in the clickHandler.
    //  clickHandler = ()=> {
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    render() {
        return (
            <div>
                <div>{ this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}
{/* 
                <button onClick={() => this.clickHandler()} >Click</button> */}

                
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default EventBind
