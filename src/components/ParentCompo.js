import React, { Component } from 'react'
import PureCompo from './PureCompo'
import RegCompo from './RegCompo'


export class ParentCompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Siya'
        }
    }
    
    //lifecycle method to chack if the component mounted
    componentDidUpdate() {
        setInterval(() => {
            this.setState({
                name: "Siya"
            })
        }
        , 2000)
    }
    render() {
        return (
            <div>
                Parent Component
                <RegCompo name={this.state.name}></RegCompo>
                <PureCompo name ={this.state.name}></PureCompo>
            </div>
        )
    }
}

export default ParentCompo
