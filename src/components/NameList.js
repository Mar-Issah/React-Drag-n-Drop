import React from 'react'
//import Person from './Person'
//use of map/filter/reduce in react
function NameList() {
    const names = ["Siya", "Jon", "Tony", "Siya"]
    const nameList =  names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            {/* {
                names.map(name => 
                     <h1>{ name}</h1>
                )
            } */}
            {nameList}
        </div>
    )
}

//now what of objects
//create a new child component file and save the it as Person, pass the h2 element inside and import it here. Give it a prop called person

// function NameList() {
//     const persons = [ {
//         id: 1,
//         name: "Siya",
//         age: 35,
//         skill: "Python"
//     },
//         {
//            id: 2,
//         name: "Jon",
//         age: 38,
//         skill: "React"
//         },
//         {
//                id: 3,
//         name: "Tony",
//         age: 33,
//         skill: "vue"
//         } ]

//    // the key={could be anything, name..etc}
//     const personList = persons.map(person => 
//         (<Person key={person.id} person = {person} />))
    
//     return (
//         <div>
//             {personList}
//         </div>
//     )
// }

export default NameList
