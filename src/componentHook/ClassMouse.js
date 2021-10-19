//import React, { Component } from 'react'
import { useState, useEffect } from 'react'

//here once the component mouse add an event listener on the window which listens to the mouse movement an records their position using the logMousePosition fxn to set the x and y.and render th position in the browser

// export class ClassMouse extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             x: 0,
//             y:0
//         }
//     }

//     logMousePosition = (e) => {
//         this.setState({x: e.clientX, y: e.clientY})
//     }

//     componentDidMount() {
//         window.addEventListener('mousemove', this.logMousePosition)
//     }

//     render() {
//         return (
//             <div>
//                 X - {this.state.x} Y - {this.state.y}
//             </div>
//         )
//     }
// }
// export default ClassMouse


//===============================================
//NOW LETS USE SAME IN FUNCTIONAL COMPONENTS

//the above can be written with use effects in functional components. If you dont want the effcet to depend on anything and you want ti to be called once then add a second parameter , an empty array

function ClassMouse() {

    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code');
             window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            X : {x} Y : {y}
        </div>
    )
}

export default ClassMouse
