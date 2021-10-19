//import React, { Component } from 'react'
import { useEffect , useState} from 'react'

//so we have counter app with a state of 0, when the page mounts, you use the set interval to set the counter to count eevery second using the tick function

//when the page unmounts it clears the interval. the result is rendered in JSX
// export class IntervalClassCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count : 0
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval(this.tick, 1000)
//     }
    
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }

//     tick = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{ this.state.count}</h1>
//             </div>
//         )
//     }
// }
// export default IntervalClassCounter



//=============================================================
//lets do the above in the functional components

//set the timer within the useEffect. We need to make sure that it mounts only once like the componentDidMount in the class component so we add an empty array as a second parameter.

//we also perform the cleanup which is the clear interval replica

//now this doesnot work becausewe told react to mount only once and stop looking out for changes. so the counter only counts 1

//lets add a depndency which the useEffect will depend on and we get the expected result

function IntervalClassCounter() {
    const [count, setCount] = useState (0)
    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

   
    return (
        <div>
            <h1>Count : { count}</h1>
        </div>
    )
}

export default IntervalClassCounter
