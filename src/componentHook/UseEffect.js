import React, { useState, useEffect } from 'react';

//document.title is the title noted on top of the page 
//we want to be able to display the counter in bothe the browser and document.title
//Now this procedure below id long


//go back to our use effect counter app add a name state and an input text. on componentDidUpdate, we want to change the document title and console log a statement

//when you click on the button or enter e text it log onto the console and the componentDiMount runs bue only want the count changes not the text

//

// class UseEffect extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             name: ''
//         };
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) { 
//         console.log('Updating document');
//         document.title = `You clicked ${this.state.count} times`;
//     }
// }

//   render() {
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={this.state.name} 
//                 onChange={e => {
//                     this.setState({name: e.target.value})
//                 }}
//             />
            
//         <p>You clicked {this.state.count} times</p>
//         <button onClick = {() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
//  export default UseEffect


//now lets implememt same above but in funtional component with use effect
//add the use state
//add the use effect

//again, add another usestate and input element here
//as you type it log several time in the console but we only want it to log only if we click on the button ie count
//in the fxn component we added a condition to the lifecycle method but here we have to add a second parameter this parameter is an array. inside we need to specify props or state if the props or state change, the effect will be executed. so here we need it to be executed only when the count value changes and not the name value ie the text. the useEffect runs when the count value changes

function UseEffectTwo() {
    const [ count, setCount ] = useState(0)
     const [ name, setName ] = useState('')
    
    useEffect(() => {
        console.log("UseEffect- Updating document title");
         document.title = `You clicked ${count} times`;
    }, [count])
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked { count} times</button>
        </div>
    )
}

export default UseEffectTwo