import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

//dont forget to bind this
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    //you can pass in a parameter
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    //you pass in an attrinute to the child component as  prop which references the greet parent method
    render() {
        return (
            <div>
                <ChildComponent greetHandler={ this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
