import React, {useEffect, useRef} from 'react'

//nuse ref makes it easy to target DOM nodes or elements. lets create input text and make it focus once the page loads/mount

//call the useEffect fxn to write the focus effect statement. The useEffect takes an array fxn and a dependency. we leave the dependency empty because we want the page to mount onlt once

//call the useref fxn and pass it an initial value of null. assign this to a variable called inputRef

//we now have to attach the uesRef to the element (input element) we are going to work with using the reserve attribute Ref. React will set the ref's current property to the corresponding DOM node

//pass the focus fxn on the current property then in the use effect

function UseRef() {

    const inputRef = useRef(null)

    useEffect(() => {
        //focus the input element
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={ inputRef} type='text'/>
        </div>
    )
}

export default UseRef