import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'
export const Appcontext=createContext(null)
const UseContext = () => {
    const [username,setUsername]=useState('')
  return (
    <Appcontext.Provider value={{username,setUsername}}>
        <h1>UseContext</h1>
        <Login />
        <User  />

    </Appcontext.Provider>
  )
}

export default UseContext