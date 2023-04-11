import React, { useContext } from 'react'
import { Appcontext } from './UseContext'

const Login = () => {
    const {setUsername}=useContext(Appcontext);
  return (
    <div>
        <input type="text"
        onChange={(e)=>setUsername(e.target.value)}
        />
    </div>
  )
}

export default Login