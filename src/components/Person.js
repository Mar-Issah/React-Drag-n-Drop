import React from 'react'

//pass the prop person
function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name} and I am {person.age} years old. I am a {person.skill} expert</h2>
        </div>
    )
}

export default Person
