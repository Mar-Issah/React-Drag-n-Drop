import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

//HOC part 2: import the UpdatedComponent from the withCounter
//now export this component passing in the click counter component same with the hover component. So what we are doing is basically exporting the HOC

//so now the click and hover counter becomes the parameter OriginalComponent

//use destructure to assign the count and incrementcount

class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        
        return <button onClick={incrementCount}>Clicked {count} times</button>   
    }
}

export default UpdatedComponent (ClickCounter)