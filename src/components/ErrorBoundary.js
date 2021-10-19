import React, { Component } from 'react'


//add the state ans et it to false. If there is any error in your application the getDerivedStateFromError method will set the hasError to true

//in the render method if the state has an error then return something went wrong else return the children (in app nest the hero inside the error boundary)

//its a good idea to wrap each hero component within the error boundary so the non-error component can see display

//use   componentDidUpdate to log the error

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidUpdate(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
           if(this.state.hasError){
                return (
                <div>
                    <h1>something went wrong!</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
