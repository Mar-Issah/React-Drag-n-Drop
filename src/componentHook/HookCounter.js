import React, {useState} from 'react'

//now how do we use Hooks, they are just function so have to call it

//use state accepts the initial value of the  state variable,0,and return a pair of value. first is a the count and second is a method to update the count setCount.Use array  destructuring to assign this

//with this we have our step 2 ans 3. i.e We have the state and a a method to set the state


// function HookCounter() {

//     const [count, setCount ] = useState(0)

//     return (
//         <div>
//             <button onClick = {() => setCount(count + 1)} >Count {count}</button>
//         </div>
//     )
// }
//export default HookCounter




//========================================================
//change the counter based on previous value
//add three buttons set the count for the reset btn to initialCount, increment to +1 and decrement to -1
//

// function HookCounterTwo() {
//     const initialCount = 0
//     const [ count, setCount ] = useState(initialCount)
    
//     const incrementFive = () => {
//         setCount (prevCount => prevCount + 5)
//     }

//     return (
//         <div>
//             <h2>Count : { count}</h2>
//             <button onClick={() => setCount(initialCount)} >Reset</button>
//             <button onClick = {() => setCount(count + 1)} >Increment</button>
//             <button onClick = {() => setCount(count - 1)} >Decrement</button>
//              <button onClick = {incrementFive} >Increment 5</button>
//         </div>
//     )
// }
// export default HookCounterTwo




//===========================================================
//useState with Object first and last name
//the initial value wich is the object has properties set to 0. The object is name and properties are first and last name 

//value is what you typed and onChanged target the element and set to new value typed. Update the h2 element with the typed value

//You realize that as you type the values in h2 keep deleting, this is because useState doesnt automatically update the values use the spread operator which says to save the name typed in the ...name 

// function HookCounterThree() {
    
//     const [name, setName] = useState({firsttName: " ", lastName: " "})

//     return (
//         <form>
//             <input
//                 type="text"
//                 value={name.fisrtName}
//                 onChange={e => setName({ ...name, firstName: e.target.value })}
//             />
//             <input
//                 type="text" 
//                 value={name.lastName}
//                 onChange={e => setName({ ...name, lastName: e.target.value })}
//                 />
//             <h2>Your first name is - {name.firstName}</h2>
//             <h2>Your last name is - {name.lastName}</h2>
//         </form>
//     )
// }
// export default HookCounterThree




//==========================================================
// USE STATE WITH ARRAY of Objects

//like we said we have the usestate set to an empty array of items, and the setItem to update the array

//we will map throught the items and return a list of each items.
//add the key as the item id and a button
//now the set state is basically an oject with and ID and a random number. dont forget that use state doesnt automatically update so we have to use the spread operator to save the items in the array

function HookCounterThree() {
    const [items, setItems] = useState([])

    const addItem= ()=>{
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
        ])
    }

    return (
        <div>
            <button onClick = {addItem} >Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    ))
                }
         </ul>
        </div>
    )
}
export default HookCounterThree