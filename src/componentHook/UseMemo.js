import React, { useState, useMemo} from 'react'

//create two state variables of two counters
//add another function is display a text(even/odd) if the number is even or odd

//now lets add a while statement to the isEven fxn, You realize that your app is very slow when you click on the buttons. even whne you take out the isEven fxn from the second button that button is still slow. This is becuase os the while statement and also the app renders everythime you click on the button

//we need to tell react not to recalculate certain value when unccessary esp ones that take long to compute. this is imp of use memo. Work same as useCallback

//write a call the useMemo fxn pass isEven fxn to it and now make the isEven a variable. pass in a second parameter which the fxn will depend on

//in the jsx isEven is no longer a fxn call because it stores a value

//we realize that the counterTwo without the isEven is faster than now and is free from rerendering and computing. the useMemo dependency is counterOne

//This what performance optimization.If you need the cach a fxn use callback but if you need to cach the result usee memo

function UseMemo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000)
            i++
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{ isEven ? 'Even' : 'Odd'}</span>
            </div>

            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}

export default UseMemo