import React, { Component } from 'react'

//HOC: create the fxn UpdatedComponent which takes the OriginalComponent and retrun a new component rendering the OriginalComponent and a prop call name

//pass in the constructor with state and function here and not in click and hover counter and find a way to render it to the others as props

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component {
        constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

     incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }
        render() {
            return (
                < OriginalComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {... this.props}
                />
            )             
        }
    }

    return NewComponent
}

export default UpdatedComponent