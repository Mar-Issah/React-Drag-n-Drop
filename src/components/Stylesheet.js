import React from 'react'
import './myStyle.css'

// function Stylesheet(props) {
//     let className = props.primary ? 'primary' : 'red'
//     return (
//         <div>
//             <h2 className = {`${className} font-xl`}>Styleheets</h2>
//         </div>
//     )
// }


//notice that the spelling is camelCase
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Stylesheet() {
    return (
        <div>
            <h2 style={heading}>Inline</h2>
        </div>
    )
}

export default Stylesheet

