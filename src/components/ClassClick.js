import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
    console.log("button 2 clicked");
    }
    render() {

        return (
            <div>
                 <button onClick= {this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default ClassClick
