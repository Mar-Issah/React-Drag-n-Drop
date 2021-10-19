import React, { useState }from 'react'
import ClassMouse from './ClassMouse'


//as usual, the state, the setStae and the initial value which for this is a boolean ie,true

//add the class hook here and anytime you click on the button it set the display to false which unmounts the ClassMouse app or container

//when you click on the button and it removes the container you get an error. S we have to do cleanup. In class components we could have remove the event lister anytime the component unmounts

//here in the useEffect also returns a cleanup function ie when you want to execute some component cleanup just add and return the fxn in your use effct. the function fxn helps to remove event listener, cancelling subscription, timers etc

//add it to the use effect in ClassMouse

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <ClassMouse/>}
        </div>
    )
}

export default MouseContainer
