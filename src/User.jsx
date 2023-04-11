import React, { useContext } from 'react'
import { Appcontext } from './UseContext'

const User = () => {
    const {username}=useContext(Appcontext)
  return (
    <div>
        <h1>USER:{username}</h1>
    </div>
  )
}

export default User