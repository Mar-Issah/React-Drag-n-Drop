import React, { Component } from 'react'
import { UserConsumer } from './userContext'


//this component display the message it take in a fxn, return the html to display
export class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentF