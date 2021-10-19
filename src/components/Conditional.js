import React, { Component } from 'react'

export class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLogged: true
        }
    }
    //if the user is already logged in then Welome Marsiya is displayed ifn not then welcome guest is diaplayed
    
    render() {
        //short circuit appraoch which displays hello Marsiya when user is looged and nothing when user is not. This evaluate the left hand side of the operator if its true it then evaluate the right hand side. but if the left hand is evaluate to false the right side is not evaluated

        return this.state.isLogged &&  <div>Welcome Marsiya!</div>



        //this approach is even simpler. ternary condition
        // return (
        //     this.state.isLogged ? (
        //         <h1>Welcome Marsiya!</h1>
        //     ) : (
        //             <h1>Welcome Guest!</h1>
        //     )
        // )


//another way is to save it in a varable and return the variable depending on the condition
        // let message
        // if (this.state.isLogged) {
        //     message =  <h1>Welcome Marsiya!</h1>
        // } else {
        //     message = <h1>Welcome Guest!</h1>
        // }

        // return <div>{message}</div>


//One way of writng the if else condition
        // if (this.state.isLogged) {
        //     return (
        //         <div>
        //             <h1>Welcome Marsiya!</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1>Welcome Guest!</h1>
        //         </div>
        //     )
        // }
    

        // return (
        //     <div>
        //         <h1>Welcome Marsiya!</h1>
        //         <h1>Welcome Guest!</h1>
        //     </div>
        // )
    }
}

export default Conditional
