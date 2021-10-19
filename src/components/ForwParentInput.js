import React, { Component } from 'react'
import ForwInput from './ForwInput'
//st: create the ref
//2nd: attach the ref to the element. ref={ this.inputRef}
//3rd : add to the child component. you will to rewrite the fxn component into an arrow fxn

export class ForwParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler= () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwInput ref={ this.inputRef}/>
            <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwParentInput
