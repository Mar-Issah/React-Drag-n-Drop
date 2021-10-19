import React from 'react'

// function ForwInput() {
//     return (
//         <div>
//             <input type = 'text'/>
//         </div>
//     )
// }


//re - write in to arrow function becaues the React.forwardRef() accepts the method/ arrow fxn which is passed in as parameter. Every fxnal component can receive prop as a parameter

//'not clear' but when a component is passed in as a parameter to the create ref method, it receives the ref attribute as it second parameter. we can the ref and pass it as a value to in input.

//this ref is being forwarded froom the parent component

const ForwInput = React.forwardRef((prop, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})
export default ForwInput
