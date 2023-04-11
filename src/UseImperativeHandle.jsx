import React, { useRef } from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
    const buttonref=useRef(null);
  return (
    <div>
        <h1>UseImperativeHandle</h1>
        <button
        onClick={()=>{
            buttonref.current.alterToggle();
        }}
        >
            Button From Parent
        </button>
        <Button ref={buttonref}/>

    </div>
  )
}

export default UseImperativeHandle