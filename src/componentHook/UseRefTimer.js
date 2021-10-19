import React, { useState, useEffect, useRef} from 'react'

//we are going to create a timer using useRef. we already create one using the class component (just comparing) using componentDidMount to setInterval and the componentWillUnmount to clear interval (cleanup)

//the useEffect will take care of componentDidMount and componentWillUnmount (effect and cleanup)

//call the setInterval fxn which accepts an arrow fxn and 1000. it returns a setTimer by taking the prevTimer and adding one to it.

//the cleanup then clears the interval

//now lets add a button to clear the interval when clicked. it fails because it says interval not define because the interval is defined inside the useEffect fxn. this is when useRef comes in

//import useRef. when you call the useRef it adds a property called current which is used to target the particular element/node . so now write the setinterval fxn  and store in the intervalRef.current variable and pass in in the clear interval fxn instead

function UseRefTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [ ])
    

    return (
        <div>
            Hook Timer - {timer}
            <button onClick = {() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default UseRefTimer