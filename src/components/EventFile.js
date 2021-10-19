import React from 'react'


function EventFile() {
    //pass the function within the function
    //also we want the onClick handle to be a function not a fxn call call like onClick= {clickHandler()} this is because the function will be called when the website is loaded. and we dont want that we only want it be called when the button is clicked

    function clickHandler() {
        //console.log("button clicked");
    }
    return (
        <div>
             <button onClick= {clickHandler}>Click</button>
        </div>
    )
}
export default EventFile
