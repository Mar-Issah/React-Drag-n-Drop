import React, { Component } from 'react'

export class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Jon"
        }
        console.log("LifeCycleA Constructor");
    }

    //this take the props and state as param and return the new state or null
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }

     componentDidMount() {
        console.log("lifecycleA componentDidMount")
    }

     shouldComponentUpdate() {
        console.log("lifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lifecycleA getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("lifecycleA componentDidUpdate")
    }

    render() {
          console.log("Lifecycle render");
        return (
            <div>
                lifecycle A
            </div>
        )
    }
}

export default Lifecycle