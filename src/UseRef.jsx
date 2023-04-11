import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef=useRef(null);
    const onClick=()=>{
        // focus on the input
        // inputRef.current.focus();
        // cleare the value after click button
        inputRef.current.value="";
        console.log('inputRef.current.value', inputRef.current.value)
    }
  return (
    <div>
        <h1>UseRef</h1>
        <input type="text" ref={inputRef} />
        <button
        onClick={onClick}
        >Change name </button>
        {/* <h2>{inputRef.current.value}</h2> */}
    </div>
  )
}

export default UseRef