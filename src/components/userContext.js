import React from 'react'

//every context created using the create context method comes with a provider and consumer. so we need to declare those and assign to a variable for simplicity and export them

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
